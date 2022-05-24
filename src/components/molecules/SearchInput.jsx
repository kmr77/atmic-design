import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/Input/Input";
import styled from "styled-components";
import { memo } from "react";

export const SearchInput = memo(() => {
  console.log("SearchInput");
  return (
    <div>
      <SContainer>
        <Input placeholder="検索条件を入力" />
        <SbuttonWrapper>
          <PrimaryButton>検索</PrimaryButton>
        </SbuttonWrapper>
      </SContainer>
    </div>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SbuttonWrapper = styled.div`
  padding-left: 8px;
`;
