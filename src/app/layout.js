import { inter } from "@/font";
import "./globals.css";
import LayoutWrapper from "@/layout/Wrapper";
export const metadata = {
  title: "Aramide Abe",
  description: "Aramide Abe's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
