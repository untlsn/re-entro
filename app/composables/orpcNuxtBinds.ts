import type { ClientContext, NestedClient } from "@orpc/client";

type AsyncDataOptionsTuple<T> = [
  () => string,
  () => T,
];

type OptionalPayload<T> = undefined extends T ? [payload?: MaybeRefOrGetter<T>] : [payload: MaybeRefOrGetter<T>];

type RouterUtilsProcedure<T> = T extends (payload: infer P) => infer R ? {
  options(...[payload]: OptionalPayload<P>): AsyncDataOptionsTuple<R>
} : unknown;

type RouterUtils<T> = {
  [K in keyof T]: RouterUtils<T[K]>
} & { key: string[] } & RouterUtilsProcedure<T>;

function saveStringify(value: unknown) {
  return value == undefined ? "" : JSON.stringify(value);
}

export function createRouterUtils<T extends NestedClient<ClientContext>>(client: T, path: string[]): RouterUtils<T> {
  return new Proxy(client, {
    get(target: any, key) {
      if (key == "key") return path;
      if (key == "options") return (payload: any) => [
        () => {
          return `${path.join(".")} ${saveStringify(toValue(payload))}`;
        },
        () => target(toValue(payload)),
      ];
      if (typeof key !== "string") return;
      return createRouterUtils(target[key], [...path, key]);
    },
  }) as any;
}
