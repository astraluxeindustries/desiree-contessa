import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-tl-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-100 rounded-br-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=988&q=80" 
                alt="Desiree Contessa" 
                className="rounded-xl shadow-lg w-full object-cover h-[500px]"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              About Desiree Contessa
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                After working for other financial institutions, I really believe that Patriot Home Mortgage offers most comprehensive service with the best products, knowledge, and resources to its customers. Being the only locally owned Mortgage Bank in Southern Utah, Patriot Home Mortgage has always strived to be community focused.
              </p>
              <p>
                My goal is to provide all my clients excellent customer service, education, and mentoring in every step of their mortgage process. With over 20 years' experience working in banking & finance, being a mortgage loan originator is something she is truly excited about.

              </p>
              <p>
                Desiree received a bachelor's degree in business accounting and a minor in cultural studies from Central Washington University.
              </p>
              <p>
                 look forward to making many great relationships throughout the greater Southern Utah and working through the complexities of today's Mortgage Banking environment.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">15+</span>
                <span className="text-sm text-slate-500">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">Top 1%</span>
                <span className="text-sm text-slate-500">Originator in WA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
