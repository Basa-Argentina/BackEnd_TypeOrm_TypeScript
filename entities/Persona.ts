import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("persona", { schema: "dbo" })
export class Persona {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  public id: number;

  @Column("nvarchar", { name: "firstname", length: 255 })
  public firstname: string;

  @Column("nvarchar", { name: "lastname", length: 255 })
  public lastname: string;
}
