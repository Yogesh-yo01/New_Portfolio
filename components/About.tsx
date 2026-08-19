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
              Frontend Developer
            </h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m Yogesh Kumar, a Computer Science graduate focused on
              building polished, responsive web applications. I enjoy turning
              ideas into clear, useful interfaces with React, JavaScript, HTML,
              and CSS.
            </p>
            <p className="text-muted-foreground mb-6">
              My hands-on projects have strengthened my problem-solving,
              debugging, and end-to-end development skills. I&apos;m looking for an
              opportunity to learn quickly, contribute thoughtfully, and grow
              with a collaborative engineering team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <ul className="space-y-4">
              {[
                "B.Sc. Computer Science, 2020–2023",
                "Shree Venkateshwara Arts & Science College",
                "Higher Secondary Education, 2018–2020",
                "Government Higher Secondary School",
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
