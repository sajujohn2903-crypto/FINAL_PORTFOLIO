/* ================================================================
   EDIT EVERYTHING HERE — this single file drives both index.html
   and works.html. Change names, copy, projects, skills, tools and
   contact details freely; both pages read from this same object.
   ================================================================ */
const CONFIG = {
  name: "John Saju",
  role: "UI/UX Designer",
  tagline: "Designed to Matter.",
  issueLine: "Est. 2024 — Vol. I, No. 07",
  maskheadShort: "JO",

  award: {
    ribbon: "Award",
    eyebrow: "Breaking — Design News",
    headline: "Young Designer Wins Design Institute Award",
    dateline: "BELFAST, 2025 —",
    excerpt: "Designer John Saju has been awarded the Institute Designers Ireland Award 2025 for Best Service Design Project, following his work on a collaborative project where he led the design direction.",
    excerpt2: "The judging panel praised his ability to turn complex systems into experiences that feel simple, intuitive and human. The project also strengthened Saju\u2019s ability to work across both strategic thinking and detailed interface design.",
    fullText: [
      "His process relied heavily on field research, direct observation and rapid prototyping; testing, breaking and rebuilding ideas until the right solution emerged.",
      "\u201cGood design disappears,\u201d Saju said. \u201cThe goal was never to make something look clever — it was to make the right decision the easiest one to make.\u201d",
      "A trophy for the shelf, perhaps. But more importantly, proof that good design knows when to stay out of the way."
    ],
    photo: {
      // Swap this for a real photo any time — set url to an image link
      // (e.g. from the award ceremony) and it will be used automatically.
      url: "",
      caption: "Photograph: IDI Award 2025"
    }
  },

  works: {
    eyebrow: "Works",
    headline: "The Young Man's Best Works",
    blurb: "A collection of projects, united by one approach: start with the people, understand the problem, and work backward to the experience. From digital products and services to visual systems and everything in between, each project is a different investigation into how design can make things work better.",
    photo: {
      // Swap this for a real photo any time — set url to an image link
      // (e.g. a hero shot from one of the projects) and it will be used
      // automatically.
      url: "artgallery.jpg",
      caption: "A look at the work"
    }
  },

  projects: [
    { tag:"Fintech · Product", title:"Ledger", blurb:"A redesigned expense workflow that cut approval time for finance teams by more than half.", diagram:"browser" },
    { tag:"Healthcare · App", title:"Pulse", blurb:"A patient intake app rebuilt around clarity, reducing form abandonment in early trials.", diagram:"mobile" },
    { tag:"Civic · Platform", title:"Commons", blurb:"A public services portal connecting twelve departments behind one consistent interface.", diagram:"flow" },
    { tag:"Data · Dashboard", title:"Meridian", blurb:"An operations dashboard turning noisy telemetry into a handful of decisions worth making.", diagram:"chart" },
    { tag:"Research · System", title:"Fieldnote", blurb:"A lightweight research repository built for teams who never had time to file their notes.", diagram:"nodes" },
    { tag:"Brand · Design System", title:"Typeset", blurb:"A component and type system unifying six product teams under one visual language.", diagram:"swatch" }
  ],

  aboutIntro: {
    eyebrow: "Profile",
    headline: "\u201cBREAKING NEWS: JOHN SAJU HAS A SLIGHT OBSESSION WITH MAKING THINGS MAKE SENSE.\u201d",
    short: "John Saju is a UX and Service Designer with a knack for turning complicated problems into clear, considered experiences. With a background in animation and a keen eye for detail, he approaches design with equal parts curiosity, craft and a healthy disregard for unnecessary complexity."
  },

  aboutArticle: {
    eyebrow: "Profile — Full Story",
    headline: "LOCAL DESIGNER CAUGHT TURNING PROBLEMS INTO PIXELS",
    byline: "By John Saju"
  },

  about: [
    "BELFAST, NORTHERN IRELAND — In what experts are calling a rather convenient career choice, John Saju has made a habit of poking at everyday problems and asking, \u201cSurely there\u2019s a better way to do this?\u201d Armed with a background in Animation & Visual Effects and a Master\u2019s in User Experience & Service Design, John has traded timelines for user flows, keyframes for wireframes, and the occasional existential crisis for a well-organised Figma file. His work sits somewhere between design, storytelling and technology — with a particular interest in making digital experiences that are not only useful, but actually enjoyable to use."
  ],

  // Sub-headed sections dropped between the first and second paragraphs
  // above, like cross-heads breaking up a real newspaper feature.
  aboutSubsections: [
    {
      heading: "FROM KEYFRAMES TO USER FLOWS — A CAREER TAKES SHAPE",
      text: "Before entering the mysterious world of UX, John spent his days making things move. Animation, visual effects, motion graphics and video editing gave him an eye for composition, storytelling and the tiny details most people politely ignore. Somewhere along the way, however, he became increasingly interested in why people interact with things the way they do. The result? A suspiciously smooth transition into UX and service design, where research, strategy and visual design now share the front page. From apps and websites to entire services, John enjoys getting stuck into messy problems and turning them into experiences that make a little more sense."
    },
    {
      heading: "DESIGNER, STORYTELLER & PART-TIME PIXEL POLICE",
      text: "When he isn't rearranging buttons by precisely three pixels, John can usually be found drawing, editing videos, experimenting with new ideas or convincing himself that this is finally the perfect font. His toolkit includes Figma, Framer, Webflow, After Effects and a growing collection of digital rabbit holes. His approach to design is simple: understand the people, question the obvious, make it look good, and never underestimate the power of a ridiculously satisfying interaction. Latest reports suggest he is currently accepting interesting problems, ambitious ideas and projects worth losing sleep over."
    }
  ],

  // Three photos dropped between the about.html paragraphs, like a real
  // newspaper feature. Swap any url in — leave it blank to keep the
  // drawn placeholder. One image is inserted after each of the first
  // three paragraphs above.
  aboutImages: [
    { url: "", caption: "Early sketches, before anything else." },
    { url: "", caption: "Presenting the award-winning service design project." },
    { url: "", caption: "At the desk, somewhere between research and rework." }
  ],

  aboutPhoto: {
    // Swap this for a real photo any time — replace the src on the
    // <img id="about-photo-img"> tag, or point this url at your image
    // and it will be used automatically.
    url: "headshot.jpg",
    caption: "John Saju, UI/UX Designer"
  },

  expertise: {
    eyebrow: "Expertise",
    headline: "Areas of Expertise"
  },

  skills: [
    { name:"Design", items:["Interaction Design","Design Systems","Information Architecture","Visual Design"] },
    { name:"Prototyping", items:["Figma"] },
    { name:"Research", items:["Usability Testing","Field Studies","Journey Mapping","A/B Testing"] },
    { name:"Bonus Skills", items:["Video Editing","Motion Design","Graphic Design"] }
  ],

  tools: [
    { name:"Figma", logo:"figma" },
    { name:"Adobe Photoshop", logo:"photoshop" },
    { name:"Premiere Pro", logo:"premiere" },
    { name:"After Effects", logo:"aftereffects" }
  ],

  contact: {
    lede: "Have a project? A suggestion? Or just wanna hire me? Reach out right now.",
    email: "sajujohn2903@gmail.com",
    phone: "+44 7553129991",
    location: "Belfast, Northern Ireland",
    socials: [
      { label:"LinkedIn", url:"#" },
      { label:"Dribbble", url:"#" },
      { label:"Instagram", url:"#" }
    ],
    finePrint: `© ${new Date().getFullYear()} The Design Times. All rights reserved. Printed digitally, read anywhere.`
  },

  colors: { bg:"#E2E3E3", accent:"#B20202", ink:"#363536", muted:"#B3ADAD" }
};
