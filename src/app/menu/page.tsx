"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Soup, Cookie, GlassWater, Egg, FileDown, IceCreamBowl, Utensils, LeafyGreen, Search } from "lucide-react";

const menuSections = [
    {
      id: "breakfast",
      title: "Breakfast",
      icon: Coffee,
      items: [
        { name: "Quinsar's Premium Breakfast", description: "A power-packed breakfast plate featuring: Crispy Bacon, Egg, Sausage, Toast, Tea - the full morning hearty experience, only at Quinsar.", price: "KES 380", image: "/images/breakfast2.jpg" },
        { name: "Minji Breakfast Combo", description: "Soft-cooked green peas (Minji) simmered with onions, tomatoes, and mild spices, served with your choice.", price: "KES 250 - KES 380", image: "/images/minji-breakfast.jpg" },
        { name: "Gizzards Combo Breakfast", description: "Delicious tender, spiced chicken gizzards, sauteed with onions, tomatoes, and fresh herbs, served with your choice of: Chapati, Nduma, Rice or Chapati and Nduma", price: "KES 340 - KES 380", image: "/images/gizzard.jpg" },
        { name: "Njahi Combo Breakfast", description: "A hearty serving of slow-cooked black beans (Njahi) simmered with onions, tomatoes, and mild spices, served with your choice of: Nduma or Ngwaci at KES 250, Chapati or Rice at KES 320, Nduma Egg, Veges at KES 380 ", price: "KES 250 - KES 380", image: "/images/njahi.jpg" },
        { name: "Mukimo Combo Breakfast", description: "Served with 2 Boiled Eggs and Veges at KES 340, Minji and Veges at KES 340, Gizzards and Veges at KES 400, Goat Soup at KES 350", price: "KES 340 - KES 400", image: "/images/minji.jpg" },
      ],
    },
    {
      id: "soups",
      title: "Soups",
      icon: Soup,
      items: [
        { name: "Easy Goat Soup", description: "Well boiled natural African soup with full of flavor", price: "KES 150", image: "/images/goat_soup.jpg" },
        { name: "Healthy Chicken Kienyeji Soup (With 1/8 a piece)", description: "Traditionally pot prepared and inspired with no any other flavor, totally irresistible and so hearty", price: "KES 250", image: "/images/chicken_soup.png" },
        { name: "Creamy Pumpkin Soup", description: "Creamy, dreamy with sweet pumpkin flavor and great savoury undertone served with plain toast", price: "KES 250", image: "/images/pumkin_soup.jpg" },
      ],
    },
    {
      id: "eggs",
      title: "Eggs",
      icon: Egg,
      items: [
        { name: "Fried Eggs", description: "Fried eggs with onions and tomatoes", price: "KES 120", image: "/images/FriedEggs.jpg" },
        { name: "Fried Eggs Kienyeji", description: "Fried eggs with onions and tomatoes", price: "KES 120", image: "/images/egg_kienyeji.jpg" },
        { name: "Boilled Eggs", description: "Boilled eggs with onions and tomatoes", price: "KES 160", image: "/images/biled_eggs.jpg" },
        { name: "Spanish Omelette", description: "Spanish omelette with onions and tomatoes", price: "KES 160", image: "/images/omelette.jpg" },
        { name: "Scrambled Eggs", description: "Scrambled eggs with onions and tomatoes", price: "KES 160", image: "/images/scrambled.jpg" },
      ],
    },
    {
      id: "hot_beverages",
      title: "Hot Beverages",
      icon: GlassWater,
      items: [
        { name: "African Tea (Regular and Extra Large", description: "Classic Kenyan black tea brewed with milk and sugar (Optional) Smooth, comforting, and timeless", price: "KES 70 - KES 80", image: "/images/african_tea.jpg" },
        { name: "Lemon Tea", description: "Light and refreshing black tea infused with fresh lemon. Perfect for cleansing and calming", price: "KES 80", image: "/images/lemon_tea.jpg" },
        { name: "Masala Tea", description: "Bold and aromatic-brewed with spices like cardamon, ginger, cinnamon, and cloves. Fragrant, warming, and deeply satisfying.", price: "KES 100", image: "/images/masala.jpg" },
        {
          name: "Fresh Ginger Tea", description: "Made with freshly crushed ginger, gently simmered in hot water. Zesty, soothing, and great for digestion.", price: "KES 120", image: "/images/ginger_tea.jpg"
        },
        { name: "Hot Drinking Chocolate", description: "A rich, creamy blend of premium cocoa and hot milk, lightly sweetened and served steaming hot.", price: "KES 100", image: "/images/drinking_chocolate.jpg" },
        { name: "Hot Milo", description: "A nourishing malted chocolate drink made with Milo powder and served steaming hot.", price: "KES 120", image: "/images/milo.jpg" },
        { name: "Hot Cow Milk", description: "", price: "KES 100", image: "/images/cow_milk.jpg" },
        { name: "White Coffee", description: "", price: "KES 100", image: "/images/white.jpg" },
        { name: "Black Coffee", description: "", price: "KES 80", image: "/images/black.jpg" },
        { name: "Lemon Coffee", description: "", price: "KES 100", image: "/images/lemon.jpg" },
      ],
    },
    {
      id: "special_hot_drinks",
      title: "Special Hot Drinks",
      icon: GlassWater,
      items: [
        { name: "Dawa (Healing Honey Drink)", description: "A warm, soothing blend of pure honey, fresh ginger, lime juice, and hot water, hand-stirred to perfection.", price: "KES 150", image: "/images/dawa.jpg" },
        { name: "Hot Lemonade", description: "A warm, revitalizing blend of fresh lemon juice, hot water, and a touch of honey.", price: "KES 120", image: "/images/lemonade.jpg" },
        { name: "Herbal Tea", description: "A naturally caffeine-free infusion made from a calming blend of fresh herbs like mint, lemon grass, ginger.", price: "KES 120", image: "/images/herbal.jpg" },
        { name: "Hibiscus Tea", description: "A bright, tangy infusion made from dried hibiscus petals, served hot or chilled.", price: "KES 150", image: "/images/hibiscus.jpg" },
        { name: "Lemon Water", description: "A refreshing blend of fresh lemon juice, hot water, and a touch of honey.", price: "KES 40", image: "/images/lemon_water.jpg" },
      ],
    },
    {
      id: "snacks",
      title: "Snacks",
      icon: Cookie,
      items: [
        { name: "Andazi", description: "", price: "KES 50", image: "/images/andazi.jpg" },
        { name: "Samosa", description: "", price: "KES 70", image: "/images/samosa.jpg" },
        { name: "Sausages", description: "", price: "KES 80", image: "/images/sausages.jpg" },
        { name: "Sausages Roast", description: "", price: "KES 100", image: "/images/roast_sausage.jpeg" },
        { name: "Toast Plain", description: "", price: "KES 60", image: "/images/Toast.jpg" },
        { name: "Buttered Toast", description: "", price: "KES 80", image: "/images/buttered.jpg" },
        { name: "Gwaci", description: "", price: "KES 140", image: "/images/gwaci.jpg" },
        { name: "Nduma", description: "", price: "KES 140", image: "/images/nduma.jpg" },
        { name: "Nduma Roasted", description: "", price: "KES 180", image: "/images/nduma2.jpg" },
        { name: "Chapati (Quinsar's smashed pumpkin chapati", description: "", price: "KES 60", image: "/images/chapati.jpg" },
        { name: "Brown Chapati", description: "", price: "KES 70", image: "/images/brown.jpg" },
        { name: "Chapati Mayai (2)", description: "", price: "KES 200", image: "/images/chapati_mayai.jpg" },
        { name: "French Toast (Toast Mayai)", description: "", price: "KES 180", image: "/images/french_toast.jpg" },
        { name: "Chapati Rollex Mayai", description: "", price: "KES 180", image: "/images/rolex.jpg" },
      ],
    },
    {
      id: "lunch_and_dinner",
      title: "Lunch and Dinner",
      icon: IceCreamBowl,
      items: [{
        name: "Beef Tenderloin Steak",
        description: "Served with Ugali/Rice or Chapati at KES 600, Served with Chips/Mukimo at KES 700, Served with Pilau or Chips Masala at KES 720, Plain at KES 550",
        price: "KES 550 - KES 720",
        image: "/images/steak.jpg",
      },
      {
        name: "Classic Beef Steak",
        description: "A thick, juicy cut of prime beef, flame-grilled to your liking and finished with a touch of green veges. Beef steak options: Served with Ugali/Rice or Chapati — Fry KES 450, Stew KES 500. Served with Chips/Mukimo — Fry KES 550, Stew KES 600. Served with Pilau or Chips Masala — Fry KES 600, Stew KES 650. Plain — Fry KES 400, Stew KES 450.",
        price: "KES 400 - KES 650",
        image: "/images/steak2.jpg",
      },
      {
        name: "Matumbo / Strips - Wet Fry",
        description: "Tender beef tripe, slow-boiled and then pan-fried with onions, fresh coriander, and a touch of spicy seasoning. (Ask for dry-fry or gravy-style as your option.) Matumbo wet fry: Served with Ugali/Rice or Chapati KES 380. Served with Chips/Mukimo KES 480. Served with Pilau or Chips Masala KES 530.",
        price: "KES 380 - KES 530",
        image: "/images/matumbo_wet.jpg",
      },
      {
        name: "Matumbo Dry Fry",
        description: "Matumbo dry fry options: Served with Ugali/Rice or Chapati KES 420. Served with Chips/Mukimo KES 520. Served with Pilau or Chips Masala KES 580. Plain KES 320.",
        price: "KES 320 - KES 580",
        image: "/images/matumbo.png",
      },
      {
        name: "Traditional Kienyeji Chicken",
        description: "Tender kienyeji chicken, naturally raised and simmered in traditional herbs. A taste of real Kenyan heritage on your plate. Chicken wet/dry/boiled: Served with Ugali/Rice or Chapati KES 550. Served with Chips/Mukimo KES 600. Served with Pilau or Chips Masala KES 650. Plain KES 500.",
        price: "KES 500 - KES 650",
        image: "/images/kienyeji.jpg",
      },
      {
        name: "Chicken Stir Fry Boneless",
        description: "Tender strips of boneless chicken, wok-tossed with crisp bell peppers, onions and carrots in a light ginger-garlic soy glaze. Chicken stir fry: Served with Ugali/Rice or Chapati KES 600. Served with Chips/Mukimo KES 650. Served with Pilau or Chips Masala KES 700. Plain KES 520.",
        price: "KES 520 - KES 700",
        image: "/images/boneless_chicken.jpg",
      },
      {
        name: "Whole Tilapia - Fresh Wet Fry",
        description: "Locally sourced fish, prepared on order. Whole fresh tilapia, cleaned and pan-fried in a flavorful blend of onions, tomatoes, garlic and coriander, then simmered in a light, aromatic broth. Ask for Tilapia Fry—crispy on the outside, tender inside, a true Kenyan classic done the Quinsar way. Tilapia whole fish wet/fry: Served with Ugali/Rice or Chapati KES 600. Served with Chips/Mukimo KES 700. Served with Pilau or Chips Masala KES 750. Plain KES 550.",
        price: "KES 550 - KES 750",
        image: "/images/tilapia.jpg",
      },
      {
        name: "Pan Fried Fish Fillet",
        description: "Fresh fish fillet, lightly seasoned and pan-fried to a golden crisp, then finished with a squeeze of lemon and fresh herbs. Pan fried fish fillet wet/dry: Served with Ugali/Rice or Chapati KES 600. Served with Chips KES 650. Served with Pilau or Chips Masala KES 750. Plain KES 520.",
        price: "KES 520 - KES 750",
        image: "/images/food2.jpg",
      },
      ],
    },
    {
      id: "chips",
      title: "Chips",
      icon: Utensils,
      items: [
        { name: "Chips Salad", description: "", price: "KES 200", image: "/images/salad.jpg" },
        { name: "Chips Masala", description: "", price: "KES 250", image: "/images/chips_masala.jpg" },
        { name: "Chips Eggs Fried", description: "", price: "KES 320", image: "/images/chips_egg.jpg" },
        { name: "Chips Samosa", description: "", price: "KES 270", image: "/images/chips_samosa.avif" },
        { name: "Chips, Sausage, Egg", description: "", price: "KES 320", image: "/images/chips_sausage.jpg" },
        { name: "Chips Sausage", description: "", price: "KES 270", image: "/images/chipsS.jpg" },
        { name: "Mini Chips Samosa", description: "", price: "KES 250", image: "/images/chips_samosa.avif" },
        { name: "Mini Chips Sausage", description: "", price: "KES 250", image: "/images/chipsS.jpg" },
        { name: "Chips & Chicken (Kienyeji)", description: "", price: "KES 580", image: "/images/chips_chicken.jpg" },
      ],
    },
    {
      id: "healthy_kick",
      title: "Healthy Kick",
      icon: LeafyGreen,
      items: [
        {
          name: "Indigenous Managu (African Nightshade)",
          description: "Freshly harvested indigenous greens, gently sauteed with onions, tomatoes, and a hint of garlic. Managu: Served with Ugali/Rice/Chapati/Ngwaci KES 300. Served with Nduma/Mukimo KES 300. Plain KES 120.",
          price: "KES 120 - KES 300",
          image: "/images/managu.png",
        },
        {
          name: "Njahi (Black Beans Stew)",
          description: "Soft-cooked black beans simmered in a delicious blend of onions, tomatoes, garlic and mild spices, with a touch of coriander for extra flavour. Njahi served with Veges KES 350. Served with Rice/Chapati KES 380. Served with Nduma/Ngwaci/Mukimo KES 380. Plain KES 280.",
          price: "KES 280 - KES 380",
          image: "/images/njahi.jpg",
        },
        {
          name: "Minji (Green Peas Stew)",
          description: "Tender green peas simmered in a savory sauce of onions, tomatoes, garlic, and fresh herbs. Minji: Served with Rice/Chapati/Ugali KES 350. Served with Nduma/Ngwaci/Mukimo KES 380. Plain KES 280.",
          price: "KES 280 - KES 380",
          image: "/images/minji_new.png",
        },
        {
          name: "Githeri with Mixed Cereals",
          description: "A wholesome, Kenyan classic made from a hearty mix of boiled maize, beans, and peas, sauteed with onions, tomatoes, carrots, and fresh herbs. Githeri Veges KES 300. Githeri served with Rice KES 400. Githeri served with Chapati KES 350. Githeri Managu KES 400. Githeri Beef KES 550.",
          price: "KES 300 - KES 550",
          image: "/images/githeri.png",
        },
      ],
    },
    {
      id: "desserts",
      title: "Desserts",
      icon: IceCreamBowl,
      items: [
        {
          name: "Ice Cream Delights",
          description: "A cool and creamy treat available in a variety of classic and fruity flavors. Ice cream scoop vanilla KES 200. Ice cream scoop strawberry KES 200. Ice cream caramel KES 200.",
          price: "KES 200",
          image: "/images/icecream.png",
        },
        {
          name: "Shake Up Your Day",
          description: "Caramel milkshake KES 390. Vanilla milkshake KES 390. Strawberry milkshake KES 390.",
          price: "KES 390",
          image: "/images/shake.png",
        },
        {
          name: "Fresh Crafted Juices",
          description: "Made fresh from 100% real fruits, no added sugar, no preservatives. Enjoy a naturally refreshing glass of health and flavor in every sip. Passion juice KES 200. Mango juice KES 200. Cocktail juice KES 200.",
          price: "KES 200",
          image: "/images/juice.png",
        },
      ],
    },

  ];

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSections = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return menuSections;
    return menuSections
      .map((section) => ({
        ...section,
        items: section.items.filter(
          (item) =>
            item.name.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q)
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [searchQuery]);

  return (
    <div className="container px-4 py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Menu</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Discover our carefully crafted selection of dishes, made with the finest ingredients
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="/images/Breakfast%20Menu.pdf"
            download="Quinsar-Breakfast-Menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:text-base sm:px-6"
          >
            <FileDown className="h-5 w-5 shrink-0" aria-hidden />
            Download Breakfast Menu (PDF)
          </a>
          <a
            href="/images/Menu.pdf"
            download="Quinsar-Main-Dishes-Menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:text-base sm:px-6"
          >
            <FileDown className="h-5 w-5 shrink-0" aria-hidden />
            Download Main Dishes Menu (PDF)
          </a>
        </div>

        <div className="mx-auto mt-8 max-w-md">
          <label htmlFor="menu-search" className="sr-only">
            Search menu
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
            <input
              id="menu-search"
              type="search"
              placeholder="Search dishes (e.g. matu, chicken, chips)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-input bg-background py-2.5 pl-10 pr-4 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            />
          </div>
        </div>
      </div>

      <div className="space-y-16">
        {filteredSections.length === 0 ? (
          <p className="py-12 text-center text-muted-foreground">
            No dishes match &quot;{searchQuery}&quot;. Try a different search.
          </p>
        ) : (
        filteredSections.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.id} id={section.id} className="scroll-mt-20">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">{section.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, index) => (
                  <Card key={index} className="overflow-hidden transition-shadow hover:shadow-lg">
                    <div className="relative h-48 w-full">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl">{item.name}</CardTitle>
                        <span className="text-sm md:text-lg font-bold text-primary">{item.price}</span>
                      </div>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          );
        })
        )}
      </div>

      {/* Daily Offers Section */}
      <div className="mt-16 rounded-lg bg-primary/5 p-8 text-center">
        <h2 className="mb-4 text-3xl font-bold">Daily Offers</h2>
        <p className="mb-6 text-lg text-muted-foreground">
          Check back daily for our special promotions and discounts
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Monday Special</CardTitle>
              <CardDescription>20% off all pasta dishes</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Weekend Brunch</CardTitle>
              <CardDescription>Free coffee with any breakfast order</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Happy Hour</CardTitle>
              <CardDescription>50% off drinks from 4-6 PM</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Button asChild size="lg">
          <Link href="/contact">Make a Reservation</Link>
        </Button>
      </div>
    </div>
  );
}

