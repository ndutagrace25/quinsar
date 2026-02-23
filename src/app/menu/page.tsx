import Image from "next/image";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Utensils, Coffee, Soup, Beef, Fish, LeafyGreen, Cookie, IceCream, GlassWater } from "lucide-react";

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
        { name: "Easy Goat Soup", description: "Hearty goat soup with traditional spices", price: "KES 450", image: "/images/soup1.jpg" },
        { name: "Healthy Chicken Kienyeji Soup", description: "Free-range chicken soup with fresh vegetables", price: "KES 400", image: "/images/soup2.jpg" },
        { name: "Creamy Pumpkin Soup", description: "Smooth and creamy pumpkin soup", price: "KES 350", image: "/images/soup3.jpg" },
      ],
    },
    {
      id: "steaks",
      title: "Steaks",
      icon: Beef,
      items: [
        { name: "Beef Tenderloin Steak", description: "Premium beef tenderloin, served with ugali, rice, or chapati", price: "KES 500", image: "/images/steak1.jpg" },
        { name: "Classic Flame-Grilled Beef Steak", description: "Flame-grilled beef steak, served with ugali, rice, or chapati", price: "KES 480", image: "/images/steak2.jpg" },
        { name: "Beef Tenderloin Steak", description: "Premium beef tenderloin, served with ugali, rice, or chapati", price: "KES 500", image: "/images/steak3.jpg" },
      ],
    },
    {
      id: "chicken",
      title: "Chicken",
      icon: Utensils,
      items: [
        { name: "Traditional Kienyeji Chicken", description: "Free-range chicken, served with ugali, rice, chapati, or chips", price: "KES 450", image: "/images/chicken1.jpg" },
        { name: "Chicken Stir-Fry", description: "Tender chicken stir-fry, served with ugali, rice, chapati, or chips", price: "KES 420", image: "/images/chicken2.jpg" },
      ],
    },
    {
      id: "fish",
      title: "Fish",
      icon: Fish,
      items: [
        { name: "Pan-Fried Fish Fillets", description: "Fresh fish fillets pan-fried to perfection", price: "KES 400", image: "/images/fish1.jpg" },
        { name: "Whole Wet-Fried Tilapia", description: "Whole tilapia wet-fried with traditional spices", price: "KES 450", image: "/images/fish2.jpg" },
      ],
    },
    {
      id: "vegetarian",
      title: "Vegetarian & Stews",
      icon: LeafyGreen,
      items: [
        { name: "Managu", description: "African nightshade with your choice of accompaniment", price: "KES 250", image: "/images/vegetarian1.jpg" },
        { name: "Njahi Stew", description: "Black beans stew, served with your choice of accompaniment", price: "KES 300", image: "/images/vegetarian2.jpg" },
        { name: "Githeri", description: "Mixed cereal (beans and maize), traditional Kenyan dish", price: "KES 280", image: "/images/vegetarian3.jpg" },
      ],
    },
    {
      id: "chips",
      title: "Chips",
      icon: Utensils,
      items: [
        { name: "Chips Masala", description: "Crispy chips with masala spices", price: "KES 200", image: "/images/chips1.jpg" },
        { name: "Chips Eggs Fried", description: "Chips served with fried eggs", price: "KES 250", image: "/images/chips2.jpg" },
        { name: "Chips Sausage", description: "Chips served with sausages", price: "KES 280", image: "/images/chips3.jpg" },
        { name: "Chips Sausage", description: "Chips served with sausages", price: "KES 280", image: "/images/chips4.jpg" },
      ],
    },
    {
      id: "snacks",
      title: "Snacks",
      icon: Cookie,
      items: [
        { name: "Mandazi", description: "Classic Kenyan sweet fried bread", price: "KES 50", image: "/images/snacks1.jpg" },
        { name: "Samosa", description: "Crispy pastry filled with spiced meat or vegetables", price: "KES 80", image: "/images/snacks2.jpg" },
        { name: "Sausages", description: "Grilled sausages - perfect snack", price: "KES 150", image: "/images/snacks3.jpg" },
      ],
    },
    {
      id: "desserts",
      title: "Desserts",
      icon: IceCream,
      items: [
        { name: "Ice Cream - Vanilla", description: "Creamy vanilla ice cream", price: "KES 150", image: "/images/dessert1.jpg" },
        { name: "Ice Cream - Strawberry", description: "Fresh strawberry ice cream", price: "KES 150", image: "/images/dessert2.jpg" },
        { name: "Ice Cream - Caramel", description: "Rich caramel ice cream", price: "KES 150", image: "/images/dessert3.jpg" },
        { name: "Ice Cream - Caramel", description: "Rich caramel ice cream", price: "KES 150", image: "/images/dessert4.jpg" },
      ],
    },
    {
      id: "beverages",
      title: "Beverages",
      icon: GlassWater,
      items: [
        { name: "African Tea", description: "Traditional Kenyan tea, hot and aromatic", price: "KES 80", image: "/images/beverage1.jpg" },
        { name: "Fresh Juices", description: "Selection of fresh fruit juices", price: "KES 150", image: "/images/beverage2.jpg" },
        { name: "Fresh Juices", description: "Selection of fresh fruit juices", price: "KES 150", image: "/images/beverage3.jpg" },
        { name: "Milkshakes", description: "Creamy milkshakes in various flavors", price: "KES 180", image: "/images/beverage4.jpg" },
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

