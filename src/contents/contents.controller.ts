import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import Content from 'src/models/Content.entity';

@Controller('contents')
export class ContentsController {
  @Get()
  async getList(): Promise<any> {
    const contents = await Content.findAll();
    return contents;
  }
  @Post()
  async createPost(@Body() body: any): Promise<any> {
    const title = body.title;
    const contentBody = body.body;

    const content = new Content();
    content.title = title;
    content.body = contentBody;
    await content.save();
    return content;
  }

  @Put('/:id')
  async updatePost(@Body() body: any, @Param() params: any) {
    const id = params.id;
    const title = body.title;
    const contentBody = body.body;

    const content = await Content.findByPk(id);

    content.title = title;
    content.body = contentBody;
    await content.save();

    return content;
  }

  @Delete('/:id')
  async deleteContent(@Param() params: any) {
    try {
      const id = params.id;
      const content = await Content.findByPk(id);
      await content.destroy();
      return 'Deleted';
    } catch (e) {
      return e;
    }
  }
}
