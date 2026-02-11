import "./globals.css";

export const metadata = {
  title: "Our Love Story",
  description: "For Ramya ❤️"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
