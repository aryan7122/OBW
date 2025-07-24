import React, { useContext } from 'react';
import './WebTabs.scss';

import imgCLINICicon from '../../assets/Clinical Concerns/icon/cosmetic-surgery_5506893.png';
import imgSALONicon from '../../assets/Clinical Concerns/icon/like_5498753 1.svg';
import { TabContext } from '../../util/TabContext';
import { Link } from 'react-router-dom';

const WebTabs = () => {
    const { pageTab, changeTab } = useContext(TabContext);

    return (
        <div className='WebTabs'>
            <div className="left_tab">
                <Link to="/" >
                    <div
                        className={`btn_wt  ${pageTab === 'CLINIC' ? 'active' : ''}`}
                        onClick={() => changeTab('CLINIC')}
                    >
                        <img src={imgCLINICicon} className="img_wt" />
                        CLINIC

                    </div>
                </Link>
            </div>
            <div className="Right_tab">
               <Link to="/" >

                <div
                    className={`btn_wt ${pageTab === 'SALON' ? 'active' : ''}`}
                    onClick={() => changeTab('SALON')}
                >
                    <img src={imgSALONicon} className="img_wt" />
                    SALON
                </div>
               </Link>
            </div>
        </div>
    );
};

export default WebTabs;
