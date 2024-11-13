import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Entrepreneurship } from 'src/core/entities/entrepreneurship.entity';
import { UpdateEntrepreneurshipDto } from './dto/update-entrepreneurship.dto';
import { Account } from 'src/core/entities/account.entity';

@Injectable()
export class EntrepreneurshipRepository {
  constructor(
    @InjectModel(Entrepreneurship)
    private readonly entrepreneurshipModel: typeof Entrepreneurship,
  ) {}

  // async create(createEntrepreneurshipDto: CreateEntrepreneurshipDto): Promise<Entrepreneurship> {
  //   return this.entrepreneurshipModel.create(createEntrepreneurshipDto);
  // }

  async findAll(): Promise<Entrepreneurship[]> {
    return this.entrepreneurshipModel.findAll();
  }

  async findOne(id: number): Promise<Entrepreneurship> {
    return this.entrepreneurshipModel.findOne({
      where: { id },
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
    updateEntrepreneurshipDto: UpdateEntrepreneurshipDto,
  ): Promise<[number, Entrepreneurship[]]> {
    return this.entrepreneurshipModel.update(updateEntrepreneurshipDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number): Promise<void> {
    const entrepreneurship = await this.entrepreneurshipModel.findByPk(id);
    if (entrepreneurship) {
      await entrepreneurship.destroy();
    }
  }
}
