import React, { createContext, useState, useEffect } from 'react';

export const TabContext = createContext();

export const TabProvider = ({ children }) => {
  const [pageTab, setPageTab] = useState('CLINIC');

  useEffect(() => {
    const detectTabFromHostname = () => {
      const hostname = window.location.hostname;

      if (hostname.includes('obwsalon.com')) {
        return 'SALON';
      } else if (hostname.includes('obwclinic.com')) {
        return 'CLINIC';
      } else {
        const savedTab = localStorage.getItem('activeTab');
        return savedTab || 'CLINIC';
      }
    };

    const tab = detectTabFromHostname();
    setPageTab(tab);
  }, []);

  const changeTab = (tab) => {
    setPageTab(tab);
    localStorage.setItem('activeTab', tab);
  };
  // const changeTab = (tab) => {
  //   localStorage.setItem('activeTab', tab);

  //   if (tab === 'SALON') {
  //     window.location.href = 'https://www.obwsalon.com';
  //   } else if (tab === 'CLINIC') {
  //     window.location.href = 'https://www.obwclinic.com';
  //   }
  // };

  return (
    <TabContext.Provider value={{ pageTab, changeTab }}>
      {children}
    </TabContext.Provider>
  );
};
