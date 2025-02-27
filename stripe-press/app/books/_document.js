import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add any custom head elements here */}
        </Head>
        <body className="bg-[#201919] text-white overflow-x-hidden font-times">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument