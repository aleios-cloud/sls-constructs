export const getConfigOrDefaults = <T extends object>(
  config: Partial<T> | undefined,
  defaults: T,
  warningMessages: Partial<Record<keyof T, string>>,
): T => {
  if (config == null) return defaults;

  const result = {
    ...defaults,
    ...config,
  } as T;

  const yellow = '\x1b[33m';
  const reset = '\x1b[0m';

  (Object.entries(defaults) as Array<[keyof T, T[keyof T]]>).forEach(
    ([key, value]) => {
      if (
        key in config &&
        config[key] !== value &&
        warningMessages[key] !== undefined
      ) {
        console.warn(
          `${yellow}Warning:${warningMessages[key] as string}${reset}`,
        );
      }
    },
  );

  return result;
};
