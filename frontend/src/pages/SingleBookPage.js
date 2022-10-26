import React from "react";
import SiteRootNavContainer from "../container/common/SiteRootNavContainer";
import SingleBookContainer from "../container/common/SingleBookContainer";
import { useParams } from "react-router-dom";

function SingleBookPage() {
  let { id } = useParams();

  const title = "상세정보";
  return (
    <>
      <SiteRootNavContainer title={title}></SiteRootNavContainer>
      <SingleBookContainer id={id}></SingleBookContainer>
    </>
  );
}

export default SingleBookPage;
