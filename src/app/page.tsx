import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Utensils, MapPin, Phone, Wallet } from "lucide-react";
import GoogleReviews from "@/components/GoogleReviews";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Video */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/images/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">
            Welcome to Quinsar Restaurant
          </h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl">
            Experience exceptional dining with authentic flavors and warm
            hospitality
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="text-lg">
              <Link href="/menu">
                View Menu <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg bg-white/10 text-white border-white hover:bg-white/20"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Utensils className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Authentic Cuisine</h3>
              <p className="text-muted-foreground">
                Delicious dishes prepared with fresh ingredients and traditional
                recipes
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Prime Location</h3>
              <p className="text-muted-foreground">
                Conveniently located in the heart of the Nairobi CBD with easy access
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Easy Reservations</h3>
              <p className="text-muted-foreground">
                Book your table online or call us directly for a memorable
                dining experience
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Wallet className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Pocket-Friendly</h3>
              <p className="text-muted-foreground">
                Price range: KES 1–500, making it pocket-friendly without
                compromising on quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Images Section */}
      <section className="py-16">
        <div className="container px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Our Signature Dishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/images/pexels-pixabay-262978.jpg"
                alt="Signature Dish 1"
                width={600}
                height={400}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Chef&apos;s Special</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/images/pexels-helenalopes-693269.jpg"
                alt="Signature Dish 2"
                width={600}
                height={400}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Fresh Seafood</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/images/pexels-helenalopes-696218.jpg"
                alt="Signature Dish 3"
                width={600}
                height={400}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Gourmet Desserts</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Dine With Us?</h2>
          <p className="mb-8 text-lg opacity-90">
            Book your table today and experience the finest dining in town
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link href="/contact">Make a Reservation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
