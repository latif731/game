import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getGameGenre } from "../store/action/genres";

export default function ColorTabs() {
  const [value, setValue] = React.useState("one");
  //test
  const dispatch = useDispatch();
  const { genre, itLoading } = useSelector((state) => state?.genres?.genreGame);
  console.log(genre);

  useEffect(() => {
    dispatch(getGameGenre());
  }, [dispatch]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", backgroundColor: "black", color: "white" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="main"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
        <Tab value="four" label="Item Four" />
        <Tab value="five" label="Item Five" />
        <Tab value="six" label="Item Six" />
      </Tabs>
    </Box>
  );
}
