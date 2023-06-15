import prisma from "@/prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const {
        user,
        name,
        lastName,
        email,
        password,
        country,
        logo_Company
      } = req.body;

      const newCompany = await prisma.company.create({
        data: {
          user,
          name,
          lastName,
          email,
          password,
          country,
          logo_Company
        },
      });

      return res.status(201).json(newCompany);
    } catch (error) {
      console.error("Error creating company:", error);
      return res.status(500).json({ error: "Error creating company" });
    }
  }

  if (req.method === "GET") {
    try {
      const allCompanies = await prisma.company.findMany();
      return res.status(200).json(allCompanies);
    } catch (error) {
      console.error("Error retrieving companies:", error);
      return res.status(500).json({ error: "Error retrieving companies" });
    }
  }
};
