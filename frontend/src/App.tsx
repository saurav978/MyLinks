import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { DashboardPage } from "./pages/DashbordPage";
import TweetsPage from "./pages/TweetsPage";
import VideoPage from "./pages/VideoPage";
import DocumentsPage from "./pages/DocumentsPage";
import LinksPage from "./pages/LinksPage";
import TagsPage from "./pages/TagsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashbord" element={<DashboardPage />}>
          <Route index element={<TweetsPage />} />
          <Route path="/dashbord/videos" element={<VideoPage />} />
          <Route path="/dashbord/documents" element={<DocumentsPage />} />
          <Route path="/dashbord/links" element={<LinksPage />} />
          <Route path="/dashbord/tags" element={<TagsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
