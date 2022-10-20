import React from "react";
import SingleBook from "../../components/etc/SingleBook";
function SingleBookContainer(props) {
  let id = props.id;
  return <SingleBook id={id}></SingleBook>;
}

export default SingleBookContainer;
