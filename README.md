# The JO Times — Portfolio Website

A small, dependency-free static site — plain HTML/CSS/JS, no build step,
no npm install. Styled as an editorial broadsheet: serif display
headlines, mono labels, halftone "plate" imagery, and reveal-on-scroll
animation. It's made of five files that all need to sit together in the
same folder:

- **`index.html`** — the front page (masthead, hero, award, works teaser,
  about teaser, expertise index, tools, contact)
- **`works.html`** — the full list of every project, laid out as alternating
  feature stories
- **`about.html`** — the complete "About" feature article with cross-heads
  and photos
- **`styles.css`** — all shared styling for every page
- **`config.js`** — all editable content (name, copy, projects, skills,
  tools, the About article, and contact details) for every page, in one
  place

The only external resource any page loads is a Google Fonts stylesheet
(Bodoni Moda, Newsreader, and IBM Plex Mono).

## Deploy to GitHub Pages

1. Create a new repository on GitHub (or use an existing one).
2. Add all five files — `index.html`, `works.html`, `about.html`,
   `styles.css`, `config.js` — to the **root** of the repository, all
   together (this matters: they reference each other by relative path, and
   GitHub Pages looks for `index.html` at the root by default).
   - Via the GitHub website: click **Add file → Upload files**, drag in all
     five files at once, then commit.
   - Via git:
     ```bash
     git init
     git add index.html works.html about.html styles.css config.js
     git commit -m "Add portfolio site"
     git branch -M main
     git remote add origin https://github.com/<your-username>/<your-repo>.git
     git push -u origin main
     ```
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, choose `main` and folder `/ (root)`, then click **Save**.
6. GitHub will give you a URL (usually `https://<your-username>.github.io/<your-repo>/`
   — for a *user/organization* site named `<your-username>.github.io`, it's
   `https://<your-username>.github.io/` instead). It can take a minute or two
   to go live after the first deploy.

## Editing the content

Everything — your name, the award copy, the Works intro, all six projects,
the About article, skills, tools, and contact details — lives in one place:
the `CONFIG` object in `config.js`. Open that file in any text editor and
edit the values directly. Every page reads from this same file, so a change
there (e.g. adding a seventh project) shows up everywhere automatically. No
other code needs to change for content updates.

Colors and fonts are grouped as CSS variables at the very top of
`styles.css` if you want to retheme the site — that also applies to every
page at once.

After editing, just commit and push the changed file(s) — GitHub Pages will
redeploy automatically.

## How the site fits together

- The front page's **Works** section is a short teaser (headline, blurb, a
  plate image, and a "Read the full story" link) — clicking it takes
  visitors to `works.html`, which lists all six projects as alternating
  feature stories, each with its own diagram, tag, and description.
- The front page's **About** section works the same way: a short intro
  with a photo, and a "Read the full story" link to `about.html` — a full
  feature article with a headline, byline, cross-headed sections, and
  photos placed between the paragraphs.
- **Expertise** lists every skill as a numbered index entry on the front
  page; **Toolkit** lists the software you use.
- The **Award** section behaves like a real news item: a short excerpt is
  shown up front, and "Read the article" expands the fuller story in place.

## Adding your own photos

Several spots (the Award photo, the Works photo, the About photo, and the
three About-article photos) currently show a simple drawn placeholder
inside a halftone "plate" because no real image has been set. To use a real
photo anywhere, find its `photo` (or `aboutImages`) entry in `config.js`
and set `url` to an image link — it'll replace the placeholder
automatically and pick up the same halftone/grayscale press treatment as
the rest of the site's imagery.
