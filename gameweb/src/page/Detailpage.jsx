import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getGameDetail } from "../store/action/gamedetail";
import { textAlign } from "@mui/system";

const Detailpage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detail, inLoading } = useSelector(
    (state) => state?.gamedetail?.detailGame
  );
  console.log(detail);
  useEffect(() => {
    dispatch(getGameDetail(id));
  }, [dispatch]);
  return (
    <div>
      <div>
        <div>
          <h1>{detail?.name}</h1>
        </div>
        <div>
          <h2 style={{ textAlign: "center", margin: "50px 0" }}>Description</h2>
          <p style={{ margin: "0 20px" }}>{detail?.description_raw}</p>
        </div>
        <div style={{ margin: "20px 20px" }}>
          <h6>Feature:</h6>
          {detail?.tags?.map((tags, key) => (
            <li>{tags?.name}</li>
          ))}
        </div>
        <div>
          <h2 style={{ textAlign: "center" }}>System Requirement</h2>
          {detail?.platforms?.map((platforms, key) => (
            <li style={{ margin: "0 300px" }}>{platforms?.platform?.name}</li>
          ))}
        </div>
        <div style={{ margin: "50px 0" }}>
          <img
            style={{ width: "100vw", margin: "50px 0" }}
            src={detail?.background_image}
            alt=""
          ></img>
          <img
            style={{ width: "100vw" }}
            src={detail?.background_image_additional}
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
