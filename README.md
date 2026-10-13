# FocusFlow — landing page

Responsive landing page for the FocusFlow productivity app.
Stack: React 18, TypeScript, Vite, Tailwind CSS 3.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
npm run preview
```

## Deploy
**Vercel:** import the GitHub repo, framework preset "Vite", then Deploy.
**Netlify:** build command `npm run build`, publish directory `dist`.

## Structure
- `src/data.ts` — all page content (nav, features, steps, plans, reviews)
- `src/components/` — one component per section
- `tailwind.config.js` — colors and fonts
