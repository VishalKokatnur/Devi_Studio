// import { steps } from '../data'

// export default function Process() {
//   return (
//     <section id="process" style={{ background: '#0e0e0e' }}><div className="wrap">
//       <div className="pill" data-aos="fade-up">How it works</div>
//       <h2 data-aos="fade-up">Simple from first call<br />to final album</h2>
//       <p className="sub" />
//       <div className="steps" data-aos="fade-up">
//         {steps.map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}
//       </div>
//     </div></section>
//   )
// }
import { steps } from '../data'

export default function Process() {
  return (
    <section id="process" style={{ background: '#0e0e0e' }}><div className="wrap">
      <div className="pill" data-aos="fade-up">How it works</div>
      <h2 data-aos="fade-up">Simple from first call<br />to final album</h2>
      <p className="sub" />
      <div className="steps" data-aos="fade-up">
        {steps.map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}
      </div>
    </div></section>
  )
}