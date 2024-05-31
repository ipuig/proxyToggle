<h1 align="center">
   Proxy Toggle
<sub>
<img src="https://github.com/ipuig/proxyToggle/blob/master/assets/icons/base.png" height="38" width="38">
</sub>
</h1>

Proxy Toggle is a Firefox browser extension designed to easily switch between manual and system proxy settings with a single click.

## Overview

Proxy Toggle leverages Mozilla's browser API to read and modify the browser's proxy settings. It does not store any data; it simply provides a convenient shortcut to enable or disable proxy settings within the browser, making it ideal for working with web proxies such as Burp and ZAP.


<p align="center">
  <img src="https://github.com/ipuig/proxyToggle/blob/master/assets/img/example.png" alt="view" style="height: 25em">
</p>

## Features

- **One-click Switching:** Toggle between manual and system proxy by clicking the power icon.
  - **Green Button:** Indicates that manual proxy is enabled.
  - **White Button:** Indicates that system proxy is enabled.
- **Proxy Configuration:** When manual proxy is enabled, you can update the host and port using the input fields and click 'Update' to apply changes.
- **No Data Storage:** The extension only reads and modifies browser proxy settings without storing any information.

## How to Use

1. **Install the Extension:** Add Proxy Toggle to your Firefox browser.
2. **Click the extension icon**
3. **Toggle proxy by clicking the power button**
4. **Update Proxy Settings:**
   - Enable manual proxy settings by clicking the button until it turns green.
   - Enter the desired host and port in the input fields.
   - Click 'Update' to apply the new proxy settings.
     
## Requirements
- Allow the extension on Incognito
   - browse `about:addons` in firefox
   - click `Proxy Toggle > Details > Run in Private Windows`
   - check `Allow`
  
## Installation

### From firefox ADD-ONS
[Proxy Toggle](https://addons.mozilla.org/en-US/firefox/addon/one-button-proxy-toggle/)

### Load as a temporary extension (Testing only)

1. Download the extension
```
git clone https://github.com/ipuig/proxyToggle.git
```

2. Open firefox and input `about:debugging#/runtime/this-firefox` in the search bar.
3. Then go to `Load Temporary Add-on`
4. And select the manifest.json within the root of the cloned repo.

---
**NOTE:** You might want to pin the extension to your browser's toolbar. 

