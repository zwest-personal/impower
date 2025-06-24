/**
 Note is a singular canvasser's note

 Contains info about the canvasser (by id), campaign (by id), and signatory (name, email).
 With additional freeform notes.
 */
import {
  BeforeCreate, BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey, HasMany, Index,
  IsEmail,
  IsUUID,
  Model,
  PrimaryKey,
  Unique,
  UpdatedAt,
} from 'sequelize-typescript';
import Campaign from '@src/models/campaign';
import User from '@src/models/user';
import {v4} from 'uuid';
import {Charsets} from "mysql2";

class Note extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  noteId: string;

  @Index({
    name: 'text-search',
    type: 'FULLTEXT',
    concurrently: true,
    collate: 'NOCASE',
  })
  @Column
  fullName: string;

  @Index({
    name: 'text-search',
    type: 'FULLTEXT',
    concurrently: true,
    collate: 'NOCASE',
  })
  @IsEmail
  @Column
  email: string;

  @Index({
    name: 'text-search',
    type: 'FULLTEXT',
    concurrently: true,
    collate: 'NOCASE',
  })
  @Column(DataType.TEXT)
  notes: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  // Foreign Keys
  @ForeignKey(() => User)
  @Column
  userId: string;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Campaign)
  @Column
  campaignId: string;

  @BelongsTo(() => Campaign)
  campaign: Campaign;

  @BeforeCreate
  static createUUID(instance: Note) {
    instance.noteId = v4();
  }
}


export default Note;