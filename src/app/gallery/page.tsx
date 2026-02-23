"use client";

import Image from "next/image";
import { useState } from "react";

// Gallery images organized by category
const galleryImages = [
  {
    category: "Interior",
    images: [
      { src: "/images/interior1.jpg", alt: "Restaurant Interior" },
      { src: "/images/interior2.jpg", alt: "Dining Area" },
      { src: "/images/interior2.jpg", alt: "Restaurant Ambiance" },
    ],
  },
  {
    category: "Food",
    images: [
      { src: "/images/andazi.jpg", alt: "Delicious Food" },
      { src: "/images/samosa.jpg", alt: "Signature Dish" },
      { src: "/images/chapati.jpg", alt: "Gourmet Meal" },
      { src: "/images/minji-breakfast.jpg", alt: "Fresh Ingredients" },
      { src: "/images/food.jpg", alt: "Fresh Ingredients" },
      { src: "/images/gizzard.jpg", alt: "Fresh Ingredients" },
      { src: "/images/food1.jpg", alt: "Fresh Ingredients" },
      { src: "/images/food2.jpg", alt: "Fresh Ingredients" },
      { src: "/images/food3.jpg", alt: "Fresh Ingredients" },
      { src: "/images/food4.jpg", alt: "Fresh Ingredients" },
      { src: "/images/food5.jpg", alt: "Fresh Ingredients" },
      { src: "/images/food6.jpg", alt: "Fresh Ingredients" },
      { src: "/images/steak.jpg", alt: "Fresh Ingredients" },
      { src: "/images/food7.jpg", alt: "Fresh Ingredients" },
      { src: "/images/tilapia.jpg", alt: "Fresh Ingredients" },
      { src: "/images/food8.jpg", alt: "Fresh Ingredients" },
      { src: "/images/food9.jpg", alt: "Fresh Ingredients" },
    ],
  },

  {
    category: "Exterior",
    images: [
      { src: "/images/exterior1.jpg", alt: "Restaurant Exterior" },
      { src: "/images/exterior2.jpg", alt: "Building Front" },
      { src: "/images/exterior3.jpg", alt: "Building Front" },
    ],
  },
  {
    category: "Ambiance",
    images: [
      { src: "/images/ambiance1.jpg", alt: "Restaurant Atmosphere" },
      { src: "/images/interior1.jpg", alt: "Evening Ambiance" },
      { src: "/images/ambiance2.jpg", alt: "Dining Experience" },
      { src: "/images/ambiance3.jpg", alt: "Cozy Setting" },
      { src: "/images/ambiance4.jpg", alt: "Cozy Setting" },
    ],
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", ...galleryImages.map((g) => g.category)];

  const allImages = galleryImages.flatMap((gallery) =>
    gallery.images.map((img) => ({ ...img, category: gallery.category }))
  );

  const filteredImages =
    selectedCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="container px-4 py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Gallery</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Take a visual journey through our restaurant, food, and dining experience
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-black/60 to-transparent p-4 text-white transition-transform group-hover:translate-y-0">
              <p className="font-semibold">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

