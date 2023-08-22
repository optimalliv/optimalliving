import Link from "next/link";
import React from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import { usePathname } from "next/navigation";

const Cont = styled.div`
  padding: 16px 32px;
`;

const Navbar = () => {
  const pathname = usePathname();

  return (
    <Cont colors={COLORS}>
      <div className="flex space-between align-center">
        <div className="mar-right-32">
          <h3>Optimal Living Community</h3>
        </div>
        <div className="flex align-center flex-one">
          <Link href="/" className="mar-right-32 base-link">
            <h5 className={pathname == "/" ? "link-underline" : ""}>Home</h5>
          </Link>
          <Link href="/directory" className="mar-right-32 base-link">
            <h5 className={pathname == "/directory" ? "link-underline" : ""}>
              Directory
            </h5>
          </Link>
          <Link href="/consultations" className="mar-right-32 base-link">
            <h5
              className={pathname == "/consultations" ? "link-underline" : ""}
            >
              Consultations
            </h5>
          </Link>
          <Link href="/contact" className="mar-right-32 base-link">
            <h5 className={pathname == "/contact" ? "link-underline" : ""}>
              Contact
            </h5>
          </Link>
          <Link href="/signup">
            <div className="black-btn">
              <h5>Sign up</h5>
            </div>
          </Link>
        </div>
      </div>
    </Cont>
  );
};

export default Navbar;
