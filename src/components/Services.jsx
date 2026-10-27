// import { services } from '../data'

// export default function Services() {
//   return (
//     <section className="services" id="services"><div className="wrap">
//       <div className="pill" data-aos="fade-up">What we shoot</div>
//       <h2 data-aos="fade-up">Every occasion,<br />one trusted studio</h2>
//       <p className="sub" data-aos="fade-up">Hover over a card to straighten it. Tap Book now and tell us what you need.</p>
//       <div className="hang">
//         {services.map(([t, d, c, tc, r], i) => (
//           <div key={t} className="tag" data-aos="fade-down" data-aos-delay={(i % 3) * 120} style={{ '--c': c, '--t': tc, '--r': r }}>
//             <em>for you</em><h3>{t}</h3><p>{d}</p>
//           </div>
//         ))}
//       </div>
//       <p className="note">Your story, our frame ✦</p>
//     </div></section>
//   )
// }
import { services } from '../data'

export default function Services() {
  return (
    <section className="services" id="services"><div className="wrap">
      <div className="pill" data-aos="fade-up">What we shoot</div>
      <h2 data-aos="fade-up">Every occasion,<br />one trusted studio</h2>
      <p className="sub" data-aos="fade-up">Hover over a card to straighten it. Tap Book now and tell us what you need.</p>
      <div className="hang">
        {services.map(([t, d, c, tc, r], i) => (
          <div key={t} className="tag" data-aos="fade-down" data-aos-delay={(i % 3) * 120} style={{ '--c': c, '--t': tc, '--r': r }}>
            <em>for you</em><h3>{t}</h3><p>{d}</p>
          </div>
        ))}
      </div>
      <p className="note">Your story, our frame ✦</p>
    </div></section>
  )
}