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
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/public/echo.jpg',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/public/echo.jpg',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/public/echo.jpg',
    },
  ],
}

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      {/* <ClientLogo></ClientLogo> */}
      <Stats></Stats>
      <Aboutbanner></Aboutbanner>
      <Testimonials></Testimonials>
      <Workscta></Workscta>
      <Footer></Footer>
      {/* ChatBot */}
    </>
  )
}
