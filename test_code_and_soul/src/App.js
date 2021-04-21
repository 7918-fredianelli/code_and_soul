import React, {useState} from "react";
import Router from "./Router/index";
import PostContext from "./Contexts/PostContext";

function App() {

  const [postById, setPostById] = useState()

  return (
    <div>
      <PostContext.Provider value={{postById: postById, setPostById: setPostById}}>
        <Router/>
      </PostContext.Provider>
    </div>
  );
}

export default App;
