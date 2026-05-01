# IconVault Website 🎨

Official icon browser website for [iconvault-native](https://www.npmjs.com/package/iconvault-native).

## 🌐 Live Site
> https://iconvault-icons.netlify.app/ *(update after deploy)*

## Features
- 🔍 Real-time icon search
- 🎨 Live color & size customization  
- 📋 One-click code copy (React Native / React Web / Raw SVG)
- 📱 Fully responsive

## Local Development

Just open `index.html` in your browser — no build step needed!

```bash
# Option 1: Direct open
open index.html

# Option 2: Live server (VS Code extension)
# Install "Live Server" → Right-click index.html → "Open with Live Server"

# Option 3: Python server
python3 -m http.server 3000
# Then open http://localhost:3000
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import this repository
4. Click Deploy ✅

## Update Icons

All icons are in `index.html` inside the `ICONS` array. Each entry:
```js
["icon-name", "category", 'SVG path data here', isStrokeOnly]
```

Categories: `ui`, `media`, `arrows`, `social`, `misc`