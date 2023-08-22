"use client";
import "./styles/global.scss";
import StyledComponentsRegistry from "@/lib/registry";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Optimal Living Community",
  description:
    "Find your community and improve your health with the knowledge of the rwa primal diet. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader />
        <StyledComponentsRegistry>
          <Navbar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
