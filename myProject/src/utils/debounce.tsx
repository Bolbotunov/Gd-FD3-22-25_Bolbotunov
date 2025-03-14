export function debounce(func: Function, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function(...args: any[]) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
}
