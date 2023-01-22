import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { Error404, ErrorBoundary, PrivateRoute } from "./components";
import {
  HomePage,
  CocktailsPage,
  SigninPage,
  RegisterPage,
  FavsPage,
  HistoryPage,
} from "./pages/";

import "./styles/global.css";

function App() {
  return (
    <div className="app">
      <Layout>
        <ErrorBoundary>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/cocktails" element={<CocktailsPage />} />
            <Route path="/cocktails/:id" element={<CocktailsPage />} />
            <Route
              path="/favs"
              element={
                <PrivateRoute component={<FavsPage />} fbPath="/register" />
              }
            />
            <Route
              path="/history"
              element={
                <PrivateRoute component={<HistoryPage />} fbPath="/register" />
              }
            />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </ErrorBoundary>
      </Layout>
    </div>
  );
}

export default App;
