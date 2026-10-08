<div align="center">

# 🌐 3D Portfolio

**My personal portfolio — interactive 3D scenes, scroll animations and a working contact form.**

[![Live site](https://img.shields.io/badge/▶_Live_site-marcell--almasi.netlify.app-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://marcell-almasi.netlify.app/)

![React](https://img.shields.io/badge/React-149ECA?logo=react&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000?logo=threedotjs&logoColor=white)
![React Three Fiber](https://img.shields.io/badge/R3F-000?logo=react&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)

<img src=".github/preview.jpg" width="100%" alt="Portfolio preview" />

</div>

## ✨ Features

- **3D everywhere** — models and particle scenes with `@react-three/fiber` and `drei`
- **Motion** — section reveals with Framer Motion, tilt cards with `react-parallax-tilt`
- **Experience timeline** — vertical timeline of where I've worked
- **Contact form** — sends straight to my inbox via EmailJS, no backend needed
- **Responsive** — works from phone to ultrawide

## 🚀 Run locally

```bash
npm install
npm run dev
```

## 🗂️ Structure

```
src/
├── components/   # Hero, About, Experience, Tech, Projects, Contact …
│   └── canvas/   # Three.js scenes
├── constants/    # content: projects, experience, tech list
└── hoc/          # section wrapper with motion
```
