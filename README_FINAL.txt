SIGPRO TECHNOLOGIES - FINAL BUSINESS READY BUILD

This build uses Firebase Realtime Database transactions for scholar/work edits so that separate edits do not overwrite each other.

Work modules:
- R&D: 3 Papers, 3 Simulations, Synopsis, Thesis; each milestone has Amount, Status and DD/MM/YYYY Due Date.
- Journal Publication: multiple journals; Scopus, SCIE, Random Login Paper; Journal, Manuscript/Paper reference, Cost, Status and independent Due Date.
- Journal Author Positions: up to 7; Position 1 has Paper Write-up Cost, Login Amount, Acceptance Amount; Positions 2-7 have Login Amount and Acceptance Amount. Each milestone has independent date.
- Patent Author Positions: up to 8; Patent/Invention, Amount, Status and independent Due Date.
- Other: custom service, Amount, Status and independent Due Date.

Persistence:
- Every amount/status/work edit is saved atomically to Firebase.
- Every date is saved independently to Firebase.
- Dates use DD/MM/YYYY and valid years 1900-2100.
- Data remains after closing and reopening the scholar.
- Work remains visible until the scholar is marked Completed. Reopening a completed scholar restores editing.
- Owner, Boss and Editor have full access.

GitHub update:
Replace index.html and sw.js from this package in the GitHub Pages repository. Keep the existing Firebase database and user records.

After publishing, refresh:
- Desktop: Ctrl+F5
- Mobile: close the installed PWA completely, reopen, then sign in.
