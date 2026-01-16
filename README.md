# Jiru Gutema's Profile Portfolio

Personal portfolio website with blog management system.

## Technologies

- Next.js 15
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- bcrypt + JWT authentication

## Getting Started

Install dependencies:
```bash
npm install
```

Set up environment variables in `.env`:
```env
DATABASE_URL="your-postgresql-url"
JWT_SECRET="your-secret-key"
```

Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Admin System for Blogs

Create an admin user:
```bash
npx tsx scripts/create-admin.ts admin@example.com password "Admin Name"
```

Access admin panel at `/admin/login`


