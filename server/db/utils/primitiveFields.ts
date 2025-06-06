import * as sqlite from "drizzle-orm/sqlite-core";

export const sqliteIntBoolean = sqlite.customType<{
  data: boolean;
  driverData: number;
}>({
  dataType() {
    return "integer";
  },
  toDriver(value) {
    return value ? 1 : 0;
  },
  fromDriver(value) {
    return value === 1;
  },
});
