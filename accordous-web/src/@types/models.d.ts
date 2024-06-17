namespace Models {
  type User = {
    id: string;
    email: string;
    password: string;
    verifyCode: {
      code: String;
      expiresIn: Number;
    };
    createdAt: Date;
  };

  type Property = {
    id: string;
    userId: string;
    description: string;
    price: number;
    area: number;
    city: string;
    state: string;
    neighborhood: string;
    street: string;
    number: string;
    complement: string;
    phone: string;
    archived: boolean;
    createdAt: Date;
  };
}
