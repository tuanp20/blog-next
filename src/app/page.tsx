import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/layout/MarqueeStrip";
import LatestPosts from "@/components/sections/LatestPosts";
import DeepReads from "@/components/sections/DeepReads";
import Topics from "@/components/sections/Topics";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="divider">
        <hr />
      </div>
      <MarqueeStrip />
      <LatestPosts />
      <div className="divider">
        <hr />
      </div>
      <DeepReads />
      <Topics />
      <Newsletter />
    </>
  );
}
