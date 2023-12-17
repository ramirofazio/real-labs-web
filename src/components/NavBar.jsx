import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";
import logo_small from "assets/logo_small.png";

export default function NavBar() {
  return (
    <Navbar
      maxWidth="xl"
      shouldHideOnScroll
      className="bg-base h-24"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarBrand>
        <Image
          src={logo_small}
          className="w-20 hover:animate-spinner-ease-spin hover:cursor-none"
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="/" aria-current="page" className="text-white">
            NOSOTROS
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="https://forms.visme.co/formsPlayer/90p4rqzg-expert-blog-subscription"
            target="_blank"
            variant="ghost"
            className="font-bold"
            size="lg"
          >
            CONTACTO
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
