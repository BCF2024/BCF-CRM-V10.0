BearCrest CRM V6.5 - Mobile Controls and Shared Connection Fix

FIXED
- Bottom Home, Pipeline, +, Tasks, and Contacts buttons now bind after the buttons exist in the page.
- Added live connection indicators on mobile and desktop.
- Green = Apps Script ping succeeded. Red = missing URL, offline, or connection error.
- Clicking the indicator opens connection settings.
- Updated the service-worker cache name so phones do not keep serving the older broken JavaScript.

SHARED CONNECTION
Open config.js and replace PASTE_YOUR_EXISTING_APPS_SCRIPT_WEB_APP_URL_HERE with the current Apps Script /exec URL. Commit config.js with the other files. That makes the same URL available on every device.

IMPORTANT AFTER UPLOAD
On the phone, fully close the installed CRM/browser tab and reopen it. If the old version remains, clear the site cache or remove and reinstall the home-screen app once so the V6.5 service worker takes over.
