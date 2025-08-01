import React, { createContext, useState, useEffect } from 'react';

export const TabContext = createContext();

export const TabProvider = ({ children }) => {
  const [pageTab, setPageTab] = useState('CLINIC');

  useEffect(() => {
    const hostname = window.location.hostname;

    if (hostname.includes('obwsalon.com')) {
      setPageTab('SALON');
    } else if (hostname.includes('obwclinic.com')) {
      setPageTab('CLINIC');
    } else {
      // localhost ya unknown domain ke liye saved tab ya default
      const savedTab = localStorage.getItem('activeTab');
      if (savedTab) {
        setPageTab(savedTab);
      } else {
        setPageTab('CLINIC'); // default
      }
    }
  }, []);

  const changeTab = (tab) => {
    setPageTab(tab);
    localStorage.setItem('activeTab', tab);
  };

  return (
    <TabContext.Provider value={{ pageTab, changeTab }}>
      {children}
    </TabContext.Provider>
  );
};
