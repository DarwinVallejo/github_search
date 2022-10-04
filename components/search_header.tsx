import React, { FC, PropsWithChildren } from 'react'
import { debounce } from '../utils/debounce';

type Props = { title: String, subtitle: String, onChange: (word: string) => void };

const SearchHeader: FC<PropsWithChildren<Props>> = ({ title, subtitle, onChange }) => {
  const debounceOnChange = debounce(onChange, 500);
  const handleOnChange = (word: string) => {
    if (word) {
      debounceOnChange(word);
    }
  };

  return (
    <section className="hero">
      <div className="hero-body">
        <p className="title">
          {title}
        </p>
        <p className="subtitle">
          {subtitle}
        </p>
        <input className="input is-rounded" type="text" placeholder="Escribe el nombre a buscar" onChange={(e) => handleOnChange(e.target.value)} />

      </div>
    </section>
  );
};

export default SearchHeader;