import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const ExternalPageLink = styled.a`
  display: block;
  margin-bottom: 7px;
  font-weight: 700;
  color: ${palette.gray[9]};
  font-size: 17px;
`;

function ExternalPage(props) {
  return (
    <ExternalPageLink href={props.href} hel={props.rel} target={props.target}>
      {props.value}
    </ExternalPageLink>
  );
}

export default ExternalPage;
