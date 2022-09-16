import { useEffect, useState } from "react";

function IOSDevice() {
  const userAgent = window.navigator.userAgent;
  return /iP(hone | od | ad)/.test(userAgent);
}

export default function useDevices() {
  const [isIOS, setIsIOS] = useState(false);
  useEffect(() => {
    setIsIOS(IOSDevice());
  }, []);

  return { isIOS };
}
