import * as React from "react";
import Lottie from "react-lottie-player";
import { parseUnit } from "./parseUnit";
import animationData from "./animationData.json";

export declare namespace DarkModeToggle {
  export type Props = {
    /** Size of the component.  Numbers are assumed to be pixels. Also accepts strings of the format "20px" or "1.5%". */
    readonly size?: number | string;
    /** Whether or not the toggle is currently in dark-mode (default = false) */
    readonly checked?: boolean;
    /** Use this to update the state that controls the `checked` prop (default = noop) */
    readonly onChange?: (isChecked: boolean) => void;
    /** Use this to control the speed at which the toggle animation occurs (default = 1.3) */
    readonly speed?: number;
    /** Optional className prop for the <button/> element */
    readonly className?: string;
  };
}

export const DarkModeToggle = React.memo<DarkModeToggle.Props>(
  ({
    size = 85,
    checked = false,
    onChange = () => {},
    speed = 1.3,
    className = null,
  }) => {
    const [sizeValue, sizeUnit] = parseUnit(size);
    const [isReadyToAnimate, setReadyToAnimate] = React.useState(false);

    const segmentsToPlay = checked ? [2, 50] : [51, 96];
    const segmentToGoTo = checked ? 51 : 2;

    const toggleState = () => {
      setReadyToAnimate(true);
      onChange(!checked);
    };

    return (
      <button
        onClick={toggleState}
        style={{
          cursor: "pointer",
          overflow: "hidden",
          width: `${sizeValue}${sizeUnit}`,
          height: `${sizeValue * 0.47}${sizeUnit}`,
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
            marginTop: `${sizeValue * -0.575}${sizeUnit}`,
            marginLeft: `${sizeValue * -0.32}${sizeUnit}`,
            width: `${sizeValue * 1.65}${sizeUnit}`,
            height: `${sizeValue * 1.65}${sizeUnit}`,
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
  },
  (prevProps: DarkModeToggle.Props, nextProps: DarkModeToggle.Props) =>
    prevProps.size === nextProps.size &&
    prevProps.checked === nextProps.checked &&
    prevProps.speed === nextProps.speed &&
    prevProps.className === nextProps.className
);
