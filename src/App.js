import "./App.css";
import React, {useState} from 'react';
import RoutingPage from "./RoutingPage";
import { AppContext } from "./context.js";
import Provider from "./Provider.tsx";
import store from "./store/store.jsx";


function App() {
  const [fieldName, setFieldName] = useState({name:'thi is name'});
  const [videoData,setVideoData]=useState([])


  return (
    <Provider>
      <div className="App">
        <AppContext.Provider value={{ fieldName,setFieldName,videoData,setVideoData}}>
          <RoutingPage />
        </AppContext.Provider>
      </div>
    </ Provider>
  );
}

export default App;
