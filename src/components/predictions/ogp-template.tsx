import { Box, HStack, VStack, Spacer, Badge } from '@chakra-ui/react'

export interface Props {
  title: string
}

const OgpTemplate = (props: Props) => {
  const css = `
    @import url('https://fonts.googleapis.com/css?family=M+PLUS+1p:wght@700&display=swap');
    html,
    body {
      margin: 0;
      padding: 0;
    }
    .wrapper {
      width: 1200px;
      height: 630px;
      display: flex;
      position: relative;
      align-items: center;
      font-family: 'M PLUS 1p';
      font-weight: bold;
      justify-content: center;
    }
    .author {
      right: 0;
      bottom: 0;
      margin: 50px;
      position: absolute;
      font-size: 30px;
      font-weight: 700;
    }
  `

  return (
    <html>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <body>
        <div className="wrapper">
          <VStack>
            <HStack>
              <Badge colorScheme="orange">1</Badge>
              <Spacer />
              <Box>{props.title}</Box>
            </HStack>
            <HStack>
              <Badge colorScheme="orange">2</Badge>
              <Spacer />
              <Box>京都サンガF.C.</Box>
            </HStack>
          </VStack>
          <div className="author">2022 J1 順位予想メーカー</div>
        </div>
      </body>
    </html>
  )
}

export default OgpTemplate
