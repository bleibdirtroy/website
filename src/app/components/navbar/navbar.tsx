"use client";

import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

const CustomNavbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      <Navbar shouldHideOnScroll className={styles.navbar}>
        <NavbarContent justify="end">
          <NavbarItem className={styles.navbarItem}>
            <Link href={isHomePage ? "#home" : "/#home"}>HOME</Link>
          </NavbarItem>
          <NavbarItem className={styles.navbarItem}>
            <Link href={isHomePage ? "#about" : "/#about"}>ÜBER MICH</Link>
          </NavbarItem>
          <NavbarItem className={styles.navbarItem}>
            <Link href={isHomePage ? "#projects" : "/#projects"}>PROJEKTE</Link>
          </NavbarItem>
          <NavbarItem className={styles.navbarItem}>
            <Link href="/lebenslauf">LEBENSLAUF</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
