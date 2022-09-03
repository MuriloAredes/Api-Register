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
        name: "categories",
        columns: [
          {
            name: "Id",
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
            name: "IsActive",
            type: "bit",
          },
        ],
      })
    ),
      await queryRunner.createTable(
        new Table({
          name: "products",
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
              type: "float",
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
              name: "IsActive",
              type: "bit",
            },
          ],
        })
      ),
      await queryRunner.createForeignKey(
        "products",
        new TableForeignKey({
          columnNames: ["Category_Id"],
          referencedColumnNames: ["Id"],
          referencedTableName: "categories",
          onDelete: "CASCADE",
        })
      );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Products");
    await queryRunner.dropTable("Categories");
    await queryRunner.dropForeignKey("Produtos", "Category_Id");
    await queryRunner.query('DROP EXTENSION "uuid-ossp"');
  }
}
