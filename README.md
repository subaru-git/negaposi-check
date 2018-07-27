# negaposi check

check selection text negative / positive score

## Installation

```bash
npm install
```

## Usage

Run `npm start` and load the `dist`-directory into chrome.

## Entryfiles (bundles)

There are two kinds of entryfiles that create bundles.

1. All js-files in the root of the `./app/scripts` directory
2. All css-,scss- and less-files in the root of the `./app/styles` directory

### Build

```bash
npm run build
```

### pack

Zips your `dist` directory and saves it in the `packages` directory.

```bash
npm build:chrome
```