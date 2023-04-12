import React from 'react'
import { Container, Wrapper } from './Pin.style';
import styled from "styled-components";
import LazyLoad from "react-lazyload";

export default function Pin() {
    let { urls } = props;
  return (
    <div>
      <Wrapper>
        <Container>
          <LazyLoad>
            <img alt="pin" src={urls?.regular} />
          </LazyLoad>
        </Container>
      </Wrapper>
    </div>
  );
}
