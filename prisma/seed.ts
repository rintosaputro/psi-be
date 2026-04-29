import 'dotenv/config';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from 'src/generated/prisma/client';

const adapter = new PrismaMariaDb(process.env.DATABASE_URL!);
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.user.createMany({
    data: [
      {
        id: '12qwer',
        name: 'Imron',
        email: null,
        telp: '081234567890',
      },
      {
        id: '321rewq',
        name: 'Juli',
        email: 'Sammy@mail.com',
        telp: '0987654321',
      },
    ],
  });

  await prisma.company.createMany({
    data: [
      {
        id: 'trew098',
        userId: '12qwer',
        companyCode: 'SPI',
        companyName: 'Samudera',
      },
      {
        id: 'poiuyt1234',
        userId: '321rewq',
        companyCode: 'PIC',
        companyName: 'Samudera',
      },
    ],
  });
}

main()
  .then(async () => {
    console.log('Seeding selesai');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
