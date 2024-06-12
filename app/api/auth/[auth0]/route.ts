import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  login: handleLogin({ 
    returnTo: '/api/users/create',
    authorizationParams: { screen_hint: "login" } }),
  signup: handleLogin({ 
    returnTo: '/api/users/create',
    authorizationParams: { screen_hint: "signup" } }),
});
