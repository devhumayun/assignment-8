import { dbConnect } from "@/services/database";
import { Inter } from "next/font/google";
import Header from "./components/header/Header";
import "./globals.css";
import { AuthProvider } from "./provider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LWS - Recipe App",
  description: "Chooise your recipe from your favourite cooker",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
