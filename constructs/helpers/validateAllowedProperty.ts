export const validateAllowedProperty = <PropertyType, ErrorType extends Error>(
  property: PropertyType,
  allowed: PropertyType[] | PropertyType,
  error: new (message: string) => ErrorType,
  errorMessage: string,
): void => {
  const isPropertyAllowed = Array.isArray(allowed)
    ? allowed.includes(property)
    : allowed === property;

  if (!isPropertyAllowed) {
    throw new error(errorMessage);
  }
};
