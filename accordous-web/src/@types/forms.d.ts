declare namespace Forms {
  type SignIn = {
    email: string;
    password: string;
    rememberMe: boolean;
  };

  type SignUp = {
    email: string;
    password: string;
    confirmPassword: string;
  };

  type VerifyCode = {
    email: string;
    code: string;
  };

  type Property = {
    email: string;
    name: string;
    description: string;
    price: string;
    area: string;
    city: string;
    state: string;
    neighborhood: string;
    street: string;
    number: string;
    complement: string;
    phone: string;
  };

  type PropertyContract = {
    email: string;
    name: string;
    phone: string;
    cpf: string;
    cnpj: string;
  };
}
