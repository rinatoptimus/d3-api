import React, { useState, useEffect } from "react";
import PostComments from "./PostComments";
import WrapperList from "../../components/WrapperList";
import { ALLPOSTS } from "../../query-examples";

export default function App() {
  const MyList = WrapperList(PostComments);
  const [initialState, stateChanger] = useState({
    loading: false,
    items: null
  });

  useEffect(() => {
    stateChanger({ loading: true });

    const POST_ID = "1277958";
    const COMMENTS = "/comments";
    const apiUrl = `${ALLPOSTS}${POST_ID}${COMMENTS}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        stateChanger({ loading: false, data });
      });
  }, [stateChanger]);

  return (
    <div>
      <MyList isLoading={initialState.loading} myData={initialState.data} />
      <PostComments />
    </div>
  );
}
