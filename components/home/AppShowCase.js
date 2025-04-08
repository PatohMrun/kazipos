import Image from "next/image";
const AppShowcase = () => {
  return (
    <div className="bg-red_shimmer flex flex-col md:flex-row items-center justify-around p-8 md:p-16 2xl:min-h-screen gap-4">
      {/* Left side - Phone mockup */}
      <div className="flex justify-center">
        <Image 
          src="/assets/iphone.png"
          alt = "iPhone Mockup"
          width={300}
          height={600}
          className="object-cover h-[50%]"
        />
      </div>

      {/* Right side - Text content */}
      <div className="md:w-1/2 flex flex-col gap-6">
        <div className="flex items-center">
          <div className="h-px bg-red-900 flex-grow"></div>
          <div className="w-2 h-2 bg-red-900 rounded-full ml-2"></div>
        </div>

        <h2 className="text-medium md:text-large 2xl:text-[4rem] leading-10 md:leading-14 2xl:leading-18 font-normal text-red_republic font-almarena-semibold">
          We love to make things easier for everyone.
        </h2>

        <p className="text-tiny md:text-small 2xl:text-[1.75rem] text-baragon_brown font-helvetica-regular py-4 sm:py-1">
          No hidden fees, confusing terms, or complex processes. Kazipos makes
          business management simple, intuitive, and effortless. Our goal is to
          help you track sales, manage inventory, and process payments
          seamlessly—all in just a few taps.
        </p>
      </div>
    </div>
  );
};

export default AppShowcase;
