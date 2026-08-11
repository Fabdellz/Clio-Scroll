# Collected Works — Deployment Guide

This is a plain HTML/CSS/JS site — no build step, no dependencies to install.
Files:
- `index.html` — page structure
- `styles.css` — all styling
- `script.js` — renders content + the starfield animation
- `data.js` — **your content lives here.** Add new poems/essays/quotes by copying an existing entry's pattern.

## Easiest way to go live: Netlify Drop

1. Go to https://app.netlify.com/drop
2. Drag the whole site folder (all 4 files together) into the browser window
3. You'll get a live URL in seconds (e.g. `random-name-123.netlify.app`)
4. Free account lets you rename the subdomain or connect a custom domain later

## Alternative: GitHub Pages (if you want version control too)

1. Create a new GitHub repo
2. Upload these 4 files to it
3. Go to Settings → Pages → set source to the `main` branch, root folder
4. Your site will be live at `https://yourusername.github.io/repo-name`

## Alternative: Vercel

1. Go to https://vercel.com, sign up
2. "Add New Project" → drag/upload this folder (or connect a GitHub repo)
3. Deploy — you'll get a `.vercel.app` URL instantly

## Adding new work later

Open `data.js`. Each section is a plain array:
- `POEMS` — objects with `title`, `dedication` (optional, use `""` if none), and `body`
- `ESSAYS` — objects with `title` and `body` (paragraphs separated by a blank line)
- `QUOTES` — just a plain array of strings

Copy the pattern of an existing entry, paste your new one in, save, and re-deploy (drag the folder into Netlify Drop again, or push to GitHub — it updates automatically).
