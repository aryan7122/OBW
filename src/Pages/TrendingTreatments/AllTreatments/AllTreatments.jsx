import React, { useEffect, useRef, useState } from 'react';
import './AllTreatments.scss';
import icon1 from '../../../assets/TrendingTreatments/skin.png'
import icon2 from '../../../assets/TrendingTreatments/hairs.png'
import icon3 from '../../../assets/TrendingTreatments/body.png'
import icon4 from '../../../assets/TrendingTreatments/bue.png'
import { ArrowRight } from 'lucide-react';
import BookAppointment from '../../../Components/BookAppointment/BookAppointment';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
import placeholderImg from '../../../assets/TrendingTreatments/LazyLoadImage.png'
import WebPImage from '../../../util/WebPImage';

const treatmentData = [
    {
        category: 'Skin & Face care',
        title: 'Botulinum toxin injection',
        imgUrl: 'https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/Treatments/q35wpx5spp1uh837lmub',
    },
    {
        category: 'Skin & Face care',
        title: 'Dermal Fillers',
        imgUrl: 'https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/Treatments/kvqisdrdu47p9dsub8hm',
    },
    {
        category: 'Body care',
        title: 'Dermapen',
        imgUrl: 'https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/Treatments/mxulimvvas9w67hmhilj',
    },
    {
        category: 'Skin & Face care',
        title: 'Thread Lifts',
        imgUrl: 'https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/Treatments/jbxgcaekf58rpd9nb8hw',
    },
    {
        category: 'Skin & Face care',
        title: 'LLLT phototherapy',
        imgUrl: 'https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/Treatments/ojzdpuv3ewimvvvob5tx',
    },
    {
        category: 'Skin & Face care',
        title: 'micro-needling pen',
        imgUrl: 'https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/Treatments/y1ahi446rybcqs6n4ssp',
    },
    {
        category: 'Skin & Face care',
        title: 'PRP',
        imgUrl: 'https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/Treatments/bniw9jgm6gokbobtjccb',
    },
    {
        category: 'Body care',
        title: 'GFC',
        imgUrl: 'https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/Treatments/blakq6ebxgeb8l4ds85g',
    },
    // {
    //     category: 'Scalp & Hair care',
    //     title: 'minor surgical excision',
    //     imgUrl: '',
    // },
    // {
    //     category: 'Beautifying/cosmetic surgery',
    //     title: 'Surgical cyst removal',
    //     imgUrl: 'https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/Treatments/tvg5guu1k0w92zmbtrjm',
    // },
    {
        category: 'Skin & Face care',
        title: 'Lobuloplasty',
        imgUrl: 'https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/Treatments/tvg5guu1k0w92zmbtrjm',
    },
    {
        category: 'Beautifying/cosmetic surgery',
        title: 'Dimpleplasty',
        imgUrl: 'https://res.cloudinary.com/dkxfvxdca/image/upload/f_auto,q_auto/v1/Clinical%20Concerns/Treatments/aavrbbxku6puhbu4lgvr',
    },

];

const categories = [
    { name: 'All', icon: null },
    { name: 'Skin & Face care', icon: icon1 },
    { name: 'Scalp & Hair care', icon: icon2 },
    { name: 'Body care', icon: icon3 },
    { name: 'Beautifying/cosmetic surgery', icon: icon4 },
];

const AllTreatments = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredData = selectedCategory === 'All' ? treatmentData : treatmentData.filter(item => item.category === selectedCategory);
    const [showModal, setShowModal] = useState(false);
    const handleBookNowClick = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    ///////////////////

    const [visibleCount, setVisibleCount] = useState(8); // Initially 8 cards
    const [itemsPerLoad, setItemsPerLoad] = useState(8);
    const [initialCount, setInitialCount] = useState(8);
    const buttonRef = useRef(null);
    useEffect(() => {
        const updateItemsPerLoad = () => {
            if (window.innerWidth < 568) {
                setVisibleCount(4); // Mobile pe 4 dikhao
                setItemsPerLoad(4);
                setInitialCount(4);
            } else {
                setVisibleCount(8); // Desktop pe 8 dikhao
                setItemsPerLoad(8);
                setInitialCount(8);
            }
        };

        updateItemsPerLoad();
        window.addEventListener("resize", updateItemsPerLoad);
        return () => window.removeEventListener("resize", updateItemsPerLoad);
    }, []);

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + itemsPerLoad);
    };
    const handleLoadLess = () => {
        setVisibleCount(initialCount);
        setTimeout(() => {
            buttonRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
    };

    return (
        <div className="treatments-page">
            <header className="treatment-header">
                <span className='card-Treatments'>Treatments</span>
                <h1>All Treatments</h1>
                <p>Explore in-depth expert advice, insightful tips, and the most current trends in skincare, haircare, and a variety of aesthetic treatments to enhance your beauty routine.</p>
                <div className='bott-m'>
                    <span className="unFill-separator">&#9734;</span>
                    <span className='p_home'><a href="/">Home</a></span>
                    <span className="breadcrumb-separator">&#9733;</span>
                    <span className='p'>All Treatments</span>
                </div>
            </header>

            <div className="sectionCard">
                <h1>All Treatments</h1>
                <div className="navtab">
                    <nav className="treatment-filters">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={selectedCategory === category.name ? 'active' : ''}
                                onClick={() => setSelectedCategory(category.name)}
                            >
                                {category.icon && <img src={category.icon} alt={category.name} className="category-icon" />}
                                <span style={{fontSize:"18px"}}> {category.name}</span>
                               
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="treatment-cards">
                    {filteredData.slice(0, visibleCount).map((item, index) => (
                        <div className="treatment-card" key={item.index}>
                            <div className="img">
                                <WebPImage
                                    src={item.imgUrl}
                                    once={true}
                                    alt={item.title}
                                />
                            </div>
                            <div className='about_action'>
                                <h3>{item.title}</h3>
                                <button onClick={handleBookNowClick} className="book-now">
                                    Book Now <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <button ref={buttonRef} className="LoadMoreTreatments" onClick={visibleCount < filteredData.length ? handleLoadMore : handleLoadLess}>
                    {visibleCount < filteredData.length ? "Load More" : "Load Less"}
                    <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                </button>
            </div>
            {showModal && <BookAppointment onClose={closeModal} />}
        </div>
    );
};

export default AllTreatments;
