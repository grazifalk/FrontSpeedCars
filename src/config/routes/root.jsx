import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home";

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home /*increaseFontSize={increaseFontSize} decreaseFontSize={decreaseFontSize} checar={checar}  HandledarkMode={HandledarkMode}*/
            />
          }
        />
        {/* <Route path="*" element={<RedirectTo rota={"/"} />} /> */}
        {/* <Route path="#" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
