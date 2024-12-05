export default interface MyForm {
  login: string;
  password: string;
}

export type User = {
  token: string | null,
  isAuthorized: boolean;
}

export interface ProtectedRouteProps {
  element: React.ReactElement;
}