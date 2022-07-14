import React from 'react';
import { css } from '@emotion/react';

const SpinnerContainer = css`
  width: 100%;
  height: 1000px;
  display: flex;
  postion: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  font-weight: 900;
  font-size: 80px;
  color: gray;
`;

const Spinner = () => {
  console.log('Loading ...');
  let windowHeight = window.document.body.getBoundingClientRect().height - window.screen.availHeight + 111;
  if (!windowHeight) windowHeight = '1000';

  return <div css={SpinnerContainer}>Loading ...</div>;
};

export default Spinner;
