import "./App.css";
import React, {useState} from 'react';
import RoutingPage from "./RoutingPage";
import { AppContext } from "./context.js";


function App() {
  const [fieldName, setFieldName] = useState({name:'thi is name'});
  const [videoData,setVideoData]=useState([])


  return (
    <>
      <div className="App">
        <AppContext.Provider value={{ fieldName,setFieldName,videoData,setVideoData}}>
          <RoutingPage />
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
