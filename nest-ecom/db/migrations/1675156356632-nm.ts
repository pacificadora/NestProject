import { MigrationInterface, QueryRunner } from "typeorm";

export class nm1675156356632 implements MigrationInterface {
    name = 'nm1675156356632'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_19d2d80cfb2f315a294faf3fb33"`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "prodCatId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-31T09:12:38.238Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_19d2d80cfb2f315a294faf3fb33" FOREIGN KEY ("prodCatId") REFERENCES "product_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_19d2d80cfb2f315a294faf3fb33"`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-30 12:22:29.032'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-30 12:22:29.032'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-30T12:22:29.032Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "prodCatId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-30 12:22:29.032'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-30 12:22:29.032'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-30T12:22:29.032Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_19d2d80cfb2f315a294faf3fb33" FOREIGN KEY ("prodCatId") REFERENCES "product_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-30 12:22:29.032'`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-30 12:22:29.032'`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-30T12:22:29.032Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-30 12:22:29.032'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-30 12:22:29.032'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-30T12:22:29.032Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-30 12:22:29.032'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-30 12:22:29.032'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-30T12:22:29.032Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-30 12:22:29.032'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-30 12:22:29.032'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-30T12:22:29.032Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-30 12:22:29.032'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-30 12:22:29.032'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-30T12:22:29.032Z"'`);
    }

}
