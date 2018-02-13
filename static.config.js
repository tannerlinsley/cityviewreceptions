import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  siteRoot: 'https://cityviewreceptions.com',
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/Home',
    },
    {
      is404: true,
      component: 'src/containers/404',
    },
  ],
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <meta
              name="google-site-verification"
              content="kJeojbTy8TXqKdgfOQh7vcMR4hxawvw95D7_50Dlrmg"
            />
            <title>City View Receptions - Salt Lake City's premiere reception center</title>
            <link
              href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,900"
              rel="stylesheet"
            />
            {/* <!-- Google Tag Manager --> */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-KWWRL39');
                `,
              }}
            />
            {renderMeta.styleTags}
          </Head>
          <Body>
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-KWWRL39"
                title="gtm"
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
            {children}
          </Body>
        </Html>
      )
    }
  },
}
