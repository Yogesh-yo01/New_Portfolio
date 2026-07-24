import { Service } from "@/types";
import {
  Smartphone,
  Globe,
  Database,
  Zap,
  Bug,
  UploadCloud,
  Settings,
} from "lucide-react";

export const services: Service[] = [
  {
    title: "React Native Development",
    description:
      "Build beautiful, performant cross-platform mobile applications using React Native.",
    icon: <Smartphone className="h-8 w-8" />,
  },
  {
    title: "Android Development",
    description:
      "Develop native Android applications with Kotlin and Java for the best performance.",
    icon: <Smartphone className="h-8 w-8" />,
  },
  {
    title: "iOS Development",
    description:
      "Create native iOS applications with Swift and SwiftUI for a seamless user experience.",
    icon: <Smartphone className="h-8 w-8" />,
  },
  {
    title: "Cross Platform Apps",
    description:
      "Develop applications that work flawlessly on both Android and iOS platforms.",
    icon: <Globe className="h-8 w-8" />,
  },
  {
    title: "Firebase Integration",
    description:
      "Integrate Firebase services like authentication, database, and cloud messaging.",
    icon: <Database className="h-8 w-8" />,
  },
  {
    title: "API Integration",
    description:
      "Connect your mobile app to various APIs and services for enhanced functionality.",
    icon: <Zap className="h-8 w-8" />,
  },
  {
    title: "Performance Optimization",
    description:
      "Optimize your mobile app for speed, memory, and battery efficiency.",
    icon: <Zap className="h-8 w-8" />,
  },
  {
    title: "Bug Fixing",
    description:
      "Identify and fix bugs to ensure your app runs smoothly and reliably.",
    icon: <Bug className="h-8 w-8" />,
  },
  {
    title: "App Deployment",
    description:
      "Deploy your app to the App Store and Play Store with proper configuration.",
    icon: <UploadCloud className="h-8 w-8" />,
  },
  {
    title: "Maintenance",
    description:
      "Provide ongoing maintenance and support to keep your app up to date.",
    icon: <Settings className="h-8 w-8" />,
  },
];
