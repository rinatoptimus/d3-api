import React, { useState, useEffect } from "react";
import PostById from "./PostById";
import WrapperList from "../../components/WrapperList";
import { ALLPOSTS, POSTBYID } from "../../query-examples";

export default function App() {
  const MyList = WrapperList(PostById);
  const [initialState, stateChanger] = useState({
    loading: false,
    items: null
  });

  useEffect(() => {
    stateChanger({ loading: true });
    const apiUrl = `${ALLPOSTS}${POSTBYID}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        stateChanger({ loading: false, data });
      });
  }, [stateChanger]);

  return <MyList isLoading={initialState.loading} myData={initialState.data} />;
}
