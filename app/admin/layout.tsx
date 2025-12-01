export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-6">Admin Dashboard</h1>
      {children}
    </div>
  );
}
