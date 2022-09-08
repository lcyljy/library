import { useState, useEffect } from "react";
// import XMLParser from "react-xml-parser";

const API_KEY = process.env.REACT_APP_DATA4LIBRARY_KEY;

function Test() {
  const App = () => {
    // const Test = apiKey[apiKey];
    // console.log(`test: ${Test}`);
    // const getApiKey = apiKey[apiKey];
    // xml을 json으로 변환
    // const parseStr = (dataSet) => {
    //   const dataArr = new XMLParser().parseFromString(dataSet).children;
    //   console.log(dataArr);
    // };
    const [data, setData] = useState();

    const getData = async () => {
      const res = await fetch(
        `http://data4library.kr/api/loanItemSrch?authKey=${API_KEY}&startDt=2022-01-01&endDt=2022-09-07&region=31&dtl_region=31012;31014;31011;31013&format=json`
      )
        .then((res) => {
          console.log(res);
          // console.log(res.ok);
          // console.log(data);
        })
        .then((data) => setData(data))
        .catch((error) => console.log("error", error));
      console.log(res);
      console.log(data);
    };

    useEffect(() => {
      getData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
  };

  return <App></App>;
}

export default Test;
