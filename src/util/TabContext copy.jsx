import React, { createContext, useState, useEffect } from 'react';

export const TabContext = createContext();

export const TabProvider = ({ children }) => {
    const [pageTab, setPageTab] = useState('CLINIC');

    useEffect(() => {
        const savedTab = localStorage.getItem('activeTab');
        if (savedTab) {
            setPageTab(savedTab);
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
