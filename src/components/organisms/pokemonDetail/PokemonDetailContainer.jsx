import { css } from '@emotion/react';

export default css`
  padding: 20px;

  .title {
    width: 100%;
    height: 50px;
    font-size: 30px;
    font-weight: 900;
    color: green;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    border-bottom: 3px solid gray;
  }

  .detail {
    ul {
      list-style: none;

      li {
        height: 50px;
        margin-bottom: 5px;

        > div {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: left;

          > div {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          > div:nth-of-type(1) {
            width: 100px;
            height: 100%;
            font-weight: 900;
          }

          > div:nth-of-type(2) {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: left;
            flex-direction: row;
            flex-wrap: wrap;
          }
        }
      }
    }

    .tag {
      display: flex;
      height: 30px;
      background-color: RGBA(57, 150, 250, 1);
      border-radius: 8px;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-weight: 900;
      margin-right: 10px;
      margin-bottom: 10px;
      padding: 2px 10px;

      &.hidden {
        background-color: RGBA(242, 151, 102, 1);
      }
    }
  }
`;
