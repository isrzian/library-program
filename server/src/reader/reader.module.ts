import { Module } from '@nestjs/common';
import { ReaderController } from './reader.controller';
import { ReaderService } from './reader.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ReaderEntity} from './reader.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReaderEntity])],
  controllers: [ReaderController],
  providers: [ReaderService]
})
export class ReaderModule {}
