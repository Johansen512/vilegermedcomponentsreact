/**@jsxImportSource @emotion/core */
import { css } from "@emotion/core";
const Thebigtext = ({text, props}) => {

    

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
   
    <p css={pstyle} >{text}</p>
        
    );
}
 
export default Thebigtext;