/**
 Note is a singular canvasser's note

 Contains info about the canvasser (by id), campaign (by id), and signatory (name, email).
 With additional freeform notes.
 */
import {
    Column,
    CreatedAt,
    DataType,
    ForeignKey,
    IsEmail,
    IsUUID,
    Model,
    PrimaryKey,
    Unique,
    UpdatedAt
} from "sequelize-typescript"
import Campaign from "@src/models/campaign";
import User from "@src/models/user";

class Note extends Model {
    @IsUUID(4)
    @PrimaryKey
    @Column
    noteId: string;

    @IsEmail
    @Unique
    @Column
    email: string

    @Column(DataType.TEXT)
    notes: string

    @CreatedAt
    createdAt: Date

    @UpdatedAt
    updatedAt: Date

    // Foreign Keys
    @ForeignKey(() => User)
    @IsUUID(4)
    @Column
    userId: string;

    @ForeignKey(() => Campaign)
    @IsUUID(4)
    @Column
    campaignId: string;
}

export default Note;