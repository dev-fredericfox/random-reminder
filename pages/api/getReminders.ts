// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSession } from "next-auth/react";
import type { NextApiRequest, NextApiResponse } from "next";
import prismaGetReminders from "../../lib/prismaGetReminders";

type Data = {
  name: string;
};

const getRemindersAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (session && session.user?.email) {
    const dbRes = await prismaGetReminders(session.user?.email as string);
    res.send({
      content: `This is protected content. You can access this content because you are signed in. DB Res: ${JSON.stringify(dbRes)}`,
    });
  } else {
    res.send({
      error: "You must be sign in to view the protected content on this page.",
    });
  }
};

export default getRemindersAPI;
