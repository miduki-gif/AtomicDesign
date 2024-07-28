import styled from "styled-components";
import { memo} from "react";
// import { UserContext } from "../../../providers/UserProvider";
//Stateの値を参照しかしないときに使用する。
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

export const UserIconWithName = memo(function UserInfo(props){
    console.log("UserIconWithName");
    //このコンポーネントに必要なのは画像と名前の情報だけなので役割を明確にさせる。
    const { image, name } =props;
    //contextの参照、引数にはどのcontextか判断できるようにcontextを定義したものを入れる。
    // const { userInfo } = useContext(UserContext);
    const userInfo = useRecoilValue(userState);
    const isAdmin = userInfo ? userInfo.isAdmin : false;

    return(
        <SContainer>
        <SImg height={160} width={160} src={image} alt={name} />
        <SName>{name}</SName>
        {isAdmin && <SEdit>編集</SEdit>}
        </SContainer>
    );
});

const SContainer = styled.div`
    text-align: center;
`;
const SImg = styled.img`
    border-radius: 50%;
`;
const SName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #40514e;
`;
const SEdit = styled.span`
    text-decoration: underline;
    color: #aaa;
    cursor: pointer;
`