import "./home.css";
import { quizCategories } from "../../db/categories";
import {Navbar,Footer} from '../../components/allComponents'
export const Home = () => {
  return (
    <>
    <Navbar />
      <main className="category-container">
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
