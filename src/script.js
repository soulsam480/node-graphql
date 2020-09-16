const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const newLink = await prisma.link.create({
    data: {
      description: "Full Stack tutorial for GraphQL",
      url: "dsf jxfvjdv",
    },
  });
  const allLinks = await prisma.link.findMany();
}

main()
  .catch((err) => {
    console.log(err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
