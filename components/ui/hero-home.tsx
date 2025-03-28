import HeroImg from "@/public/images/placeholder_image2.png";
import HeroImage from "@/components/hero-image";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-gradient bg-gradient-text bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Web & Cloud Services for Business
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-orange-300/65"
                data-aos="zoom-out-up"
              >
                Some text here placeholder
              </p>

            </div>
          </div>

          <HeroImage
            thumb={HeroImg}
            thumbHeight={1200}
            thumbWidth={1900}
            thumbAlt="Modal video thumbnail"
          />
        </div>
      </div>
    </section>
  );
}
