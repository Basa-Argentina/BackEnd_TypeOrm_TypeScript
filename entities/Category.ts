import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("category", { schema: "dbo" })
export class Category {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  public id: number;

  @Column("nvarchar" , { name: "name", length: 255 })
  public name: string;

  @Column("nvarchar", { name: "description", length: 255 })
  public description: string;
}


