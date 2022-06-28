import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head >
          { /*favicon*/}
          {/* Webfont */}
          {/* stylesheets */}
          {/* script/js */}
        </Head>
        <body className='general-body'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument