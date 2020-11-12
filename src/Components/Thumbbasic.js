/**@jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { useContext } from "react";
import { dataContext } from "../Contexts/DataContext"

const Thumbbasic = ({image, id, props}) => {

    const {setPictureid, pictureid } = useContext (dataContext)
    console.log (pictureid)

const singlethumb = css`
border-radius:20px;
border: none;
margin-left: 10px;
margin-bottom:20px;
margin-top: 40px;




`;

const singleimg = css`

border-radius:12px;
width: 100px;
height: 100px;
box-shadow: 5px 5px 5px #3c3654;



`;


    return (  

        <div css={singlethumb} onClick={() => setPictureid (id) }><img css={singleimg} src={`img/${image}.jpg`}/></div>
    );
}
 
export default Thumbbasic;