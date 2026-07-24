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
              Passionate Mobile Developer
            </h3>
            <p className="text-muted-foreground mb-6">
              With over 4 years of experience in React Native development, I
              specialize in building high-quality mobile applications that
              deliver exceptional user experiences. My passion for technology
              drives me to stay updated with the latest trends and best
              practices in mobile development.
            </p>
            <p className="text-muted-foreground mb-6">
              I believe in writing clean, maintainable code and following
              software engineering best practices. I enjoy solving complex
              problems and finding elegant solutions that scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">My Philosophy</h3>
            <ul className="space-y-4">
              {[
                "User-centric design and development",
                "Performance optimization and efficiency",
                "Clean code and maintainability",
                "Continuous learning and improvement",
                "Team collaboration and communication",
                "Agile methodology and iterative development",
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
