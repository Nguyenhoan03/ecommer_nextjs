import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/Header.scss";
import "@/styles/Footer.scss";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}