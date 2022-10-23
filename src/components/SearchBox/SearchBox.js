import { Wrapper, Input, SearchForm, Button } from "./SearchBox.styled";
import PropTypes from 'prop-types';
import { useState  } from 'react';

export const SearchBox = (props) => {
   const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.currentTarget.value );
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(query);
    };


    return (
      <Wrapper>
      <SearchForm onSubmit={handleSubmit}>
        <Input
          type="text"
          value={query}
          onChange={handleChange}
        />
        <Button type="submit">Искать</Button>
      </SearchForm>
      </Wrapper>
    );

};

  SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired
  }
