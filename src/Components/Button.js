/**@jsxImportSource @emotion/core */
import { css } from "@emotion/core";

const Button = ({label, props}) => {

    const btnstyle= css`
    grid-column: 7/9;
    grid-row: 4/5;
    width: 99px;
    height: 33px;
    background-color:#005AEE;
    border-radius:24px;
    color: white;
    
    
    
    `;



    return ( 


<button css={btnstyle}>{label}</button>


     );
}
 
export default Button;