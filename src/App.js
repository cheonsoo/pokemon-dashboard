import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import PokemonList from './components/organisms/pokemonList/index.jsx';
import Spinner from './components/atoms/Spinner/index.jsx';

const queryClient = new QueryClient({
  suspense: true
});

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <React.StrictMode>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen />
            <PokemonList />
          </QueryClientProvider>
        </React.StrictMode>
      </Suspense>
    </div>
  );
}

export default App;
