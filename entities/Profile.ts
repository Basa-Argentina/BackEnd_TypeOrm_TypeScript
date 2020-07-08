import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserProfile } from "./UserProfile";

@Entity("profile", { schema: "dbo" })
export class Profile {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  public id: number;

  @Column("nvarchar", { name: "gender", length: 255 })
  public gender: string;

  @Column("nvarchar", { name: "photo", length: 255 })
  public photo: string;

  @OneToOne(() => UserProfile, (userProfile) => userProfile.profile)
  public userProfile: UserProfile;
}
