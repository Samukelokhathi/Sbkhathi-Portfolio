import { useRef } from "react";
import { dockApps } from "#constants/index.js";
import { useGSAP } from "@gsap/react";

const Dock = () => {
  const dockRef = useRef(null);

  useGSAP(() => {
    const icons = dock.querySelectorAll(".dock-icon");
  });

  const toggleApp = (app) => {};

  //
  return (
    <section id="dock">
      <div ref={dockRef} className></div>
    </section>
  );
};
