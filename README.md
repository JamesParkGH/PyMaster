# PyMaster

PyMaster is a static Python learning app that runs in the browser and can be hosted on GitHub Pages.

## What it does

- Teaches core Python concepts with short, educational lessons.
- Gives you practice tasks with in-browser checks powered by Pyodide.
- Tracks completed lessons and saved drafts in localStorage.
- Uses a syntax-highlighted editor for a more realistic coding experience.

## Run it locally

1. Open `index.html` directly in your browser, or serve the folder with any static web server.
2. If you want a quick local server, run:

   ```powershell
   c:/Users/parkj/Desktop/JamesCode/PyMaster/.venv/Scripts/python.exe -m http.server 8000
   ```

3. Open `http://127.0.0.1:8000` in your browser.

## Deploy to GitHub Pages

1. Push the repository to GitHub.
2. In the repository settings, open Pages.
3. Set the source to GitHub Actions.
4. The workflow in [.github/workflows/pages.yml](.github/workflows/pages.yml) will deploy the site from the repository root.
5. After the first successful run, GitHub will show the live `github.io` URL in the Pages settings.

## Notes

- The static site entry point is `index.html`.
- The app depends on external CDNs for Pyodide and Ace editor assets.