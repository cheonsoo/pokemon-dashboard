import React, { useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { css } from '@emotion/react';
import { getPokemonDetail } from '@/api';
import Modal from '@/components/atoms/modal/index.jsx';
import PokemonDetailContainer from '@/components/organisms/pokemonDetail/PokemonDetailContainer';

const usePrevious = (val) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = val;
  }, [val]);
  return ref.current;
};

const PokemonDetail = ({ name = '' }) => {
  console.log('### name: ', name);
  const prevName = usePrevious(name);

  const { data, status } = useQuery(['get-pokemon-detail', name], () => {
    if (!name) return {};
    console.log(`prev: ${prevName}, name: ${name}`);
    if (name === prevName) return data;

    return getPokemonDetail(name);
  });

  if (status === 'loading') console.log('loading ...');
  if (status === 'error') console.log('error');
  if (status === 'success') console.log('success');

  return (
    <div css={PokemonDetailContainer}>
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
                      {data.types.map((item, idx) => (
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
                      {data.abilities.map((item, idx) => (
                        <span className={['tag', `${item.is_hidden ? 'hidden' : ''}`].join(' ')} key={idx}>
                          {item.ability.name}
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
  );
};

export default React.memo(Modal(PokemonDetail));
