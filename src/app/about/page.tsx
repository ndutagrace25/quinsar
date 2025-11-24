import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Award, Users, Utensils } from "lucide-react";

export const metadata = {
  title: "About Us - Quinsar Restaurant",
  description: "Learn about Quinsar Restaurant's story, values, and what makes us special.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Food",
      description: "We are passionate about creating exceptional culinary experiences with authentic flavors.",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We use only the finest ingredients and maintain the highest standards in every dish.",
    },
    {
      icon: Users,
      title: "Family Atmosphere",
      description: "We believe in creating a warm, welcoming environment where everyone feels at home.",
    },
    {
      icon: Utensils,
      title: "Signature Dishes",
      description: "Our chef's special recipes have been perfected over years of dedication and love.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/pexels-pixabay-262978.jpg"
          alt="Quinsar Restaurant"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center text-white">
          <div>
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">Our Story</h1>
            <p className="mx-auto max-w-2xl text-lg md:text-xl">
              Discover the passion and dedication behind Quinsar Restaurant
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold">The Origin of Quinsar Restaurant</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Quinsar Restaurant was founded with a simple yet powerful vision: to bring
                  authentic, high-quality cuisine to our community. What started as a small
                  family dream has grown into a beloved dining destination known for its
                  exceptional food and warm hospitality.
                </p>
                <p>
                  Our journey began when our founder, inspired by generations of family recipes
                  and a passion for culinary excellence, decided to create a space where food
                  lovers could gather, celebrate, and create lasting memories.
                </p>
                <p>
                  Today, Quinsar Restaurant stands as a testament to our commitment to quality,
                  authenticity, and the belief that great food brings people together.
                </p>
              </div>
            </div>
            <div className="relative h-96 w-full overflow-hidden rounded-lg">
              <Image
                src="/images/pexels-helenalopes-693269.jpg"
                alt="Restaurant Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Values</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                    <CardDescription>{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-16">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">What Makes Us Special</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Signature Dishes</CardTitle>
                <CardDescription>
                  Our chef's special recipes, perfected over years, feature unique flavors
                  and presentation that you won't find anywhere else.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Family Atmosphere</CardTitle>
                <CardDescription>
                  We create a warm, welcoming environment where families and friends can
                  gather and enjoy quality time together over great food.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Hygiene Standards</CardTitle>
                <CardDescription>
                  We maintain the highest standards of cleanliness and food safety,
                  ensuring every meal is prepared in a pristine environment.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Customer Service</CardTitle>
                <CardDescription>
                  Our dedicated team is committed to providing exceptional service,
                  making every visit memorable and enjoyable.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pocket-Friendly Prices</CardTitle>
                <CardDescription>
                  Price range: KES 1–500, making it pocket-friendly. We believe great food
                  should be accessible to everyone without compromising on quality.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold">Experience Quinsar</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Watch our promotional video to see what makes Quinsar Restaurant special
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <video
                controls
                className="h-full w-full object-cover"
                poster="/images/pexels-pixabay-262978.jpg"
              >
                <source src="/images/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Experience Quinsar?</h2>
          <p className="mb-8 text-lg opacity-90">
            Join us for an unforgettable dining experience
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/menu">View Menu</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

