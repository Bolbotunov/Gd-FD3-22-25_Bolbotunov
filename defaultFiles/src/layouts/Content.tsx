import First from "../pages/HomePage";
import { Routes, Route } from "react-router";
import Third from "../pages/Third";
import { ThirdSubPage } from "../pages/ThirdSubPage";
import { PhotosPage } from "../pages/PhotosPage";
import ErrorPage from "../pages/ErrorPage";
import { MyContent } from "../styles/MyContent.styled";
import NotFoundPage from "../pages/NotFoundPage";
import { Second } from "../pages/Second";
import SecondSubPage from "../pages/SecondSubPage";

export default function Content() {
  return (
    <>
      <MyContent>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/second/:id" element={<SecondSubPage />} />
          <Route path="/third" element={<Third />} />
          <Route path="/third/:id" element={<ThirdSubPage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MyContent>
    </>
  );
}
