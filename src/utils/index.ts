export const debounce = <T, K>(
  callback: (...rest: T[]) => K,
  timeout: number
): (() => void) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: T[]) => {
    if (!timer) callback(...args);

    clearTimeout(timer);

    timer = setTimeout(() => callback(...args), timeout);
  };
};
