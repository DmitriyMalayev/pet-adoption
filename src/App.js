import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import Search from "./components/search";
import PetDetailsPage from "./pages/detail";
import PetDetailsNotFound from "./pages/petDetailsNotFound";
import Root from "./components/root";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="/search" element={<Search />} />
      <Route path="/pet-details" element={<PetDetailsPage />} />
      <Route path="/pet-details-not-found" element={<PetDetailsNotFound />} />
      <Route />
    </Route>
  )
);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
