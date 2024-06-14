declare namespace Forms {
  type SignIn = {
    email: string;
    password: string;
    rememberMe: boolean;
  };

  type SignUp = {
    email: string;
    name: string;
    phone: string;
    cpf: string;
    password: string;
    confirmPassword: string;
  };

  type VerifyCode = {
    email: string;
    code: string;
  };
}
