import "./home.css";
import { quizCategories } from "../../db/categories";
import { Navbar, Footer } from "../../components/allComponents";
import { NavLink } from "react-router-dom";
import { useRuleModalContext } from "../../context/ruleModal/ruleModalContext";
export const Home = () => {
  const {setIsRulesDisplay} = useRuleModalContext();
  return (
    <>
      <Navbar />
      <div className="heading-home">
        <h1>Welcome to the quiz </h1>
        <p>Select a category</p>
      </div>
      <main className="category-container">
        {quizCategories.map((item) => {
          return (
            <NavLink to={`/quiz/${item.id}/${item.name}`} key={item.id} className="category-link" onClick={()=>setIsRulesDisplay(true)} >
              <div className="category-card" >
              <img src={item.img} className="category-img" alt="categories" />
              <div className="center">{item.name}</div>
            </div>
            </NavLink>
          );
        })}
      </main>
      <Footer />
    </>
  );
};
