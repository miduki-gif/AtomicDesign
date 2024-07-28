import { RecoilRoot } from "recoil";
import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./style.css";

export default function App() {
    return (
      <RecoilRoot>
      <UserProvider>
      <Router />
      </UserProvider>
      </RecoilRoot>
    );
  }
