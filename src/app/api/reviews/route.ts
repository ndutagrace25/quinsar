import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Get your Google Places API key from environment variables
    const apiKey = "AIzaSyBj5ktCVyiIpMmxZMBrUcJ-VnpC_3kKP90";
    // Get your Place ID from the Google Maps link
    // You can find it in your Google Maps URL or Google Business Profile
    const placeId = "ChIJFQbtesURLxgR4-m9cEVvwAY";

    if (!apiKey || !placeId) {
      return NextResponse.json(
        { error: "Google Places API key or Place ID not configured" },
        { status: 500 }
      );
    }

    // Fetch place details including reviews
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch reviews");
    }

    const data = await response.json();

    if (data.status !== "OK") {
      throw new Error(data.error_message || "Failed to fetch reviews");
    }

    return NextResponse.json({
      rating: data.result.rating,
      totalReviews: data.result.user_ratings_total,
      reviews: data.result.reviews || [],
    });
  } catch (error) {
    console.error("Error fetching Google Reviews:", error);
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}
