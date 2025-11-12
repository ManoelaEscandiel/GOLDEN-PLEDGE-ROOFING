
import React from 'react';
import Section from './Section';
import { initialAdGroup, futureAdGroups } from '../data/mediaPlanData';
import type { Campaign } from '../types';

const AdGroupItem: React.FC<{ group: Campaign, isPrimary?: boolean }> = ({ group, isPrimary = false }) => (
    <div className={`p-4 rounded-lg ${isPrimary ? 'bg-green-50 border-l-4 border-green-600 shadow-sm' : 'bg-gray-50 border-l-4 border-gray-400'}`}>
        <strong className={`text-lg font-semibold ${isPrimary ? 'text-green-900' : 'text-slate-800'}`}>{group.title}</strong>
        <ul className="mt-2 space-y-2 pl-5 text-gray-700">
            {group.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                    <span className="font-semibold w-40 shrink-0">{detail.label}:</span>
                    <span>{detail.value}</span>
                </li>
            ))}
        </ul>
    </div>
);

const CampaignStructure: React.FC = () => {
  return (
    <Section title="1. Estrutura da Campanha e Grupos de Anúncios" id="estrutura-campanha">
      <p className="text-gray-700 leading-relaxed mb-8">
        A estratégia se concentrará em uma <strong>única campanha de Pesquisa (Search)</strong>. A estrutura será dividida em grupos de anúncios para capturar diferentes intenções de busca, alinhando-se às personas "Hélio Reativo" (pós-tempestade), "Helena Proativa" (busca por qualidade/GAF) e "Paula" (B2B).
      </p>
      
      <div className="mb-12">
        <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">Foco Inicial (Fase 1)</h3>
        <p className="text-gray-600 mb-4">Para a fase inicial, o foco será validar a performance do grupo de anúncios de maior potencial de conversão, alinhado à principal vantagem competitiva da GPR: a certificação GAF Master Elite.</p>
        <AdGroupItem group={initialAdGroup} isPrimary={true} />
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">Propostas de Grupos de Anúncios Futuros</h3>
        <p className="text-gray-600 mb-4">Após a validação da Fase 1, os seguintes grupos de anúncios poderão ser ativados e testados para expandir o alcance e capturar outras fatias do mercado.</p>
        <div className="space-y-4">
          {futureAdGroups.map((group) => (
            <AdGroupItem key={group.id} group={group} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default CampaignStructure;
