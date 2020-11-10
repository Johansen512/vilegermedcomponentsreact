/**@jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { dataContext } from "../Contexts/DataContext";
const Thumbbasic = (image) => {

    

const singlethumb = css`


border-radius:20px;
padding: 10px;


`;


    return (  

        <button ><img css={singlethumb} src={`img/${image}.png`}/></button>
    );
}
 
export default Thumbbasic;