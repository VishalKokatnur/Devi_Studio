// import { site } from '../data'

// export default function About() {
//   return (
//     <section className="about" id="about"><div className="wrap">
//       <div className="pf" data-aos="fade-right">
//         <div className="box" style={site.profile ? { backgroundImage: `url(${site.profile})` } : undefined}>{site.profile ? '' : site.owner}</div>
//         <div className="badge"><b>15+</b><span>Years of<br />experience</span></div>
//       </div>
//       <div data-aos="fade-left">
//         <div className="pill">About the studio</div>
//         <h2>The man behind <span className="grad">Devi Studio</span></h2>
//         <p>Vittal Kokatnur started Devi Studio on Darga Road with one camera and one belief: people should look like themselves in their photographs.</p>
//         <p>Today, families across Vijayapura trust him with their biggest days. He shoots in natural light, directs gently, and watches for the small moments that people remember most.</p>
//         <div className="stats">{site.stats.map(([v, l]) => <div key={l}><b>{v}</b><span>{l}</span></div>)}</div>
//       </div>
//     </div></section>
//   )
// }
import { site } from '../data'

export default function About() {
  return (
    <section className="about" id="about"><div className="wrap">
      <div className="pf" data-aos="fade-right">
        <div className="box" style={site.profile ? { backgroundImage: `url(${site.profile})` } : undefined}>{site.profile ? '' : site.owner}</div>
        <div className="badge"><b>15+</b><span>Years of<br />experience</span></div>
      </div>
      <div data-aos="fade-left">
        <div className="pill">About the studio</div>
        <h2>The man behind <span className="grad">Devi Studio</span></h2>
        <p>Vittal Kokatnur started Devi Studio on Darga Road with one camera and one belief: people should look like themselves in their photographs.</p>
        <p>Today, families across Vijayapura trust him with their biggest days. He shoots in natural light, directs gently, and watches for the small moments that people remember most.</p>
        <div className="stats">{site.stats.map(([v, l]) => <div key={l}><b>{v}</b><span>{l}</span></div>)}</div>
      </div>
    </div></section>
  )
}