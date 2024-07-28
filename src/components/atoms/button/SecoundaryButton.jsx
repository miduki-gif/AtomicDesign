import styled from "styled-components";
import { BaseButton } from "./BaseButton";

//画面の主要となるボタンのデザインを提供していろんなところで使えるようにする。
export const SecoundaryButton = (props) =>{
    //他の子コンポーネントでも使えるようにする。
    const { children, onClick } = props;
    return(
            <SButton onClick={onClick}>{children}</SButton>
    );
};

const SButton = styled(BaseButton)`
 background-color: #11999e;
`;
