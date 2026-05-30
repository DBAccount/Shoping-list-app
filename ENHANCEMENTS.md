# Market List — Enhancement Ideas

A scratchpad for features and improvements. Add ideas freely; move to **Done** when shipped.

---

## Ideas

### Browse screen — sort items by past order frequency
In the Browse (🏪) tab, items within each category should be sorted by how many
times they have appeared in past shopping sessions. The `sessions` array already
stored in GitHub (`data/market-list-data.json`) contains every receipt, so the
frequency can be derived at load time without any extra storage.

Most-ordered items float to the top of each category grid; items never ordered
before stay at the bottom. Makes the browse screen feel personalised over time.

### List view — price per item + line total column
Add two new columns to each row in the list view (📋 tab):
- **Unit price** — editable price field the user fills in while shopping
- **Line total** — auto-calculated as `unit price × qty`, shown read-only next to it

A grand total of all line totals should appear in the sticky bottom bar alongside
the progress counter, giving a live spend estimate before reaching the checkout.
Data stays local to the cart (not saved to GitHub until a receipt is logged).

### List view — weekly shopping lists stored by month/week in GitHub
Instead of a single flat data file, organise shopping data in GitHub by time:

**Folder structure in the repo:**
```
data/
  2026-05/
    week-1.json
    week-2.json
    week-3.json
    week-4.json
  2026-06/
    week-1.json
    ...
```

Each file holds the cart + receipt data for that specific week.

**In the List screen:**
- A month/week navigator at the top (e.g. `< May 2026 >` → `Week 1 · Week 2 · Week 3 · Week 4`)
- Selecting a month+week fetches that file from GitHub and loads it
- Current week is the default on open
- If no file exists for that week yet, start with an empty list and create the file on first save

This makes it easy to look back at what was bought in any week, compare weeks, and keeps each week's data isolated.

### Smart default units per item
Every item currently defaults to "unit" in the unit dropdown.
Pre-map common items to sensible defaults (e.g. Whole Milk → litre, Bananas → bunch,
Flour → kg, Orange Juice → litre) so the user rarely needs to change it manually.

---

## In Progress

<!-- Ideas currently being worked on -->

---

## Done

- [x] Fix blank page (duplicate `const` declarations blocking React mount)
- [x] Add `prop-types` CDN so Recharts initialises correctly
- [x] App live on GitHub Pages at https://dbaccount.github.io/Shoping-list-app/
