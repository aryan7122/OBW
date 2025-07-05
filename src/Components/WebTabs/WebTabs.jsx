import React, { useState, useEffect } from 'react';
import './WebTabs.scss';
import imgCLINICicon from '../../assets/Clinical Concerns/icon/cosmetic-surgery_5506893.png';
import imgSALONicon from '../../assets/Clinical Concerns/icon/like_5498753 1.svg';

const WebTabs = () => {
    const [pageTab, setPageTab] = useState('CLINIC');

    // Check localStorage on mount
    useEffect(() => {
        const savedTab = localStorage.getItem('activeTab');
        if (savedTab) {
            setPageTab(savedTab);
        }
    }, []);

    const handlePageTab = (tab) => {
        setPageTab(tab);
        localStorage.setItem('activeTab', tab); // Save to localStorage
    };

    return (
        <div className='WebTabs'>
            <div className="left_tab">
                <div
                    className={`btn_wt  ${pageTab === 'CLINIC' ? 'active' : ''}`}
                    onClick={() => handlePageTab('CLINIC')}
                >
                    <img src={imgCLINICicon} className="img_wt" />
                    CLINIC
                </div>
            </div>
            <div className="Right_tab">
                <div
                    className={`btn_wt ${pageTab === 'SALON' ? 'active' : ''}`}
                    onClick={() => handlePageTab('SALON')}
                >
                    <img src={imgSALONicon} className="img_wt" />
                    SALON
                </div>
            </div>
        </div>
    );
};

export default WebTabs;
