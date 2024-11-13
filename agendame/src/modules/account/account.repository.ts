import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Account } from 'src/core/entities/account.entity';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountRepository {
  constructor(
    @InjectModel(Account)
    private readonly accountModel: typeof Account,
  ) {}

  async findAll(): Promise<Account[]> {
    return this.accountModel.findAll();
  }

  async findOne(id: number): Promise<Account> {
    return this.accountModel.findOne({
      where: { id: id },
    });
  }

  async update(
    id: number,
    updateAccountDto: UpdateAccountDto,
  ): Promise<[number, Account[]]> {
    return this.accountModel.update(updateAccountDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number): Promise<void> {
    const account = await this.accountModel.findByPk(id);
    if (account) {
      await account.destroy();
    }
  }
}
