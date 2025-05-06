-- CreateTable
CREATE TABLE "Department" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Employee" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "position" TEXT NOT NULL,
    "away" BOOLEAN NOT NULL,
    "department" TEXT NOT NULL,
    CONSTRAINT "Employee_department_fkey" FOREIGN KEY ("department") REFERENCES "Department" ("name") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Department_email_key" ON "Department"("email");
