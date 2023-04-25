export const validateAllowedProperty = <PropertyType, ErrorType extends Error>(
  propertyName: string,
  property: PropertyType | undefined,
  allowed: PropertyType[] | PropertyType,
  error: new (message: string) => ErrorType,
): void => {
  if (property != null && Array.isArray(allowed) && !allowed.includes(property))
    throw new error(`${propertyName} restricted to ${allowed.join(', ')}`);

  if (property != null && !Array.isArray(allowed) && allowed !== property)
    throw new error(
      `${propertyName} must be set to ${
        typeof allowed === 'string' ? allowed : JSON.stringify(allowed)
      }`,
    );
};
