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

  (Object.entries(defaults) as Array<[keyof T, T[keyof T]]>).forEach(
    ([key, value]) => {
      if (config[key] !== value && warningMessages[key] !== undefined) {
        console.warn(warningMessages[key]);
      }
    },
  );

  return result;
};
