# VAQT — Cafe & Fast Food (DEMO)

Демо-сайти мобилии кафе/фастфуди "VAQT". Танҳо frontend (HTML + CSS + JavaScript), бе backend ва бе server. Барои нишон додан ба соҳиби кафе сохта шудааст.

## Сохтори файлҳо

```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       └── favicon.svg
└── README.md
```

## Хусусиятҳо

- Mobile-first, responsive (Android / iPhone / PC)
- Менюи филтршаванда аз рӯи категория
- Сабади харид бо localStorage (қимат, миқдор, ҳисоби умумӣ)
- Формаи фармоиш бо validation ва delivery/pickup
- Пешниҳоди махсус (combo offer)
- Bottom navigation ва cart bar барои мобилӣ
- Ҳама иконка ва графика — SVG (бе тасвирҳои беруна, бе broken image)

## Санҷиш дар компютер

Танҳо файли `index.html`-ро дар браузер кушоед — ҳама чиз offline кор мекунад (ба ғайр аз фонти Google ва линкҳои Instagram/Maps).

## Deploy ба GitHub Pages

1. Репозиторийи нав дар GitHub созед ва ин папкаро push кунед:
   ```bash
   git init
   git add .
   git commit -m "VAQT demo site"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO.git
   git push -u origin main
   ```
2. Дар GitHub: **Settings → Pages**.
3. Дар қисми **Source** — **Deploy from a branch**-ро интихоб кунед.
4. Branch: `main`, папка: `/ (root)` — **Save**.
5. Баъд аз якчанд дақиқа сайт дар ин линк дастрас мешавад:
   `https://USERNAME.github.io/REPO/`

## Тағйир додани маълумот

- **Нархҳо ва хӯрокҳо** — дар `js/script.js`, массиви `MENU`.
- **Ранг ва тарҳ** — дар `css/style.css`, блоки `:root` (боло).
- **Рақами телефон, Instagram, адрес** — дар `index.html`.

> Ин сайт версияи **DEMO** аст: нархҳо ва нишонӣ намунавӣ мебошанд, фармоишҳо ба ягон сервер фиристода намешаванд.
