import { NextResponse } from "next/server";
import {
  kimgeniusSystems,
  type SystemStatus,
} from "@/lib/system-catalog";

const validStatuses: SystemStatus[] = [
  "ONLINE",
  "BUILDING",
  "RESEARCH",
  "PLANNED",
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");
  const status = searchParams.get("status") as SystemStatus | null;

  if (id) {
    const system = kimgeniusSystems.find(
      (item) => item.id === id,
    );

    if (!system) {
      return NextResponse.json(
        {
          error: "SYSTEM_NOT_FOUND",
          message: `No KIMGENIUS system exists with id "${id}".`,
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      name: "KIMGENIUS SYSTEM REGISTRY",
      version: "1.0.0",
      architecture: "INPUT → ENGINE → OUTPUT → CAPABILITY",
      system,
    });
  }

  if (status && !validStatuses.includes(status)) {
    return NextResponse.json(
      {
        error: "INVALID_STATUS",
        message: `Status "${status}" is not supported.`,
        validStatuses,
      },
      { status: 400 },
    );
  }

  const systems = status
    ? kimgeniusSystems.filter((system) => system.status === status)
    : kimgeniusSystems;

  return NextResponse.json({
    name: "KIMGENIUS SYSTEM REGISTRY",
    version: "1.0.0",
    architecture: "INPUT → ENGINE → OUTPUT → CAPABILITY",
    count: systems.length,
    systems,
  });
}