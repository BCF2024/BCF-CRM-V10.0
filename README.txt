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
The existing Version 10.0 administrator username and password are migrated automatically.
If Version 10.0 had never been opened in the browser, use:
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


VERSION DISPLAY
The app version is now controlled from config.js using appVersion and edition. Login, header, browser title, and signed-in footer all display Version 11.0 – Multi-User Edition.
