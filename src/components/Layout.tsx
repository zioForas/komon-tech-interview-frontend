import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="w-full text-gray-900 antialiased">
        <div className="relative">
          <div className="mx-auto md:max-w-[1024px]">
            <Header />
            <Content />
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
}

export default Layout;
