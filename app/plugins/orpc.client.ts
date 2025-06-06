import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import type { RouterClient } from "@orpc/server";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";
import type { router } from "~~/server/orpc";

export default defineNuxtPlugin(() => {
  const link = new RPCLink({
    url: `${window.location.origin}/rpc`,
    headers: () => ({}),
  });

  const client: RouterClient<typeof router> = createORPCClient(link);

  return {
    provide: {
      orpc: createTanstackQueryUtils(client),
    },
  };
});
