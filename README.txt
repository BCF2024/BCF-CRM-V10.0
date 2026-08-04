BEARCREST CRM — VERSION 10.0

OFFICIAL RELEASE PACKAGE

This package standardizes the application name and all visible version labels as “BearCrest CRM — Version 10.0.” It removes the temporary “Weekend Build” name and the older visible Mobile/V6.5/V6.7 labels.

UPDATED IN THIS PACKAGE
1. index.html
   - Browser title: BearCrest CRM — Version 10.0.
   - Login screen: BearCrest CRM / Version 10.0.
   - Responsive header: BearCrest CRM / Version 10.0.
   - Main header: BearCrest CRM / Version 10.0.
   - Footer identifies BearCrest CRM Version 10.0.

2. app.js
   - Keeps the existing editable preliminary approval letter.
   - Includes the editable Proposed Financing Option section.
   - Includes editable loan amount, purchase price, down payment, closing date, payment type, term, and rate fields.
   - Includes editable fee and cash-requirement fields.
   - Includes loan highlights and conditions based on the uploaded bridge-loan term sheet.
   - All approval-letter wording and values remain editable before Print / Save PDF.
   - Legacy visible-version comments were standardized for easier maintenance.

3. manifest.json
   - Application name: BearCrest CRM 10.0.

DEPLOYMENT
Upload and replace index.html, app.js, and manifest.json in the existing GitHub repository. Keep the existing styles.css and service-worker.js files already in the repository. Also retain bcf-logo.png, config.js, auth.js, and BearCrest_Cloud_Connector.gs.

IMPORTANT
The README is not required for the CRM to run. It is included only as release documentation.
