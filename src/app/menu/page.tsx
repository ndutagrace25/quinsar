import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Utensils, Coffee, Wine, Star, Soup, Beef, Fish, LeafyGreen, Cookie, IceCream, GlassWater } from "lucide-react";

export const metadata = {
  title: "Menu - Quinsar Restaurant",
  description: "Explore our delicious menu featuring breakfast, main courses, drinks, and chef's specials.",
};

export default function MenuPage() {
  const menuSections = [
    {
      id: "breakfast",
      title: "Breakfast",
      icon: Coffee,
      items: [
        { name: "Premium Breakfast", description: "Bacon, eggs, and sausage served with your choice of accompaniment", price: "KES 450" },
        { name: "Gizzards Combo Breakfast", description: "Gizzards with eggs, served with your choice of accompaniment", price: "KES 400" },
        { name: "Minji & Njahi Combo", description: "Green peas and black beans combo breakfast", price: "KES 350" },
        { name: "Special Mini Breakfast", description: "Tea, sausages, and eggs - perfect light breakfast", price: "KES 300" },
      ],
    },
    {
      id: "soups",
      title: "Soups",
      icon: Soup,
      items: [
        { name: "Easy Goat Soup", description: "Hearty goat soup with traditional spices", price: "KES 450" },
        { name: "Healthy Chicken Kienyeji Soup", description: "Free-range chicken soup with fresh vegetables", price: "KES 400" },
        { name: "Creamy Pumpkin Soup", description: "Smooth and creamy pumpkin soup", price: "KES 350" },
      ],
    },
    {
      id: "steaks",
      title: "Steaks",
      icon: Beef,
      items: [
        { name: "Beef Tenderloin Steak", description: "Premium beef tenderloin, served with ugali, rice, or chapati", price: "KES 500" },
        { name: "Classic Flame-Grilled Beef Steak", description: "Flame-grilled beef steak, served with ugali, rice, or chapati", price: "KES 480" },
      ],
    },
    {
      id: "chicken",
      title: "Chicken",
      icon: Utensils,
      items: [
        { name: "Traditional Kienyeji Chicken", description: "Free-range chicken, served with ugali, rice, chapati, or chips", price: "KES 450" },
        { name: "Chicken Stir-Fry", description: "Tender chicken stir-fry, served with ugali, rice, chapati, or chips", price: "KES 420" },
      ],
    },
    {
      id: "fish",
      title: "Fish",
      icon: Fish,
      items: [
        { name: "Pan-Fried Fish Fillets", description: "Fresh fish fillets pan-fried to perfection", price: "KES 400" },
        { name: "Whole Wet-Fried Tilapia", description: "Whole tilapia wet-fried with traditional spices", price: "KES 450" },
      ],
    },
    {
      id: "vegetarian",
      title: "Vegetarian & Stews",
      icon: LeafyGreen,
      items: [
        { name: "Managu", description: "African nightshade with your choice of accompaniment", price: "KES 250" },
        { name: "Njahi Stew", description: "Black beans stew, served with your choice of accompaniment", price: "KES 300" },
        { name: "Githeri", description: "Mixed cereal (beans and maize), traditional Kenyan dish", price: "KES 280" },
      ],
    },
    {
      id: "chips",
      title: "Chips",
      icon: Utensils,
      items: [
        { name: "Chips Masala", description: "Crispy chips with masala spices", price: "KES 200" },
        { name: "Chips Eggs Fried", description: "Chips served with fried eggs", price: "KES 250" },
        { name: "Chips Sausage", description: "Chips served with sausages", price: "KES 280" },
      ],
    },
    {
      id: "snacks",
      title: "Snacks",
      icon: Cookie,
      items: [
        { name: "Mandazi", description: "Classic Kenyan sweet fried bread", price: "KES 50" },
        { name: "Samosa", description: "Crispy pastry filled with spiced meat or vegetables", price: "KES 80" },
        { name: "Sausages", description: "Grilled sausages - perfect snack", price: "KES 150" },
      ],
    },
    {
      id: "desserts",
      title: "Desserts",
      icon: IceCream,
      items: [
        { name: "Ice Cream - Vanilla", description: "Creamy vanilla ice cream", price: "KES 150" },
        { name: "Ice Cream - Strawberry", description: "Fresh strawberry ice cream", price: "KES 150" },
        { name: "Ice Cream - Caramel", description: "Rich caramel ice cream", price: "KES 150" },
      ],
    },
    {
      id: "beverages",
      title: "Beverages",
      icon: GlassWater,
      items: [
        { name: "African Tea", description: "Traditional Kenyan tea, hot and aromatic", price: "KES 80" },
        { name: "Fresh Juices", description: "Selection of fresh fruit juices", price: "KES 150" },
        { name: "Milkshakes", description: "Creamy milkshakes in various flavors", price: "KES 180" },
      ],
    },
  ];

  return (
    <div className="container px-4 py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Menu</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Discover our carefully crafted selection of dishes, made with the finest ingredients
        </p>
      </div>

      <div className="space-y-16">
        {menuSections.map((section) => {
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
                        src={`/images/pexels-${section.id === "breakfast" ? "helenalopes-693269" : section.id === "beverages" ? "valeriya-1484516" : section.id === "soups" ? "fotios-photos-776538" : section.id === "fish" ? "chanwalrus-958545" : "pixabay-262978"}.jpg`}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl">{item.name}</CardTitle>
                        <span className="text-lg font-bold text-primary">{item.price}</span>
                      </div>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
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

