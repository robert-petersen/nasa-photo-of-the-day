import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/Header";
// import Photo from "./components/Photo";
// import Footer from "./components/Footer";

const [ theData, setTheData ] = useState({});

function App(props) {
  function useFetchData(){
    useEffect(() => {
      function fetchData(){
        // axios
        //   .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        //   .then((res)=>{
        //     console.log(res.data);
        //     setTheData(res.data);
        //   })
        //   .catch((err)=>{
        //     console.log(err);
        //   });

          //temp data
          setTheData();
          console.log(theData);
      }
      fetchData();
    }, []);
    return theData;
  }
  // console.log(theData);
  useFetchData();


  return (
    <div className="App">
      {/* <Header theData={theData} /> */}
      {/* <Photo />
      <Footer /> */}
    </div>
  );
}

export default App;
