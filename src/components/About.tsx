import React from 'react';
import { Code, Database, Globe, Bot} from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Frontend', icon: Globe, skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'] },
    { category: 'Backend', icon: Database, skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'] },
    { category: 'AI/ML', icon: Bot , skills: ['TensorFlow', 'PyTorch', 'OpenCV', 'Pandas', 'Jupyter'] },
    { category: 'Tools', icon: Code, skills: ['Git', 'Docker', 'AWS', 'Jenkins', 'Figma'] },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aspiring AI/ML engineer with experience in cloud deployment, full-stack projects, and real-world machine learning applications built to solve impactful problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">My Journey</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                I’m Kahar Kartik, a Computer Engineering student specializing in AI and Machine Learning. My journey began with curiosity and a drive to build real-world solutions using intelligent systems and clean code.
              </p>
              <p>
                I’ve interned at Sahana System Ltd and Edunet Foundation, where I worked on cloud deployment with AWS, object detection using transfer learning, and credit card fraud prediction with ML models. These roles sharpened my skills in Python, Java, React, and scalable architecture.
              </p>
              <p>
                I’ve led student tech events as IEEE SOU’s Core Committee Chair and was a finalist in hackathons like Odoo and Level Supermind. I'm continuously learning, building, and aiming to craft technology that solves real problems with real impact.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-semibold mb-6">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200">5+</div>
                  <div className="text-sm text-blue-100">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200">3</div>
                  <div className="text-sm text-blue-100">Internships</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200">15+</div>
                  <div className="text-sm text-blue-100">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200">2</div>
                  <div className="text-sm text-blue-100">Hackathon Finalist</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <category.icon className="text-blue-600 mr-3" size={24} />
                  <h4 className="text-lg font-semibold text-gray-900">{category.category}</h4>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 hover:bg-blue-100 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
