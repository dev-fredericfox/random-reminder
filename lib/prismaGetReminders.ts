import { PrismaClient } from "@prisma/client";

async function prismaGetReminders(user: string) {
  // Connect the client
  console.log("init main func");
  const prisma = new PrismaClient();
  try {
    await prisma.$connect();
    const allPostsFromUser = await prisma.user.findFirst({
      where: {
        email: "dev.frederic.fox@gmail.com",
      },
      include: {
        reminders: true,
      },
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

export default prismaGetReminders;
