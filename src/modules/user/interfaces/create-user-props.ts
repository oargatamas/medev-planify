export interface CreateUserProps {
  username: string,
  email: string,
  passwordHash: string,
  isVerified: boolean,
  createdAt: Date,
  updatedAt: Date,
  lastLogin: Date,
}