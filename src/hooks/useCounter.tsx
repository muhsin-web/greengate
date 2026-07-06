import React from "react";

const useCounter = ({ count }: { count: number }) => {
  const [countdown, setCountdown] = React.useState(count);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev == 0) return 0;
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [countdown, count]);

  console.log(count);

  const resetCounter = () => {
    setCountdown(count);
  };

  return {
    countdown,
    resetCounter,
  };
};

export default useCounter;
