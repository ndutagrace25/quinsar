import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const reviews: Review[] = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment: "Absolutely amazing experience! The food was incredible and the service was top-notch. Will definitely be back!",
    date: "2 weeks ago",
  },
  {
    name: "Michael Chen",
    rating: 5,
    comment: "Best restaurant in town! The ambiance is perfect and every dish we tried was delicious. Highly recommend!",
    date: "1 month ago",
  },
  {
    name: "Emily Rodriguez",
    rating: 5,
    comment: "Quinsar Restaurant exceeded all expectations. The staff was friendly, the food was fresh and flavorful. A must-visit!",
    date: "3 weeks ago",
  },
  {
    name: "David Thompson",
    rating: 5,
    comment: "Outstanding quality and presentation. The chef's special was phenomenal. Great value for money!",
    date: "1 week ago",
  },
  {
    name: "Lisa Anderson",
    rating: 5,
    comment: "Perfect for a family dinner. The kids loved it too! Clean, welcoming atmosphere with excellent food.",
    date: "2 months ago",
  },
  {
    name: "James Wilson",
    rating: 5,
    comment: "Consistently excellent. I've been here multiple times and it never disappoints. The menu has great variety.",
    date: "3 weeks ago",
  },
];

export default function GoogleReviews() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">What Our Customers Say</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Read real reviews from our satisfied customers
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.9</span>
            <span className="text-muted-foreground">(127 reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <CardDescription>{review.date}</CardDescription>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://share.google/3jr8hiRLoj9qLpCwR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            View all reviews on Google
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

