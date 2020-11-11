/**@jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import Button from "../Components/Button";
import { useContext } from "react";
import { dataContext } from "../Contexts/DataContext";
import Thumbbasic from "../Components/Thumbbasic";
import Thebigpicture from "../Components/Thebigpicture"
import Thebigheadline from "../Components/Thebigheadline"

const Themebox = ( props ) => {

    const { data } = useContext(dataContext);
    data && console.log("from context:", data[1].text);


const style = css`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
background-color:white;
width: 771px;
height: 454px;
margin: 20px;


`;

const thumbstyle = css`
    grid-column: 2/9;
    grid-row: 7/8;
    justify-self: start;
    border-radius:12px;
    margin-left: 10px;
    margin-bottom:20px;
    margin-top: 40px;
    
    
    
    
    
    `;





const pstyle = css`
grid-column: 2/9;
grid-row: 6/7;
justify-self: start;
border-radius:20px;
margin-left: 20px;
margin-bottom:20px;
margin-top: 40px;
padding-left:10px;
`;





    return (
<div css={style}>
    {data && <Thebigpicture image={data[0].photo}/> }
    {data && <Thebigheadline headline={data[0].name}/> }
    <Button label={"Leisure"} />
    {data && <p css={pstyle} >{data[0].text}</p>}
    <div css={thumbstyle} >
    {data && <Thumbbasic id={data[1].id} image={data[1].photo} title={data[1].name}/> }
    {data && <Thumbbasic id={data[2].id} image={data[2].photo} title={data[2].name}/> }
    {data && <Thumbbasic id={data[3].id} image={data[3].photo} title={data[3].name}/> }
        </div>
        </div>





//<div css={style}><img css={imgstyle} src="../img/fjord.png" alt="landscape"/><h1 css={hstyle}>Headline here</h1 ><Button label={"Leisure"} /><p css={pstyle} >Text here ... and here ... and here bla bala bla bla bla Text here ... and here ... and here bla bala bla bla bla. ... and here bla bala bla bla bla</p><div css={thumbstyle} ><img css={singlethumb} src="../img/Island1.png" alt="landscape" /><img css={singlethumb} src="../img/lake.png" alt="landscape"/><img css={singlethumb} src="../img/river.png" alt="landscape"/></div></div>
      );
}
 
export default Themebox;

