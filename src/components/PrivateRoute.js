import React, {useContext} from  'react';
import { Route, Redirect} from 'react-router-dom';
import { AuthContext } from '../utils/authContext';
import Loading from './Loading';
const PrivateRoute = ({component: Component, ...props}) => {
  const {isAuthenticated, isLoading} = useContext(AuthContext)

return (
        <Route
            {...props}
            render={props => (
                !isLoading
                    ?
                    (
                        isAuthenticated
                            ?
                            <Component {...props} />
                            :
                            <Redirect to='/' />
                    )
                    :
                    <Loading />
            )}
        />
    )

}

export default PrivateRoute;


