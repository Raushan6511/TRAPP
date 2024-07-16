import React, { useEffect, useRef } from "react";
import LottieView, { LottieViewProps } from "lottie-react-native";

export interface ISBLottieViewProps extends LottieViewProps {
  isAppActive: boolean;
}

const TRLottieView: React.FC<ISBLottieViewProps> = (
  props: ISBLottieViewProps
) => {
  const { isAppActive } = props;
  const lottieRef = useRef(null);

  useEffect(() => {
    if (isAppActive && lottieRef?.current) {
      lottieRef?.current.play();
    }
    return () => {
      if (lottieRef?.current) {
        lottieRef?.current.pause();
      }
    };
  }, [isAppActive]);

  return <LottieView {...props} ref={lottieRef} />;
};

export default TRLottieView;
