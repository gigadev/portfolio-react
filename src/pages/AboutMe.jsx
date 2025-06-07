import React from 'react';
import { Music, Code, Database, Cpu } from 'lucide-react';

const AboutMe = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
        <Music className="mr-2 text-red-500" /> Rockin' Developer
      </h2>

      <p className="mb-6 text-center">
        Hey, I'm Scott Shepherd—a Lead .NET Full Stack Developer who codes by day and jams to heavy metal and rock by night. Just like the best bands blend powerful riffs and dynamic rhythms, I craft seamless, scalable, and impactful software solutions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-center bg-gray-800 rounded-lg p-4">
          <Code className="text-red-500 mr-3" />
          <span className="font-medium">Full-Stack .NET Development</span>
        </div>
        <div className="flex items-center bg-gray-800 rounded-lg p-4">
          <Database className="text-red-500 mr-3" />
          <span className="font-medium">Database Optimization</span>
        </div>
        <div className="flex items-center bg-gray-800 rounded-lg p-4">
          <Cpu className="text-red-500 mr-3" />
          <span className="font-medium">Microservices & REST APIs</span>
        </div>
        <div className="flex items-center bg-gray-800 rounded-lg p-4">
          <Music className="text-red-500 mr-3" />
          <span className="font-medium">Heavy Metal Enthusiast</span>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="italic">"Coding solutions as precise and powerful as a killer guitar solo."</p>
      </div>
    </div>
  );
};

export default AboutMe;
