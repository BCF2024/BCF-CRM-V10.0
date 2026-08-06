BearCrest CRM Version 13.0.0 – CLEAN BASELINE

This release is built from the exact uploaded v12.5.1 package and establishes one clean baseline.

KEY CHANGES
- Google Forms and its linked response spreadsheet are the active application intake.
- The active JotForm API sync endpoint has been removed. Existing historical JotForm-imported records remain readable.
- Deal Analyzer response handling is guarded against missing or differently nested RentCast comparable arrays.
- One Use for ARV checkbox per comp; comps load selected and recalculate automatically when changed.
- Zillow, Redfin, and Realtor.com review links remain available for the subject and comps.
- Version 13.0.0 is the runtime source in config.js.
- Service worker uses a new cache and network-first loading for index.html and config.js to prevent stale-version lockups.

DEPLOYMENT
1. Extract this ZIP.
2. Upload and replace every file in the GitHub repository root. Do not upload the ZIP itself.
3. Replace the Google Apps Script project code with BearCrest_Cloud_Connector.gs.
4. Deploy a new Apps Script web-app version.
5. Confirm GitHub Pages deploys from main / (root).
6. First test in Incognito, then clear/unregister the old service worker in the normal browser if needed.
