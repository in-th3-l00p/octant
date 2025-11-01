export default function CenteredLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col gap-16 justify-center items-center w-screen min-h-screen">
      {children}
    </main>
  );
}