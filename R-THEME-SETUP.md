Naravno, evo TODO liste spremne za copy/paste:

## TODO Theme Setup

- [x] Napraviti ThemeService u src/app/core/theme/theme.service.ts
- [x] Uvesti tip teme `light | dark` i signal `theme`
- [x] Dodati metode `initTheme`, `setTheme`, `toggleTheme`
- [x] U `initTheme` implementirati redosled: localStorage -> prefers-color-scheme -> fallback `dark`
- [x] U servisu sinhronizovati root atribute `data-theme` i `data-bs-theme`
- [x] U app.ts pozvati inicijalizaciju teme na startupu
- [x] U topbar.ts injektovati ThemeService i izloziti stanje/metode za UI
- [x] U topbar.html dodati theme toggle dugme
- [x] Dodati `aria-label` i `title` koji se menjaju po temi (Switch to light/dark)
- [x] Dodati ikonice za stanje teme (sun/moon)
- [x] Proveriti da light-only glass pravilo na topbaru ostaje aktivno (light da, dark ne) u topbar.scss
- [x] Proveriti da su tokeni uskladjeni u _theme.scss
- [x] Pokrenuti build: `npm run build`
- [x] Manual test: toggle radi bez reload-a
- [x] Manual test: refresh cuva temu iz localStorage
- [x] Manual test: Bootstrap prati `data-bs-theme`

## TODO implement MSW

- [ ] Add MSW
- [ ] npm install msw --save-dev
- [ ] Add http
- [ ] npx msw init ./public --save

## TODO for AI Video Workspace

- [ ] GET /api/workspace
- [ ] GET /api/projects
- [ ] GET /api/projects/:id
- [ ] GET /api/projects/:id/transcript
- [ ] GET /api/projects/:id/summary
- [ ] GET /api/usage
- [ ] PATCH /api/settings/profile
- [ ] PATCH /api/settings/workspace

Ovo je važno jer odmah gradiš app kao pravi proizvod.
