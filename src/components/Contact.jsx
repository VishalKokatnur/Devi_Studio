// import { site, waLink } from '../data'
// const I = ({ d, children }) => <i><svg viewBox="0 0 24 24">{d ? <path d={d} /> : children}</svg></i>

// export default function Contact() {
//   const send = (e) => {
//     e.preventDefault()
//     const f = new FormData(e.target)
//     window.open(waLink(`Hello Devi Studio,\nName: ${f.get('n')}\nPhone: ${f.get('p')}\nShoot: ${f.get('t')}\nDate: ${f.get('d') || 'not decided'}\nMessage: ${f.get('m') || '-'}`), '_blank')
//   }
//   return (
//     <section className="contact" id="contact"><div className="wrap">
//       <div data-aos="fade-right">
//         <div className="pill">Contact</div>
//         <h2>Let's plan your <span className="grad">shoot</span></h2>
//         <p className="sub">Tell us your date and the kind of shoot. We reply on WhatsApp with availability and packages.</p>
//         <div className="ci"><I d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"><circle cx="12" cy="10" r="2.5" /></I><div><b>Studio</b>{site.address}</div></div>
//         <div className="ci"><I d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /><div><b>Phone / WhatsApp</b><a href={`tel:+${site.phone}`}>{site.phoneShow}</a></div></div>
//         <div className="ci"><I><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /></I><div><b>Instagram</b><a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer">@{site.instagram}</a></div></div>
//         <div className="ci"><I><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></I><div><b>Hours</b>{site.hours}</div></div>
//         <div className="soc">
//           <a className="btn red" href={waLink()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
//           <a className="btn out" href="https://www.google.com/maps/search/?api=1&query=Devi+Studio+Darga+Road+Vijayapura" target="_blank" rel="noopener noreferrer">Open in Maps</a>
//         </div>
//       </div>
//       <form onSubmit={send} data-aos="fade-left">
//         <label>Your name<input name="n" required autoComplete="name" /></label>
//         <label>Phone number<input name="p" type="tel" required autoComplete="tel" /></label>
//         <label>Type of shoot<select name="t">{['Wedding', 'Pre-wedding', 'Portrait', 'Family', 'Event or function', 'Baby shoot', 'Product'].map((o) => <option key={o}>{o}</option>)}</select></label>
//         <label>Event date<input name="d" type="date" /></label>
//         <label>Message<textarea name="m" /></label>
//         <button className="btn red" type="submit" style={{ justifyContent: 'center' }}>Send on WhatsApp</button>
//       </form>
//     </div></section>
//   )
// }
import { site, waLink } from '../data'
const I = ({ d, children }) => <i><svg viewBox="0 0 24 24">{d ? <path d={d} /> : children}</svg></i>

export default function Contact() {
  const send = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    window.open(waLink(`Hello Devi Studio,\nName: ${f.get('n')}\nPhone: ${f.get('p')}\nShoot: ${f.get('t')}\nDate: ${f.get('d') || 'not decided'}\nMessage: ${f.get('m') || '-'}`), '_blank')
  }
  return (
    <section className="contact" id="contact"><div className="wrap">
      <div data-aos="fade-right">
        <div className="pill">Contact</div>
        <h2>Let's plan your <span className="grad">shoot</span></h2>
        <p className="sub">Tell us your date and the kind of shoot. We reply on WhatsApp with availability and packages.</p>
        <div className="ci"><I d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"><circle cx="12" cy="10" r="2.5" /></I><div><b>Studio</b>{site.address}</div></div>
        <div className="ci"><I d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /><div><b>Phone / WhatsApp</b><a href={`tel:+${site.phone}`}>{site.phoneShow}</a></div></div>
        <div className="ci"><I><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /></I><div><b>Instagram</b><a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer">@{site.instagram}</a></div></div>
        <div className="ci"><I><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></I><div><b>Hours</b>{site.hours}</div></div>
        <div className="soc">
          <a className="btn red" href={waLink()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          <a className="btn out" href="https://www.google.com/maps/search/?api=1&query=Devi+Studio+Darga+Road+Vijayapura" target="_blank" rel="noopener noreferrer">Open in Maps</a>
        </div>
      </div>
      <form onSubmit={send} data-aos="fade-left">
        <label>Your name<input name="n" required autoComplete="name" /></label>
        <label>Phone number<input name="p" type="tel" required autoComplete="tel" /></label>
        <label>Type of shoot<select name="t">{['Wedding', 'Pre-wedding', 'Portrait', 'Family', 'Event or function', 'Baby shoot', 'Product'].map((o) => <option key={o}>{o}</option>)}</select></label>
        <label>Event date<input name="d" type="date" /></label>
        <label>Message<textarea name="m" /></label>
        <button className="btn red" type="submit" style={{ justifyContent: 'center' }}>Send on WhatsApp</button>
      </form>
    </div></section>
  )
}