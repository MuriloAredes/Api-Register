import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class default1662039883933 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(
      new Table({
        name: "Categories",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "create_At",
            type: "date",
            default: "now()",
          },
          {
            name: "update_At",
            type: "date",
            default: "now()",
          },
          {
            name: "isActive",
            type: "bit",
          },
        ],
      })
    ),
      await queryRunner.createTable(
        new Table({
          name: "Products",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
              generationStrategy: "uuid",
              default: "uuid_generate_v4()",
            },
            {
              name: "name",
              type: "varchar",
            },
            {
              name: "price",
              type: "decimal",
            },
            {
              name: "amount",
              type: "int",
            },
            {
              name: "category_Id",
              type: "uuid",
            },
            {
              name: "isActive",
              type: "bit",
            },
          ],
         
        })
      ),
      queryRunner.clearSqlMemory()

           const  foreignKey = new TableForeignKey({
          columnNames: ["category_Id"],
          referencedColumnNames: ["id"],
          referencedTableName: "Categories",
          onDelete: "CASCADE",
        })
        await queryRunner.createForeignKey("Products", foreignKey)


     
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Products");
    await queryRunner.dropTable("Categories");
    await queryRunner.dropForeignKey("Products", "category_Id");
    await queryRunner.query('DROP EXTENSION "uuid-ossp"');
  }
}
