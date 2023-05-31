import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MainIndexTraditional from "./pages/MainIndexTraditional";
import Desktop4 from "./pages/Desktop4";
import MainIndexSimplified from "./pages/MainIndexSimplified";
import MainPageTraditionalSear from "./pages/MainPageTraditionalSear";
import SearchPageEasternDistrict from "./pages/SearchPageEasternDistrict";
import Desktop2 from "./pages/Desktop2";
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
      case "/desktop-4":
        title = "";
        metaDescription = "";
        break;
      case "/main-index-simplified":
        title = "";
        metaDescription = "";
        break;
      case "/main-page-traditional-search-result":
        title = "";
        metaDescription = "";
        break;
      case "/search-page-eastern-district":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainIndexTraditional />} />
      <Route path="/desktop-4" element={<Desktop4 />} />
      <Route path="/main-index-simplified" element={<MainIndexSimplified />} />
      <Route
        path="/main-page-traditional-search-result"
        element={<MainPageTraditionalSear />}
      />
      <Route
        path="/search-page-eastern-district"
        element={<SearchPageEasternDistrict />}
      />
      <Route path="/desktop-2" element={<Desktop2 />} />
    </Routes>
  );
}
export default App;
