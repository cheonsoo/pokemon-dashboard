import React from 'react';
import { useInfiniteQueryGetPokemonList, useQueryGetPokemonDetail } from '@/store';
import { css } from '@emotion/react';

const Tag = css`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: RGBA(57, 150, 250, 1);
`;

const TestComponent = () => {
  const { data: list } = useInfiniteQueryGetPokemonList();
  const { data: detail } = useQueryGetPokemonDetail('pidgey');
  return (
    <div>
      <div>{detail.name}</div>
      <div>
        {list.pages[0].map((item, idx) => (
          <span key={idx} css={Tag}>
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TestComponent;
