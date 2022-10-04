import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Repository from '@/pages/repository';
import { QueryClient, QueryClientProvider } from 'react-query';
import { getRepositories } from '@/services/repository_service';
import { getRepositoriesMock, repositoryWithElementsMock, repositoryWithoutElementsMock } from '@/__mocks__/repository.mock';

jest.mock('../services/repository_service.ts', () => ({ getRepositories: jest.fn() }))

describe('Repository', () => {
  const mocked = jest.mocked(getRepositories, { shallow: true });

  const queryClient = new QueryClient();
  const Wrapper = () => (
    <QueryClientProvider client={queryClient}>
      <Repository />
    </QueryClientProvider>
  );

  it('Write a repository name with results', async () => {
    mocked.mockImplementation(getRepositoriesMock(repositoryWithElementsMock));

    render(<Wrapper />);
    const inputNode = screen.getByPlaceholderText('Escribe el nombre a buscar');
    await waitFor(() => {
      fireEvent.change(inputNode, { target: { value: 'First' } });
      const items = screen.getAllByTestId('repository-item');
      expect(items.length).toBeGreaterThan(0);
    })
  })

  it('Write a repository name without results', async () => {
    mocked.mockImplementation(getRepositoriesMock(repositoryWithoutElementsMock));

    render(<Wrapper />);
    const inputNode = screen.getByPlaceholderText('Escribe el nombre a buscar');
    await waitFor(() => {
      fireEvent.change(inputNode, { target: { value: 'First' } });
      expect(screen.getByText('Lo sentimos no encontramos resultados')).toBeInTheDocument();
    })
  })
})