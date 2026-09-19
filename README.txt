SigPro Technologies – Final All-Work Fixed Version

This version is for the shared Firebase/GitHub Pages SigPro app.

Fixed: 
- Date entry is text-based DD/MM/YYYY; no browser year-wheel problem and no 0002/0001 year issue.
- Date fields are available in R&D, Journal Publication, Journal Author Positions, Patent Positions and Other work.
- Saving a date does NOT rebuild/close the Scholar window, so multiple dates can be entered one after another.
- Invalid dates outside 1900–2100 are rejected.
- Existing invalid old dates are ignored for overdue calculations until corrected.
- Journal publications store type, journal, manuscript/paper reference, cost and payment date/status.
- Up to 3 R&D papers and 3 simulations, plus Synopsis and Thesis.
- Up to 7 Journal Author Positions; Position 1 has Write-up, Login and Acceptance.
- Up to 8 Patent Author Positions with independent amount/status/due date.
- Other services support independent amount/status/due date.
- Remove buttons are available for Journal, Author Position, Patent and Other records.
- Synopsis/Thesis are no longer accidentally reset when already created.
- Follow-up Alerts now list individual pending items across all work categories.
- Owner, Boss and Editor keep full access.

GitHub Pages update: replace index.html and sw.js (and keep the manifest/icons). Then hard-refresh the site (Ctrl+F5 on computer) or close/reopen the installed PWA on mobile. Firebase rules/database do not need to be changed for these fixes.
