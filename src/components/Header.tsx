import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="header-title">
        <svg
          width="60"
          height="40"
          viewBox="0 0 86 54"
          className="logo"
        >
          <path
            d="M39.2679 0L35.3899 15.1144C34.5944 17.6998 31.7107 19.8874 28.827 19.8874H28.5287C25.5456 19.8874 23.7557 17.6998 24.4518 15.015L28.3298 0.0994371H8.04466L2.17787 23.0694H56.8683L60.9452 7.06004L68.9996 26.2514L51.9959 41.9625L55.3767 28.8368H0.686313L0.288564 30.4278C-1.10356 35.9962 2.67506 40.4709 8.74072 40.4709H28.827L25.645 53H59.1554L85.5062 28.5385L73.5737 0H39.2679Z"
            fill="#315AB6"
          />
        </svg>
        <h1 className="title">Сменная выработка станков № 3</h1>
      </div>
      <div className="legend">
        <span className="legend-item legend-item-ready">Изготовлено / </span>
        <span className="legend-item legend__item-not-ready">Осталось</span>
      </div>
    </header>
  );
};

export default Header;
