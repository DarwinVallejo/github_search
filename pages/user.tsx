import React from 'react'
import SearchHeader from '../components/search_header'
import useSearchWithPagination from '../hooks/use_search_with_pagination'
import { getUsers } from '../services/user_service'
import { User as UserModel } from '../models/user'
import Pagination from '../components/pagination'
import UserItem from '../components/user/user_item'
import UsersSkeleton from '../components/user/users_skeleton'
import SearchNotFound from '../components/shared/search_not_found'

const User = () => {
  const {
    search,
    items,
    totalCount,
    page,
    onNext,
    onPrevious,
    isLoading,
    isFetched } = useSearchWithPagination<UserModel>(getUsers);

  return (
    <div className='section is-full-height'>
      <SearchHeader title="Usuarios" subtitle={'Ingresa el nombre de usuario a buscar'} onChange={search} />
      <div className='container'>
        <div className="columns is-centered is-2-mobile is-2-tablet is-8-desktop is-multiline is-mobile">
          {isLoading && <UsersSkeleton />}
          {!isLoading && items.map((user) => {
            return (
              <div key={user.id} className='column is-three-quarters-mobile is-half-tablet is-one-quarter-desktop'>
                <UserItem {...user} />
              </div>
            )
          })}
        </div>
        <SearchNotFound isVisible={(isFetched && !items.length)} />
        <Pagination page={page} totalCount={totalCount} onNext={onNext} onPrevious={onPrevious} />
      </div>
    </div>
  );
};

export default User;