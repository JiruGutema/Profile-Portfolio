import { redirect } from "next/navigation";
import { getAdminUser } from "@/lib/auth";
import AdminDashboard from "@/components/admin/AdminDashboard";

export default async function DashboardPage() {
  const user = await getAdminUser();

  if (!user) {
    redirect("/admin/login");
  }

  return <AdminDashboard user={user} />;
}
