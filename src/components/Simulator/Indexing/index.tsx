import React, { useEffect, useState } from "react";

import {
  Header,
  Wrapper,
  IndexingTitle,
  IndexingButtons,
  IndexingLeft,
  IndexingCenter,
  IndexingRight,
} from "./styles";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import CheckIcon from "@material-ui/icons/Check";

const Indexing = () => {
  const [indexingButtonLeft, setIndexingButtonLeft] = useState(false);
  const [indexingButtonRight, setIndexingButtonRight] = useState(false);
  const [indexingButtonCenter, setIndexingButtonCenter] = useState(false);

  const handleLeftIndexing = () => {
    setIndexingButtonLeft(!indexingButtonLeft);
    if (indexingButtonRight) setIndexingButtonRight(false);
    if (indexingButtonCenter) setIndexingButtonCenter(false);
  };

  const handleCenterIndexing = () => {
    setIndexingButtonCenter(!indexingButtonCenter);
    if (indexingButtonRight) setIndexingButtonRight(false);
    if (indexingButtonLeft) setIndexingButtonLeft(false);
  };

  const handleRightIndexing = () => {
    setIndexingButtonRight(!indexingButtonRight);
    if (indexingButtonLeft) setIndexingButtonLeft(false);
    if (indexingButtonCenter) setIndexingButtonCenter(false);
  };

  const styledButtonLeft = {
    background: indexingButtonLeft ? "#EA7238" : "#FFFFFF",
    color: indexingButtonLeft ? "#FFFF" : "#333",
  };
  const styledButtonRight = {
    background: indexingButtonRight ? "#EA7238" : "#FFFFFF",
    color: indexingButtonRight ? "#FFFF" : "#333",
  };
  const styledButtonCenter = {
    background: indexingButtonCenter ? "#EA7238" : "#FFFFFF",
    color: indexingButtonCenter ? "#FFFF" : "#333",
  };

  useEffect(() => {
    setIndexingButtonCenter(true);
  }, []);

  return (
    <Wrapper>
      <Header>
        <IndexingTitle>Tipos de indexação</IndexingTitle>
        <InfoOutlinedIcon fontSize="small" />
      </Header>
      <IndexingButtons>
        <IndexingLeft
          onClick={handleLeftIndexing}
          style={{ ...styledButtonLeft }}
        >
          {indexingButtonLeft && <CheckIcon fontSize="small" />}
          PRÉ
        </IndexingLeft>
        <IndexingCenter
          onClick={handleCenterIndexing}
          style={{ ...styledButtonCenter }}
        >
          {indexingButtonCenter && <CheckIcon fontSize="small" />}
          POS
        </IndexingCenter>
        <IndexingRight
          onClick={handleRightIndexing}
          style={{ ...styledButtonRight }}
        >
          {indexingButtonRight && <CheckIcon fontSize="small" />}
          Fixado
        </IndexingRight>
      </IndexingButtons>
    </Wrapper>
  );
};

export default Indexing;
