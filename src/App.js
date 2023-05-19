import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import EditProfile from "./pages/EditProfile";
import CreateProfile from "./pages/CreateProfile";
import TotalData from "./pages/TotalData";
import ViewPage from "./pages/ViewPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/createprofile":
        title = "";
        metaDescription = "";
        break;
      case "/totaldata":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
        <Route path="/" element={<ViewPage />} />
      <Route path="/editprofile" element={<EditProfile />} />
      <Route path="/createprofile" element={<CreateProfile />} />
      <Route path="/totaldata" element={<TotalData />} />      
    </Routes>
  );
}
export default App;
