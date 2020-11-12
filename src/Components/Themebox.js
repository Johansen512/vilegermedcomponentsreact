/**@jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { useContext } from "react";
import { dataContext } from "../Contexts/DataContext";
import Thumbbasic from "../Components/Thumbbasic";
import Thebigpicture from "../Components/Thebigpicture"
import Thebigheadline from "../Components/Thebigheadline"
import Thebigtext from "../Components/Thebigtext"


const Themebox = ( props ) => {

    const { data } = useContext(dataContext);
    
    data && console.log("from context:", data[1].text);
    

    const {pictureid}=useContext(dataContext)
    console.log ("hey det er jo " + (pictureid))

    let enhest = data && data.find(function (element) { 
            
    
        return element.id === pictureid; 
        
    }); 
    console.log (enhest); 
    
    console.log (props);

const style = css`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
background-color:#696382;
width: 771px;
height: 454px;
margin: 20px;



`;

const thumbstyle = css`
    display:flex;
    grid-column: 2/9;
    grid-row: 7/8;
    justify-self: start;
    overflow:scroll;
    overflow-y:hidden;
    width:400px;
    height:180px;
  
  
   
    


    
    
    
    
    
    `;











    return enhest &&(
<div css={style}>

    {data &&<Thebigpicture image={enhest.photo}/> }
    {data &&<Thebigheadline headline={enhest.name}/> }

    
    {data &&<Thebigtext text={enhest.text} /> }
    <div css={thumbstyle} >
    {data && <Thumbbasic id={data[0].id} image={data[0].photo} /> }
    {data && <Thumbbasic id={data[1].id} image={data[1].photo} /> }
    {data && <Thumbbasic id={data[2].id} image={data[2].photo} /> }
    {data && <Thumbbasic id={data[3].id} image={data[3].photo} /> }
    {data && <Thumbbasic id={data[4].id} image={data[4].photo} /> }
    {data && <Thumbbasic id={data[5].id} image={data[5].photo} /> }
    {data && <Thumbbasic id={data[6].id} image={data[6].photo} /> }
    {data && <Thumbbasic id={data[7].id} image={data[7].photo} /> }
    {data && <Thumbbasic id={data[8].id} image={data[8].photo} /> }
    {data && <Thumbbasic id={data[9].id} image={data[9].photo} /> }
    {data && <Thumbbasic id={data[10].id} image={data[10].photo} /> }
        </div>
        </div>





//<div css={style}><img css={imgstyle} src="../img/fjord.png" alt="landscape"/><h1 css={hstyle}>Headline here</h1 ><Button label={"Leisure"} /><p css={pstyle} >Text here ... and here ... and here bla bala bla bla bla Text here ... and here ... and here bla bala bla bla bla. ... and here bla bala bla bla bla</p><div css={thumbstyle} ><img css={singlethumb} src="../img/Island1.png" alt="landscape" /><img css={singlethumb} src="../img/lake.png" alt="landscape"/><img css={singlethumb} src="../img/river.png" alt="landscape"/></div></div>
      );
}
 
export default Themebox;

