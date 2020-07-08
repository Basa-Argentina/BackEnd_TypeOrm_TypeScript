import { Column, Entity } from "typeorm";

@Entity("typeorm_metadata", { schema: "dbo" })
export class TypeormMetadata {
  @Column("varchar", { name: "type", length: 255 })
  public type: string;

  @Column("varchar", { name: "database", nullable: true, length: 255 })
  public database: string | null;

  @Column("varchar", { name: "schema", nullable: true, length: 255 })
  public schema: string | null;

  @Column("varchar", { name: "table", nullable: true, length: 255 })
  public table: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  public name: string | null;

  @Column("nvarchar", { name: "value", nullable: true })
  public value: string | null;
}
