# Solomon — тесты-скетчбук

Статический сайт: `index.html`, `i18n/` (тексты RU / EN / HY), `assets/`. Сборки нет.

## Вкладки

1. Насколько ты Соломон? 2. Общий язык с Тиграном (оба: взвешенные оси + штраф за красные флаги). 3. Крестики-нолики против Соломона: лёгко / средне / невозможно (минимакс, не проигрывает).

## Языки и шрифт

- Переключатель RU / EN / ՀԱՅ в верхнем меню; выбор запоминается. Прямая ссылка: `?lang=en`, `?lang=hy`.
- Все тексты в `i18n/ru.js`, `i18n/en.js`, `i18n/hy.js` (одинаковая структура). Баллы и логика — в `index.html`.
- Шрифт Montserrat. В нём нет армянских глифов, поэтому для армянского подключён запасной Noto Sans Armenian.
- Армянский: восточноармянская (реформированная) орфография. Перед публикацией стоит дать вычитать носителю.

## Арт: как подставить

1. Сгенерируй арт по `Solomon.jpg` (промпт ниже), формат 4:5, например 1024×1280.
2. Сохрани как **`assets/solomon-ink.png`** (имя и регистр точно такие, на Linux-хостингах регистр важен).
3. Всё. Пути относительные, правок в коде не нужно. Нет файла — показывается SVG-заглушка.

Другое имя или второй арт для вкладки Тиграна: константа `ART_SRC` в `index.html`.

Для превью ссылки в чатах положи `assets/og.png` (1200×630) и в `<meta property="og:image">`
замени путь на абсолютный URL после деплоя.

### Промпт для арта (загрузи Solomon.jpg как референс)

> Stylized ink illustration of the man from the reference photo: beard, swept-back hair, leather jacket,
> white shirt, dark tie, same ironic pose. Single-color red ink (#C83E2B) line art with cross-hatching
> and a few white hatch accents, on plain off-white background (#F5E6D3), sketchbook drawing, hand-inked,
> no text, no frame, portrait 4:5, keep the likeness.

## Локальный просмотр

```powershell
cd C:\Users\khano\OneDrive\Desktop\solomon
python -m http.server 8000
```

Открыть http://localhost:8000

## Деплой: GitHub Pages

Папка лежит внутри домашнего git-репозитория, поэтому нужен отдельный репозиторий именно в ней.

```powershell
cd C:\Users\khano\OneDrive\Desktop\solomon
git init -b main
git add index.html assets .nojekyll README.md
git commit -m "Solomon sketchbook tests"
gh repo create solomon-sketchbook --public --source . --push
```

Потом: репозиторий → Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)` → Save.
Ссылка: `https://<user>.github.io/solomon-sketchbook/` (появится через 1–2 минуты).

Обновление: положил файл → `git add . ; git commit -m "art" ; git push`.

## Деплой: Vercel (альтернатива)

```powershell
npm i -g vercel
cd C:\Users\khano\OneDrive\Desktop\solomon
vercel --prod
```

На вопросы: Framework — *Other*, Build command — пусто, Output directory — `.`.
