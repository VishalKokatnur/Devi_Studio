
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Process from './components/Process'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import { waLink } from './data'

export default function App() {
  useEffect(() => { AOS.init({ duration: 900, once: true, offset: 60 }) }, [])
  return (
    <ErrorBoundary>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Process />
      <Reviews />
      <Contact />
      <Footer />
      <a className="wa" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 32 32"><path d="M16 3a13 13 0 0 0-11 19.8L3 29l6.4-2A13 13 0 1 0 16 3zm0 2.4a10.6 10.6 0 1 1-5.6 19.6l-.4-.2-3.8 1.2 1.2-3.7-.3-.4A10.6 10.6 0 0 1 16 5.4zm-4 5.2c-.3 0-.7.1-1 .5-.4.4-1.3 1.2-1.3 3s1.3 3.5 1.5 3.7c.2.3 2.6 4 6.4 5.5 3.1 1.2 3.7 1 4.4.9.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5l-2.300-1.100c-.3-.1-.6-.2-.8.2l-1 1.200c-.2.200-.4.300-.7.100-.4-.2-1.500-.5-2.800-1.700-1-.9-1.700-2-1.900-2.400-.2-.4 0-.5.200-.7l.5-.6c.2-.2.200-.4.300-.6.100-.2 0-.4 0-.6l-1-2.400c-.3-.6-.5-.5-.7-.5z" /></svg>
      </a>
    </ErrorBoundary>
  )
}