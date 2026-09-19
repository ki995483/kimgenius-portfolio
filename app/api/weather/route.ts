import { NextResponse } from "next/server";
import { geocodeLocation } from "@/lib/weather/geocode";
import { fetchWeather } from "@/lib/weather/weather-api";
import { buildWeatherIntelligence } from "@/lib/weather/intelligence";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("location")?.trim();

  if (!query) {
    return NextResponse.json(
      {
        error: "LOCATION_REQUIRED",
        message:
          "Provide a location using ?location=...",
      },
      { status: 400 },
    );
  }

  try {
    const location = await geocodeLocation(query);

    if (!location) {
      return NextResponse.json(
        {
          error: "LOCATION_NOT_FOUND",
          message: `No location found for "${query}".`,
        },
        { status: 404 },
      );
    }

    const weather = await fetchWeather(location);

    const intelligence = buildWeatherIntelligence(
      location,
      weather,
    );

    return NextResponse.json({
      system: "weather-intelligence",
      version: "1.0.0",
      architecture:
        "LOCATION → WEATHER ENGINE → INTELLIGENCE → OUTPUT",
      data: intelligence,
    });
  } catch (error) {
    console.error("Weather intelligence error:", error);

    return NextResponse.json(
      {
        error: "WEATHER_ENGINE_FAILURE",
        message:
          "The weather intelligence engine could not complete the request.",
      },
      { status: 502 },
    );
  }
}