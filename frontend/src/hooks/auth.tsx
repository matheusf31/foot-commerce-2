import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import api from '../services/api';

interface IProfile {
  id: string;
  name: string;
  email: string;
}

interface IAuthContextData {
  profile: IProfile;
  signIn(email: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [profile, setProfile] = useState({} as IProfile);

  useEffect(() => {
    const userProfile = localStorage.getItem('@FootCommerce:profile');

    if (userProfile) {
      setProfile(JSON.parse(userProfile));
    }
  }, []);

  const signIn = useCallback(async email => {
    const response = await api.post('sessions', {
      email,
    });

    localStorage.setItem(
      '@FootCommerce:profile',
      JSON.stringify(response.data),
    );

    setProfile(response.data);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@FootCommerce:profile');

    setProfile({} as IProfile);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        profile,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Usuário não está autenticado.');
  }

  return context;
}

export { AuthProvider, useAuth };
