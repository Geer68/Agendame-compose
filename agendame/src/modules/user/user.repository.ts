import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/core/entities/users.entity';
// import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Account } from 'src/core/entities/account.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  // async create(createUserDto: CreateUserDto): Promise<User> {
  //   return this.userModel.create(createUserDto);
  // }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(email: string): Promise<User> {
    return this.userModel.findOne({
      where: { email: email },
      include: [
        {
          model: Account,
          as: 'accounts',
        },
      ],
    });
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<[number, User[]]> {
    return this.userModel.update(updateUserDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number): Promise<void> {
    const user = await this.userModel.findByPk(id);
    if (user) {
      await user.destroy();
    }
  }
}
