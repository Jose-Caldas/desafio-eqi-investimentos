import React, { useEffect, useState } from "react";

import {
  Header,
  Wrapper,
  Title,
  IndexingType,
  LeftButtom,
  CenterButton,
  RightButtom,
} from "./styles";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Button from "../../Button";
import Input from "../../Input";
import { indexingData } from "../../Input/input.data";
import CheckIcon from "@material-ui/icons/Check";

const Indexing = () => {
  const [loading, setLoading] = useState(false);
  const [checkedLeft, setCheckedLeft] = useState(false);
  const [checkedRight, setCheckedRight] = useState(false);
  const [checkedCenter, setCheckedCenter] = useState(false);

  const handleOnClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const handleLeftButton = () => {
    setCheckedLeft(!checkedLeft);
    if (checkedRight) setCheckedRight(false);
    if (checkedCenter) setCheckedCenter(false);
  };

  const handleCenterButton = () => {
    setCheckedCenter(!checkedCenter);
    if (checkedRight) setCheckedRight(false);
    if (checkedLeft) setCheckedLeft(false);
  };

  const handleRightButton = () => {
    setCheckedRight(!checkedRight);
    if (checkedLeft) setCheckedLeft(false);
    if (checkedCenter) setCheckedCenter(false);
  };

  const styledButtonLeft = {
    background: checkedLeft ? "#f27e22" : "#FFFFFF",
    color: checkedLeft ? "#FFFF" : "#000",
  };
  const styledButtonRight = {
    background: checkedRight ? "#f27e22" : "#FFFFFF",
    color: checkedRight ? "#FFFF" : "#000",
  };
  const styledButtonCenter = {
    background: checkedCenter ? "#f27e22" : "#FFFFFF",
    color: checkedCenter ? "#FFFF" : "#000",
  };

  useEffect(() => {
    setCheckedCenter(true);
  }, []);

  return (
    <Wrapper>
      <Header>
        <Title>Tipos de indexação</Title>
        <InfoOutlinedIcon fontSize="small" />
      </Header>
      <IndexingType>
        <LeftButtom onClick={handleLeftButton} style={{ ...styledButtonLeft }}>
          {checkedLeft && <CheckIcon fontSize="small" />}
          PRÉ
        </LeftButtom>
        <CenterButton
          onClick={handleCenterButton}
          style={{ ...styledButtonCenter }}
        >
          {checkedCenter && <CheckIcon fontSize="small" />}
          POS
        </CenterButton>
        <RightButtom
          onClick={handleRightButton}
          style={{ ...styledButtonRight }}
        >
          {checkedRight && <CheckIcon fontSize="small" />}
          Fixado
        </RightButtom>
      </IndexingType>
      {indexingData.map((indexing) => (
        <Input key={indexing.id} label={indexing.label} id={indexing.id} />
      ))}
      <Button
        title="Simular"
        onClick={handleOnClick}
        isLoading={loading}
        types="secondary"
        disabled={loading}
      />
    </Wrapper>
  );
};

export default Indexing;
