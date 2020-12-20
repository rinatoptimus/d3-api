import React, { useState, useEffect } from "react";
import PostsPerPage from "./PostsPerPage";
import WrapperList from "../../components/WrapperList";
import { POSTSPERPAGE } from "../../query-examples";

export default function App() {
  const MyList = WrapperList(PostsPerPage);
  const [initialState, stateChanger] = useState({
    loading: false,
    items: null
  });

  useEffect(() => {
    stateChanger({ loading: true });
    const apiUrl = `${POSTSPERPAGE}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        stateChanger({ loading: false, data });
      });
  }, [stateChanger]);

  return <MyList isLoading={initialState.loading} myData={initialState.data} />;
}
