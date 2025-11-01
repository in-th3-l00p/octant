export default function CenteredLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex justify-center items-center w-screen min-h-screen px-4">
      <div className="w-full max-w-4xl space-y-16">
        {children}
      </div>
    </main>
  );
}