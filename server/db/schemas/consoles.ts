import * as sqlite from "drizzle-orm/sqlite-core";
import { sqliteIntBoolean } from "../utils/primitiveFields";

export const consoles = sqlite.sqliteTable("consoles", {
  id: sqlite.integer().primaryKey(),
  name: sqlite.text().notNull(),
  release_year: sqlite.int().notNull(),
  generation: sqlite.int().notNull(),
  manufacturer: sqlite.text().notNull(),
  description: sqlite.text().notNull(),
  price: sqlite.real().notNull(),
  prevPrice: sqlite.real(),
  image: sqlite.text().notNull(),
  outOfStock: sqliteIntBoolean().default(false),
});
