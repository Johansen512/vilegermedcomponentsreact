/**@jsxImportSource @emotion/core */
import { css } from "@emotion/core";
const Thebigheadline = ({headline, props}) => {

    

    const hstyle = css`

grid-column: 2/9;
grid-row: 5/6;
justify-self: start; 
margin-left: 20px;
padding-left: 10px;

`;


    return (  
    <h1 css={hstyle}>{headline}</h1 >
        
    );
}
 
export default Thebigheadline;