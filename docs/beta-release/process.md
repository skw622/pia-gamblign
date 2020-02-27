## Chrome Beta Release Process:

### Update .env file
- Update RELEASE_DATE
- UPDATE CHANGELOG_START and CHANGELOG_END
- UPDATE FF_VERSION

###  Update Translations and commit
- `grunt oneskyImport` will upload the `src/_locales/en/messages.json` to OneSky
- Order translations from the OneSky website (should take around 3 days)
- `grunt oneskyExport` will update all the other locale files
- Create a commit for these updated translations with the commit message "Update Translations"

###  Update VERSION / CHANGELOG and commit
- Update VERSION and CHANGELOG files to latest Beta Version Number
- Update CHANGELOG by clearing out all patch versions since last release version
- Create a commit for this change with the commit message `{versionNumber} Beta Release`

## Go to the Firefox Repo and follow the steps there
- Update .env file
- Update Translations
- Update Version and ChangeLog
- Generate a beta build for Firefox and info-firefox.json file

###  Create CRX file, ZIP file, and info.md files
- `npm run beta`
- `npm run beta:opera`

### Create master zip file with all generated files
- `node script/beta-release`
- This should create a zip file with the ending `*-beta-release.zip` with all six files included.

### Notify Web team to update the client portal
- Send the master zip file to the web team through the #general-escalation channel
- Slack message template:
  - `@web Here's the files for Chrome/Opera v{versionNumber} and Firefox v{FirefoxVersionNumber} Extension Beta Release`
- Include the master zip file in the above slack message
- clean up any files that aren't needed anymore


## Zip File Contents:
- info.json
- CRX File
- ZIP File (Chrome)
- NEX File
- ZIP File (Opera)
- XPI File


## Beta/Release Git Branching Model
- When all issues leading up to a beta release have been merged into `develop`, create a beta branch
  - Naming scheme: `beta/v{versionNumber}`
- Issues related to the beta after this beta can still be merged into `develop`
- Create a dist from the latest commit in the beta branch to hand over to QA for a Charter Review
- Any issues found during Charter Review of the beta must be merged into the `beta/v{versionNumber}` branch
- Once Charter Review is complete, a new dist should be made from the latest commit in the beta branch
  - If no issues were found, then using the previous dist is fine
- Distribute this dist to the @web team
- Beta periods can be as short as one week to as long as needed to address all issues
- Once the beta period is over, a "release" branch should be made from the beta branch
  - Naming scheme: `release/v{versionNumber}`
  - The beta branch can be ignored from now on, but should not be deleted yet
- Create a new dist from the latest commit of the release branch to send to QA for another Charter Review
- Any issues found during Charter Review of the beta must be merged into the release branch
- Once Charter Review is complete, merge the release branch into `master`
- Create a new public dist from the latest commit in master
- Merge the `master` branch into the `develop` branch
- Delete the beta branch
- Keep the current release branch around until the next release
- Delete the previous release branch
