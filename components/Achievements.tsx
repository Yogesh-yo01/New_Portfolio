"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const achievements = [
    { label: "Years Experience", value: 4 },
    { label: "Projects Completed", value: 50 },
    { label: "Published Apps", value: 10 },
    { label: "Client Satisfaction", value: 100 },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                className="text-5xl md:text-6xl font-bold text-primary mb-2"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                >
                  {achievement.value}
                  {achievement.label.includes("Satisfaction") && "%"}
                  {achievement.label.includes("Years") && "+"}
                </motion.span>
              </motion.div>
              <p className="text-muted-foreground">{achievement.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
