// import { useState, useEffect } from 'react'
// import { photos, bg } from '../data'
// const hero = photos.filter((p) => p.hero)

// export default function Hero() {
//   const [k, setK] = useState(0)
//   useEffect(() => {
//     const t = setInterval(() => setK((i) => (i + 1) % hero.length), 5200)
//     return () => clearInterval(t)
//   }, [])
//   return (
//     <header id="home" className="hero">
//       {hero.map((p, i) => (
//         <div key={p.t} className={`slide ${p.src ? '' : 'ph'} ${i === k ? 'on' : ''}`} style={bg(p)}>
//           <div className="k" style={bg(p)} />
//         </div>
//       ))}
//       <div className="shade" />
//       <div className="wrap"><div className="in">
//         <small data-aos="fade-up">VIJAYAPURA'S PHOTO STUDIO</small>
//         <h1 data-aos="fade-up" data-aos-delay="100">We turn your moments into <span className="grad">timeless memories</span></h1>
//         <p data-aos="fade-up" data-aos-delay="200">Hi, I'm Vittal Kokatnur. With 15 years behind the lens, Devi Studio photographs weddings, families and celebrations with honest emotion and natural light.</p>
//         <div className="cta" data-aos="fade-up" data-aos-delay="400">
//           <a className="btn red" href="#contact">Book your shoot</a>
//           <a className="btn out" href="#gallery">View gallery</a>
//         </div>
//       </div></div>
//       <div className="cap">
//         <span>{hero[k].t} · {hero[k].c}</span>
//         <div className="dots">{hero.map((p, i) => <i key={p.t} className={i === k ? 'on' : ''} />)}</div>
//       </div>
//     </header>
//   )
// }
import { useState, useEffect } from 'react'
import { photos, bg } from '../data'
const flagged = photos.filter((p) => p.hero)
const hero = flagged.length ? flagged : photos.slice(0, 3)

export default function Hero() {
  const [k, setK] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setK((i) => (i + 1) % hero.length), 5200)
    return () => clearInterval(t)
  }, [])
  return (
    <header id="home" className="hero">
      {hero.map((p, i) => (
        <div key={p.t} className={`slide ${p.src ? '' : 'ph'} ${i === k ? 'on' : ''}`} style={bg(p)}>
          <div className="k" style={bg(p)} />
        </div>
      ))}
      <div className="shade" />
      <div className="wrap"><div className="in">
        <small data-aos="fade-up">VIJAYAPURA'S PHOTO STUDIO</small>
        <h1 data-aos="fade-up" data-aos-delay="100">We turn your moments into <span className="grad">timeless memories</span></h1>
        <p data-aos="fade-up" data-aos-delay="200">Hi, I'm Vittal Kokatnur. With 15 years behind the lens, Devi Studio photographs weddings, families and celebrations with honest emotion and natural light.</p>
        <div className="cta" data-aos="fade-up" data-aos-delay="400">
          <a className="btn red" href="#contact">Book your shoot</a>
          <a className="btn out" href="#gallery">View gallery</a>
        </div>
      </div></div>
      <div className="cap">
        <span>{hero[k].t} · {hero[k].c}</span>
        <div className="dots">{hero.map((p, i) => <i key={p.t} className={i === k ? 'on' : ''} />)}</div>
      </div>
    </header>
  )
}