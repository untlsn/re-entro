import { os } from "@orpc/server";

export const baseOs = os.$context<{ headers: Headers }>();
