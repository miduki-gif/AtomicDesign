import styled from "styled-components";
import { SecoundaryButton } from "../atoms/button/SecoundaryButton";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { UserContext } from "../../providers/UserProvider";
//値は参照しないが更新だけするもの
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top = () =>{
    const navigate = useNavigate();
    // const { setUserInfo } = useContext(UserContext);
    const setUserInfo = useSetRecoilState(userState);
    const OnClickAdmin = () =>{
        setUserInfo({ isAdmin: true });
        navigate("/users");
    }
    const OnClickGeneral = () =>{
        setUserInfo({ isAdmin: false });
        navigate("/users");
    }

    return(
        <SContainer>
            <h2>TOPページです</h2>
            <SecoundaryButton onClick={OnClickAdmin}>管理者ユーザー</SecoundaryButton>
            <br />
            <br />
            <SecoundaryButton onClick={OnClickGeneral}>一般ユーザー</SecoundaryButton>
        </SContainer>
    );
};

const SContainer = styled.div`
    text-align: center;
`;