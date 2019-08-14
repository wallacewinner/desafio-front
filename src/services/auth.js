export const TOKEN_KEY = "@iddog-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
  console.log(isAuthenticated());
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  console.log(isAuthenticated());
};

export const redirectAuth = () => {
  if (isAuthenticated()) {
    console.log('autenticado');
    console.log(getToken());
    if (window.location.pathname !== '/feed')
      window.location.href = '/feed';
  } else {
    console.log('nao_autenticado');
    console.log(getToken());
    if (window.location.pathname !== '/')
      window.location.href = '/';
  }
}