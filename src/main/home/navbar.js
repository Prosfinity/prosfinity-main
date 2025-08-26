import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import NavbarNew from "./navbar-new";

const NavbarHome = () => {
  return (
    <div>
      <NavbarNew />
      <Navbar fluid rounded className="rounded-none md:hidden">
        <NavbarBrand as={Link} href="/">
          <img
            src="/images/logo-light.png"
            className="h-16"
            alt="Prosfinity Logo"
          />
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink as={Link} href="/product/AIShieldNet">
            Zero Day Endpoint Protection
          </NavbarLink>
          <NavbarLink as={Link} href="/service/sraa">
            Security Risk Assessment & Audit
          </NavbarLink>
          <NavbarLink as={Link} href="/zeroday-ransomware-terminated">
            Zeroday Ransomware Terminated
          </NavbarLink>
          <NavbarLink as={Link} href="/partner">
            Partner
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default NavbarHome;
