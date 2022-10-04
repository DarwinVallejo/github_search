import React from 'react'
import Pagination from '../components/pagination';
import SearchHeader from '../components/search_header'
import { Repository as RepositoryModel } from '../models/repository';
import { getRepositories } from '../services/repository_service';
import useSearchWithPagination from '../hooks/use_search_with_pagination'
import RepositoryItem from '../components/repository/repository_item';
import SearchNotFound from '../components/shared/search_not_found';
import RepositoriesSkeleton from '../components/repository/repositories_skeleton';

const Repository = () => {

  const {
    search,
    items,
    totalCount,
    page,
    onNext,
    onPrevious,
    isLoading,
    isFetched } = useSearchWithPagination<RepositoryModel>(getRepositories);

  return (
    <div className='is-full-height'>
      <SearchHeader title="Repositorios" subtitle={'Ingresa el nombre del repositorio a buscar'} onChange={search} />
      <section className='container'>
        <div className="columns is-centered is-2-mobile is-2-tablet is-8-desktop is-mobile is-multiline">
          {isLoading && <RepositoriesSkeleton />}
          {items.map((repository) => (
            <div key={repository.id}  className='column is-three-quarters-mobile is-half-tablet is-half-desktop'>
              <RepositoryItem {...repository} />
            </div>)
          )}
        </div>
        <SearchNotFound isVisible={(isFetched && !items.length)} />
        <Pagination page={page} totalCount={totalCount} onNext={onNext} onPrevious={onPrevious} />
      </section >
    </div >
  );
};

export default Repository;
