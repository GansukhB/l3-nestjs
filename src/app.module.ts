import { forwardRef, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { DatabaseModule } from './database/database.module';
import { ContentsController } from './contents/contents.controller';
import { ContentsModule } from './contents/contents.module';

@Module({
  imports: [BooksModule, DatabaseModule, ContentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
