// pages/api/proxy-get-session.ts

import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { session_id } = req.query;

  if (!session_id || typeof session_id !== "string") {
    return res.status(400).json({ error: "Invalid session ID" });
  }

  try {
    const response = await fetch(
      `https://backend-axis-studio.vercel.app/api/get-session?session_id=${session_id}`,
      {
        method: req.method,
        headers: {
          Authorization: `Bearer ${process.env.BACKEND_API_KEY}`, // Remplacez avec la clé API appropriée si nécessaire
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error });
  }
};

export default handler;
