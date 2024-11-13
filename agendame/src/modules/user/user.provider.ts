import { USER_REPOSITORY } from 'src/core/constants/constants';
import { User } from 'src/core/entities/users.entity';

export const userProvider = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
