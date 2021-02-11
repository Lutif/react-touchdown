export type UserType = {
  _id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  isActive: boolean;
  email: string;
  isEmailVerified: boolean;
  companies: UserCompanyType[];
  createdAt: string;
  updatedAt: string;
};

type UserCompanyType = {
  _id: string;
  company: CompanyType;
  isActive: true;
  creator: true;
  role: string;
  createdAt: string;
  updatedAt: string;
};
type CompanyType = {
  _id: string;
  name: string;
};
