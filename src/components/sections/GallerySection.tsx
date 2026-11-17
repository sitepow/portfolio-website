import { useState } from "react";
import { Image, X, ZoomIn } from "lucide-react";
import { Section } from "../Section";

interface GalleryItem {
  title: string;
  category: string;
  description: string;
  image: string;
}

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      title: "",
      category: "",
      description: "",
      image: "",
    },
  ];

  return (
    <Section id="gallery">
      <div className="text-white flex flex-col gap-8 backdrop-blur-md py-5 px-2.5 md:p-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10">
            <Image className="size-5 text-white/80" />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
            แกลเลอรีผลงานและกิจกรรม
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item)}
              className="group relative bg-[#121212] border border-white/10 rounded-md overflow-hidden cursor-pointer transition-all duration-300 hover:border-emerald-500/50"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-white/5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-2.5 rounded-full bg-emerald-500 text-black">
                    <ZoomIn className="size-5" />
                  </div>
                </div>
              </div>

              <div className="p-5 flex flex-col gap-2">
                <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#121212] border border-white/10 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 p-2 rounded-full bg-black/60 text-white hover:text-emerald-400 border border-white/10 transition-colors z-10"
            >
              <X className="size-5" />
            </button>

            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/3 max-h-[70vh] bg-black flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="lg:w-1/3 p-6 flex flex-col justify-between gap-6 bg-[#0d0d0d]">
                <div className="flex flex-col gap-3">
                  <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {selectedImage.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-full py-2.5 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-colors text-sm"
                >
                  ปิดหน้าต่างนี้
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
