BearCrest CRM Version 12.5.0 – GOOGLE FORMS INTEGRATION

- Replaces JotForm syncing with Google Forms and its linked Google response Sheet.
- Creates a BearCrest investor application automatically from CRM Settings.
- Imports new Google Form responses as CRM loan files.
- Keeps older JotForm-imported records readable for backward compatibility.
- No JotForm API key or subscription is required.

See GOOGLE_FORMS_SETUP.txt before deployment.

BearCrest CRM Version 12.5.0

DEAL ANALYZER REBUILD
- Robustly handles current and older Google Apps Script / RentCast response shapes.
- Prevents undefined comparables crashes.
- One Use for ARV checkbox per comp, all selected by default.
- Automatic ARV recalculation when a comp is removed or restored.
- Zillow, Redfin, and Realtor.com review links for the subject and every comp.
- Clear no-data and API-response status messages.
- Multi-method BearCrest ARV reconciliation with confidence and supported range.
- New service-worker cache to prevent older analyzer files from remaining active.

UPLOAD EVERY FILE IN THIS PACKAGE TO GITHUB AND REPLACE THE EXISTING FILES.

BearCrest CRM Version 12.5.0

NEW IN VERSION 12.5.0
- Zillow, Redfin, and Realtor.com quick-search buttons from the Deal Analyzer address.
- Separate Current Market Check and After-Repair analysis workflow.
- Five ARV indications: similarity-weighted PPSF, median PPSF, average PPSF, average renovated sale, and median renovated sale.
- BearCrest Recommended ARV reconciles the middle of supported methods to reduce outlier impact.
- Confidence reflects comp count, similarity, and agreement among methods.

BearCrest CRM Version 12.5.0

FIXED IN VERSION 12.5.0
- ARV no longer uses every nearby sale automatically.
- All returned comps are selected by default with one “Use for ARV” checkbox. Uncheck any comp you do not want included.
- Separates RentCast as-is AVM from verified renovated-comp ARV.
- Prevents ordinary/as-is comps from silently becoming the ARV.

BearCrest CRM Version 12.5.0

FIXED IN VERSION 12.5.0
- The Deal Analyzer now refreshes the application list before transferring a loan, so the selected application's full data is loaded instead of only the address.
- Requested Loan Amount now has its own editable Deal Analyzer field and automatically loads from the CRM or imported Jotform answers.
- Property address, purchase price, rehab budget, square footage, ARV, closing costs, transaction type, and requested loan amount all transfer together when available.
- Address autocomplete now uses Google's current Places autocomplete interface and keeps the older interface as a fallback.
- Jotform address objects are converted into a complete Street, City, State ZIP format before being saved.
- Updated the offline cache name and all asset version tags so browsers install the corrected files instead of reusing an older build.

BearCrest CRM Version 11.1.5

NEW IN VERSION 11.1.5
- Added a clear Deal Type selector in the Deal Analyzer: Purchase or Rehab / Refinance.
- The selected type is pulled from the application when available, remains editable, and appears in the analysis and deal package.

BearCrest CRM Version 11.1.5

FIXED IN VERSION 11.1.5
- Selecting or loading an application now automatically fills the Deal Analyzer with the property address, purchase price, rehab budget, square footage, ARV, and closing costs when available.
- The Deal Analyzer also searches the imported Jotform application answers when the main CRM fields are blank.
- All populated Deal Analyzer fields remain editable so figures can be corrected before running the analysis.
- Sending a loan to the Deal Analyzer now transfers the full available application data, not only the address.

BearCrest CRM Version 11.1.5

FIXED IN VERSION 11.1.5
- Corrected the Deal Analyzer error “input is not defined.”
- The subject square footage is now passed correctly into the selected-comparable ARV calculation.
- The Analyze Deal button now completes and resets normally after the analysis.

BearCrest CRM Version 11.1.5

Added a clearly visible Subject Property Square Footage field and direct copy/paste/transfer controls between the loan application and Deal Analyzer.

BEARCREST CRM VERSION 11.1 — AUTOMATED ARV & SUBMISSION UPDATE

NEW IN VERSION 11.1

1. Deal Analyzer address field accepts typing, paste, and drag/drop text.
2. Google Places address autocomplete remains available when configured in Admin Settings.
3. Comparable sales now include selection checkboxes.
4. Suggested ARV is calculated automatically from selected comps using median price per square foot and subject square footage; median sale price is used as a fallback.
5. Removing a comp and pressing Recalculate ARV updates the ARV, spread, ROI, 70% rule, and deal grade.
6. A manual ARV override remains available but is optional.
7. Loan records now include Transaction Type: Purchase, Refinance, or Delayed Purchase.
8. Transaction Type appears in lender submission summaries and generated application information.
9. Version and service-worker cache updated throughout to Version 11.1.1.

INSTALLATION
Upload and replace every file in this package in the same GitHub repository. The service worker cache name changed, which helps force browsers and installed phone shortcuts to load Version 11.1.1. After GitHub Pages updates, perform one hard refresh.

ADDRESS AUTOCOMPLETE
In CRM Admin Settings, enter a Google Maps API key with Maps JavaScript API and Places API enabled. Paste and drag/drop cleanup work even without the API key.

AUTOMATED ARV NOTICE
The calculated ARV is a preliminary underwriting tool. Keep only truly comparable renovated sales and independently verify condition, sale status, distance, square footage, and market relevance before issuing terms.
