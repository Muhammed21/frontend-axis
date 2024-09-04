import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { numDossier } = req.query;
  const response = await fetch(
    `https://backend-axis-studio.vercel.app/api/dossier/numero?numDossier=${numDossier}`,
    {
      method: req.method,
      headers: {
        Authorization: "Baerer eyJ0eXAiOiAiVENMWi0Yzg3LThkZDUtM2ZjNGEyZDhhMmFj",
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );

  const data = await response.json();

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  res.status(200).json(data);
};

export default handler;
