import { css } from '@emotion/react';

export default css`
  padding: 20px;

  ul {
    list-style: none;
    flex-direction: row;

    li {
      width: 200px;
      height: 50px;
      background-color: #eeeeee;
      margin-bottom: 10px;
      margin-right: 10px;
      display: inline-block;
      border-radius: 8px;

      > div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 900;
        cursor: pointer;
      }
    }
  }
`;
