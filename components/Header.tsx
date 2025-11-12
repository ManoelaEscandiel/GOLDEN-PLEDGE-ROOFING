
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-6xl mx-auto py-4 px-4 sm:px-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Plano de Mídia | Google Ads</h1>
          <p className="text-md text-gray-600">Golden Pledge Roofing</p>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-gray-600 font-medium">
            <li><a href="#intro" className="hover:text-red-600 transition duration-300">Visão Geral</a></li>
            <li><a href="#estrutura-campanha" className="hover:text-red-600 transition duration-300">Estrutura</a></li>
            <li><a href="#estudo-palavras-chave" className="hover:text-red-600 transition duration-300">Keywords</a></li>
            <li><a href="#projecoes" className="hover:text-red-600 transition duration-300">Projeções</a></li>
            <li><a href="#criativos-anuncios" className="hover:text-red-600 transition duration-300">Criativos</a></li>
            <li><a href="#recomendacoes" className="hover:text-red-600 transition duration-300">Recomendações</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
