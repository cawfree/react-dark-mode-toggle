# react-dark-mode-toggle

> Hello! 👋 This package is now __deprecated__.
> Please migrate over to [__react-dark-mode-toggle-2__](https://github.com/todd-elvers/react-dark-mode-toggle-2).

A super cutesy dark mode toggle button for [React](https://github.com/facebook/react). Inspired by [overreacted.io](https://overreacted.io/).

<a href="#badge">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"></a>

<p align="center">
  <img src="./assets/title.gif" width="300" height="300" />
</p>

## 🚀 Getting Started

Using [`npm`]():

```bash
npm i react-dark-mode-toggle
```

Using [`yarn`]():

```bash
yarn add react-dark-mode-toggle
```

## ✨ Usage

```javascript
import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export default () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={80}
    />
  );
};
```

## 📌 Props

Prop                  | Type     | Default                   | Required
--------------------- | -------- | ------------------------- | --------
`onChange`|func|`value => null`|No
`checked`|boolean|`false`|No
`size`|number (defaults to px) or string (px, em, rem, %, etc.)|`85`|No
`speed`|number|`1.3`|No
`className`|string|`null`|No|

> **Note**, this is _not_ a dark mode theme implementation; it's just a button! You'll need to mix this with a management solution such as [use-dark-mode](https://github.com/donavon/use-dark-mode).

## ✌️ License
[MIT](https://opensource.org/licenses/MIT)
