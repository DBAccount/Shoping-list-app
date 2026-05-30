# 🛒 Market List App

A self-hosted shopping list and spending tracker — no external servers needed.  
**GitHub acts as both the host (Pages) and the database (Contents API).**

## Live App
👉 https://DBAccount.github.io/Shoping-list-app/

---

## One-time Setup

### 1. Enable GitHub Pages
- Go to your repo → **Settings** → **Pages**
- Source: **Deploy from a branch**
- Branch: `main` · Folder: `/ (root)`
- Click **Save** — your app will be live in ~60 seconds

### 2. Create a Personal Access Token
- GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Fine-grained tokens**
- Click **Generate new token**
- Repository access → **Only select repositories** → pick `Shoping-list-app`
- Permissions → Repository permissions → **Contents: Read and Write**
- Copy the token (starts with `ghp_`)

### 3. First Open
- Visit https://DBAccount.github.io/Shoping-list-app/
- Click ⚙️ — the owner (`DBAccount`) and repo (`Shoping-list-app`) are pre-filled
- Paste your token → **Test Connection** → **Save & Connect**
- Token is stored only in your browser's localStorage — never sent anywhere except GitHub

---

## How It Works

| What | Where |
|------|-------|
| App (HTML/JS/CSS) | `index.html` in this repo |
| Your data | `data/market-list-data.json` in this repo |
| Hosting | GitHub Pages (free) |
| Storage | GitHub Contents API |

Every time you make a change the app commits `data/market-list-data.json` — you get a full history of every save in the commit log.

---

## Data File

`data/market-list-data.json` is human-readable:

```json
{
  "v": 1,
  "cart": {},
  "customItems": [{ "name": "Protein Powder", "catId": "custom" }],
  "sessions": [
    {
      "id": 1234567890,
      "date": "2026-05-30T10:00:00.000Z",
      "note": "Tesco",
      "total": 42.30,
      "items": [{ "name": "Apples", "catId": "fruits", "qty": 1, "price": 1.50 }]
    }
  ],
  "lastSaved": "2026-05-30T10:00:00.000Z"
}
```
