import { MigrationInterface, QueryRunner } from "typeorm";

export class newMigrations1674811882119 implements MigrationInterface {
    name = 'newMigrations1674811882119'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_item" ADD "quantity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cart" ADD "quantity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-27T09:31:23.800Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-27T09:31:23.800Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-27T09:31:23.800Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-27T09:31:23.800Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-27T09:31:23.800Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-27T09:31:23.800Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-27T09:31:23.800Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-27T09:31:23.800Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-27T09:31:23.800Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-27T09:31:23.800Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-27T09:31:23.800Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-27T09:31:23.800Z"'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-27T09:31:23.800Z"'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-27T09:31:23.800Z"'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-27T09:31:23.800Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-27T09:31:23.800Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-27T09:31:23.800Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-27T09:31:23.800Z"'`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-27T09:31:23.800Z"'`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-27T09:31:23.800Z"'`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-27T09:31:23.800Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-27 09:26:02.765'`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-27 09:26:02.765'`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-27T09:26:02.765Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-27 09:26:02.765'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-27 09:26:02.765'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-27T09:26:02.765Z"'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-27 09:26:02.765'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-27 09:26:02.765'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-27T09:26:02.765Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-27 09:26:02.765'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-27 09:26:02.765'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-27T09:26:02.765Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-27 09:26:02.765'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-27 09:26:02.765'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-27T09:26:02.765Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-27 09:26:02.765'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-27 09:26:02.765'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-27T09:26:02.765Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-27 09:26:02.765'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-27 09:26:02.765'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-27T09:26:02.765Z"'`);
        await queryRunner.query(`ALTER TABLE "cart" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "quantity"`);
    }

}
