import { PrismaClient } from "@prisma/client";

let globalForPrisma = globalThis as unknown as {prisma:PrismaClient}

export const prisma = globalForPrisma.prisma || new PrismaClient();

globalForPrisma.prisma = prisma