import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useRecoilState } from "recoil";
import { userState } from "../../store/usetState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `うんちゃ${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "abb@aaa.com",
    phone: "090-0000-2222",
    company: {
      name: "株式会社リーマンスタイル"
    },
    website: "https://www.yahoo.co.jp/"
  };
});

export const Users = () => {
  const { state } = useLocation();
  const isAdmin = state ? state.isAdmin : false;
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContaier>
      <h2>ユーザー一覧です</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} isAdmin={isAdmin} />
        ))}
      </SUserArea>
    </SContaier>
  );
};

const SContaier = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
