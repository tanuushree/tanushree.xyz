export default function Hero() {
  return (
    <section className="bg-[#F5F7F5]">
      <div
        className="
          max-w-[680px] mx-auto px-6
          pt-10 md:pt-12
          pb-10 md:pb-12
        "
      >
        {/* Small label */}
        <p className="text-[12px] md:text-[13px] text-[#6B7280] mb-5 md:mb-6">
          Developer & Builder
        </p>

        {/* Heading */}
        <h1 className="text-[28px] sm:text-[34px] md:text-[42px] leading-[1.2] font-semibold text-[#1E1E1E] mb-1 md:mb-2">
          Building things that
        </h1>
        <h1 className="text-[28px] sm:text-[34px] md:text-[42px] leading-[1.2] font-semibold text-[#6B7280] mb-5 md:mb-6">
          actually work.
        </h1>

        {/* Description */}
        <p className="text-[14px] md:text-[15px] text-[#4B5563] leading-[1.7] mb-6 md:mb-8 max-w-[520px]">
          Full stack developer based in Kolkata. I build products
          end-to-end — from the first commit to the thing people actually use.
        </p>

        {/* CTA */}
        <a
          href="#work"
          className="
            text-[13px] md:text-[14px]
            text-[#1E1E1E]
            underline underline-offset-4
            hover:text-[#4A6B50]
            transition
          "
        >
          See my work ↓
        </a>
      </div>
    </section>
  );
}