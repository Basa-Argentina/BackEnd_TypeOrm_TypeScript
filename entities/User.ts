import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user", { schema: "dbo" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  public id: number;

  @Column("nvarchar", { name: "firstname", length: 255 })
  public firstname: string;

  @Column("nvarchar", { name: "lastname", length: 255 })
  public lastname: string;
}
