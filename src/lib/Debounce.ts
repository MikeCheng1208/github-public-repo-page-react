
interface DebounceType {
  (fn: () => void, timer?: number): void
}

export const debounce: DebounceType = (fn = () => {}, timer = 100) => {
  let reTimes: number;
  return () => {
    if (reTimes) {
      clearTimeout(reTimes);
    }
    reTimes = window.setTimeout(() => {
      fn();
    }, timer);
  };
};
