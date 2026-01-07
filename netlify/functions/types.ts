export type NetlifyEvent = {
  queryStringParameters?: Record<string, string>;
};

export type NetlifyHandler = (event: NetlifyEvent) => Promise<{
  statusCode: number;
  body: string;
}>;
