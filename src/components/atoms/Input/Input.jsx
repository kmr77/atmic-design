import styled from "styled-components";

export const Input = (props) => {
  const { pleceholder = "" } = props;
  return <SInput type="text" placeholder={pleceholder} />;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 9999px;
  outline: none;
`;
