import {useState, useEffect, useCallback} from 'react'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [logoName, setLogoName] = useState(null)
    const [isReady, setIsReady] = useState(false)

    const login = useCallback((jwtToken, id, login) => {
        setToken(jwtToken)
        setUserId(id)
        setLogoName(login)
        localStorage.setItem('userData', JSON.stringify({
            userId: id,
            token: jwtToken,
            logoName: login
        }))
    }, [])

    const logout = () => {
        setToken(null)
        setUserId(null)
        setLogoName(null)
        localStorage.removeItem('userData')
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'))
        if(data && data.token) {
            login(data.token, data.userId, data.logoName)
        }
        setIsReady(true)
    }, [login])

    return {login, logout, token, userId, isReady, logoName}
}