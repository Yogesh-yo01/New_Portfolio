"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-muted-foreground mb-4 text-lg">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Yogesh</h1>
            <h2 className="text-2xl md:text-3xl text-primary mb-6">
              Senior React Native Developer
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Building beautiful, performant, and scalable mobile applications
              that users love.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" className="gap-2">
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                View Projects
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Github className="h-6 w-6" />
                </Button>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-6 w-6" />
                </Button>
              </a>
              <a href="mailto:yogesh@example.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-6 w-6" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-50" />
              <img
                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20portrait%20of%20a%20software%20developer&image_size=square_hd"
                alt="Yogesh"
                width={400}
                height={400}
                className="rounded-full relative z-10 border-4 border-background object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
