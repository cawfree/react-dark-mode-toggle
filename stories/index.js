import React from "react";
import NightModeToggle from "../src";

export default {
  title: "Toggle"
};

export const Unchecked = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <NightModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={80} />
  );
};

export const Checked = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  return (
    <NightModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={80} />
  );
};
