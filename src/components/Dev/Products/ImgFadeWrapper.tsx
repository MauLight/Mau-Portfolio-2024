export default function ImgFadeWrapper({
  url,
  alt = "product",
  fade = true,
}: {
  url: string;
  alt?: string;
  fade?: boolean;
}) {
  return (
    <div className="relative rounded-2xl overflow-hidden group">
      {fade && (
        <div className="absolute inset-0 w-full h-full bg-[#e9e9d5]/40 group-hover:hidden transition-all duration-300 z-10"></div>
      )}
      <img
        src={url}
        alt={alt}
        className={`object-cover h-full ${
          fade
            ? "opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-300"
            : ""
        }`}
      />
    </div>
  );
}