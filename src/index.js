import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import Lottie from "react-lottie-player";
import parseUnit from "parse-unit";

const animationData = require("./animationData.json");

const NightModeToggle = ({ size, checked, onChange, speed, className }) => {
  const [sizeValue, sizeUnit] = parseUnit(size);
  const [isReadyToAnimate, setReadyToAnimate] = useState(false);

  const segmentsToPlay = checked ? [2, 50] : [51, 96];
  const segmentToGoTo = checked ? 51 : 2;

  return (
    <button
      onClick={() => {
        setReadyToAnimate(true);
        onChange(!checked);
      }}
      style={{
        cursor: "pointer",
        overflow: "hidden",
        width: `${sizeValue}${sizeUnit || "px"}`,
        height: `${sizeValue * 0.47}${sizeUnit || "px"}`,
        appearance: "none",
        MozAppearance: "none",
        WebkitAppearance: "none",
        border: "none",
        backgroundColor: "transparent",
        padding: 0,
      }}
      aria-hidden="true"
      className={className}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: `${sizeValue * -0.575}${sizeUnit || "px"}`,
          marginLeft: `${sizeValue * -0.32}${sizeUnit || "px"}`,
          width: `${sizeValue * 1.65}${sizeUnit || "px"}`,
          height: `${sizeValue * 1.65}${sizeUnit || "px"}`,
        }}
      >
        <Lottie
          key="$preventGlitches"
          play={isReadyToAnimate}
          speed={speed}
          animationData={animationData}
          loop={false}
          segments={segmentsToPlay}
          goTo={segmentToGoTo}
        />
      </div>
    </button>
  );
};

NightModeToggle.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  speed: PropTypes.number,
  className: PropTypes.string,
};

NightModeToggle.defaultProps = {
  size: 85,
  checked: false,
  onChange: (nextValue) => null,
  speed: 1.3,
  className: null,
};

const propsAreEqual = (prevProps, nextProps) =>
  prevProps.size === nextProps.size &&
  prevProps.checked === nextProps.checked &&
  prevProps.speed === nextProps.speed &&
  prevProps.className === nextProps.className;

export default memo(NightModeToggle, propsAreEqual);
