import React from 'react';
import styled from 'styled-components';
function Movies() {
  return (
    <Container>
      <h2>Recommended for You</h2>
      <Content>
        <Wrap>
          <img
            src="https://images.unsplash.com/photo-1564818804911-58cfd9b18711?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://images.unsplash.com/photo-1564818804911-58cfd9b18711?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://images.unsplash.com/photo-1564818804911-58cfd9b18711?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://images.unsplash.com/photo-1564818804911-58cfd9b18711?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            alt=""
          />
        </Wrap>
      </Content>
      <Content>
        <Wrap>
          <img
            src="https://images.unsplash.com/photo-1564818804911-58cfd9b18711?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://images.unsplash.com/photo-1564818804911-58cfd9b18711?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://images.unsplash.com/photo-1564818804911-58cfd9b18711?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://images.unsplash.com/photo-1564818804911-58cfd9b18711?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            alt=""
          />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;
const Container = styled.div``;
const Content = styled.div`
  display: grid;
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
