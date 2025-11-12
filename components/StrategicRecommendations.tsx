
import React from 'react';
import Section from './Section';
import { recommendationsData } from '../data/mediaPlanData';

const StrategicRecommendations: React.FC = () => {
  return (
    <Section title="5. Recomendações Estratégicas" id="recomendacoes">
      <ol className="list-decimal list-outside pl-5 space-y-4 text-gray-700">
        {recommendationsData.map((rec, index) => (
          <li key={index} className="pl-2" dangerouslySetInnerHTML={{ __html: rec }} />
        ))}
      </ol>
    </Section>
  );
};

export default StrategicRecommendations;
