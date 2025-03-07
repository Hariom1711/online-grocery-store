// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Create roles if they don't exist
  const adminRole = await prisma.role.upsert({
    where: { name: 'admin' },
    update: {},
    create: { name: 'admin' },
  });

  const customerRole = await prisma.role.upsert({
    where: { name: 'customer' },
    update: {},
    create: { name: 'customer' },
  });

  console.log({ adminRole, customerRole });

  // Create a default admin user if specified in environment variables
  if (process.env.SEED_ADMIN_EMAIL && process.env.SEED_ADMIN_PASSWORD) {
    const hashedPassword = await hash(process.env.SEED_ADMIN_PASSWORD, 10);
    
    const admin = await prisma.user.upsert({
      where: { email: process.env.SEED_ADMIN_EMAIL },
      update: {},
      create: {
        email: process.env.SEED_ADMIN_EMAIL,
        name: 'Admin User',
        password: hashedPassword,
        roleId: adminRole.id,
      },
    });
    
    console.log({ admin });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });