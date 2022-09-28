import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import MainContainer from "../common/MainContainer";
import Button from "../common/Button";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import icon_blue from "../../lib/img/nav_icon/icon-blue.png";
import icon_tri from "../../lib/img/nav_icon/icon-tri.png";
import arrow_select_other from "../../lib/img/nav_icon/arrow_select_other.png";
import arrow_default_other from "../../lib/img/nav_icon/arrow_default_other.png";
import BaroLoanServiceDoc from "./BaroLoanServiceDoc";
import BaroLoanServiceDetailDoc from "./BaroLoanServiceDetailDoc";
import LoanBaroServiceDetailDoc from "./LoanBaroServiceDetailDoc";

const BaroLaonWrap = styled.div`
  display: flex;
  width: 100%;
`;

const BaroLoanTab = styled(Button)`
  width: 49%;
  height: 60px;
  color: ${palette.gray[9]};
  border-bottom: 1px solid ${palette.gray[4]};
  background: url(${arrow_default_other}) no-repeat 50% 101%;
  margin-bottom: 1em;
  &:hover {
    border-bottom: 2px solid ${palette.gray[6]};
    background: url(${arrow_default_other}) no-repeat 50% 101%;
  }
  &.active {
    font-weight: border;
    font-size: 1.2em;
    border-bottom: 3px solid ${palette.gray[9]};
    background: url(${arrow_select_other}) no-repeat 50% 101%;
  }
`;

const BaroContent = styled.div`
  h2 {
    background-image: url(${icon_blue});
    background-repeat: no-repeat;
    text-indent: 1em;
    font-size: 1.5em;
    margin-bottom: 1em;
  }
  h3 {
    background-image: url(${icon_blue});
    background-repeat: no-repeat;
    text-indent: 1em;
    font-size: 1.2em;
    margin-bottom: 1em;
  }
  li {
    background-image: url(${icon_tri});
    background-repeat: no-repeat;
    text-indent: 1em;
    font-size: 1em;
    margin-left: 1em;
    margin-bottom: 1em;
  }

  p {
    text-indent: 1em;
    line-height: 2em;
  }
  .border {
    font-weight: bolder;
    font-size: 1.2em;
  }
  .semiBorder {
    font-weight: bolder;
  }
  .textIndent2 {
    text-indent: 2em;
  }
  .textIndent6 {
    text-indent: 6em;
  }
  .blueText {
    font-weight: bolder;
    color: ${palette.blue[6]};
  }
  .blueText3 {
    color: ${palette.blue[3]};
  }
  .orangeText {
    color: ${palette.orange[6]};
  }
  table {
    margin-bottom: 1em;
    width: 100%;
    th,
    td {
      border: 1px solid ${palette.gray[5]};
    }
    th {
      padding-top: 12px;
      padding-bottom: 12px;
    }
    td {
      padding: 12px;
    }
    tbody {
      &.gray {
        th {
          display: table-cell;
          vertical-align: middle;
          align-items: center;
          font-weight: bolder;
          background-color: ${palette.gray[2]};
        }
        .lh_20 {
          line-height: 20px;
        }
        td {
          display: table-cell;
          vertical-align: middle;
          align-items: center;
          padding: 0;
          text-align: center;
        }
        .operationTime {
          display: inline-block;
          width: 100%;
          border-top: 1px dotted ${palette.gray[5]};
        }
      }
    }
  }
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BaroLoan() {
  const [value, setValue] = React.useState(0);
  const [secValue, setSecValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const toggleSwitchHandler = (e) => {
    setSecValue(Number(e.target.value));
  };

  return (
    <MainContainer>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
          >
            <Tab label='희망도서 서비스 신청' {...a11yProps(0)} />
            <Tab label='상세 이용안내' {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <BaroContent>
            <BaroLoanServiceDoc />
          </BaroContent>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <BaroLaonWrap>
            <BaroLoanTab
              onClick={toggleSwitchHandler}
              value='0'
              className={`${secValue === 0 ? "active" : ""}`}
            >
              도서관 희망도서 서비스
            </BaroLoanTab>
            <BaroLoanTab
              onClick={toggleSwitchHandler}
              value='1'
              className={`${secValue === 1 ? "active" : ""}`}
            >
              희망도서 바로대출 서비스
            </BaroLoanTab>
          </BaroLaonWrap>
          <BaroContent>
            {secValue === 0 ? (
              <BaroLoanServiceDetailDoc />
            ) : (
              <LoanBaroServiceDetailDoc />
            )}
          </BaroContent>
        </TabPanel>
      </Box>
    </MainContainer>
  );
}
