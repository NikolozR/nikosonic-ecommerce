export function debounce(f: () => void, delay: number) {
  let id: string | number | NodeJS.Timeout | undefined;
  return function () {
    clearTimeout(id);
    id = setTimeout(f, delay);
  };
}
