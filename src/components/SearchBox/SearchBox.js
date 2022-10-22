import { Wrapper, Input } from "./SearchBox.styled";

export const SearchBox = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Wrapper>
  );
};
