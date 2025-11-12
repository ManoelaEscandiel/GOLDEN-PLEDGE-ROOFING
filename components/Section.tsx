import React from 'react';

interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, id, children }) => {
  return (
    <section id={id} className="mb-12 pb-8 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0">
      <h2 className="text-3xl font-bold text-slate-900 border-b-2 border-red-600 pb-3 mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
