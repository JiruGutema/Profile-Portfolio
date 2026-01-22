import "dotenv/config";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

async function createAdmin() {
  const email = process.argv[2];
  const password = process.argv[3];
  const name = process.argv[4] || "Admin";

  if (!email || !password) {
    console.error("Usage: npm run create-admin <email> <password> [name]");
    process.exit(1);
  }

  console.log("Connecting to database...");
  console.log("DATABASE_URL:", process.env.DATABASE_URL ? "✓ Found" : "✗ Not found");

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const existing = await prisma.user.findUnique({ where: { email } });
    
    if (existing) {
      console.log("User already exists. Updating password...");
      await prisma.user.update({
        where: { email },
        data: { password: hashedPassword, name },
      });
      console.log("Admin user updated successfully!");
    } else {
      await prisma.user.create({
        data: { email, password: hashedPassword, name },
      });
      console.log("Admin user created successfully!");
    }

    console.log(`\nEmail: ${email}`);
    console.log(`Name: ${name}`);
    console.log("\nYou can now login at: /admin/login");
  } catch (error) {
    console.error("Failed to create admin user:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();
