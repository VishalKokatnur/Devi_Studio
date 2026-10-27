// import { useState } from 'react'
// import { photos, bg } from '../data'
// const cats = ['All', ...new Set(photos.map((p) => p.c))]

// const Card = ({ p, onClick, style }) => (
//   <div className={`g ${p.src ? 'img' : ''}`} style={{ ...bg(p), ...style }} onClick={onClick} tabIndex={0}
//     onKeyDown={(e) => e.key === 'Enter' && onClick?.()}>
//     <div><span>{p.c}</span><b>{p.t}</b></div>
//   </div>
// )

// export default function Gallery() {
//   const [cat, setCat] = useState('All')
//   const [sel, setSel] = useState(null)
//   return (
//     <section id="gallery"><div className="wrap">
//       <div className="pill" data-aos="fade-up">Portfolio</div>
//       <h2 data-aos="fade-up">Frames we are <span className="grad">proud of</span></h2>
//       <p className="sub">Tap any photo to view it larger.</p>
//       <div className="filters">
//         {cats.map((c) => <button key={c} className={c === cat ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>)}
//       </div>
//       <div className="mas">
//         {photos.filter((p) => cat === 'All' || p.c === cat).map((p) => (
//           <Card key={p.t} p={p} style={{ height: p.h }} onClick={() => setSel(p)} />
//         ))}
//       </div>
//       {sel && (
//         <div className="lb on" onClick={(e) => e.target === e.currentTarget && setSel(null)}>
//           <button onClick={() => setSel(null)} aria-label="Close">×</button>
//           <Card p={sel} />
//         </div>
//       )}
//     </div></section>
//   )
// }
import { useState } from 'react'
import { photos, bg } from '../data'
const cats = ['All', ...new Set(photos.map((p) => p.c))]

const Card = ({ p, onClick, style }) => (
  <div className={`g ${p.src ? 'img' : ''}`} style={{ ...bg(p), ...style }} onClick={onClick} tabIndex={0}
    onKeyDown={(e) => e.key === 'Enter' && onClick?.()}>
    <div><span>{p.c}</span><b>{p.t}</b></div>
  </div>
)

export default function Gallery() {
  const [cat, setCat] = useState('All')
  const [sel, setSel] = useState(null)
  return (
    <section id="gallery"><div className="wrap">
      <div className="pill" data-aos="fade-up">Portfolio</div>
      <h2 data-aos="fade-up">Frames we are <span className="grad">proud of</span></h2>
      <p className="sub">Tap any photo to view it larger.</p>
      <div className="filters">
        {cats.map((c) => <button key={c} className={c === cat ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>)}
      </div>
      <div className="mas">
        {photos.filter((p) => cat === 'All' || p.c === cat).map((p) => (
          <Card key={p.t} p={p} style={{ height: p.h }} onClick={() => setSel(p)} />
        ))}
      </div>
      {sel && (
        <div className="lb on" onClick={(e) => e.target === e.currentTarget && setSel(null)}>
          <button onClick={() => setSel(null)} aria-label="Close">×</button>
          <Card p={sel} />
        </div>
      )}
    </div></section>
  )
}