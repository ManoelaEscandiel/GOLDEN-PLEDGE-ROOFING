import React from 'react';
import Section from './Section';

// Helper component for stat cards
const StatCard = ({ title, children, className }: { title: string, children: React.ReactNode, className?: string }) => (
  <div className={`bg-white p-4 rounded-lg shadow border ${className}`}>
    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider text-center">{title}</h4>
    <div className="mt-2 text-center">
      {children}
    </div>
  </div>
);

const FinancialProjections: React.FC = () => {
  const projectedData = {
    impressions: '5.875',
    ctr: '4,0%',
    cpc: '$ 8,50',
    clicks: '~235',
    cvr: '3,0%',
    leads: '~7',
  };

  return (
    <Section title="3. Projeção Financeira e Metas (Reajustada)" id="projecoes">
        <p className="text-gray-700 leading-relaxed mb-8">
            Os dados de performance de um cliente semelhante serviram como benchmark para estabelecer premissas de custo de mídia (como o Custo por Clique), enquanto as metas de Custo por Lead (CPL) foram mantidas conforme o Account Planning original.: mantém as <strong>metas de CPL do Account Planning (PDF)</strong> como a "Fonte da Verdade" para os objetivos, enquanto usa os <strong>custos de CPC do CSV</strong> como a "Fonte da Realidade" para as premissas de custo de mídia.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Coluna Esquerda (4/12) */}
            <div className="lg:col-span-4 space-y-6">
                 <StatCard title="Budget Projetado">
                    <p className="text-4xl font-bold text-slate-800">$ 2.000,00</p>
                    <p className="text-gray-600">Diário: $ 66,67</p>
                </StatCard>
                <div className="bg-gray-50 p-3 rounded-md text-center">
                    <h4 className="font-semibold text-gray-700">Projeção com Base em Orçamento</h4>
                    <p className="text-sm text-red-600">valores de CVR e CPC com base em benchmark</p>
                </div>
                <StatCard title="Estratégia">
                    <table className="w-full text-sm text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="p-2 font-semibold text-gray-600 uppercase">Canal</th>
                                <th className="p-2 font-semibold text-gray-600 uppercase">Campanha</th>
                                <th className="p-2 text-right font-semibold text-gray-600 uppercase">Investimento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2">Search</td>
                                <td className="p-2">-</td>
                                <td className="p-2 text-right font-semibold text-slate-800">$ 2.000,00</td>
                            </tr>
                        </tbody>
                    </table>
                </StatCard>
            </div>

            {/* Coluna Central e Direita (8/12) */}
            <div className="lg:col-span-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-4">
                        <div className="overflow-x-auto rounded-lg shadow border">
                            <table className="w-full text-center">
                                <thead className="bg-gray-100">
                                    <tr>
                                        {['Impressões', 'CTR', 'CPC', 'Cliques', '% Site', 'Leads'].map((header, i) => (
                                            <th key={i} className={`p-2 text-xs font-semibold text-gray-600 uppercase ${header === 'CPC' ? 'bg-yellow-100 border-x' : ''}`}>{header}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-3 font-semibold text-slate-800">{projectedData.impressions}</td>
                                        <td className="p-3 font-semibold text-slate-800">{projectedData.ctr}</td>
                                        <td className="p-3 font-bold text-slate-900 bg-yellow-50 border-x">{projectedData.cpc}</td>
                                        <td className="p-3 font-semibold text-slate-800">{projectedData.clicks}</td>
                                        <td className="p-3 font-semibold text-slate-800">{projectedData.cvr}</td>
                                        <td className="p-3 font-bold text-slate-900 bg-gray-100">{projectedData.leads}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-center">
                            <StatCard title="CPL (Custo Por Lead Projetado)">
                                <p className="text-2xl font-bold text-slate-800">$ 285,71</p>
                            </StatCard>
                        </div>
                    </div>
                    <div>
                         <StatCard title="CPC Médio (Benchmark Range)">
                            <div className="text-green-600">
                                <p className="text-xs">LOW RANGE</p>
                                <p className="text-2xl font-bold underline">$ 4,50</p>
                            </div>
                            <div className="text-red-600 mt-2">
                                <p className="text-xs">HIGH RANGE</p>
                                <p className="text-2xl font-bold underline">$ 25,00+</p>
                            </div>
                        </StatCard>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <StatCard title="Budget com Base em 1 Conversão Diária" className="bg-orange-50 border-orange-200">
                        <div className="grid grid-cols-3 gap-2">
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Diário</p>
                                <p className="text-xl font-bold text-slate-800">$ 286</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Semanal</p>
                                <p className="text-xl font-bold text-slate-800">$ 2.000</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase">Mensal</p>
                                <p className="text-xl font-bold text-slate-800">$ 8.571</p>
                            </div>
                        </div>
                    </StatCard>

                    <div className="flex flex-col items-center justify-center p-6 bg-blue-50 border-2 border-blue-500 rounded-lg shadow-lg">
                        <h4 className="text-sm font-semibold text-blue-800 uppercase tracking-wider">Budget Total Sugerido</h4>
                        <p className="text-5xl font-bold text-blue-900 mt-2">$ 2.000,00</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-300 rounded-md p-6 mt-12">
            <h4 className="font-bold text-yellow-900 text-xl mb-3">💡 Insights Estratégicos Deste Reajuste</h4>
            <ol className="list-decimal list-outside pl-5 space-y-3 text-yellow-800">
                <li><strong>CPL Inicial é Alto (Isso é esperado):</strong> O CPL projetado de ~$286 é o custo de rodar a mídia enquanto se otimiza a Landing Page. Não é um fracasso, mas um ponto de partida realista para a Fase 1.</li>
                <li><strong>O Foco é a CVR:</strong> O plano de mídia continua 100% focado em otimizar a Taxa de Conversão (CVR). A verba de $2.000 nos dá ~235 'chances' (cliques) por mês para testar a página e melhorar a CVR de 3% para a meta da próxima fase.</li>
                <li><strong>A Meta da Fase 2:</strong> O objetivo é que, no Mês 4, a CVR atinja os <strong>5,0%</strong> projetados no PDF. Com ~235 cliques, isso geraria <strong>~12 leads</strong>, trazendo o CPL para <strong>$166</strong>, muito próximo da meta de indústria de $150.</li>
            </ol>
        </div>
    </Section>
  );
};

export default FinancialProjections;
