import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="cinematic-bars bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
