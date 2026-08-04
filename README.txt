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

============================================================
BEARCREST CRM VERSION 11.0 — MULTI-USER EDITION
============================================================

NEW IN VERSION 11.0
- Individual employee usernames and passwords
- Roles: Administrator, Loan Officer, Processor, and View Only
- User activation/deactivation and forced password change
- Loan assignment by team member
- Employees see only loans assigned to them
- Administrator sees all loans
- Separate Internal Notes and Lender Notes
- Lender Submission Summary with print/save-to-PDF support
- Lender submission status, response, follow-up date, and history
- Submission Center and User Management screens
- Basic activity audit trail

FIRST LOGIN
The existing Version 10 administrator username and password are migrated automatically.
If Version 10 had never been opened in the browser, use:
Username: admin
Temporary password: BearCrest2026!
You will be prompted to replace the temporary password.

ADDING AN EMPLOYEE
1. Sign in as Administrator.
2. Open Users in the left menu.
3. Select Add User.
4. Enter the employee name, username, temporary password, and role.
5. Assign loans to that employee from the Assigned Team Member field inside each loan.

LENDER SUBMISSIONS
1. Open a saved loan.
2. Enter private notes under Internal Notes.
3. Enter lender-facing information under Lender Notes.
4. Select Lender Submission in the Generate area.
5. Choose the lender, status, dates, contact, and notes.
6. Print or save the summary as a PDF, then save the submission to its history.

IMPORTANT SECURITY NOTE
Version 11.0 adds role-based access within the CRM browser application. Credentials and data remain stored through the CRM's existing browser/cloud-sync architecture. For enterprise-grade authentication enforced on a central server, the next deployment stage should move user verification and permissions into Google Apps Script or another secured backend. Do not publish the CRM as an unrestricted public website.
