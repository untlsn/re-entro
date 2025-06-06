import { RPCHandler } from "@orpc/server/node";
import { router } from "~~/server/orpc";

const handler = new RPCHandler(router);

export default defineEventHandler(async (event) => {
  if (!event?.headers) throw new Error("Request event headers are not available");
  const { matched } = await handler.handle(
    event.node.req,
    event.node.res,
    {
      prefix: "/rpc",
      context: {
        headers: event.headers,
      },
    },
  );

  if (matched) {
    return;
  }

  setResponseStatus(event, 404, "Not Found");
  return "Not found";
});
