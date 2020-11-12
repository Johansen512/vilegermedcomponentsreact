import React, { createContext, useState, useEffect } from "react";

export const dataContext = createContext();


const DataContextProvider = (props) => {
    const [data, setData] = useState(null);
    const [pictureid, setPictureid] = useState(1)
  

    useEffect(() => {
        fetch("/data/phototest.json")
        .then (response => response.json())
        .then (result => setData(result.phototest))
    }, []);
    
    data && console.log(data)
    
    return (<dataContext.Provider value={{ data, pictureid, setPictureid }}>

    {props.children}
    </dataContext.Provider>

    );
};
 
export default DataContextProvider;