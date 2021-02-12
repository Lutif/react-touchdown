export type UserType = {
  _id: string;
  fullName: string;
  avatar: string;
  isActive: boolean;
  email: string;
  isEmailVerified: boolean;
  companies: UserCompanyType[];
  updatedAt: string;
};

type UserCompanyType = {
  _id: string;
  company: CompanyType;
  isActive: boolean;
  creator: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
};
type CompanyType = {
  _id: string;
  name: string;
};
