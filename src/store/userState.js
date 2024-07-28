import { atom } from "recoil"
//recoilでStateを定義(keyは一意にする、ファイル名と揃えると自然)
export const userState = atom({
    key: "userState",
    default: { isAdmin: false }
});
