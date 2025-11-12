
import React from 'react';
import Section from './Section';
import { adCreativeData } from '../data/mediaPlanData';
import type { AdCreative } from '../types';

const DesktopAdMockup: React.FC = () => (
  <div className="w-full bg-white p-4 rounded-lg border border-gray-200 shadow-md font-sans">
    <div className="flex items-center">
      <span className="font-bold text-sm">Sponsored</span>
      <span className="text-gray-500 mx-2">·</span>
      <span className="text-sm text-gray-700">GoldenPledgeRoofing.com</span>
    </div>
    <h3 className="text-xl text-blue-800 hover:underline cursor-pointer mt-1">
      Secure Your Home Today - Storm Damage Claim Experts
    </h3>
    <p className="text-sm text-gray-700 mt-2">
      Leaking roof from hail or wind? We're Cypress's trusted storm damage specialists. We secure your home & handle the entire insurance claim. Don't get scammed...
    </p>
  </div>
);

const MobileAdMockup: React.FC = () => (
  <div className="w-full max-w-sm mx-auto bg-white p-4 rounded-xl border-2 border-gray-700 shadow-xl font-sans">
    <div className="flex items-center mb-2">
       <span className="font-bold text-sm bg-black text-white px-2 py-0.5 rounded">Ad</span>
       <span className="text-sm text-gray-600 ml-2">GoldenPledgeRoofing.com</span>
    </div>
    <h3 className="text-lg text-blue-700 hover:underline cursor-pointer">
       GAF® Master Elite Contractor - Get The Best GAF® Warranty
    </h3>
    <p className="text-sm text-gray-600 mt-2">
        Looking for the best? We are a GAF® Master Elite Contractor, a certification held by only 2% of roofers. Get the best materials & warranty.
    </p>
    <div className="mt-4 flex justify-around border-t pt-3">
        <a href="#" className="flex items-center flex-col text-blue-600 hover:bg-blue-50 p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.76a11.024 11.024 0 006.29 6.29l.76-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="text-xs font-semibold">Call</span>
        </a>
        <a href="#" className="flex items-center flex-col text-blue-600 hover:bg-blue-50 p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707l6 6a1 1 0 001.414-1.414L5 14.586V5.414l4.707-4.707A1 1 0 008 0H4a1 1 0 00-.293.707z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-semibold">Directions</span>
        </a>
        <a href="#" className="flex items-center flex-col text-blue-600 hover:bg-blue-50 p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
            <span className="text-xs font-semibold">Website</span>
        </a>
    </div>
  </div>
);


const AdGroup: React.FC<{ ad: AdCreative }> = ({ ad }) => (
  <article className="border border-gray-200 rounded-lg p-6 mt-6 bg-gray-50">
    <h3 className="text-2xl font-semibold text-red-800 bg-red-50 px-4 py-3 rounded-md inline-block mb-2">
      {ad.title}
    </h3>
    <p className="text-gray-700 mt-2 mb-6">
      <strong className="font-semibold">Foco do Anúncio:</strong> {ad.focus}
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Headlines (Títulos)</h4>
        <ol className="list-decimal list-inside space-y-1 text-sm font-mono text-gray-900">
          {ad.headlines.map((headline, index) => (
            <li key={index}>{headline}</li>
          ))}
        </ol>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Descriptions (Descrições)</h4>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          {ad.descriptions.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ol>
      </div>
    </div>
  </article>
);


const AdCreatives: React.FC = () => {
  return (
    <Section title="4. Criativos de Anúncio (Copy Search Ads)" id="criativos-anuncios">
      <p className="text-gray-700 leading-relaxed">
        Anúncios focados em mitigar fraquezas (baixa credibilidade digital) e explorar forças (GAF Master Elite, 15+ anos, Foco em Sinistros).
      </p>

      <div className="mt-8 mb-12">
        <h3 className="text-2xl font-semibold text-slate-800 mb-4 border-b pb-2">Exemplos Visuais (Mockups)</h3>
        <p className="text-gray-600 mb-6">Abaixo estão exemplos de como os anúncios podem aparecer nos resultados de busca do Google. Note que estes são exemplos ilustrativos para demonstrar o formato e podem não refletir o texto final dos criativos.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Desktop</h4>
            <DesktopAdMockup />
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Mobile</h4>
            <MobileAdMockup />
          </div>
        </div>
      </div>
      
      {adCreativeData.map((ad, index) => (
        <AdGroup key={index} ad={ad} />
      ))}
    </Section>
  );
};

export default AdCreatives;
