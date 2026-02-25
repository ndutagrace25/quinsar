import Image from "next/image";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Soup,  Cookie,  GlassWater, Egg, FileDown } from "lucide-react";

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

  ];

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

