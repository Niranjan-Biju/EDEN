import PixelArtBackground from "../Background/PixelArtbg";

export const Faq = () => {
  return (
    <div id="faq" className="relative w-screen h-screen">
      <PixelArtBackground pixelSize={2} density={1} fadeDuration={3000} />
      <div className="absolute inset-0 flex justify-center items-center text-white text-2xl">
        Frequently Asked Questions
      </div>
    </div>
  );
};
