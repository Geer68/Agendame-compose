import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Account } from './account.entity';
import { Session } from './session.entity';

@Table({
  tableName: 'users',
  timestamps: false,
})
export class User extends Model {
  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull
  @Column(DataType.STRING)
  name: string;

  @AllowNull
  @Column(DataType.STRING)
  email: string;

  @AllowNull
  @Column(DataType.DATE)
  emailVerified: Date;

  @AllowNull
  @Column(DataType.STRING)
  image: string;

  // Relación uno-a-muchos con Account
  @HasMany(() => Account, { as: 'accounts', foreignKey: 'userId' })
  accounts: Account[];

  // Relación uno-a-muchos con Session
  @HasMany(() => Session)
  sessions: Session[];
}
