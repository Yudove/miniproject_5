import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
height: 25px;
`

const Button = (props) => {

    return (
        
            <StyledButton {...props}></StyledButton>
        
    );
};

export default Button;