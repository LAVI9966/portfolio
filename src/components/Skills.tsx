import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Layout, Server } from 'lucide-react';

const skills = {
  'Frontend Development': {
    icon: Layout,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux']
  },
  'Backend Development': {
    icon: Server,
    skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs']
  },
  'Database': {
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase']
  },
  'Programming Languages': {
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL']
  }
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise in various
            technologies and tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, { icon: Icon, skills }], index) => (
            <motion.div
              key={category}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + skillIndex * 0.1 }}
                    className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}