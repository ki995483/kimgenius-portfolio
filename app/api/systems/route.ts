import { NextResponse } from "next/server";
import { kimgeniusSystems } from "@/lib/system-catalog";

export async function GET() {
  return NextResponse.json({
    name: "KIMGENIUS SYSTEM REGISTRY",
    version: "1.0.0",
    architecture: "INPUT → INTELLIGENCE → OUTPUT",
    count: kimgeniusSystems.length,
    systems: kimgeniusSystems,
  });
}