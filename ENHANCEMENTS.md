# Market List — Enhancement Ideas

A scratchpad for features and improvements. Add ideas freely; move to **Done** when shipped.

---

## Ideas

<!-- Add new ideas here -->

---

## In Progress

<!-- Ideas currently being worked on -->

---

## Done

- [x] Fix blank page (duplicate `const` declarations blocking React mount)
- [x] Add `prop-types` CDN so Recharts initialises correctly
- [x] App live on GitHub Pages at https://dbaccount.github.io/Shoping-list-app/
- [x] **F1 — Browse sort by frequency**: Items in each Browse category now float to the top based on how many times they have appeared in past shopping sessions. `itemFreqMap` computed from `sessions` at render time.
- [x] **F2 — Price per item + line total + grand total**: Each list row has an editable price field and an auto-calculated line total (`price × qty`). A running grand total appears in the sticky bottom bar.
- [x] **F3 — Weekly data structure**: GitHub data is now organised by `data/YYYY-MM/week-N.json`. The List tab has a `< Month >` navigator and W1–W5 week selector. Cart changes write only to the weekly file; custom items and sessions write only to the global file. Old v1 data is migrated on first load.
- [x] **F4 — Smart default units**: Common items default to sensible units (e.g. Whole Milk → litre, Bananas → bunch, Flour → kg) instead of always defaulting to "unit".
- [x] **F5 — Receipt OCR upload**: A "Upload Receipt Photo" button in the Receipt tab uses Tesseract.js (CDN, no server) to OCR a receipt image and auto-populate the receipt rows. New items are added to the custom items list. User can review/edit before saving.
- [x] **F6 — Receipt smart merge into weekly list**: After OCR, the app parses the receipt date (DD/MM/YYYY, DD Mon YYYY, ISO), looks up that week's GitHub cart, merges prices into existing items or adds missing ones, writes the updated cart to `data/YYYY-MM/week-N.json`, and navigates the List tab directly to that week. Falls back to current week when no date can be parsed.
