import { CreateUserProps } from '../../user/interfaces/create-user-props';

export interface CreateCustomerProps extends CreateUserProps {
  firstName: string,
  lastName: string,
  title: string,
}