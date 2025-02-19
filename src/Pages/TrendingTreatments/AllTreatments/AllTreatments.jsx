import React, { useState } from 'react';
import './AllTreatments.scss';
import icon1 from '../../../assets/TrendingTreatments/skin.png'
import icon2 from '../../../assets/TrendingTreatments/hairs.png'
import icon3 from '../../../assets/TrendingTreatments/body.png'
import icon4 from '../../../assets/TrendingTreatments/bue.png'
import { ArrowRight } from 'lucide-react';
import BookAppointment from '../../../Components/BookAppointment/BookAppointment';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import placeholderImg from '../../../assets/TrendingTreatments/LazyLoadImage.png'

const treatmentData = [
    {
        category: 'Skin & Face care',
        title: 'Botulinum toxin injection',
        imgUrl: 'https://s3-alpha-sig.figma.com/img/919d/d91f/fc17b7d5de4493ac7f04790182211636?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=smkPEQghR8uKyVyIubNEYSDH8qrJlnY30UH-DoBYk-ky4JfsVpwYj4LpuOSkVC8uCP7z-GcePpGofz7AxAH0u7AwmRzYUu0mk41muoh61WKo65Bfp22Id1394rkDtg5I5daoAleTGwWw3s~-gEUo8ditXlNL2CONOrWB7BkcCtFrlyQEVicVF8t4Sh0SIIYKIBv40t04rOhYbdLcdeXKj5SLLw7Sy-KF7dJ~BTT23eICoz7dwrCgukeAJV~tAlrOqEO-4Jn4FDOCreQI6t6toGPDe8NgpkCqSPSv1buf2UhCFSaVFxP3sUf521LazlRCTJiZsvQHfgph3epkuPFgFQ__',
    },
    {
        category: 'Skin & Face care',
        title: 'Dermal Fillers',
        imgUrl: 'https://s3-alpha-sig.figma.com/img/88e2/def0/336d08facaf20950230d3a872f332912?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iwfDyq23Hy0o3vpyk1UeuBtvMJwqMbVLLXhyhgOVBG4Ob~r7aTm-Ywefv0VdyYgz7mlmpmtaJF9D9lK3yDU8-d5LqEwFiZImagCjXGn8IZxsHYZfGqxkFNE41vsvVHOYolnfh5CRTMeVqiJK6guXXTnhg-ltmh7ioLE4HB9L-2F3S7KAnVmESHDBQ8I~AeZ-YZZrw7qhWXAo2U22TwgGKWB4Y2Ahn0F1U0e4PkwCekEtoo3MYTOedJJbYS7kBqrdNHS2XQKy0Uv93DQ31brxoEx51-GsKNO5J6WjapsPPeuPFmUIkpcnz4eggvuYhSOxXaN0jpAiyEelaoDeZICgfA__',
    },
    {
        category: 'Body care',
        title: 'Dermapen',
        imgUrl: 'https://s3-alpha-sig.figma.com/img/af12/7998/c04357ff747683a6bd3f0a7354d44fcb?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OxbsqZ-7GolJeFbrsmKkW7-QtiKhQP2nrkxsAeGRpxd~LHp5TJNxAbgswH~eDO8V4-lJpZLBlb4atmO02WKqocl8jIe6FmjWYzSjV2SmhpUREWg9Les~Z2sGWHutlfpJriHMr31ckmpM64HgLihK32OnTXMRncCbwqnqmIGFMzrGZ~Htf7~aMQIj81gNPl21-Cr8Dm~tdGqO7Tf4Flp4aGW9PsGUUHK8vYDBzxaxvMQAXGrl65yxAGe~0Mpt3Sbp4zbaOJfeYQeh1wJMgnnkbbn6oBsX1e3jROKjXQdO9-Rux2tCydEUViVpHvE-KSLd~SJ1MofDmowMjkT0ISX0MA__',
    },
    {
        category: 'Skin & Face care',
        title: 'Thread Lifts',
        imgUrl: 'https://s3-alpha-sig.figma.com/img/752b/8dd9/dac70b9b5759f04f9ca880812ac463ce?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=csu9j7oCGTdNpruwIpWHipr4LsBCAU1xqxnn11M3k3-U2lLogGaf9nemNUhAouHumOdJfz7Xwkd8uLXKOeZN4S1ijMyha5Xnw3TZTrapKEhrW8ds3wzOphua4h4ele2fN8BSX9Q6avK-L9SwEEQW3Z5tzHhdVn2htO2qD8P2E4hhM9gECqDgRYjOY9tOBqR38IsowtQdU5WZ7PdnRKGxbhRCatvr-mHM6viXqPnfH3KeIogs2tleJbmiWUQvzTY8bgUl0NAI4zfthSQEW9iR74LpIUsBnistJZWLgvg17WAdscxkXvaoiLkjWQEDchv63JmvNJDEkXh-8XLuNEcDjQ__',
    },
    {
        category: 'Skin & Face care',
        title: 'LLLT phototherapy',
        imgUrl: 'https://s3-alpha-sig.figma.com/img/53ac/c5fd/e3daff07789c92e687809fda18a42250?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JSs8lUWx10EY2RP~~etGZpj4chVg9QUlFoK28F4YPZokd8ej3wCRPEnSrR0fuh7SKSwEXJAYyuKM9ylVDqRbbdMV0wU4XzgkwOfU-CBM983xkaIyXvvK3dFaue6ZPFEiuYYH-hk0cnJOYqe7ysInryPjxcCcn50QhsS5iBYQtmRUqXVNvXKRgXEo8w4drv9AXHfMDlnHylHfqSlB8JF~uNz7ASXwhKGmYtif~rb48Mg2WKR0BMJTax3SMZDacivfaJyEl0AVNUp5ujqtbRPuM3T8fPopYGkWvzWm3WcJWs-dl9xfqnMk21ZTSJjaL01bUI3EezxJI4vROtjGfZCvcQ__',
    },
    {
        category: 'Skin & Face care',
        title: 'micro-needling pen',
        imgUrl: 'https://s3-alpha-sig.figma.com/img/970f/5ceb/a6fc36cf5faf10452a0f8e81c315cd0a?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KLp5y9KGe94o~pqyyU9UlHrmq5FsnNJIowYXjiuSxK~Esjrg8Ix9dbr6TVfOFV2wBqm~H0jDi7YYCHYDfRtmuU3fcphoRAOLjeJzlKN2bfHfODy-hjqOob4ehp~VHPom7hqyp3CgZeuVTbDNpnorE7om8Y5CsWzfn-jBZRPrt1GrBWpWiVNnmUEk07WiRYe2oQFPPxPaCRj3Q8VYB3sqrH8y5qbks3D477uiPXgf8U9zQ3JDpEplSqwtEv122wZDUNuak9nnLqz3YKe7~AncMay3GTBeSKyitsw8Tdf4SDwX4yfjpFeZT~BVc4z4j2ZJMRABwZPv4dtjC2r1hDmj6w__',
    },
    {
        category: 'Skin & Face care',
        title: 'PRP',
        imgUrl: 'https://s3-alpha-sig.figma.com/img/4dda/f488/4324673c20a85f830643b5f78a6e9573?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Qf~6PpDUYfqDf-X04e3qXdywWOds~d2iDbdKPF4hqtXXLyzixDGpqOcQLqBSALVanyRmaDgoC53EFA7AslNnFU1SANmtZJCYF1tGapsgNCfgHfRFWfmsMjecfHRz2l4IkFNy-5TIDVHoDuTUdwsDxLiJizapraocGFIRmx0HoMiYu8N1yL0jHct386DtNL4sQK~bqLtgP40uKrJYgKSLBr1fLpfejYkybGAkKAerePG4qmQt-U~pK7nL5MxUMJXvPJjJFJzL06LgfB~zAMq28jt1wVLGYt0mDB3fgCbirzCtqz0b99X~C0Xl5s1M8SfHCeXclLbMnSTUBH21z8nF5Q__',
    },
    {
        category: 'Body care',
        title: 'GFC',
        imgUrl: 'https://s3-alpha-sig.figma.com/img/103e/b95c/abc171674a54e837f1cb56f0b98f6a74?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tUB4gY0UGCNei1npHACM21f0qVtXUa7KY9Toz0q6tgzUGRicp2G5XXtlYbbS-Ua5WF0fPn06095~GOY8tZL5fBEIvsrbwGNGpdoMoL6b6WnldhSLoyQA2L0WnAwch~aQVsvROUvCvvuHwLox3kOc3OEQX2RsI5QcVMtt5p68NAjYgQTopUU3qY3Kc-NXBHSh9slVqQX2mG7ltjrEtYeaD~z86B2~T9lh7D2mX24Lzop2e6lzgkPvtBWhgCtSt4RhYpFdKDB0MOxVGBw69NHUcdR~weL11fwKCQt9IgTRKMD-NwUrmDUzpr8kDnStnKD5dgRsmbDcDHCKX5194hvTQA__',
    },
    {
        category: 'Scalp & Hair care',
        title: 'minor surgical excision',
        imgUrl: 'https://s3-alpha-sig.figma.com/img/c363/448c/dda2f72d6878c92033eb55d265753fe8?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XUuNJGA0iEKTUi33oMRXYmR~HlXp4vXbntAWkuQYEGEaxTCilOAn3yOYIMk~LC01w~lRLHqaj~PwQftZ1tHNpMJmedUcQu-SZtCaKRHdESrdx~Y9nDHwemupnCfZLXo2weTbo6Gy2x6jRi1P9uHzPcb3MhKX~WuU26P6PeDJazt7Ch1EP~Zoo6WjOMl87MkRku458jOmhqR~ubsR7sbWhzCFF4A6lNL1l-A2ZnZR~8Mtv096wQkbFgcTtxhvADlgvQhRRvCXkkjBAOJw~atjjV8B62LSV7LOfM3lEEzQ69x61BbdRlwVpMcuO5zVb8L4DIO4Jex~nC14gFAn4MitkQ__',
    },
    {
        category: 'Beautifying/cosmetic surgery',
        title: 'Surgical cyst removal',
        imgUrl: 'https://s3-alpha-sig.figma.com/img/3e71/2563/401adb4d6df82d4327db0855a8c3cd86?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Zobz~~JgeqOg3r-TP~nyrVluT4NcnN2sQAyX3Wqdk6mzu0OTJprVhBVL~zGsY6WosFngGNsZnbaaJPJJccoMGzg7o-NmBGXsMxh-CGKA-il3c9W3pi61IJlSCBAUtCR0bPC0BKyXs2i1si2PLmr682IvDTwTtV9jCrDkhLOmIuIBsskEPQCM2WSQzPOdDb8frz~mw7~5S-yZiEDbYO2MJ8zeBn2eH7yUmFLMmWegIJM~pPCA4Kfa7OYKWHNG0Yop2ZR3sxBOgOdxwF8DFctoTvNu-BG9z1r71dvZmyC0jVHy9wybLR4L2jWIRgUvchcbEqjuoTuydkadgFjFYAB2kQ__',
    },
    {
        category: 'Skin & Face care',
        title: 'Lobuloplasty',
        imgUrl: 'https://s3-alpha-sig.figma.com/img/26f5/7d23/2d766811ca76477747d4c366de062d23?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jW-8Gw2J94LnZru-DdLIWNLAf465JBh4QcXX9TZ1-JJBbbQYhlUkRQDOl9DePpEaOW6JQgO0DyMMJWyOVTUWaWWhknKlHcs~4jKQguuzEOcN9R8voZ9DDHmXoyUkTZc8UFssGEFqdRO73Pswi9vVMivEmfcU94cKFaBCo5MhNMi0WwnhttEraQdtxQh2tCpQZ0zoIEjQfTCKmnmnYKoXLyV6KN8nlcKXuWro5RGVIyoBaXU2s8w6LXkRlqTpaxDXWjHA17zKobLxYUBkbjqTriwrJeAGppp9vrCr~KU6Hh26nZiciCZL1iKvD5ZNoujt67vzjBr7bJvRwaOHCoNoDA__',
    },
    {
        category: 'Beautifying/cosmetic surgery',
        title: 'Dimpleplasty',
        imgUrl: 'https://s3-alpha-sig.figma.com/img/2bf9/d2de/c20b707027b14157cbdac4895c96ca1c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r6RYFLINdIbMFeiI7FkqvxPHZNH5h5kLo1JMfROnKVdf3BUBCgSb3xFPFq1Z3VwHZgvwxvwThCLax66kqzM5zMZj8S85o9iNR-AbosaYtKOwrABPwBnBNKSh8Xs59wPCxm-xa0ygBSOIBXE4q9RRTItOi4iDh256PSn8R2sjXOGZZ0DJzudlKHL8bIx8jVB9AFYwXDW0x0XY7Yyz6dNpfblR2hLuiXgSBtVXqZdGXIAD5bLTyWLqbPVDzUFIRXV041hYeKkg0YAb8CGSa522ncheC6S-BmbCyrZqPJ5FpQDlJOwnYwmmXM8x0f8dVelbi~JU9BUULPaWU2~FBp0FlQ__',
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

    return (
        <div className="treatments-page">
            <header className="treatment-header">
                <span className='card-Treatments'>Treatments</span>
                <h1>All Treatments</h1>
                <p>Explore in-depth expert advice, insightful tips, and the most current trends in skincare, haircare, and a variety of aesthetic treatments to enhance your beauty routine.</p>
                <div className='bott-m'>
                    <span className="unFill-separator">&#9734;</span>
                    <span className='p_home'>Home</span>
                    <span className="breadcrumb-separator">&#9733;</span>
                    <span className='p'>All Treatments</span>
                </div>
            </header>

            <div className="sectionCard">
                <h1>All treatments</h1>
                <div className="navtab">
                    <nav className="treatment-filters">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={selectedCategory === category.name ? 'active' : ''}
                                onClick={() => setSelectedCategory(category.name)}
                            >
                                {category.icon && <img src={category.icon} alt={category.name} className="category-icon" />}
                                {category.name}
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="treatment-cards">
                    {filteredData.map((item) => (
                        <div className="treatment-card" key={item.id}>
                            <div className="img">
                                <LazyLoadImage
                                    effect="blur"
                                    src={item.imgUrl}
                                    once={true}
                                    alt={item.title}
                                    wrapperProps={{
                                        style: { transitionDelay: "1s" },
                                    }}
                                    placeholderSrc={placeholderImg}
                                    loading="lazy"

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
                <button className="LoadMoreTreatments">
                    Load More Treatments <ArrowRight className="arrow-icon" size={20} strokeWidth={3} />
                </button>
            </div>
            {showModal && <BookAppointment onClose={closeModal} />}
        </div>
    );
};

export default AllTreatments;
