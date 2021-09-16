import { Route, Redirect } from 'react-router-dom'

const GuardedRoute = ({ children, ...props }) => {
    if (window.localStorage.getItem("token") === null) {
        return <Redirect to="/" />
    }
    return <Route {...props}>{children}</Route>
}

export default GuardedRoute;