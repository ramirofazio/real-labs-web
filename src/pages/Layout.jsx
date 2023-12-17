import React, { Suspense, lazy } from "react";
import Loader from "src/components/Loader";
const NavBar = lazy(() => import("src/components/NavBar"));
const Footer = lazy(() => import("src/components/Footer"));

const Layout = ({ children }) => {
  return (
    <Suspense fallback={<Loader />}>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </Suspense>
  );
};

export default Layout;
