import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "Joger | All 4 Padel",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
