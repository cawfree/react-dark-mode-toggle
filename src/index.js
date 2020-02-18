import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Lottie from "lottie-react-web";

const options = Object.freeze({
  animationData: require("./animationData.json")
});

const NightModeToggle = ({ size, checked, onChange, speed, ...extraProps }) => {
  const ref = useRef();
  const [progress, setProgress] = useState(() => 0);
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
  useEffect(() => (!!checked && ref.current.anim.play()) || undefined, []);
  const [eventListeners] = useState(() => [
    {
      eventName: "enterFrame",
      callback: ({ currentTime, totalTime }) =>
        setProgress(currentTime / totalTime)
    }
  ]);
  return (
    <div
      onClick={() => ref.current.anim.isPaused && onChange(!checked)}
      style={{
        cursor: "pointer",
        overflow: "hidden",
        width: size,
        height: size * 0.47
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: size * -0.595,
          marginLeft: size * -0.32,
          width: size * 1.65,
          height: size * 1.65
        }}
      >
        <Lottie
          ref={ref}
          speed={speed}
          isClickToPauseDisabled={true}
          eventListeners={eventListeners}
          forceSegments
          options={{
            ...options,
            autoplay: false,
            loop: true
          }}
        />
      </div>
    </div>
  );
};

NightModeToggle.propTypes = {
  size: PropTypes.number,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  speed: PropTypes.func
};

NightModeToggle.defaultProps = {
  size: 85,
  checked: false,
  onChange: nextValue => null,
  speed: 1.3,
};

export default NightModeToggle;
