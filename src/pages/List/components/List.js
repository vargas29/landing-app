import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-awesome-styled-grid"; 
const Main = styled.div`
  margin: 20px auto 50px auto;
  width: 90%;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: none;
  border-radius: 0.5rem;
  border-color: #c4c4c4;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px hsla(0, 0%, 76.9%, 0.4);
  margin-top: 20px;
`;

const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
`;
const CardTitle = styled.div`
  text-transform: capitalize;
  font-weight: 600;
`;
const CardSubtitle = styled.div`
  margin-top: 10px;
  font-size: 14px;
  text-transform: capitalize;
  color: #787878;
  a {
    text-decoration: none;
    color: #00b1ff;
  }
`;

const List = props => {
  // The AllRacers component accepts props of `races` and `winner`. The content of the `races` props is then used to listing out all the details, while the `winner` props is used to determine the world champion.
  let result =[]; 
  result = props.races;
 

  console.log(result);
  return (
    <Main>
      <Row>
        {result.map(item => (
          <Col xs={4} md={2} key={item.round}>
            <Card>
              <CardBody>
                <CardTitle>{item.language}</CardTitle>
                <CardSubtitle>{item.author}</CardSubtitle>
                <CardSubtitle>
                {item.type}
                </CardSubtitle>
                <CardSubtitle>
                {item.year}
                </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Main>
  );
};



export default List;
