export default function ClientsSwiper() {
  const logos = [
    "/assets/clients/1.webp",
    "/assets/clients/2.webp",
    "/assets/clients/3.webp",
    "/assets/clients/5.webp",
    "/assets/clients/6.webp",
    "/assets/clients/7.png",
    "/assets/clients/9.webp",
    "/assets/clients/10.webp",
  ];

  return (
    <div className="w-full overflow-hidden py-10 mt-4">
      
      {/* Inline animation style */}
      <style>{`
        .scroll-track {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="scroll-track gap-28">
        
        {/* First set */}
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="client logo"
            className=" h-8 sm:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition"
          />
        ))}
        {/* Duplicate for infinite loop */}
        {logos.map((logo, i) => (
          <img
            key={`copy-${i}`}
            src={logo}
            alt="client logo"
            className="h-8 sm:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition"
          />
        ))}

      </div>
    </div>
  );
}