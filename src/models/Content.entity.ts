import {
  Table,
  Column,
  Model,
  HasMany,
  HasOne,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Col } from 'sequelize/types/utils';
import Category from './Category.entity';

@Table({
  tableName: 'contents',
})
class Content extends Model {
  @Column
  title: string;

  @Column
  body: string;

  @Column
  comment_count: number;

  @Column
  view_count: number;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;

  @BelongsTo(() => Category, { foreignKey: 'categoryId' })
  category: Category;
}
export default Content;
