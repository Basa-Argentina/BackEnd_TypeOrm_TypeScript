import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("post", { schema: "dbo" })
export class Post {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  public id: number;

  @Column("nvarchar", { name: "title", length: 255 })
  public title: string;

  @Column("nvarchar", { name: "description", length: 255 })
  public description: string;

  @Column("int", { name: "viewCount" })
  public viewCount: number;
}
