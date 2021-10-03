import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getGame } from "../store/action/game";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Game() {
  const dispatch = useDispatch();
  const { games, isLoading } = useSelector(
    (state) => state?.listGames?.allGameList
  );
  // console.log(games);
  useEffect(() => {
    dispatch(getGame());
  }, [dispatch]);

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {games?.results?.map((results, index) => (
          <div className="col">
            <div className="card">
              <Link
                style={{ textDecoration: "none" }}
                to={`/detail/${results.id}`}
              >
                <img
                  src={results.background_image}
                  className="card-img-top"
                  alt="..."
                />
              </Link>

              <div className="card-body">
                <h5 className="card-title">{results.name}</h5>
                {results.genres.map((genres, index) => (
                  <p className="card-text">{genres.name}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
