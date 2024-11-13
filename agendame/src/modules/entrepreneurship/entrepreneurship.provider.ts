import { ENTREPRENEURSHIP_REPOSITORY } from 'src/core/constants/constants';
import { Entrepreneurship } from 'src/core/entities/entrepreneurship.entity';

export const entrepreneurshipProvider = [
  {
    provide: ENTREPRENEURSHIP_REPOSITORY,
    useValue: Entrepreneurship,
  },
];
