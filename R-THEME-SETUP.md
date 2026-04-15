Naravno, evo TODO liste spremne za copy/paste:

## TODO Theme Setup

- [x] Napraviti ThemeService u src/app/core/theme/theme.service.ts
- [x] Uvesti tip teme `light | dark` i signal `theme`
- [x] Dodati metode `initTheme`, `setTheme`, `toggleTheme`
- [ ] U `initTheme` implementirati redosled: localStorage -> prefers-color-scheme -> fallback `dark`
- [ ] U servisu sinhronizovati root atribute `data-theme` i `data-bs-theme`
- [ ] U app.ts pozvati inicijalizaciju teme na startupu
- [ ] U topbar.ts injektovati ThemeService i izloziti stanje/metode za UI
- [ ] U topbar.html dodati theme toggle dugme
- [ ] Dodati `aria-label` i `title` koji se menjaju po temi (Switch to light/dark)
- [ ] Dodati ikonice za stanje teme (sun/moon)
- [ ] Proveriti da light-only glass pravilo na topbaru ostaje aktivno (light da, dark ne) u topbar.scss
- [ ] Proveriti da su tokeni uskladjeni u _theme.scss
- [ ] Pokrenuti build: `npm run build`
- [ ] Manual test: toggle radi bez reload-a
- [ ] Manual test: refresh cuva temu iz localStorage
- [ ] Manual test: Bootstrap prati `data-bs-theme`

Ako hoces, mogu odmah i “dev TODO” verziju sa procenom trajanja po stavkama (15m, 30m, itd.).

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