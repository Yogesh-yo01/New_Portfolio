import { Service } from "@/types";
import { Code2, LayoutTemplate, ServerCog, Wrench } from "lucide-react";

export const services: Service[] = [
  {
    title: "Frontend Development",
    description: "Build responsive, accessible interfaces with React, JavaScript, HTML, and CSS.",
    icon: <Code2 className="h-8 w-8" />,
  },
  {
    title: "Responsive Web Design",
    description: "Create layouts that feel clear and dependable across mobile, tablet, and desktop screens.",
    icon: <LayoutTemplate className="h-8 w-8" />,
  },
  {
    title: "Web Application Development",
    description: "Develop practical full-stack features with REST APIs, Node.js, Express, and MongoDB.",
    icon: <ServerCog className="h-8 w-8" />,
  },
  {
    title: "Bug Fixing & Improvements",
    description: "Diagnose interface issues, improve usability, and keep existing web projects maintainable.",
    icon: <Wrench className="h-8 w-8" />,
  },
];
