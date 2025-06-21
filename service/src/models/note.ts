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
    @Column
    @IsUUID(4)
    @PrimaryKey
    noteId: string;

    @Column
    @IsEmail
    @Unique
    email: string

    @Column(DataType.TEXT)
    notes: string

    @CreatedAt
    createdAt: Date

    @UpdatedAt
    updatedAt: Date

    // Foreign Keys
    @ForeignKey(() => User)
    @Column
    @IsUUID(4)
    userId: string;

    @ForeignKey(() => Campaign)
    @Column
    @IsUUID(4)
    campaignId: string;
}

export default Note;