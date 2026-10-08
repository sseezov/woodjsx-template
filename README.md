# WoodJSX template

A minimal JavaScript starter with [WoodJSX](https://github.com/sseezov/woodjsx)
and Vite. JSX is already configured.

## Start

Requires Node.js 20.19+ on the 20.x line, or 22.12+.

```sh
npm install
npm run dev
```

Open the address printed by Vite. Edit `src/App.jsx` to start building.

## Files

- `src/index.js` — imports and `initWood` call.
- `src/App.jsx` — app layout.
- `src/components/Counter.jsx` — local state, an event handler, and an explicit DOM update.
- `src/styles.css` — basic styles.
- `vite.config.js` — JSX configuration for WoodJSX.

WoodJSX is installed from npm. Its source does not need to be copied into the app.

## Build

```sh
npm run build
npm run preview
```

The build is written to `dist`. Preview serves that build locally.
