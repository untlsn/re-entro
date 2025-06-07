import { createRouterClient } from "@orpc/server";
import { router } from "~~/server/orpc";

export default defineNuxtPlugin(() => {
  const event = useRequestEvent();
  if (!event?.headers) throw new Error("Request event headers are not available");

  const client = createRouterClient(router, {
    context: {
      headers: event.headers,
    },
  });

  return {
    provide: {
      orpc: createRouterUtils(client, ["orpc"]),
    },
  };
});
