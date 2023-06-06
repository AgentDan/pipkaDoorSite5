import './App.css';
import {BrowserRouter} from "react-router-dom";
import {AuthContext} from './context/AuthContext'
import {useAuth} from "./hooks/auth.hook";
import {useRoutes} from "./routes";

function App() {
    const {login, logout, token, userId, isReady, logoName} = useAuth()
    const isLogin = !!token
    const routes = useRoutes(isLogin)

    return (
        <AuthContext.Provider value={{login, logout, token, userId, isReady, isLogin, logoName}}>
            <div>
                <BrowserRouter>
                    {routes}
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
