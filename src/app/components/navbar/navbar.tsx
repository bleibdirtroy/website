import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";
import Link from "next/link";
import styles from "./navbar.module.css";

const CustomNavbar = () => {
  return (
    <>
      <Navbar shouldHideOnScroll className={styles.navbar}>
        <NavbarContent justify="end">
          <NavbarItem className={styles.navbarItem}>
            <Link href="/">HOME</Link>
          </NavbarItem>
          <NavbarItem className={styles.navbarItem}>
            <Link href="/">PROJECTS</Link>
          </NavbarItem>
          <NavbarItem className={styles.navbarItem}></NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
