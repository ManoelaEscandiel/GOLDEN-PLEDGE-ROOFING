
import React from 'react';
import Section from './Section';
import { keywordData, initialAdGroup } from '../data/mediaPlanData';
import type { KeywordRow } from '../types';

const KeywordTable: React.FC = () => (
  <div className="overflow-x-auto rounded-lg shadow-md mt-6">
    <table className="w-full border-collapse text-sm">
      <thead className="bg-gray-100 uppercase tracking-wider">
        <tr>
          <th className="p-4 text-left font-semibold text-gray-700">Grupo de Anúncios Estratégico</th>
          <th className="p-4 text-left font-semibold text-gray-700">Palavras-Chave (Keywords)</th>
          <th className="p-4 text-left font-semibold text-gray-700">Tipo de Persona</th>
          <th className="p-4 text-left font-semibold text-gray-700">Projeção de CPC (Range)</th>
          <th className="p-4 text-left font-semibold text-gray-700">Justificativa</th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {keywordData.map((row: KeywordRow, index: number) => (
          <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 even:bg-gray-50">
            <td className="p-4 align-top"><strong className="font-semibold text-slate-800">{row.group}</strong></td>
            <td className="p-4 align-top font-mono text-xs">
              {row.keywords.map((kw, i) => (
                <code key={i} className="block bg-gray-200 text-gray-800 rounded px-2 py-1 mb-1">{kw}</code>
              ))}
            </td>
            <td className="p-4 align-top text-gray-700">{row.persona}</td>
            <td className="p-4 align-top"><strong className="font-semibold text-slate-800">{row.cpc}</strong></td>
            <td className="p-4 align-top text-gray-600">{row.justification}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);


const KeywordAnalysis: React.FC = () => {
    const initialKeywords = keywordData.find(kw => kw.group === 'B2C - GAF Master Elite');
  
  return (
    <Section title="2. Projeção de CPC e Estudo de Palavras-Chave" id="estudo-palavras-chave">
        <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">Foco Inicial (Fase 1) - Palavras-Chave</h3>
            <p className="text-gray-600 mb-4">
              Para validar a estratégia inicial, o foco será no grupo de anúncios "GAF Master Elite". As palavras-chave abaixo foram selecionadas para capturar a demanda de alta intenção e qualidade, alinhada à persona "Helena Proativa".
            </p>
            {initialKeywords && (
               <div className="p-4 rounded-lg bg-green-50 border-l-4 border-green-600 shadow-sm">
                 <strong className="text-lg font-semibold text-green-900">{initialAdGroup.title}</strong>
                 <div className="mt-3">
                    <span className="font-semibold text-gray-800">Palavras-Chave Iniciais:</span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {initialKeywords.keywords.map((kw, i) => (
                        <code key={i} className="block bg-green-200 text-green-900 rounded px-3 py-1 text-sm font-semibold">{kw}</code>
                      ))}
                    </div>
                 </div>
               </div>
            )}
        </div>
        
        <div className="bg-yellow-50 border border-yellow-300 rounded-md p-4 mt-4">
            <p className="text-yellow-800">
                <strong className="font-semibold">Nota Importante sobre CPC:</strong> As projeções de Custo por Clique (CPC) são baseadas nos dados reais do arquivo CSV. Esses dados mostram alta volatilidade (ex: CPCs de $0.45 a $25.59 para termos semelhantes). Isso reforça que o sucesso virá de uma <strong className="font-semibold">Taxa de Conversão (CVR)</strong> alta na nova LP, e não de cliques baratos.
            </p>
        </div>
        
        <h3 className="text-xl font-bold text-slate-800 mb-4 mt-8 border-b pb-2">Estudo Completo de Palavras-Chave</h3>
        <KeywordTable />
    </Section>
  );
};

export default KeywordAnalysis;
