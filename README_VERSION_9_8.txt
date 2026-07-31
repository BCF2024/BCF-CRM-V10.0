BearCrest CRM Version 9.8

NEW
- Google Contacts one-way sync button (Google Contacts -> CRM).
- Internal BearCrest Processing Fee field in each application/loan.
- Processing fee appears in the lender-facing application and Deal Package.
- Contract added as a document upload category and Google Drive subfolder.

GOOGLE CONTACTS SETUP
1. Replace the Apps Script code with BearCrest_Cloud_Connector.gs from this package.
2. In Apps Script, click Services (+) and add People API.
3. Deploy > Manage deployments > Edit > New version > Deploy.
4. Keep the same Web App URL.
5. In CRM Contacts, click Sync Google Contacts and approve access when prompted.

The sync is one-way: Google Contacts are imported/updated in the CRM. CRM edits do not overwrite Google Contacts.
