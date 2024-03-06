import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Css/App.css";
import NavMovie from "./components/NavMovie";
import MovieList from "./components/MovieList";
import { dataMovie } from "./DB/data";
import AddMovie from "./components/AddMovie";
import CompFilter from "./components/CompFilter";
import WatchMovie from "./components/WatchMovie";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [data, setData] = useState(dataMovie);
  const handelAdd = (newMovie) => {
    return setData([...data, newMovie]);
  };

  //state for search Components
  const [searchTitle, setsearchTitle] = useState("");
  const [searchRate, setsearchRate] = useState("");
  const [searchGenre, setsearchGenre] = useState("");
  const [searchLang, setsearchLang] = useState("");

  return (
    <>
      <NavMovie />
      <div className="contentu">
        {/* <WatchMovie/> */}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <CompFilter
                  setsearchTitle={setsearchTitle}
                  setsearchRate={setsearchRate}
                  setsearchGenre={setsearchGenre}
                  setsearchLang={setsearchLang}
                />
                <MovieList
                  data={data}
                  searchTitle={searchTitle}
                  searchRate={searchRate}
                  searchGenre={searchGenre}
                  searchLang={searchLang}
                />
                <AddMovie funAdd={handelAdd} />
              </>
            }
          />
          <Route
            path="/:id"
            element={
              <WatchMovie
                data={data}
                setsearchTitle={setsearchTitle}
                setsearchRate={setsearchRate}
                setsearchGenre={setsearchGenre}
                setsearchLang={setsearchLang}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
