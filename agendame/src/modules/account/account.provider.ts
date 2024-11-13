import { ACCOUNT_REPOSITORY } from 'src/core/constants/constants';
import { Account } from 'src/core/entities/account.entity';

export const userProvider = [
  {
    provide: ACCOUNT_REPOSITORY,
    useValue: Account,
  },
];
