import { Service } from "@/types";
import { Smartphone, Database, MapPinned, Wrench } from "lucide-react";

export const services: Service[] = [
  { title: "React Native Development", description: "Build reliable cross-platform Android and iOS applications with React Native and TypeScript.", icon: <Smartphone className="h-8 w-8" /> },
  { title: "API & Firebase Integration", description: "Connect mobile apps to REST APIs, Firebase services, real-time updates, notifications, and authentication.", icon: <Database className="h-8 w-8" /> },
  { title: "Maps, Payments & Calling", description: "Implement Google Maps, geolocation, payment gateways, and real-time audio/video experiences.", icon: <MapPinned className="h-8 w-8" /> },
  { title: "Release & Maintenance", description: "Debug production issues, improve app stability, and manage Play Store and App Store releases.", icon: <Wrench className="h-8 w-8" /> },
];
