# Aseprite Rich Presence

A simple to use Discord RPC application for Aseprite.

![](https://i.imgur.com/VMkH8TK.png)

## Requirements
- Node v12.x.x - [Download](https://nodejs.org/en/download/)
- NPM - Included with Node.
- Windows Build Tools - check Setup.


## Setup
- Pull the repository contents, or download the repository ZIP and extract the contents.
- In the console, type `npm install --global windows-build-tools`, this is required. _Windows only._
- After that is done, type `npm install`, this will install all of the needed packages.
- Type `node index.js` and enter your Aseprite.exe path, to run the rich presence.

## Alternative Setup - Windows only
- Run `windows-build-tools-install.bat`.
- When the installation is done, run `npm-install.bat`, this installs all needed packages.
- Run `start.bat` and enter your `Aseprite.exe` path.
- After everything is installed and configured, you don't need to install it anymore. Every time you need to run the rich presence, open `start.bat`.

## For options I've (HamuzaDesu) added (_Windows only_)

 ### Do all this first:
- Pull the repository contents, or download the repository ZIP and extract the contents.
- In the console, type `npm install --global windows-build-tools`, this is required. _Windows only._
- After that is done, type `npm install`, this will install all of the needed packages.

### Then do this:
- install pm2. run `npm install pm2@latest -g` in the console
- move `restartPm2Apps.cmd` to startup folder (type `shell:startup` in windows run (windows key + r))
- run `startSilently.cmd`
- run `pm2 save` in the console
- after all this is done you dont need to run the script ever again. It will now automatically run on startup

## What i've done
- I have made a new script to automatically detect when Aseprite is open
- Once aseprite opens it wil automatically run the rich presence script in the background (so there is no annoying console)
- When aseprite is closed it will then stop the rich presence script and wait for aseprite to open again

## Supported File Extensions
- `ASE`/`ASEPRITE`,
- `JPG`/`JPEG`,
- `PNG`,
- `GIF`,
- Other extensions will be shown as _image_.

## Note
- Please note that **only** the currently open **file name and extension** will be shown on the presence.
- If you see an `Error: RPC_CONNECTION_TIMEOUT` error, close the presence window, and open it again after 5 minutes.
- To change your `Aseprite.exe` file path, open `config.json` in your favorite file editor, and change the `path` value to your new path.

## How to get the Aseprite.exe path - Windows only
- Right click on the Aseprite shortcut, and click `Open file location`.
![Aseprite Right Click](https://i.imgur.com/bhezWX6.png)
- Copy the path in File Explorer, and add `\Aseprite.exe` to it.
![Copy File Path](https://i.imgur.com/eu8vLnH.png)


## License
- This repository has been licensed by the MIT license: [here](https://github.com/vanishedvan/aseprite-rich-presence/blob/master/LICENSE).