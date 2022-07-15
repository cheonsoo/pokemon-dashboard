import { useQuery, useInfiniteQuery } from 'react-query';
import { getPokemonList, getPokemonDetail } from '@/api';

export const useInfiniteQueryGetPokemonList = () => {
  return useInfiniteQuery(['get-pokemon-list'], getPokemonList, {
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    refetchOnWindowFocus: false,
    suspense: true,
    staleTime: 60000,
    cacheTime: 60000
  });
};

export const useQueryGetPokemonDetail = (name) => {
  return useQuery(
    ['get-pokemon-detail', name],
    () => {
      if (!name) return {};

      return getPokemonDetail(name);
    },
    {
      suspense: true,
      staleTime: 60000,
      cacheTime: 60000
    }
  );
};
