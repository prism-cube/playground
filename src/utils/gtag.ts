export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''

export const pageview = (url: string) => {
  if (window && window.gtag) {
    window.gtag('config', gaMeasurementId, {
      page_path: url,
    });
  }
}
