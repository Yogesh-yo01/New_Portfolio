"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Cross-Platform Mobile Developer
            </h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m Yogesh Kumar, a React Native developer with two years of
              hands-on experience delivering Android and iOS applications. I
              build clean, responsive mobile interfaces and connect them to
              APIs, Firebase, payments, maps, and real-time services.
            </p>
            <p className="text-muted-foreground mb-6">
              I&apos;ve shipped applications for FinTech, healthcare, e-commerce,
              and delivery use cases. I value maintainable code, clear
              communication, and thoughtful solutions to real user problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Education & Recognition</h3>
            <ul className="space-y-4">
              {[
                "B.Sc. Computer Science, 2020–2023 · CGPA 6.9",
                "Shree Venkateshwara Arts & Science College",
                "Higher Secondary Education, 2018–2020",
                "Problem Solving Star Award · Company Anniversary, 2025",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
