import React, {createContext} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from 'components/AppRouter';
import UserStore from 'store/UserStore';
import { User } from 'types/user';

export const UserContext = createContext<User | null>(null);

const App: React.FC = () => {
  return (

      <UserContext.Provider value={{
          user: new UserStore()
      }}>
          <BrowserRouter>
             <AppRouter/>
          </BrowserRouter>
      </UserContext.Provider>
  );
}

export default App;
