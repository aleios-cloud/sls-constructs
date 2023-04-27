interface Response {
  statusCode: number;
  body: string;
}

export const handler = (): Response => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World',
    }),
  };
};
