import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntrepreneurshipService } from './entrepreneurship.service';
import { CreateEntrepreneurshipDto } from './dto/create-entrepreneurship.dto';
import { UpdateEntrepreneurshipDto } from './dto/update-entrepreneurship.dto';

@Controller('entrepreneurship')
export class EntrepreneurshipController {
  constructor(private readonly entrepreneurshipService: EntrepreneurshipService) {}

  @Post()
  create(@Body() createEntrepreneurshipDto: CreateEntrepreneurshipDto) {
    return this.entrepreneurshipService.create(createEntrepreneurshipDto);
  }

  @Get()
  findAll() {
    return this.entrepreneurshipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entrepreneurshipService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntrepreneurshipDto: UpdateEntrepreneurshipDto) {
    return this.entrepreneurshipService.update(+id, updateEntrepreneurshipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entrepreneurshipService.remove(+id);
  }
}
