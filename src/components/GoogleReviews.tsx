"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
  time: number;
}

interface ReviewsData {
  rating: number;
  totalReviews: number;
  reviews: Review[];
}

export default function GoogleReviews() {
  const [reviewsData, setReviewsData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch("/api/reviews");
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviewsData(data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Unable to load reviews. Please check back later.");
        // Fallback to showing the link only
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">What Our Customers Say</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Loading reviews...
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Show error or fallback
  if (error || !reviewsData) {
    return (
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">What Our Customers Say</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {error || "Read real reviews from our satisfied customers"}
            </p>
            <div className="mt-8">
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
        </div>
      </section>
    );
  }

  const { rating, totalReviews, reviews } = reviewsData;
  // Show up to 6 reviews
  const displayedReviews = reviews.slice(0, 6);

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
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.round(rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-lg font-semibold">{rating.toFixed(1)}</span>
            <span className="text-muted-foreground">
              ({totalReviews.toLocaleString()} reviews)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((review, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {review.profile_photo_url && (
                      <Image
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full"
                      />
                    )}
                    <div>
                      <CardTitle className="text-lg">
                        {review.author_name}
                      </CardTitle>
                      <CardDescription>
                        {review.relative_time_description}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{review.text}</p>
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
