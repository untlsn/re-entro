import { db } from ".";

export const DB_SERVICE = {
  getAllConsoles() {
    return db.query.consoles.findMany();
  },
  getConsoleById(id: number) {
    return db.query.consoles.findFirst({
      where: (consoles, s) => s.eq(consoles.id, id),
    });
  },
} as const;
