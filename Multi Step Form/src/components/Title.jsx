import React from "react";
import styled from "styled-components";

function Title({title, subTitle}) {
  return (
    <Heading>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </Heading>
  );
}

export default Title;

const Heading = styled.div`
    
`