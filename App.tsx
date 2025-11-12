
import React from 'react';
import Header from './components/Header';
import OverviewSection from './components/OverviewSection';
import CampaignStructure from './components/CampaignStructure';
import KeywordAnalysis from './components/KeywordAnalysis';
import FinancialProjections from './components/FinancialProjections';
import AdCreatives from './components/AdCreatives';
import StrategicRecommendations from './components/StrategicRecommendations';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main className="max-w-6xl mx-auto my-8 p-4 sm:p-8 bg-white rounded-lg shadow-xl">
        <OverviewSection />
        <CampaignStructure />
        <KeywordAnalysis />
        <FinancialProjections />
        <AdCreatives />
        <StrategicRecommendations />
      </main>
      <Footer />
    </div>
  );
};

export default App;
