import React from 'react';
import { Code2, Database, Globe, Smartphone, Cloud, Shield } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and frameworks.',
    icon: Code2,
  },
  {
    title: 'Backend Systems',
    description: 'Scalable and secure backend infrastructure for your applications.',
    icon: Database,
  },
  {
    title: 'API Integration',
    description: 'Seamless integration with third-party services and APIs.',
    icon: Globe,
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.',
    icon: Smartphone,
  },
  {
    title: 'Cloud Solutions',
    description: 'Cloud-native applications and infrastructure management.',
    icon: Cloud,
  },
  {
    title: 'Security',
    description: 'Implementation of robust security measures and best practices.',
    icon: Shield,
  },
];

export default function Services() {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Comprehensive Digital Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We offer a full range of services to help your business succeed in the digital world.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                          <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {service.description}
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
  );
}