import prisma from "@/prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      user,
      name,
      lastName,
      email,
      passwoerd,
      country,
      logo_Company
    } = req.body;

    const newUser = await prisma.company.create({
      data: {
        user,
        name,
        lastName,
        email,
        passwoerd,
        country,
        logo_Company
      },
    });

    return res.status(201).json(newUser);
  }

  if (req.method === "GET") {
    const allCompanys = await prisma.company.findMany();
  
    return res.status(201).json(allCompanys)
  }
}
