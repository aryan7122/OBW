import React from "react";
import "./NewsArticles.scss";
import img1 from "../../../assets/SALON/hero/NewsArticles/img1.png";
import img2 from "../../../assets/SALON/hero/NewsArticles/img2.png";
import img3 from "../../../assets/SALON/hero/NewsArticles/img3.png";

const articles = [
  {
    title: "The Ultimate Guide to Glowing Skin Before a Special Event",
    description:
      "Discover the perfect pre-event skincare routine including facials, hydrating treatments, and clinical therapies to look radiant on your big day.",
    date: "10July",
    image: img1,
  },
  {
    title: "7 Signs You Need a Hair Spa (And What to Expect)",
    date: "10July",
    image: img2,
  },
  {
    title: "Top 5 Salon Trends in Bangalore This Year",
    date: "10July",
    image: img3,
  },
];

export default function NewsArticles() {
  return (
    <section className="news-section">
      <div className="card">
        {articles.slice(0, 1).map((article, index) => (
          <div
            className={`news-card ${index === 0 ? "large" : "small"}`}
            key={index}
          >
            <img src={article.image} alt={article.title} className="news-img" />
            <div className="text">
              <h4>{article.title}</h4>
              {article.description && <p>{article.description}</p>}
              <div className="bottom">
                <span>{article.date}</span>
               <span className="read">Read more</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="see-all">
        <div className="right">
          <p className="tag">latest <br/> News & Articles</p>
          
          <p className="sub">
            Lorem ipsum dolor sit amet consectetur. Mattis sapien amet a
            egestas.
          </p>
        </div>
       <div className=" card2">
        {articles.slice(1, 3).map((article, index) => (
          <div
            className={`news-card ${index === 0 ? "large" : "small"}`}
            key={index}
          >
            <img src={article.image} alt={article.title} className="news-img" />
            <div className="text">
              <h4>{article.title}</h4>
              {article.description && <p>{article.description}</p>}
              <div className="bottom">
                <span>{article.date}</span>
                <span className="read">Read more</span>
              </div>
            </div>
          </div>
        ))}
      </div>
       <div>
        <div className="circle">
          <span className="arrow">↗</span>
        </div>
        <p>See All</p>
       </div>
      </div>
    </section>
  );
}
