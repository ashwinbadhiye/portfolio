import { PropsWithChildren, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import ManifestAI from "./ManifestAI";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import TechStackCloud from "./TechStackCloud";
import CurrentlyBuilding from "./CurrentlyBuilding";
import SiteParticles from "./SiteParticles";
import setSplitText from "./utils/splitText";

// Old 3D physics tech-stack section — kept in the tree, temporarily disabled in
// favor of the new TechStackCloud. Re-enable the import + usage to restore.
// const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <SiteParticles />
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <ManifestAI />
            <CurrentlyBuilding />
            <Career />
            <Work />
            {/* Old 3D physics tech-stack section — kept for now, replaced by the
                new interactive TechStackCloud below. Uncomment to restore. */}
            {/* <Suspense fallback={<div>Loading....</div>}>
              <TechStack />
            </Suspense> */}
            <TechStackCloud />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
