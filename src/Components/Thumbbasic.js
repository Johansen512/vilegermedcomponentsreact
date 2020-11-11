/**@jsxImportSource @emotion/core */
import { css } from "@emotion/core";
const Thumbbasic = ({image, props}) => {

    

const singlethumb = css`
border-radius:20px;
margin:0.5rem;
border: none;



`;


    return (  

        <button css={singlethumb} ><img  src={`img/${image}.png`}/></button>
    );
}
 
export default Thumbbasic;