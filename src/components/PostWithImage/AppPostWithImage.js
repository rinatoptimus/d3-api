import React, { useState, useEffect } from "react";
import PostWithImage from "./PostWithImage";
import WrapperList from "../../components/WrapperList";
import { ALLPOSTS } from "../../query-examples";

export default function App() {
  const MyList = WrapperList(PostWithImage);
  const [initialState, stateChanger] = useState({
    loading: false,
    items: null
  });

  useEffect(() => {
    stateChanger({ loading: true });
    const apiUrl = `${ALLPOSTS}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        stateChanger({ loading: false, data });
      });
  }, [stateChanger]);

  return <MyList isLoading={initialState.loading} myData={initialState.data} />;
}
