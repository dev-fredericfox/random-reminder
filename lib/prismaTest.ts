import { PrismaClient } from "@prisma/client";

async function main() {
  // Connect the client
  console.log("init main func");
  const prisma = new PrismaClient();
  try {
    await prisma.$connect();
    const allUsers = await prisma.user.findMany();
    console.log(allUsers);
  } catch (error) {
    throw error;
  } finally {
    console.log("D/C DB");
    await prisma.$disconnect();
  }
}

export default main;
