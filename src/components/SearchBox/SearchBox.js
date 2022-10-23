import { Wrapper, Input, SearchForm, Button } from "./SearchBox.styled";

export const SearchBox = ({props,value, onChange}) => {

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(value);
  };
  
  return (
    <Wrapper>
      <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
          onChange={(e) => onChange(e.target.value)}
        />
         <Button type="submit">Искать</Button>
        </SearchForm>
    </Wrapper>
  );
};
