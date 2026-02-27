import { Navbar, Welcome, Dock } from "#components";
import {
  Safari,
  Terminal,
  Resume,
  Finder,
  Contact,
  Photos,
  Text,
  Image,
} from "#windows";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Contact />
      <Photos />
      <Image />
      <Text />
    </main>
  );
};

export default App;
