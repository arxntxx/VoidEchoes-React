import ParallaxBg from "../assets/parallax-bg.png";

export default function ParallaxSpacer() {
  return (
    <div
      className="h-[700px] w-full bg-fixed bg-center bg-cover min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${ParallaxBg})`,
      }}
    >
      <p className="text-white text-xl tracking-widest opacity-90 animate-pulse">
        ✦ FLOATING THROUGH SPACE ✦
      </p>
    </div>
  );
}
