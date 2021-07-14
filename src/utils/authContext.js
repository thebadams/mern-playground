import React, {useState, useEffect} from 'react';

export const AuthContext = React.createContext({});

const checkIsAuthenticated = async () => {
  let number = Math.floor(Math.random()*2)
  if(number === 0) {
    return true
  } else {
    throw new Error()
  }
}
export default function Auth({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(()=> {
    checkAuth()
  }, []);

  const checkAuth = () => checkIsAuthenticated()
  .then(()=> setIsAuthenticated(true))
  .catch(()=> setIsAuthenticated(false))
  .then(()=> setIsLoading(false));

  return (
    <AuthContext.Provider value = {{isAuthenticated, isLoading}} >
      {children}
    </AuthContext.Provider>
  )
}