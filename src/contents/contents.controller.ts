import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import Category from 'src/models/Category.entity';
import Content from 'src/models/Content.entity';
import ContentTag from 'src/models/ContentTag.entity';
import Tag from 'src/models/Tag.entity';
import { ContentQueryParams, ContentBody } from './contents.dto';

@Controller('contents')
export class ContentsController {
  @Get()
  async getList(@Query() params: ContentQueryParams): Promise<Content[]> {
    const orderBy: string = params.orderBy || 'id';
    const orderType: string = params.orderType || 'desc';
    const limit: number = Number(params.limit) || 1;
    const offset: number = Number(params.offset) || 0;
    console.log(typeof limit);
    console.log(limit, offset);
    const contents = await Content.findAll({
      order: [[orderBy, orderType]],
      limit: limit,
      offset,
      include: [Category, Tag],
    });
    return contents;
  }
  @Post()
  async createPost(@Body() body: any): Promise<Content> {
    const title = body.title;
    const contentBody = body.body;

    const content = new Content();
    content.title = title;
    content.body = contentBody;
    await content.save();
    return content;
  }

  @Put('/:id')
  async updatePost(
    @Body() body: ContentBody,
    @Param() params: any,
  ): Promise<Content> {
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
  async deleteContent(@Param() params: any): Promise<String> {
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
