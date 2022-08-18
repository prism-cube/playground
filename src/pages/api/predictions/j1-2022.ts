import type { NextApiRequest, NextApiResponse } from 'next'
import * as playwright from 'playwright-aws-lambda'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import OgpTemplate from '@/components/predictions/ogp-template'

function getHtml({ title }: { title: string }): string {
  const element = React.createElement(OgpTemplate, { title })
  const markup = ReactDOMServer.renderToStaticMarkup(element)

  return `<!doctype html>${markup}`
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const title = req.query.title.toString() ?? 'たいとる'
    // const title = 'たいとる'
    const html = getHtml({ title })
    const viewport = { width: 1200, height: 630 }
    const browser = await playwright.launchChromium()
    const page = await browser.newPage({ viewport })

    await page.setContent(html, { waitUntil: 'networkidle' })

    const buffer = await page.screenshot({ type: 'png' })
    await browser.close()

    res.setHeader('Cache-Control', 's-maxage=31536000, stale-while-revalidate')
    res.setHeader('Content-Type', 'image/png')

    res.end(buffer)
  } catch (error) {
    console.error('[Error]: ', error)
    res.status(404).json({ message: 'Cannot render og-image' })
  }
}
