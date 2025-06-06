import type { OperationKey } from "@orpc/tanstack-query";

type AsyncDataOptionsTuple<T> = [
  () => string,
  () => Promise<T>,
];

type AsyncDataOptionsOrpcProcedure<TOutput, TInput = undefined> = {
  key: (options: { input: TInput }) => OperationKey<"query", TInput>
  call: (payload: TInput) => Promise<TOutput>
};

type OptionalPayload<T> = undefined extends T ? [payload?: MaybeRefOrGetter<T>] : [payload: MaybeRefOrGetter<T>];

export function asyncDataOptions<TOutput, TInput>(options: AsyncDataOptionsOrpcProcedure<TOutput, TInput>, ...[payload]: OptionalPayload<TInput>): AsyncDataOptionsTuple<TOutput> {
  return [
    () => {
      const [path, { input }] = options.key({ input: toValue(payload) as TInput });

      return `ORPC.${path.join(".")} ${input != undefined ? JSON.stringify(input) : ""}`;
    },
    () => options.call(toValue(payload) as TInput),
  ];
}
