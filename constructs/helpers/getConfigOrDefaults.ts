export const getConfigOrDefaults = <T>(
  config: Partial<T> | undefined,
  defaults: T,
): T => {
  if (config == null) return defaults;

  return {
    ...defaults,
    ...config,
  } as T;
};
