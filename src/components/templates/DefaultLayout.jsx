import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";

export const DefaultLayout = (props) =>{
    //コンテンツにどんなものが来てもよいようにchildrenでまとめて受け取る
    const { children }= props;
    return(
        <>
            <Header />
            {children}
            <Footer/>
        </>
    );
};