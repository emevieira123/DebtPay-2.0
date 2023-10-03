export interface IUser {
  // email?: string;
  // accessToken?: string;
  id: string;
  name: string;
  email: string;
  github_user: string;
}

export interface IContext {
  user: IUser | null;
  authenticated: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}
