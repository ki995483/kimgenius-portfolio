export type SystemStatus =
  | "ONLINE"
  | "BUILDING"
  | "RESEARCH"
  | "PLANNED";

export type KIMGENIUSSystem = {
  id: string;
  number: string;
  name: string;
  category: string;
  status: SystemStatus;
  description: string;
  input: string[];
  engine: string[];
  output: string[];
  capabilities: string[];
  href?: string;
};

export const kimgeniusSystems: KIMGENIUSSystem[] = [
  {
    id: "weather-intelligence",
    number: "01",
    name: "Weather Intelligence",
    category: "ENVIRONMENTAL INTELLIGENCE",
    status: "BUILDING",
    description:
      "A live environmental intelligence system for weather data, forecasting, location search, and analytical exploration.",
    input: [
      "Location",
      "Coordinates",
      "Time",
      "Weather data",
    ],
    engine: [
      "Weather APIs",
      "Forecast processing",
      "Environmental analysis",
    ],
    output: [
      "Current conditions",
      "Forecasts",
      "Rain probability",
      "Weather intelligence",
    ],
    capabilities: [
      "Live weather data",
      "Location search",
      "Forecast analysis",
      "Responsive interface",
    ],
    href: "/weather",
  },

  {
    id: "ai-laboratory",
    number: "02",
    name: "AI / UX-UI Laboratory",
    category: "ARTIFICIAL INTELLIGENCE",
    status: "RESEARCH",
    description:
      "An intelligence laboratory for AI interfaces, prompt systems, automation workflows, and future intelligent products.",
    input: [
      "Text",
      "Files",
      "Images",
      "Data",
      "System context",
    ],
    engine: [
      "AI models",
      "Prompt systems",
      "Workflow orchestration",
    ],
    output: [
      "Answers",
      "Analysis",
      "Code",
      "Reports",
      "Actions",
    ],
    capabilities: [
      "AI workflows",
      "Prompt engineering",
      "Interface intelligence",
      "Automation research",
    ],
    href: "/ai",
  },

  {
    id: "spatial-intelligence",
    number: "03",
    name: "Spatial Intelligence",
    category: "GEOSPATIAL INTELLIGENCE",
    status: "BUILDING",
    description:
      "A geospatial intelligence system for mapping, spatial analysis, remote sensing, cartography, and geographic reasoning.",
    input: [
      "Coordinates",
      "Spatial data",
      "Raster data",
      "Satellite imagery",
    ],
    engine: [
      "GIS",
      "Spatial analysis",
      "Remote sensing",
      "Geographic computation",
    ],
    output: [
      "Maps",
      "Spatial patterns",
      "Geographic analysis",
      "Spatial intelligence",
    ],
    capabilities: [
      "GIS",
      "Digital mapping",
      "Remote sensing",
      "Spatial analysis",
    ],
    href: "/spatial-intelligence",
  },

  {
    id: "data-intelligence",
    number: "04",
    name: "Data Intelligence",
    category: "DATA & ANALYTICS",
    status: "BUILDING",
    description:
      "A data intelligence laboratory for structured datasets, statistical analysis, visualization, machine learning, and predictive workflows.",
    input: [
      "CSV",
      "JSON",
      "Tables",
      "Datasets",
      "APIs",
    ],
    engine: [
      "Statistics",
      "Data processing",
      "Visualization",
      "Machine learning",
    ],
    output: [
      "Insights",
      "Charts",
      "Reports",
      "Patterns",
      "Predictions",
    ],
    capabilities: [
      "Data analysis",
      "Visualization",
      "Statistical workflows",
      "Predictive intelligence",
    ],
    href: "/data-intelligence",
  },

  {
    id: "productions",
    number: "05",
    name: "Genius Productions",
    category: "CONTENT & MEDIA",
    status: "PLANNED",
    description:
      "A production system for KIMGENIUS creative work including animations, motion graphics, visual experiments, media, and digital productions.",
    input: [
      "Ideas",
      "Scripts",
      "Images",
      "Video",
      "Audio",
    ],
    engine: [
      "Creative workflows",
      "Motion systems",
      "AI-assisted production",
      "Media processing",
    ],
    output: [
      "Animations",
      "Videos",
      "Visual stories",
      "Creative media",
    ],
    capabilities: [
      "Genius animations",
      "Motion design",
      "Content production",
      "Digital media",
    ],
  },
];

export function getSystemById(id: string) {
  return kimgeniusSystems.find(
    (system) => system.id === id,
  );
}

export function getSystemsByStatus(status: SystemStatus) {
  return kimgeniusSystems.filter(
    (system) => system.status === status,
  );
}

export function getSystemByCategory(category: string) {
  return kimgeniusSystems.filter(
    (system) => system.category === category,
  );
}