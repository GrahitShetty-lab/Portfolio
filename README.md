# Grahit Shetty — Portfolio

A static portfolio built with plain HTML, CSS and JavaScript. No build step or package install is required.

## Run locally

Open `index.html` in a browser, or serve this folder locally:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Edit the content

Update the `portfolioData` object near the top of `js/main.js`. It contains the about copy, services, skills, education, positions, achievements, projects, navigation and contact links. Project images live in `assets/projects/`; keep their paths relative and their filenames free of spaces.

## Deploy

- **GitHub Pages:** push the files to a repository, then select the branch and root folder in the repository's Pages settings.
- **Vercel:** import the repository, choose the **Other** framework preset, leave the build command empty, and use `.` as the output directory.
