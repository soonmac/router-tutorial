import { Route, Routes } from "react-router-dom";
import About from "./About";
import "./App.css";
import Article from "./Article";
import Articles from "./Articles";
import Home from "./Home";
import Profile from "./Profile";
import Layout from "./Layout";
import NotFound from "./NotFound";
import Login from "./Login";
import MyPage from "./MyPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>     
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
