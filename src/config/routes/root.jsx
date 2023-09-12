import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home";
import { Register } from "../../pages/register";
import { Renter } from "../../pages/renter";

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
        <Route
          path="/register"
          element={
            <Register /*increaseFontSize={increaseFontSize} decreaseFontSize={decreaseFontSize} checar={checar}  HandledarkMode={HandledarkMode}*/
            />
          }
        />
        <Route
          path="/renter"
          element={
            <Renter /*increaseFontSize={increaseFontSize} decreaseFontSize={decreaseFontSize} checar={checar}  HandledarkMode={HandledarkMode}*/
            />
          }
        />
        {/* <Route path="*" element={<RedirectTo rota={"/"} />} /> */}
        {/* <Route path="#" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
