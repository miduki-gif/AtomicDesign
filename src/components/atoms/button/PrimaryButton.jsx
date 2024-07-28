import styled from "styled-components";
import { BaseButton } from "./BaseButton";

//画面の主要となるボタンのデザインを提供していろんなところで使えるようにする。
export const PrimaryButton = (props) =>{
    //他の子コンポーネントでも使えるようにする。
    const { children } = props;
    return(
            <SButton>{children}</SButton>
    );
};
//既存のコンポーネントに対してstyleを上書きする。
const SButton = styled(BaseButton)`
 background-color: #40514e;
`;
