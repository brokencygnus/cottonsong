import "./globals.css";

export const metadata = {
  title: "Cottonsong Indonesia",
  description: "Kenakan estetika cottagecore dengan bahan dan proses produksi yang baik untuk bumi.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
