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
  description: 'Contains summary of general information on Echo Web, LLC',
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
