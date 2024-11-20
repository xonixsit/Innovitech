import React from 'react';
import { Users, Target, Rocket, Award } from 'lucide-react';

const values = [
  {
    title: 'Innovation First',
    description: 'We stay ahead of technological trends to deliver cutting-edge solutions.',
    icon: Rocket,
  },
  {
    title: 'Client Success',
    description: "Your success is our success. We're committed to delivering exceptional results.",
    icon: Target,
  },
  {
    title: 'Expert Team',
    description: 'Our team of seasoned professionals brings years of industry experience.',
    icon: Users,
  },
  {
    title: 'Quality Assured',
    description: 'We maintain the highest standards in code quality and project delivery.',
    icon: Award,
  },
];

export default function About() {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Driving Digital Innovation
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We're a team of passionate developers and designers creating exceptional digital experiences.
          </p>
        </div>

        <div className="mt-20">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Our Story
              </h2>
              <p className="mt-6 text-lg text-gray-500">
                Founded with a vision to transform how businesses leverage technology, InnoviTech has grown into a trusted digital partner for companies worldwide. Our journey began with a simple belief: every business deserves access to enterprise-grade technology solutions.
              </p>
              <p className="mt-6 text-lg text-gray-500">
                Today, we continue to push boundaries and create innovative solutions that help our clients stay ahead in the digital age. Our commitment to excellence and customer satisfaction remains at the core of everything we do.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-7">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {values.map((value) => {
                  const Icon = value.icon;
                  return (
                    <div key={value.title} className="bg-gray-50 rounded-lg px-6 py-8">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <Icon className="h-8 w-8 text-indigo-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">
                            {value.title}
                          </h3>
                          <p className="mt-2 text-base text-gray-500">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-1 flex justify-center md:col-span-1">
              <div className="text-center">
                <p className="text-4xl font-extrabold text-indigo-600">100+</p>
                <p className="mt-2 text-base font-medium text-gray-500">Projects Completed</p>
              </div>
            </div>
            <div className="col-span-1 flex justify-center md:col-span-1">
              <div className="text-center">
                <p className="text-4xl font-extrabold text-indigo-600">50+</p>
                <p className="mt-2 text-base font-medium text-gray-500">Happy Clients</p>
              </div>
            </div>
            <div className="col-span-1 flex justify-center md:col-span-1">
              <div className="text-center">
                <p className="text-4xl font-extrabold text-indigo-600">15+</p>
                <p className="mt-2 text-base font-medium text-gray-500">Team Members</p>
              </div>
            </div>
            <div className="col-span-1 flex justify-center md:col-span-1">
              <div className="text-center">
                <p className="text-4xl font-extrabold text-indigo-600">5+</p>
                <p className="mt-2 text-base font-medium text-gray-500">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}