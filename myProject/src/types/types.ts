export type AuthMode = 'login' | 'register';

export type AuthFormValues = {
  email: string;
  password: string;
  userName?: string;
}
