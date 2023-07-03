export function getKeyByValue<T extends Record<string, string>>(enumObj: T, value: string): keyof T | undefined {
  const keys = Object.keys(enumObj) as Array<keyof T>;

  for (const key of keys) {
    if (enumObj[key] === value) {
      return key;
    }
  }

  return undefined;
}
