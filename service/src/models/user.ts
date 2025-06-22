/**
 * Users are our canvassers/system users.
 *
 * This is a very barebones version of a User system, and you'd want an additional system like Casbin to add in RBAC
 * on top of it.  Or just use an external IDP.
 */
import {
    BeforeCreate,
    BeforeUpdate,
    Column,
    IsEmail,
    IsUUID,
    Model,
    PrimaryKey,
    Table,
    Unique
} from "sequelize-typescript";
import bcrypt from "bcrypt"
import {DataTypes} from "sequelize";

@Table
class User extends Model {
    @IsUUID(4)
    @PrimaryKey
    @Column
    userId: string;

    @Column
    fullName: string;

    @Unique
    @IsEmail
    @Column
    email: string;

    @Column({
        type: DataTypes.STRING(40)
    })
    password: string;

    @BeforeUpdate
    static updateHashedPassword(instance: User) {
        if (instance.changed('password')) {
            const salt = bcrypt.genSaltSync();
            instance.password = bcrypt.hashSync(instance.password, salt);
        }
    };

    @BeforeCreate
    static createHashedPassword(instance: User) {
        const salt = bcrypt.genSaltSync();
        instance.password = bcrypt.hashSync(instance.password, salt);
    };

    /**
     * validatePassword is a simplistic Auth pass that just returns true/false based on username and password.
     *
     * Uses email as slt in this case, but in real world setups you'd want something more robust (or again,
     * just use a third party IDP)
     */
    async validatePassword(email: string, password: string): Promise<boolean> {
        const result = await User.findOne({ where: { email: email }})
        if (result === null) {
            return false
        }
        return await bcrypt.compare(password, (result as User).password);
    }
}

export default User;