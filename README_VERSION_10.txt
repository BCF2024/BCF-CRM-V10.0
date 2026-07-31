BearCrest CRM Version 10.0 — Weekend Build

This release consolidates the recent CRM upgrades into one installation:

• JotForm application-to-loan import and improved field mapping
• Match Lenders button inside each application/loan file
• Deal Matcher with lender fit explanations
• As-Is Value field on the internal application
• BearCrest Processing Fee field for lender-submission packages
• Contract category in document uploads
• Deal Analyzer linked to an application/loan
• Branded printable Deal Package with application, analysis and comparable sales
• Corrected printable-window Close button
• One-way Google Contacts sync into the CRM
• Smart U.S. address autocomplete inside CRM address fields when a Google Maps API key is configured

INSTALLATION
1. Back up the current GitHub files and CRM data.
2. Upload all Version 10 files to the same GitHub repository, replacing the existing files.
3. Commit the changes.
4. Hard refresh the CRM or close and reopen the installed app. Version 10 uses a new service-worker cache name.
5. For Google Contacts sync, replace the Apps Script code with BearCrest_Cloud_Connector.gs, enable the People API advanced service, and deploy a new version of the existing Web App.

SMART ADDRESS COMPLETION
Open CRM Settings > Smart Address Completion. Paste a Google Maps API key with Maps JavaScript API and Places API enabled. Address suggestions will appear in loan, contact, Deal Analyzer and Deal Matcher address fields. Restrict the key to your GitHub Pages domain in Google Cloud.

JOTFORM
JotForm address suggestions are configured in the JotForm builder rather than by the CRM. Follow JOTFORM_ADDRESS_SETUP.txt.
