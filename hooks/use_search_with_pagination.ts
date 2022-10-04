import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { PaginationResponse } from "../models/response/pagination_response";

type SearchFunction<T> = (word: string, page: number,) => Promise<T>;

const useSearchWithpage = <T>(onSearch: SearchFunction<PaginationResponse<T>>) => {
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const [word, setWord] = useState('');
  const [items, setItems] = useState<T[]>([]);

  const _search = async (newWord: string, page = 1) => {

    try {
      const _paginationResponse = await onSearch(newWord, page);
      setItems([..._paginationResponse.items]);
      setTotalCount(_paginationResponse.totalCount);

    } catch (error) {
      setItems([]);
      setTotalCount(0);
    }
  };

  const search = (newWord: string) => {
    setWord(newWord);
  };

  const onNext = () => {
    setPage(page + 1);
  };

  const onPrevious = () => {
    setPage(page - 1);
  };

  const { isLoading, isFetched } = useQuery(['search', word, page], () => _search(word, page), {
    enabled: Boolean(word)
  });

  return {
    page,
    search,
    items,
    totalCount,
    onNext,
    onPrevious,
    isLoading,
    isFetched
  };
};

export default useSearchWithpage;