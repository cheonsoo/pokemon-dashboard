import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import PokemonList from '@/components/organisms/pokemonList/index.jsx';
import Spinner from '@/components/atoms/Spinner/index.jsx';
import ErrorBoundary from '@/components/atoms/ErrorBoundary/index.jsx';
import CustomErrorPage from '@/components/organisms/CustomErrorPage/index.jsx';

const queryClient = new QueryClient({
  suspense: true,
  retry: false,
  staleTime: 60000,
  cacheTime: 60000
});

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Suspense fallback={<Spinner />}>
          <ErrorBoundary fallback={<CustomErrorPage />}>
            <QueryClientProvider client={queryClient}>
              <ReactQueryDevtools initialIsOpen />
              <PokemonList />
            </QueryClientProvider>
          </ErrorBoundary>
        </Suspense>
      </React.StrictMode>
    </div>
  );
}

export default App;
