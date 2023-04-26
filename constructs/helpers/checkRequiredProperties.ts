export const checkRequiredProperties = <
  TProps extends object | undefined,
  ErrorType extends Error,
>(
  props: TProps,
  requiredProps: Partial<TProps>,
  error: new (message: string) => ErrorType,
  errorMessages: { [key: string]: string },
): void => {
  if (props !== undefined) {
    Object.keys(requiredProps).forEach(key => {
      if (!(key in props)) {
        throw new error(
          `Missing required property: ${key}. ${errorMessages[key] as string}`,
        );
      }
    });
  }
};
