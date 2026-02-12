import "dotenv/config";
import { PrismaLibSql} from "@prisma/adapter-libsql";
import { PrismaClient } from "../generated/prisma/client.js";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaLibSql({ url: connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };