# Scott Shepherd — Portfolio

A React + Vite + Tailwind CSS single-page portfolio for Scott Shepherd, SaaS &amp; PWA
product builder (Gigadev Consulting).

## Installation

1. Ensure you have Node.js installed.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.

## Project Structure

- `index.html` — Entry HTML file (title + SEO/OG metadata).
- `src/`
  - `main.jsx` — React entry point.
  - `App.jsx` — Routing + footer.
  - `components/Navbar.jsx` — Responsive top navigation.
  - `pages/`
    - `Home.jsx` — Hero + "What I build / How I work / Currently building".
    - `Portfolio.jsx` — Featured products (with tech-stack tags) + earlier work.
    - `Skills.jsx` — Grouped tech skills (Web, Data, AI, Architecture, Microsoft).
    - `Services.jsx` — Services offered + contact CTA.
    - `AboutMe.jsx` — Bio.
  - `index.css` — Tailwind CSS imports.
- `public/images/` — Project screenshots.

## Customization

- Update the `featuredProjects` / `earlierWork` arrays in `pages/Portfolio.jsx` to add or edit projects.
- Edit skill groups in `pages/Skills.jsx` and offerings in `pages/Services.jsx`.
- Update bio copy in `pages/Home.jsx` and `pages/AboutMe.jsx`.

## Hosting & Deployment

### Netlify (primary host)

This site is hosted on **Netlify**, deployed continuously from this Git repository. Netlify
watches the connected branch and rebuilds + publishes automatically on every push.

**How it works**

- **Build settings** come from [`netlify.toml`](./netlify.toml) (committed to the repo, so the
  Netlify UI doesn't need manual configuration):
  - Build command: `npm run build`
  - Publish directory: `dist` (Vite's production output)
- **Continuous deployment:** every push to the production branch triggers a Netlify build.
  Pull requests get their own [Deploy Preview](https://docs.netlify.com/site-deploys/deploy-previews/)
  URL so changes can be reviewed before merging.
- **SPA routing fallback:** because this is a client-side React Router single-page app,
  `netlify.toml` includes a catch-all redirect so deep links and refreshes resolve to
  `index.html` (status `200`) instead of 404ing:

  ```toml
  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
  ```

  Without this rule, refreshing `/portfolio`, `/skills`, `/services`, or `/about` would return
  a 404, since those routes only exist in the browser.

**Deploying**

- **Automatic:** push to the connected branch and Netlify builds + publishes within a minute or
  two. Watch progress under the site's **Deploys** tab in the Netlify dashboard.
- **Manual (Netlify CLI), if needed:**

  ```bash
  npm install -g netlify-cli   # one-time
  netlify login                # one-time
  npm run build                # produce dist/
  netlify deploy --prod --dir=dist
  ```

**First-time setup / re-linking a site**

1. In the Netlify dashboard: **Add new site → Import an existing project** and connect this
   GitHub repo.
2. Netlify auto-detects the build settings from `netlify.toml` (command `npm run build`,
   publish `dist`)—no manual entry required.
3. Choose the production branch and deploy. Optionally set a custom domain under
   **Domain settings** (Netlify provisions HTTPS via Let's Encrypt automatically).
4. Any environment variables (none required today) would go under **Site settings →
   Environment variables**.

### Docker (alternative / self-hosting)

A multi-stage [`Dockerfile`](./Dockerfile) is also provided: it builds the site with Node 20,
then serves the static `dist/` output with Nginx on port 80.

```bash
docker build -t portfolio .
docker run -p 8080:80 portfolio   # then visit http://localhost:8080
```

This path is handy for container hosts (e.g., a registry + container instance) but Netlify is
the primary, zero-config deployment target.
