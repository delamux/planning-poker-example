import React from 'react';

interface Context {
  nickname: string;
  setNickname: (nickname: string) => void;
}

export const AuthContext = React.createContext<Context>({
  nickname: '',
  setNickname: () =>
    console.warn(
      'Did you forget to place AuthContext provider on top of your app?'
    ),
});

export const AuthProvider: React.FC = props => {
  const { children } = props;
  const [nickname, setNickname] = React.useState<string>('');

  return (
    <AuthContext.Provider
      value={{
        nickname,
        setNickname,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
