import React, { useRef, useEffect, useState, memo } from "react";
import PropTypes from "prop-types";
import Lottie from "lottie-react-web";
import parseUnit from "parse-unit";

const options = Object.freeze({
  animationData: require("./animationData.json"),
  autoplay: false,
  loop: true
});

const NightModeToggle = ({ size, checked, onChange, speed, className, ...extraProps }) => {
  const ref = useRef();
  const [progress, setProgress] = useState(() => 0);
  const [sizeValue, sizeUnit] = parseUnit(size);
  const segments = checked ? { segments: [2, 96] } : null;
  useEffect(() => {
    if (progress >= 0.5) {
      if (checked) {
        ref.current.anim.pause();
      } else if (ref.current.anim.isPaused) {
        ref.current.anim.play();
      }
    } else if (!checked) {
      ref.current.anim.pause();
    }
  }, [checked, progress]);
  useEffect(
    () => {
      /* force */
      (!!checked) && ref.current.anim.setCurrentRawFrameValue(48);
    },
    [],
  );
  const [eventListeners] = useState(() => [
    {
      eventName: "enterFrame",
      callback: ({ currentTime, totalTime }) =>
        setProgress(currentTime / totalTime)
    }
  ]);
  return (
    <button
      onClick={() => ref.current.anim.isPaused && onChange(!checked)}
      style={{
        cursor: "pointer",
        overflow: "hidden",
        width: `${sizeValue}${sizeUnit || 'px'}`,
        height: `${sizeValue * 0.47}${sizeUnit || 'px'}`,
        appearance: 'none',
        MozAppearance: 'none',
        WebkitAppearance: 'none',
        border: 'none',
        backgroundColor: 'transparent',
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
          marginTop: `${sizeValue * -0.595}${sizeUnit || 'px'}`,
          marginLeft: `${sizeValue * -0.32}${sizeUnit || 'px'}`,
          width: `${sizeValue * 1.65}${sizeUnit || 'px'}`,
          height: `${sizeValue * 1.65}${sizeUnit || 'px'}`
        }}
      >
        <Lottie
          key="$preventGlitches"
          ref={ref}
          speed={speed}
          isClickToPauseDisabled
          eventListeners={eventListeners}
          forceSegments
          options={options}
          {...segments}
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
  onChange: nextValue => null,
  speed: 1.3,
  className: null,
};

export default memo(NightModeToggle);
