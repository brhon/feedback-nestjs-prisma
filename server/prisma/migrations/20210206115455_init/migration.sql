-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "todo" TEXT NOT NULL,
    "author" TEXT NOT NULL,

    PRIMARY KEY ("id")
);
