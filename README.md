# PractiScore Tag & Name Counter

## Overview
This Tampermonkey script counts the occurrences of shooting division tags (CCP, ESP, CDP, CO, SSP, PCC) on the **PractiScore** "squadding" page. Additionally, clicking on a tag in the floating results box displays a list of competitor names assigned to that division.

## Features
✅ Runs **only on** PractiScore squadding pages (`https://practiscore.com/*/squadding`)
✅ **Counts occurrences** of CCP, ESP, CDP, CO, and SSP
✅ **Displays results** in a floating box
✅ **Click on a tag** to show the list of associated names in another floating window
✅ **Automatically extracts names** from the `title` attribute
✅ **Closes easily** with a button
✅ **User-friendly and lightweight**

## Installation
### 1️⃣ Install Tampermonkey
- If you haven’t already, install **Tampermonkey**:
  - [Chrome](https://chromewebstore.google.com/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
  - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
  - [Edge](https://microsoftedge.microsoft.com/addons/detail/iikmkjmpaadaobahmlepeloendndfphd)
  - [Safari](https://apps.apple.com/app/tampermonkey/id6738342400)
  - [Opera Next](https://addons.opera.com/en/extensions/details/tampermonkey-beta/)

### 2️⃣ Install the Script
1. Open **Tampermonkey** and click on **Create a new script**.
2. Delete the default template and **paste the script** from this repository.
3. Click **File → Save** and make sure the script is **enabled**.

### 3️⃣ Use the Script
1. **Go to a PractiScore squadding page**, e.g., `https://practiscore.com/event-name/squadding`
2. The floating results box **automatically appears** in the bottom-right corner.
3. **Click on a tag (CCP, ESP, etc.)** to see a list of names.
4. Close any box using the **× button**.

## How It Works
- The script scans all `<span>` elements on the page.
- It extracts the competitor **name** and **division** from the `title` attribute (e.g., `title="John Doe (CCP)"`).
- It counts the occurrences of each tag and displays the total in a floating window.
- Clicking on a tag displays **a second floating box** listing the names associated with that division.
- The second box **appears directly above the first box**, leaving a **20px gap**.

## License
This project is open-source and licensed under the **MIT License**.

