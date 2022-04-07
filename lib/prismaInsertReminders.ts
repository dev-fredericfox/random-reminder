import { PrismaClient } from "@prisma/client";

async function prismaInsertReminders(user: string) {
  // Connect the client
  console.log("init main func");
  const prisma = new PrismaClient();
  try {
    await prisma.$connect();
    const allPostsFromUser = await prisma.reminders.create({
      data: {
        reminder: "test3",
        user: { connect: { email: user } },
      }
    });

    console.log(allPostsFromUser);
    return allPostsFromUser;
  } catch (error) {
    throw error;
  } finally {
    console.log("D/C DB");
    await prisma.$disconnect();
  }
}

export default prismaInsertReminders;
