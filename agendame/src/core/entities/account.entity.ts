import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from './users.entity';

@Table({
  tableName: 'accounts',
  timestamps: true,
})
export class Account extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataType.INTEGER)
  id: number;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  userId: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  type: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  provider: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  providerAccountId: string;

  @Column(DataType.TEXT)
  refreshToken: string;

  @Column(DataType.TEXT)
  accessToken: string;

  @Column(DataType.BIGINT)
  expires_at: number;

  @Column(DataType.TEXT)
  id_token: string;

  @Column(DataType.TEXT)
  scope: string;

  @Column(DataType.TEXT)
  session_state: string;

  @Column(DataType.TEXT)
  token_type: string;

  @BelongsTo(() => User)
  user: User;
}
