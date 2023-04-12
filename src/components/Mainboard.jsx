import React from 'react'
import styled from "styled-components";


export default function Mainboard(props) {
    let {pins} = props;
  return <Wrapper>
      <Container className="mainboard__container">
        {pins.map((pin, index) => {
          let { urls } = pin;
          return <Pin key={index} urls={urls} />;
        })}
      </Container>
    </Wrapper>
  
}
