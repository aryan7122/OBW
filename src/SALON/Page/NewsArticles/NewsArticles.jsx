import React from "react";
import "./NewsArticles.scss";
import img1 from "../../../assets/SALON/hero/NewsArticles/img1.jpg";
import img2 from "../../../assets/SALON/hero/NewsArticles/img2.jpg";
import img3 from "../../../assets/SALON/hero/NewsArticles/img3.jpg";
import { useNavigate } from "react-router-dom";
import WebPImage from "../../../util/WebPImage";

const articles = [
  {
    title: "Why Every Woman Needs a 'Reset Ritual' And How a Salon Visit Can Be Yours",
    description:
      "In today’s fast-paced world, self-care isn’t just a luxury; it’s a necessity. Between work deadlines, personal responsibilities, and life’s everyday demands, women often put themselves last.",
    date: "10July",
    image: img1,
  },
  {
    title: "Tame the Frizz: Hair Care Tips for the Rainy Season ",
    date: "10July",
    image: img2,
  },
  {
    title: "Why a Hair Spa Is More Than Just Pampering – It’s Hair Therapy ",
    date: "10July",
    image: img3,
  },
];

export default function NewsArticles() {
      const navigate = useNavigate();
 const HandleNavigation = (title) => {
        window.scrollTo(0, 0);
        navigate(`/blogs`);
    };
  return (
    <section className="news-section">
      <div className="card">
        {articles.slice(0, 1).map((article, index) => (
          <div
            className={`news-card ${index === 0 ? "large" : "small"}`}
            key={index}
          >
            <WebPImage src={article.image} alt={article.title} className="news-img" />
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
        <div className="circle" onClick={HandleNavigation}>
          <span className="arrow">↗</span>
        </div>
        <p>See All</p>
       </div>
      </div>
    </section>
  );
}
