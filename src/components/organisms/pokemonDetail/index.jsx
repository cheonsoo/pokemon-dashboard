import React, { useEffect, useRef, Suspense } from 'react';
import { useQuery } from 'react-query';
import { css } from '@emotion/react';
import { getPokemonDetail } from '@/api';
import Modal from '@/components/atoms/modal';
import PokemonDetailContainer from '@/components/organisms/pokemonDetail/PokemonDetailContainer';
import Spinner from '@/components/atoms/Spinner';
// import TestComponent from '@/components/organisms/testComponent';

import { useQueryGetPokemonDetail } from '@/store';

const PokemonDetail = ({ name = '' }) => {
  const { data = {}, status } = useQueryGetPokemonDetail(name);

  return (
    <Suspense fallback={<Spinner />}>
      <div css={PokemonDetailContainer}>
        {/* <TestComponent /> */}
        {data && (
          <>
            <div className="title">{data?.name}</div>
            <div className="detail">
              {data && (
                <ul>
                  <li>
                    <div>
                      <div>ID</div>
                      <div>{data.id}</div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>Name</div>
                      <div>{data.name}</div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>Height</div>
                      <div>{data.height}</div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>Weight</div>
                      <div>{data.weight}</div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>Type</div>
                      <div>
                        {data?.types?.map((item, idx) => (
                          <span className="tag" key={idx}>
                            {item.type.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>Ability</div>
                      <div>
                        {data?.abilities.map((item, idx) => (
                          <span className={['tag', `${item?.is_hidden ? 'hidden' : ''}`].join(' ')} key={idx}>
                            {item?.ability?.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </>
        )}
      </div>
    </Suspense>
  );
};

export default React.memo(Modal(PokemonDetail));
