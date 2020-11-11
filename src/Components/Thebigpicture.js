/**@jsxImportSource @emotion/core */
import { css } from "@emotion/core";
const Thebigpicture = ({image, props}) => {

    

    const imgstyle = css`
    grid-column: 1/2;
    grid-row: 2/8;
    border-radius:12px;
    margin-left: 40px;
    margin-right: 20px;
    margin-top:40px;
    margin-bottom:40px;
    
    `;


    return (  

        <img css={imgstyle} src={`img/${image}.png`} alt="landscape"/>
    );
}
 
export default Thebigpicture;