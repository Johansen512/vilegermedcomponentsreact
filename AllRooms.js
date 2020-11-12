/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import ControlPanelButton from "./ControlPanelButton"
import { dataContext } from "../contexts/DataContext"

//Vælg rum går til Mainview

const AllRooms = (props) => {
    const { data } = useContext(dataContext);
    data && console.log("from context:", data[0].id);
    

    const style = css`
    width:100vw;
    display: flex;
    flex-direction: column;
    background-color:#F6F8FB; 
    color:#002D67;
    font-size: 1.1875em;
    font-weight: bold;
    border-radius: 2em;
    font-family: 'Montserrat', sans-serif;
    padding-bottom:100px;
    
    
  
    
`;

const sectionstyle = css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;
    return (  

<main css={style}>
    <p>All Rooms</p>

    <section css={sectionstyle}>
    {data && <ControlPanelButton id={data[0].id} pictogram={data[0].image} label={data[0].name} no={data[0].numberoflights}/>}
    {data && <ControlPanelButton id={data[1].id} pictogram={data[1].image} label={data[1].name} no={data[1].numberoflights}/>}
    {data && <ControlPanelButton id={data[2].id} pictogram={data[2].image} label={data[2].name} no={data[2].numberoflights}/>}
    {data && <ControlPanelButton id={data[3].id} pictogram={data[3].image} label={data[3].name} no={data[3].numberoflights}/>}
    {data && <ControlPanelButton id={data[4].id} pictogram={data[4].image} label={data[4].name} no={data[4].numberoflights}/>}
    {data && <ControlPanelButton id={data[5].id} pictogram={data[5].image} label={data[5].name} no={data[5].numberoflights}/>}
    
    </section>
</main>

);
}
 
export default AllRooms;