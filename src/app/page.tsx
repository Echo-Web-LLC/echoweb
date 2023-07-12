import Head from 'next/head';
import Nav from './nav';
import Banner from './banner';
import ClientLogo from './clientlogos';
import Testimonials from './testimonials';
import Footer from './footer';
import Stats from './stats';
import Aboutbanner from './aboutbanner';
import Workscta from './workscta';

export const metadata = {
  title: 'Landing Page',
  description: 'Echo Web, LLC Brochure Site',
  icons: {
    icon: './favicon.png',
  },
}

export default function Home() {

  return (
    <>
      <Head>
        <title>Andrew Kal</title>
        <meta name="description" content="Landing Page" />
        <link rel="icon" href="./favicon.ico" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <Nav></Nav>
      <Banner></Banner>
      {/* <ClientLogo></ClientLogo> */}
      <Stats></Stats>
      <Aboutbanner></Aboutbanner>
      <Testimonials></Testimonials>
      {/* <Workscta></Workscta> */}
      <Footer></Footer>
      {/* ChatBot */}
    </>
  )
}
