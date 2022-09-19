import React from "react";
import SiteRootNav from "../../components/common/SiteRootNav";

function SiteRootNavContainer(props) {
  const title = props.title;
  return <SiteRootNav navTitle={title}></SiteRootNav>;
}

export default SiteRootNavContainer;
