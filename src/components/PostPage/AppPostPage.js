import React, { useState, useEffect } from "react";
import PostPage from "./PostPage";
import WrapperList from "../../components/WrapperList";
import AppPostComments from "./AppPostComments";
import { ALLPOSTS } from "../../query-examples";

export default function App() {
  const MyList = WrapperList(PostPage);
  const [initialState, stateChanger] = useState({
    loading: false,
    items: null
  });

  useEffect(() => {
    stateChanger({ loading: true });
    const CURRENT_POST_ID = "1277958";
    const apiUrl = `${ALLPOSTS}${CURRENT_POST_ID}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        stateChanger({ loading: false, data });
      });
  }, [stateChanger]);

  return (
    <div>
      <MyList isLoading={initialState.loading} myData={initialState.data} />
      <AppPostComments />
    </div>
  );
}
