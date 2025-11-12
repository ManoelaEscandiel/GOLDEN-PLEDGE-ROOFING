
import React from 'react';
import Section from './Section';

const OverviewSection: React.FC = () => {
  return (
    <Section title="Visão Geral da Estratégia (Fase 1)" id="intro">
      <p className="text-gray-700 leading-relaxed mb-4">
        Com base no Account Planning estratégico, este plano de mídia foca na{' '}
        <strong className="font-semibold text-gray-900">Fase 1 (Meses 1-3)</strong>. O objetivo principal é
        "consertar o balde" antes de escalar o investimento.
      </p>
      <p className="text-gray-700 leading-relaxed">
        O tráfego será direcionado para uma{' '}
        <strong className="font-semibold text-gray-900">Landing Page (LP) de alta conversão</strong>, focada na principal
        vantagem competitiva da GPR: a certificação{' '}
        <strong className="font-semibold text-gray-900">GAF Master Elite</strong>.
      </p>
    </Section>
  );
};

export default OverviewSection;
