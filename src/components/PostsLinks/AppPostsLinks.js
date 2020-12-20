import React, { useState, useEffect } from "react";
import PostsLinks from "./PostsLinks";
import WrapperList from "../../components/WrapperList";
import { ALLPOSTS } from "../../query-examples";

export default function App() {
  const MyList = WrapperList(PostsLinks);
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
