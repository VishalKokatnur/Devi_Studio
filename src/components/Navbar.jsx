// import { useState, useEffect } from 'react'
// const links = [['About', '#about'], ['Services', '#services'], ['Gallery', '#gallery'], ['Process', '#process'], ['Contact', '#contact']]

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false)
//   const [open, setOpen] = useState(false)
//   useEffect(() => {
//     const f = () => setScrolled(window.scrollY > 60)
//     window.addEventListener('scroll', f, { passive: true })
//     return () => window.removeEventListener('scroll', f)
//   }, [])
//   return (
//     <nav className={scrolled ? 's' : ''}>
//       <div className="wrap">
//         <a className="logo" href="#home">Devi<b>.</b>Studio</a>
//         <button className="menu" aria-label="Menu" onClick={() => setOpen(!open)}><span /><span /></button>
//         <div className={`links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
//           {links.map(([n, h]) => <a key={n} href={h}>{n}</a>)}
//           <a className="btn" href="#contact">Book now</a>
//         </div>
//       </div>
//     </nav>
//   )
// }
import { useState, useEffect } from 'react'
const links = [['About', '#about'], ['Services', '#services'], ['Gallery', '#gallery'], ['Process', '#process'], ['Contact', '#contact']]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <nav className={scrolled ? 's' : ''}>
      <div className="wrap">
        <a className="logo" href="#home">Devi<b>.</b>Studio</a>
        <button className="menu" aria-label="Menu" onClick={() => setOpen(!open)}><span /><span /></button>
        <div className={`links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          {links.map(([n, h]) => <a key={n} href={h}>{n}</a>)}
          <a className="btn" href="#contact">Book now</a>
        </div>
      </div>
    </nav>
  )
}