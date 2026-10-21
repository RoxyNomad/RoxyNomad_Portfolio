import { ProjectUploadForm } from "@/modules/portfolio/ui/admin/ProjectUploadForm";

export const metadata = {
  title: "Admin Dashboard | RoxyNomad",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <div style={{ maxWidth: "800px", margin: "4rem auto", padding: "0 1rem" }}>
      <h1>RoxyNomad Control Center</h1>
      <ProjectUploadForm />
    </div>
  );
}