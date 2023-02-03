import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddNewColumsn1674550756030 implements MigrationInterface {
  name = 'AddNewColumsn1674550756030';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "base_entity" ("id" SERIAL NOT NULL, "createdBy" character varying NOT NULL, "updatedBy" character varying NOT NULL DEFAULT '"2023-01-24T08:59:17.639Z"', "createdOn" TIMESTAMP NOT NULL DEFAULT '"2023-01-24T08:59:17.639Z"', "updatedOn" TIMESTAMP NOT NULL DEFAULT '"2023-01-24T08:59:17.640Z"', "deletedOn" TIMESTAMP, CONSTRAINT "PK_03e6c58047b7a4b3f6de0bfa8d7" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "createdBy" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "updatedBy" character varying NOT NULL DEFAULT '"2023-01-24T08:59:17.639Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "createdOn" TIMESTAMP NOT NULL DEFAULT '"2023-01-24T08:59:17.639Z"'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "updatedOn" TIMESTAMP NOT NULL DEFAULT '"2023-01-24T08:59:17.640Z"'`,
    );
    await queryRunner.query(`ALTER TABLE "user" ADD "deletedOn" TIMESTAMP`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD "address" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "address"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "deletedOn"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedOn"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdOn"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedBy"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdBy"`);
    await queryRunner.query(`DROP TABLE "base_entity"`);
  }
}
