import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Col } from 'sequelize/types/utils';

@Table({
  tableName: 'content',
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
}
export default Content;
