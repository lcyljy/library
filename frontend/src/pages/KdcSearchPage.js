import React from "react";
import KdcSearch from "../components/etc/KdcSearch";
import SiteRootNavContainer from "../container/common/SiteRootNavContainer";

function KdcSearchPage() {
  const title = "한국십진분류";
  return (
    <>
      <SiteRootNavContainer title={title}></SiteRootNavContainer>
      <KdcSearch></KdcSearch>
    </>
  );
}

export default KdcSearchPage;
