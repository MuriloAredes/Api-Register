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
        name: 'Categories',
        columns: [
          {
            name: "Id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "Name",
            type: "varchar",
          },
          {
            name: "Register",
            type: "Timestamp",
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
          name: 'Products',
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
              generationStrategy: "uuid",
              default: "uuid_generate_v4()",
            },
            {
              name: "Name",
              type: "varchar",
            },
            {
              name: "Price",
              type: "float",
            },
            {
              name: "Amount",
              type: "int",
            },
            {
              name: "CategoryId",
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
        "Products",
        new TableForeignKey({
          columnNames: ["CategoryId"],
          referencedColumnNames: ["Id"],
          referencedTableName: "Categories",
          onDelete: "CASCADE",
        })
      );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Products");
    await queryRunner.dropTable("Categories");
    await queryRunner.dropForeignKey("Produtos", "CategoryId");
    await queryRunner.query('DROP EXTENSION "uuid-ossp"');
  }
}
