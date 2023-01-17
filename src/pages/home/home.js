import "./home.css";
import { quizCategories } from "../../db/categories";
import {Navbar,Footer} from '../../components/allComponents'
export const Home = () => {
  return (
    <>
    <Navbar />
    <div className="heading-home">
    <h1 >Welcome to the quiz </h1>
    <p>Select a category</p>
    </div>
      <main className="category-container" style={{border: '10px solid rgba(0,255,0,0.3)'}} >
        {quizCategories.map((item) => {
          return (
            <div className="category-card" key={item.id}>
              <img src={item.img} className="category-img" alt="categories" />
              <div className="center">{item.name}</div>
            </div>
          );
        })}
      </main>
      <Footer />
    </>
  );
};
