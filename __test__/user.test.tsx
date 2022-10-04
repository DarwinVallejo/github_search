import User from '@/pages/user';
import { getUsers } from '@/services/user_service';
import { getUsersMock, usersWithElementsMock, usersWithoutElementsMock } from '@/__mocks__/user.mock';
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query';

jest.mock('../services/user_service.ts', () => ({ getUsers: jest.fn() }))

describe('User', () => {
  const mocked = jest.mocked(getUsers, { shallow: true });

  const queryClient = new QueryClient();
  const Wrapper = () => (
    <QueryClientProvider client={queryClient}>
      <User />
    </QueryClientProvider>
  );

  it('Write a user name with results', async () => {
    mocked.mockImplementation(getUsersMock(usersWithElementsMock));

    render(<Wrapper />);
    const inputNode = screen.getByPlaceholderText('Escribe el nombre a buscar');
    await waitFor(() => {
      fireEvent.change(inputNode, { target: { value: 'First' } });
      const items = screen.getAllByTestId('user-item');
      expect(items.length).toBeGreaterThan(0);
    })
  })

  it('Write a user name without results', async () => {
    mocked.mockImplementation(getUsersMock(usersWithoutElementsMock));

    render(<Wrapper />);
    const inputNode = screen.getByPlaceholderText('Escribe el nombre a buscar');
    await waitFor(() => {
      fireEvent.change(inputNode, { target: { value: 'First' } });
      expect(screen.getByText('Lo sentimos no encontramos resultados')).toBeInTheDocument();
    })
  })
})