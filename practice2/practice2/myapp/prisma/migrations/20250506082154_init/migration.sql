-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Department" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL DEFAULT 'none'
);
INSERT INTO "new_Department" ("email", "name") SELECT "email", "name" FROM "Department";
DROP TABLE "Department";
ALTER TABLE "new_Department" RENAME TO "Department";
CREATE UNIQUE INDEX "Department_email_key" ON "Department"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
