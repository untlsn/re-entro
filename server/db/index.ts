import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schemas";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set");
}

export const db = drizzle(process.env.DATABASE_URL, {
  casing: "snake_case",
  schema,
});
