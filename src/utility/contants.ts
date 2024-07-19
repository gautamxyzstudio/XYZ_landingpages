export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const throttle = <T extends (...args: any[]) => void>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return function (this: unknown, ...args: Parameters<T>) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const padOrTrimString = (str: string) => {
  const targetLength = 21;

  if (str.length === targetLength) {
    return str;
  } else if (str.length < targetLength) {
    return str.padEnd(targetLength, '');
  } else {
    return str.slice(0, targetLength);
  }
};

export const detectBrowser = () => {
  const userAgent = navigator.userAgent;

  if (
    userAgent.includes('Chrome') &&
    !userAgent.includes('Chromium') &&
    !userAgent.includes('Edg')
  ) {
    return 'chrome';
  } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
    return 'safari';
  } else if (userAgent.includes('Firefox')) {
    return 'firefox';
  } else if (userAgent.includes('Edg')) {
    return 'edge';
  } else {
    return 'unknown';
  }
};
