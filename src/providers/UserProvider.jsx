import { createContext, useState } from "react";

//Contextの作成
//今回の初期化では空のオブジェクトを渡す。
export const UserContext = createContext({});

export const UserProvider = (props) =>{
    const { children } = props;

    const [userInfo, setUserInfo] = useState(null);

    //グローバルに参照できる値はvalueというpropsに渡していく
    //配下のコンポーネントからStateも参照できるし、更新ができる。
    return(
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    );
};
