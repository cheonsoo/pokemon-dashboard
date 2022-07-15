import React, { useState, useEffect, useCallback, useRef, Suspense } from 'react';
import { useInfiniteQuery } from 'react-query';
import { css } from '@emotion/react';
import { getPokemonList } from '@/api';

import PokemonDetail from '@/components/organisms/pokemonDetail';
import PokemonListContainer from '@/components/organisms/PokemonList/PokemonListContainer';
import Spinner from '@/components/atoms/Spinner';
import { useInfiniteQueryGetPokemonList, useQueryGetPokemonDetail } from '@/store';

let TIMER;

const PokemonList = () => {
  const [page, setPage] = useState(0);
  const pageRef = useRef(page);
  const [selectedName, setSelectedName] = useState('');
  const [openDetailModal, setOpenDetailModal] = useState(false);

  const { data, fetchNextPage } = useInfiniteQueryGetPokemonList();
  const testData = useQueryGetPokemonDetail('pidgey');

  const setPageRef = (_page) => {
    pageRef.current = _page;
    setPage(_page);
  };

  const scrollEvent = (_page) => {
    if (!TIMER) {
      TIMER = setTimeout(() => {
        TIMER = null;
        const windowHeight = window.document.body.getBoundingClientRect().height - window.screen.availHeight + 125;
        // const windowHeight = window.document.body.getBoundingClientRect().height;
        const poz = window.scrollY;
        // console.log(`windowHeight: ${windowHeight}, poz: ${poz}`);

        if (poz === 0) {
          // console.log('hit top');
        } else if (poz > windowHeight) {
          console.log('hit bottom');
          setPageRef(pageRef.current + 1);
          fetchNextPage({ pageParam: pageRef.current + 1 });
        }
      }, 500);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', () => scrollEvent(page));
  }, []);

  const handleClick = (name) => {
    setSelectedName(name);
    setOpenDetailModal(!openDetailModal);
  };

  const handleClose = useCallback(() => {
    setOpenDetailModal(false);
  }, []);

  const listItems = (list) => {
    return list.map((item, idx) => (
      <li key={idx} onClick={() => handleClick(item.name)}>
        <div>{item.name}</div>
      </li>
    ));
  };

  return (
    <Suspense fallback={<Spinner />}>
      <div>
        <div css={PokemonListContainer}>
          <ul>{data?.pages.map((page) => listItems(page))}</ul>
        </div>

        {openDetailModal && <PokemonDetail open={openDetailModal} name={selectedName} handleClose={handleClose} />}
      </div>
    </Suspense>
  );
};

export default PokemonList;
