import { Button } from "@heroui/button";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';

const CustomNavbar = () => {

  return (
    <>
      <Navbar shouldHideOnScroll>
        <NavbarBrand>
          <Link href="/">
            <Image src="/logo.png" alt="image of logo" width={40} height={40} />
          </Link>
          <span style={{ paddingLeft: "10px" }}></span>
          <Link href="/">Adrian Germeck</Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link aria-current="page" href="#">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Party
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
