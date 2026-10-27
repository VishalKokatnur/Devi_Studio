// import { reviews } from '../data'

// export default function Reviews() {
//   return (
//     <section className="reviews"><div className="wrap">
//       <div className="pill" data-aos="fade-up">Testimonials</div>
//       <h2 data-aos="fade-up">Words from <span className="grad">our clients</span></h2>
//       <p className="sub" />
//       <div className="rg" data-aos="fade-up">
//         {reviews.map(([q, n]) => <div key={n}><div className="st">★★★★★</div><q>{q}</q><small>{n}</small></div>)}
//       </div>
//       <p className="rn">Sample reviews. Replace with real client reviews in src/data.js.</p>
//     </div></section>
//   )
// }
import { reviews } from '../data'

export default function Reviews() {
  return (
    <section className="reviews"><div className="wrap">
      <div className="pill" data-aos="fade-up">Testimonials</div>
      <h2 data-aos="fade-up">Words from <span className="grad">our clients</span></h2>
      <p className="sub" />
      <div className="rg" data-aos="fade-up">
        {reviews.map(([q, n]) => <div key={n}><div className="st">★★★★★</div><q>{q}</q><small>{n}</small></div>)}
      </div>

    </div></section>
  )
}