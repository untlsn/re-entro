import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import type { RouterClient } from "@orpc/server";
import { BatchLinkPlugin } from "@orpc/client/plugins";
import type { router } from "~~/server/orpc";

export default defineNuxtPlugin(() => {
  const link = new RPCLink({
    url: `${window.location.origin}/rpc`,
    headers: () => ({}),
    plugins: [
      new BatchLinkPlugin({
        groups: [
          {
            condition: Boolean,
            context: {},
          },
        ],
      }),
    ],
  });

  const client: RouterClient<typeof router> = createORPCClient(link);

  return {
    provide: {
      orpc: createRouterUtils(client, ["orpc"]),
    },
  };
});
