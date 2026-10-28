Posts are plain **Markdown** files. No server or build step — write, commit, push.

## 1. Write the post

Create a file in the `posts/` folder. The file name (without `.md`) is the post's id:

```
posts/kcgs-2026-review.md
```

Don't repeat the title at the top of the file — the page shows the title, date and author from `data.js`.

## 2. Add images

Put images in a folder named after the post and link them with a relative path:

```
posts/kcgs-2026-review/poster.jpg
```

```markdown
![Our poster session](kcgs-2026-review/poster.jpg)
```

## 3. List it in data.js

Add an entry at the **top** of `blog` in `assets/js/data.js` (newest first):

```js
{id:"kcgs-2026-review", t:"KCGS 2026 review", d:"2026-07-05", cat:"Lab Life",
 author:"Junseo Choi", excerpt:"Two posters and a lot of seafood in Yeosu.",
 tags:["Conference"], cover:"posts/kcgs-2026-review/poster.jpg"},
```

- `cat` — `"Lab Life"` or `"Research"`
- `author` — a member's name shows their profile avatar
- `draft:true` — hides it from the list; preview at `blog.html?drafts`

## Markdown cheatsheet

| You type | You get |
|---|---|
| `**bold**` | **bold** |
| `*italic*` | *italic* |
| `[link](https://...)` | a link |
| `` `code` `` | `code` |
| `> quote` | a quote block |

> Tip: run `python3 -m http.server 5173` and open `localhost:5173/blog.html?drafts` to preview before pushing.
