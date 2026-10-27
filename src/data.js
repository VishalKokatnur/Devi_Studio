// // ✏️ EDIT THIS FILE to customise the whole website.
// export const site = {
//   name: "Devi Studio",
//   owner: "Vittal Kokatnur",
//   address: "Devi Studio, Darga Road, opposite Sai High Tech School, Vijayapura",
//   phone: "919845845721",          // WhatsApp number with country code, no + or spaces
//   phoneShow: "+91 9845845721",
//   instagram: "devi_studio",       // username without @
//   hours: "Monday to Sunday, 9 am to 9 pm",
//   profile: "/photos/devi.jpg",    // file lives in /public/photos/devi.jpg
//   stats: [["15+", "Years"], ["1000+", "Shoots"], ["500+", "Happy clients"]],
// };


// // Add real photos: put files in /public/photos and set src: "/photos/01.jpg".
// // hero: 1 = shown in the top slideshow.  a/b = placeholder colours until a src is added.
// export const photos = [
//   { t: "Golden Hour Vows", c: "Wedding", hero: 1, a: "#e3a82b", b: "#1c1204", h: 360 },
//   { t: "Quiet Moments", c: "Portrait", hero: 1, a: "#c98a1b", b: "#2a1a06", h: 270 },
//   { t: "Dance Floor Energy", c: "Events", hero: 1, a: "#f2c14e", b: "#140d03", h: 310 },
//   { t: "The First Look", c: "Wedding", a: "#b8791a", b: "#241706", h: 400 },
//   { t: "City Light", c: "Portrait", a: "#d9a441", b: "#1c1204", h: 260 },
//   { t: "Little Smiles", c: "Family", a: "#a8741f", b: "#2a1a06", h: 330 },
//   { t: "Candid Laughter", c: "Events", a: "#f5d27a", b: "#140d03", h: 300 },
//   { t: "Bride & Blooms", c: "Wedding", a: "#cf9a2e", b: "#241706", h: 390 },
//   { t: "Studio Story", c: "Portrait", a: "#b5892f", b: "#1c1204", h: 280 },
  
// ];

// export const services = [
//   ["Weddings", "Full-day and multi-day coverage, candid and traditional, with albums.", "#e3a82b", "#111", "-3deg"],
//   ["Pre-wedding", "Relaxed couple shoots at outdoor locations around Vijayapura.", "#111", "#fff", "2deg"],
//   ["Portraits", "Individual and family portraits in the studio or natural light.", "#ffe9a8", "#111", "-2deg"],
//   ["Events", "Engagements, birthdays, housewarmings and functions of any size.", "#fff", "#111", "3deg"],
//   ["Baby & Kids", "Gentle, patient sessions for newborns, birthdays and children.", "#e3a82b", "#111", "2deg"],
//   ["Albums & Prints", "Printed albums, framed photos and passport prints at the studio.", "#111", "#fff", "-3deg"],
// ];

// export const reviews = [ // sample reviews: replace with real ones
//   ["Vittal made our whole family comfortable. The wedding album made my mother cry happy tears.", "Wedding client, Vijayapura"],
//   ["On time, patient with the kids, and the photos came back sooner than promised.", "Family portrait client"],
//   ["Every important moment of our function was captured. Highly recommended.", "Event client"],
// ];

// export const steps = [
//   ["Talk to us", "Call or WhatsApp with your date and the kind of shoot."],
//   ["Plan together", "We agree on places, timings and the shots you care about."],
//   ["The shoot", "Relaxed direction so you feel natural in front of the camera."],
//   ["Delivery", "Edited photos in a private gallery and printed albums."],
// ];

// export const bg = (p) =>
//   p.src ? { backgroundImage: `url(${p.src})` } : { background: `linear-gradient(155deg,${p.a},${p.b})` };
// export const waLink = (text = "Hello Devi Studio, I would like to book a shoot.") =>
//   `https://wa.me/${site.phone}?text=${encodeURIComponent(text)}`;
// ✏️ EDIT THIS FILE to customise the whole website.
export const site = {
  name: "Devi Studio",
  owner: "Vittal Kokatnur",
  address: "Devi Studio, Darga Road, opposite Sai High Tech School, Vijayapura",
  phone: "919845845721",          // WhatsApp number with country code, no + or spaces
  phoneShow: "+91 9845845721",
  instagram: "devi_studio",       // username without @
  hours: "Monday to Sunday, 9 am to 9 pm",
  profile: "/photos/devi.jpg",    // file lives in /public/photos/devi.jpg
  stats: [["15+", "Years"], ["1000+", "Shoots"], ["500+", "Happy clients"]],
};

// Add real photos: put files in /public/photos and set src: "/photos/01.jpg".
// hero: 1 = shown in the top slideshow.  a/b = placeholder colours until a src is added.
export const photos = [
  { t: "Golden Hour Vows", c: "Wedding", hero: 1, a: "#e3a82b", b: "#1c1204", h: 360 },
  { t: "Quiet Moments", c: "Portrait", hero: 1, a: "#c98a1b", b: "#2a1a06", h: 270 },
  { t: "Dance Floor Energy", c: "Events", hero: 1, a: "#f2c14e", b: "#140d03", h: 310 },
  { t: "The First Look", c: "Wedding", a: "#b8791a", b: "#241706", h: 400 },
  { t: "City Light", c: "Portrait", a: "#d9a441", b: "#1c1204", h: 260 },
  { t: "Little Smiles", c: "Family", a: "#a8741f", b: "#2a1a06", h: 330 },
  { t: "Candid Laughter", c: "Events", a: "#f5d27a", b: "#140d03", h: 300 },
  { t: "Bride & Blooms", c: "Wedding", a: "#cf9a2e", b: "#241706", h: 390 },
  { t: "Studio Story", c: "Portrait", a: "#b5892f", b: "#1c1204", h: 280 },
];

export const services = [
  ["Weddings", "Full-day and multi-day coverage, candid and traditional, with albums.", "#e3a82b", "#111", "-3deg"],
  ["Pre-wedding", "Relaxed couple shoots at outdoor locations around Vijayapura.", "#111", "#fff", "2deg"],
  ["Portraits", "Individual and family portraits in the studio or natural light.", "#ffe9a8", "#111", "-2deg"],
  ["Events", "Engagements, birthdays, housewarmings and functions of any size.", "#fff", "#111", "3deg"],
  ["Baby & Kids", "Gentle, patient sessions for newborns, birthdays and children.", "#e3a82b", "#111", "2deg"],
  ["Albums & Prints", "Printed albums, framed photos and passport prints at the studio.", "#111", "#fff", "-3deg"],
];

export const reviews = [ // sample reviews: replace with real ones
  ["Vittal made our whole family comfortable. The wedding album made my mother cry happy tears.", "Wedding client, Vijayapura"],
  ["On time, patient with the kids, and the photos came back sooner than promised.", "Family portrait client"],
  ["Every important moment of our function was captured. Highly recommended.", "Event client"],
];

export const steps = [
  ["Talk to us", "Call or WhatsApp with your date and the kind of shoot."],
  ["Plan together", "We agree on places, timings and the shots you care about."],
  ["The shoot", "Relaxed direction so you feel natural in front of the camera."],
  ["Delivery", "Edited photos in a private gallery and printed albums."],
];

export const bg = (p) =>
  p.src ? { backgroundImage: `url(${p.src})` } : { background: `linear-gradient(155deg,${p.a},${p.b})` };
export const waLink = (text = "Hello Devi Studio, I would like to book a shoot.") =>
  `https://wa.me/${site.phone}?text=${encodeURIComponent(text)}`;