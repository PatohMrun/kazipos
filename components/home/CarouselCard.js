import Image from "next/image";

const CarouselCard = ({ image, title, subtitle, isFirstCard = false }) => {
  return (
    <div
      className={`
            w-[300px] md:w-[350px] lg:w-[370px] min-h-[400px] 
            rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 
            ${isFirstCard ? "bg-red_reign text-white" : "bg-white"}
        `}
    >
      <div className="relative h-[200px] md:h-[250px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 300px, (max-width: 1200px) 350px, 370px"
          className="object-cover"
          priority
        />
      </div>
      <div
        className={`
                p-4 space-y-2
                ${isFirstCard ? "bg-red_reign text-white" : ""}
            `}
      >
        <h1
          className={`
                    text-small font-helvetica
                    ${isFirstCard ? "text-white" : "text-red_republic"}
                `}
        >
          {title}
        </h1>
        <p
          className={`
                    text-small 
                    ${isFirstCard ? "text-white" : "text-baragon_brown"}
                `}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default CarouselCard;