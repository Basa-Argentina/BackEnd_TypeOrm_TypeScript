import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Profile } from "./Profile";

@Entity("user_profile", { schema: "dbo" })
export class UserProfile {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  public id: number;

  @Column("nvarchar", { name: "name", length: 255 })
  public name: string;

  @OneToOne(() => Profile, (profile) => profile.userProfile)
  @JoinColumn([{ name: "profileId", referencedColumnName: "id" }])
  public profile: Profile;
}
