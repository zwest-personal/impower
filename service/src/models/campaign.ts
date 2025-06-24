import {
  Model,
  Column,
  CreatedAt,
  IsUUID,
  PrimaryKey,
  Table,
  UpdatedAt,
  Unique,
  BeforeCreate, HasMany, ForeignKey,
} from 'sequelize-typescript';
import {v4} from 'uuid';
import Note from '@src/models/note';

/**
 * Campaign model
 *
 * A Campaign is a singular effort by canvassers.  It can be on behalf of a candidate, referendum, petition, etc
 *
 * Notes should belong to campaigns, but don't have to.
 *
 * This is an addition beyond the original guidelines just because I had some added free time and wanted to spice up the site a bit more.
 */

@Table
class Campaign extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  campaignId: string;

  @Unique
  @Column
  name: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
  //
  // @HasMany(() => Note)
  // notes: Note[];

  @BeforeCreate
  static createUUID(instance: Campaign) {
    instance.campaignId = v4();
  }
}

export default Campaign;