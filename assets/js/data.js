/* ============================================================
   LAB DATA — edit content here; every page reads from this file.
   ============================================================ */
window.LAB = {
  email: "sejong.immersivemedia|gmail.com", // "|" is swapped for "@" at runtime (keeps scrapers away)

  director: {
    name: "Seunghwa Jeong, Ph.D.",
    title: "Assistant Professor",
    dept: "Dept. of Content Software, Sejong Univ.",
    office: "Room 623, Daeyang AI Center",
    tel: "02-3408-3795",
    email: "seunghwajeong|sejong.ac.kr",
    photo: "", // e.g. "assets/photos/members/seunghwa-jeong.jpg"
  },

  education: [
    {y:"Ph.D.", t:"Korea Advanced Institute of Science and Technology (KAIST)", s:"Graduate School of Culture Technology (GSCT) · Advisor: Prof. Junyong Noh"},
    {y:"M.S.",  t:"Korea Advanced Institute of Science and Technology (KAIST)", s:"Graduate School of Culture Technology (GSCT) · Advisor: Prof. Junyong Noh"},
    {y:"B.S.",  t:"Pusan National University", s:"Electrical Engineering"},
  ],

  experience: [
    {y:"2024 – Present", t:"Sejong University", s:"Assistant Professor"},
    {y:"2025 – Present", t:"7min", s:"Co-founder"},
    {y:"2022 – 2023",    t:"KAI Inc.", s:"CEO"},
    {y:"2021",           t:"KAI Inc.", s:"CTO"},
    {y:"2015 – 2021",    t:"KAI Inc.", s:"Technical Lead"},
  ],

  agencies: {
    KOCCA:"Korea Creative Content Agency",
    NRF:"National Research Foundation of Korea",
    ETRI:"Electronics and Telecommunications Research Institute",
    IITP:"Institute of Information & Communications Technology Planning & Evaluation",
    NIA:"National Information Society Agency",
    NIPA:"National IT Industry Promotion Agency",
    KOFIC:"Korean Film Council",
  },

  /* s/e = start/end year (inclusive). r = "PI" | "Lead" | "" */
  projects: [
    {s:2026,e:2028,a:"KOCCA",r:"PI",  t:"AI-based Free-viewpoint Video Generation Technology for Archiving and Preserving Traditional Cultural Performances as Multi-media Content"},
    {s:2025,e:2027,a:"NRF",  r:"PI",  t:"Real-time 4D Neural Network Training and Transmission for High-quality 4D Live Streaming"},
    {s:2025,e:2026,a:"ETRI", r:"",    t:"Super-Resolution-enabled 4D Gaussian Splatting Model"},
    {s:2024,e:2030,a:"IITP", r:"",    t:"Natural Program of Excellence In Software"},
    {s:2023,e:2023,a:"KOCCA",r:"PI",  t:"Development of Universal Fashion Creation Platform Technology for Avatar Personality Expression"},
    {s:2022,e:2022,a:"NIA",  r:"PI",  t:"Status Recognition Data for Railroad Tracks and Insulator of Catenary Lines"},
    {s:2020,e:2022,a:"KOCCA",r:"PI",  t:"Development of Multi-channel Content Production Platform using 5G for Remote Free-viewpoint Viewing"},
    {s:2020,e:2022,a:"KOCCA",r:"",    t:"5G-based Real-time Live Performance Sharing Technology Development and Demonstration"},
    {s:2020,e:2021,a:"NIPA", r:"",    t:"Developing Augmented Reality Contents Platform based on Video Positioning Service"},
    {s:2018,e:2019,a:"KOCCA",r:"Lead",t:"Advertising and Commerce Solution for VR/AR Content"},
    {s:2018,e:2019,a:"NIPA", r:"",    t:"The Construction of VRT (Virtual Reality Train) Media Platform based on Multi-projection Technology"},
    {s:2017,e:2019,a:"IITP", r:"Lead",t:"Development of Web-based Production, Mastering, and Distribution Solution for High-quality VR Content with Cloud System Utilization"},
    {s:2017,e:2018,a:"KOFIC",r:"Lead",t:"Development of Multiple Viewing Platform to Utilizing VR Movie Contents"},
    {s:2016,e:2017,a:"IITP", r:"",    t:"Development of a Multi-screen Movie Theatre System and Immersive Content"},
    {s:2015,e:2016,a:"IITP", r:"",    t:"Real-time Revision & Interaction Technology Development for Curved Screen Content"},
    {s:2014,e:2015,a:"IITP", r:"",    t:"Auto-stereoscopic 3D Image Acquisition System and 3D Content Production Technology"},
  ],

  /* k: "j" journal | "c" conference. scope: "intl" international | "dom" domestic. area: research area (gen | stream | play) */
  publications: [
    {scope:"dom",y:2026,k:"c",area:"gen",   t:"Performance Improvement of Diffusion-based Super-resolution Models through the Utilization of Frequency Components",a:"Sangjun Jeong, Junseo Choi, Seunghwa Jeong",v:"Korea Computer Graphics Society, 2026"},
    {scope:"dom",y:2026,k:"c",area:"play",  t:"A Unity-Based Playback System for Dynamic Scenes Represented by 4D Gaussian Splatting",a:"Hyeji Lee, Seunghwa Jeong",v:"Korea Computer Graphics Society, 2026"},
    {scope:"intl",y:2026,k:"j",area:"stream",t:"Rich360-Live: A Practical Approach to Live Adaptive 360° Streaming via Content-Aware Optimization",a:"Seunghwa Jeong, Jungjin Lee",v:"IEEE Access (Early Access, May 2026)",b:["SCIE"]},
    {scope:"dom",y:2025,k:"c",area:"gen",   t:"SIFT-guided Ray Allocation for Neural Radiance Fields",a:"Youngjun Choi, Junseo Choi, Seunghwa Jeong",v:"Korea Computer Graphics Society, 2025"},
    {scope:"dom",y:2025,k:"c",area:"gen",   t:"A Study on the Application of Super-resolution in 3D Gaussian-splatting Viewer",a:"Heeseok Cho, Jehhui Lee, Junseo Choi, Seunghwa Jeong",v:"Korea Computer Graphics Society, 2025"},
    {scope:"dom",y:2025,k:"c",area:"gen",   t:"Performance Enhancement of Diffusion-based Super-resolution Models using CEM",a:"Sangjun Jeong, Jaehwan Kim, Junseo Choi, Seunghwa Jeong",v:"Korea Computer Graphics Society, 2025"},
    {scope:"intl",y:2024,k:"j",area:"stream",t:"Real-time CNN Training and Compression for Neural Enhanced Adaptive Live Streaming",a:"Seunghwa Jeong, Bumki Kim, Seunghoon Cha, Kwanggyoon Seo, Hayoung Chang, Jungjin Lee, Younghui Kim, Junyong Noh",v:"IEEE Transactions on Pattern Analysis and Machine Intelligence, Vol. 46, Issue 9, Sep. 2024",b:["SCIE","Top 1% · IF 18.6"]},
    {scope:"dom",y:2023,k:"j",area:"stream",t:"A Simulcast System for Live Streaming and Virtual Avatar Concerts",a:"Sebin Lee, Geunmo Lee, Seongkyu Han, Seunghwa Jeong, Jungjin Lee",v:"Journal of the Korea Computer Graphics Society, 2023, 29.2: 21-30"},
    {scope:"intl",y:2020,k:"j",area:"play",  t:"Enhanced Interactive 360 Viewing via Automatic Guidance",a:"Seunghoon Cha, Jungjin Lee, Seunghwa Jeong, Younghui Kim, Junyong Noh",v:"ACM Transactions on Graphics (TOG), 2020, 39.5: 1-15",b:["SCIE","Top 4% · IF 9.5"]},
    {scope:"intl",y:2018,k:"j",area:"play",  t:"Object Segmentation Ensuring Consistency across Multi-viewpoint Images",a:"Seunghwa Jeong, Jungjin Lee, Bumki Kim, Younghui Kim, Junyong Noh",v:"IEEE Transactions on Pattern Analysis and Machine Intelligence, Vol. 40, Issue 10, Oct. 2018",b:["SCIE","Top 1% · IF 18.6"]},
    {scope:"dom",y:2015,k:"j",area:"play",  t:"Omnidirectional Environmental Projection Mapping with Single Projector and Single Spherical Mirror",a:"Bumki Kim, Jungjin Lee, Younghui Kim, Seunghwa Jeong, Junyong Noh",v:"Journal of the Korea Computer Graphics Society, 2015, 21.1: 1-11"},
  ],

  /* names highlighted in author lists */
  labNames: ["Seunghwa Jeong","Junseo Choi","Hyeji Lee","Jaehwan Kim","Youngjun Choi","Sangjun Jeong","Heeseok Cho","Seohyun Yun"],

  /* r: position — "Ph.D. Student" | "Master Student" | "Undergraduate Researcher" (used for the Members filter).
     photo: profile picture path, e.g. "assets/photos/members/junseo-choi.jpg" (square crop works best; initials show when empty)
     Optional detail fields (shown when a card is clicked): email ("id|domain"), bio, links: [{l:"GitHub", u:"https://..."}] */
  members: [
    {n:"Junseo Choi",   r:"Master Student",           photo:"", k:["3D Gaussian Splatting","Super-Resolution","Pose Estimation","XR"]},
    {n:"HyeJi Lee",     r:"Master Student",           photo:"", k:["3D Reconstruction","XR"]},
    {n:"Jaehwan Kim",   r:"Undergraduate Researcher", photo:"", k:["3D Reconstruction","Super-Resolution"]},
    {n:"Youngjun Choi", r:"Undergraduate Researcher", photo:"", k:["3D Reconstruction"]},
    {n:"Sangjun Jeong", r:"Undergraduate Researcher", photo:"", k:["Super-Resolution","Image Generation"]},
    {n:"Heeseok Cho",   r:"Undergraduate Researcher", photo:"", k:["3D Reconstruction","Image Processing"]},
    {n:"Seohyun Yun",   r:"Undergraduate Researcher", photo:"", k:["3D Reconstruction"]},
  ],

  /* Gallery. cover: card background photo; photos: list of image paths shown when the album is opened.
     Put images under assets/photos/ (e.g. "assets/photos/siggraph2026/01.jpg"). */
  gallery: [
    {k:"Conference", t:"SIGGRAPH 2026",  d:"Jul 19 – 23, 2026",     p:"Los Angeles, U.S.A", g:["#2625cd","#3671ef","#70b7f7"], cover:"", photos:[]},
    {k:"Conference", t:"KCGS 2026",      d:"Jun 30 – Jul 3, 2026",  p:"Yeosu, Korea",       g:["#1b6fd8","#3fa8e8","#84ece6"], cover:"", photos:[]},
    {k:"Lab",        t:"2026 Lab MT",    d:"Jun 29, 2026",          p:"Yeosu, Korea",       g:["#d16a9c","#e59cbf","#f6c9a8"], cover:"", photos:[]},
    {k:"Conference", t:"HCI Korea 2026", d:"Feb 26 – 28, 2026",     p:"Hongcheon, Korea",   g:["#212a35","#39507e","#4c79d6"], cover:"", photos:[]},
    {k:"Conference", t:"KCGS 2025",      d:"Jul 8 – 11, 2025",      p:"Goseong, Korea",     g:["#0f766e","#2bb3a6","#84ece6"], cover:"", photos:[]},
  ],

  areas: [
    {id:"gen",    no:"01", name:"Immersive View Generation",             items:["6-DoF Scene Generation: NeRF & 3DGS","High-quality View Reconstruction using Super-Resolution"]},
    {id:"stream", no:"02", name:"Efficient Large-scale Video Streaming", items:["Adaptive Streaming and Video Optimization using AI","Video Compression and Transmission based on CNNs"]},
    {id:"play",   no:"03", name:"Interactive Playback & Analysis",       items:["Interactive Viewing","Video Summary","Detection & Segmentation"]},
  ],
};
