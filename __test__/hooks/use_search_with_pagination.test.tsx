import useSearchWithpage from '@/hooks/use_search_with_pagination';
import { getRepositoriesMock, repositoryWithElementsMock } from '@/__mocks__/repository.mock';
import { renderHook, waitFor } from '@testing-library/react';
import 'jest';
import { FC, PropsWithChildren } from 'react';
import { act } from 'react-dom/test-utils';
import { QueryClient, QueryClientProvider } from 'react-query';

describe('Test useSearchWithPagination', () => {
  const queryClient = new QueryClient();
  const wrapper: FC<PropsWithChildren> = ({ children }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
  const onSearch = getRepositoriesMock(repositoryWithElementsMock);

  it('Hook initialized', () => {
    const { result } = renderHook(() => useSearchWithpage(onSearch), { wrapper })

    expect(result.current.items.length).toEqual(0);
  });

  it('Search query function is not fetched', () => {
    const { result } = renderHook(() => useSearchWithpage(onSearch), { wrapper })
    expect(result.current.isFetched).toEqual(false);

  });

  it('Search query function is fetched', async () => {
    const { result } = renderHook(() => useSearchWithpage(onSearch), { wrapper });

    await act(async () => {
      result.current.search('first');
      await waitFor(() => result.current.isFetched);
    })
    expect(result.current.isFetched).toBe(true);
  });


})