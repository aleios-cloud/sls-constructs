export const validateAllowedProperties = <
  ConfigType extends object,
  AllowedConfigType extends object,
  ErrorType extends Error,
>(
  config: ConfigType,
  allowedConfig: AllowedConfigType,
  error: new (message: string) => ErrorType,
  errorMessages: { [key: string]: string },
): void => {
  Object.entries(config).forEach(([key, value]) => {
    const allowedValues = (allowedConfig as Record<string, unknown>)[key];

    if (allowedValues !== undefined) {
      const isValueAllowed = Array.isArray(allowedValues)
        ? (allowedValues as unknown[]).includes(value)
        : allowedValues === value;

      if (!isValueAllowed) {
        throw new error(errorMessages[key] as string);
      }
    }
  });
};
