import { type } from "arktype";
import { DB_SERVICE } from "../../server/db/dbService";
import { baseOs } from "./utils/base";

export const router = {
  consoles: {
    getAll: baseOs.handler(() => {
      return DB_SERVICE.getAllConsoles();
    }),
    getById: baseOs
      .input(type({ id: "number" }))
      .handler(({ input }) => {
        // return DB_SERVICE.getConsoleById(input.id);
      }),
    getPath: baseOs.handler(({ path }) => path),
  },
};
