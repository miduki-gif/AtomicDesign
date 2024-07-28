import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { SecoundaryButton } from "../atoms/button/SecoundaryButton";
// import { useContext } from "react";
// import { UserContext } from "../../providers/UserProvider";
import { useRecoilState } from "recoil"
import { userState } from "../../store/userState";
const users = [...Array(10).keys()].map(((val) =>{
    return{
        id: val,
        name: `じゃけえ${val}`,
        image: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        email: "12345@example.com",
        phone: "090-1111-2222",
        company: {
            name: "テスト株式会社"
        },
        website: "https://google.com"
    };
}));

export const Users = () =>{
    // const { userInfo, setUserInfo } = useContext(UserContext);
const [ userInfo, setUserInfo] = useRecoilState(userState);

    const onClickSwitch = () =>{
        setUserInfo({ isAdmin: !userInfo.isAdmin});
    }
    return(
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            <br />
            <SecoundaryButton onClick={onClickSwitch}>切り替え</SecoundaryButton>
            <SUserArea>
            {users.map((user) =>(
                <UserCard key={user.id} user={user} />
            ))}
            </SUserArea>
        </SContainer>
    );
};

const SContainer = styled.div`
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
`