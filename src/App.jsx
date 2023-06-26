import { BrowserRouter } from "react-router-dom";
import { Navbar, About, Contact, Experience, Feedbacks, Hero, Tech, Works, StarCanvas } from "./components"
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        3D Developer Portfolio
      </div>
    </BrowserRouter>
  );
};

export default App;