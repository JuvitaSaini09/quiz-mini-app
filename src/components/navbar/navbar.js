import "./navbar.css";
export const Navbar = () => {
  return (
    <>
      <nav>
        <h1 className="title">Quartz Quiz</h1>
        <ul className="linksInNavbar">
          <li>Home</li>
          <li>Quiz</li>
        </ul>
      </nav>
    </>
  );
};