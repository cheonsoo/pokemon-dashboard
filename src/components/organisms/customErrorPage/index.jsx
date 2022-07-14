import React from 'react';
import { css } from '@emotion/react';

const CustomErrorContainer = css`
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
`;

const CustomErrorPage = () => {
  return <div css={CustomErrorContainer}>ERROR</div>;
};

export default CustomErrorPage;
