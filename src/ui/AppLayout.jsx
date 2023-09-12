import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import MobileMenu from "../components/MobileMenu";
import BottonLine from "./BottonLine";
import Footer from "../components/Footer";

export default function AppLayout() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="mx-auto max-w-screen-2xl">
      <Header clicked={clicked} setClicked={setClicked} />
      {clicked && <MobileMenu />}

      <main>
        <Outlet />
      </main>

      <BottonLine />
      <Footer />
    </div>
  );
}
