import { Header } from "../atoms/layout/Header";

//Headerとコンテンツが表示される画面のレイアウト
//Templateは情報を持たず、あくまでレイアウトだけ
export const HeaderOnly = (props) =>{
    //コンテンツにどんなものが来てもよいようにchildrenでまとめて受け取る
    const { children }= props;
    return(
        <>
            <Header />
            {children}
        </>
    );
};