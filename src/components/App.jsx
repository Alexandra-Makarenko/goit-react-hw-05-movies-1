import { Routes, Route,useLocation } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import  {lazy}  from "react";

const Movies = lazy(() => import("../pages/Movies/Movies"));
const Home = lazy(() => import("../pages/Home/Home"));
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews =  lazy(() => import("./Reviews/Reviews"));


export const App = () => {
  function NoMatch() {
  let location = useLocation();

  return (
      <p>
        No match for {location.pathname}
      </p>    
  );
}
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />}/>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NoMatch />}>
            </Route>
        </Route>        
      </Routes>
    </div>
  );
};
