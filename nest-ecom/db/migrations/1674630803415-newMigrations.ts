import { MigrationInterface, QueryRunner } from "typeorm";

export class newMigrations1674630803415 implements MigrationInterface {
    name = 'newMigrations1674630803415'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_96152d453aaea425b5afde3ae9f" UNIQUE ("name"), CONSTRAINT "PK_0dce9bc93c2d2c399982d04bef1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD "prodCatId" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "UQ_19d2d80cfb2f315a294faf3fb33" UNIQUE ("prodCatId")`);
        await queryRunner.query(`ALTER TABLE "user" ADD "role" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_6620cd026ee2b231beac7cfe578" UNIQUE ("role")`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-25T07:13:24.978Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-25T07:13:24.978Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-25T07:13:24.978Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-25T07:13:24.978Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-25T07:13:24.978Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-25T07:13:24.978Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-25T07:13:24.978Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-25T07:13:24.978Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-25T07:13:24.978Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-25T07:13:24.978Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-25T07:13:24.978Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-25T07:13:24.978Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-25T07:13:24.978Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-25T07:13:24.978Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-25T07:13:24.978Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_19d2d80cfb2f315a294faf3fb33" FOREIGN KEY ("prodCatId") REFERENCES "product_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_19d2d80cfb2f315a294faf3fb33"`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-24 12:10:48.471'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-24 12:10:48.471'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-24T12:10:48.471Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-24 12:10:48.471'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-24 12:10:48.471'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-24T12:10:48.471Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-24 12:10:48.471'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-24 12:10:48.471'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-24T12:10:48.471Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-24 12:10:48.471'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-24 12:10:48.471'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-24T12:10:48.471Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-24 12:10:48.471'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-24 12:10:48.471'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-24T12:10:48.471Z"'`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_6620cd026ee2b231beac7cfe578"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "UQ_19d2d80cfb2f315a294faf3fb33"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "prodCatId"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "price"`);
        await queryRunner.query(`DROP TABLE "product_category"`);
    }

}
