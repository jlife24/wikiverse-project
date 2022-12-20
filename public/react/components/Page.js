import React, { useState } from "react";
import apiURL from "../api";

export const Page = (props) => {
  const [page, setArticleData] = useState(undefined);
  const selectArticles = async () => {
    const res = await fetch(`${apiURL}/wiki/${props.page.slug}`);
    const data = await res.json();
    console.log(data);
    //update state
    setArticleData(data);
  };

  return (
    <>
      <h3 onClick={selectArticles}>{props.page.title}</h3>
    </>
  );
};
