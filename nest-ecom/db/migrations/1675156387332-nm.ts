import { MigrationInterface, QueryRunner } from "typeorm";

export class nm1675156387332 implements MigrationInterface {
    name = 'nm1675156387332'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-31 09:12:38.238'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-31 09:12:38.238'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-31 09:12:38.238'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-31 09:12:38.238'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-31 09:12:38.238'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-31 09:12:38.238'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-31 09:12:38.238'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-31 09:12:38.238'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-31 09:12:38.238'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-31 09:12:38.238'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-31 09:12:38.238'`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-31 09:12:38.238'`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-31 09:12:38.238'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-31 09:12:38.238'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
    }

}
