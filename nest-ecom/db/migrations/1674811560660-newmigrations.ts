import { MigrationInterface, QueryRunner } from "typeorm";

export class newmigrations1674811560660 implements MigrationInterface {
    name = 'newmigrations1674811560660'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_87ffe09e725a6e79f87dd6c0b69"`);
        await queryRunner.query(`CREATE TABLE "cart" ("id" SERIAL NOT NULL, "createdBy" character varying NOT NULL, "updatedBy" character varying NOT NULL DEFAULT '"2023-01-27T09:26:02.765Z"', "createdOn" TIMESTAMP NOT NULL DEFAULT '"2023-01-27T09:26:02.765Z"', "updatedOn" TIMESTAMP NOT NULL DEFAULT '"2023-01-27T09:26:02.765Z"', "deletedOn" TIMESTAMP, "productId" integer, CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_item" ("id" SERIAL NOT NULL, "createdBy" character varying NOT NULL, "updatedBy" character varying NOT NULL DEFAULT '"2023-01-27T09:26:02.765Z"', "createdOn" TIMESTAMP NOT NULL DEFAULT '"2023-01-27T09:26:02.765Z"', "updatedOn" TIMESTAMP NOT NULL DEFAULT '"2023-01-27T09:26:02.765Z"', "deletedOn" TIMESTAMP, "orderId" integer, "productId" integer, CONSTRAINT "PK_d01158fe15b1ead5c26fd7f4e90" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "orderId"`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-27T09:26:02.765Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-27T09:26:02.765Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-27T09:26:02.765Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-27T09:26:02.765Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-27T09:26:02.765Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-27T09:26:02.765Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-27T09:26:02.765Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-27T09:26:02.765Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-27T09:26:02.765Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-27T09:26:02.765Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-27T09:26:02.765Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-27T09:26:02.765Z"'`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_19d2d80cfb2f315a294faf3fb33"`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-27T09:26:02.765Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-27T09:26:02.765Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-27T09:26:02.765Z"'`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "UQ_19d2d80cfb2f315a294faf3fb33"`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_371eb56ecc4104c2644711fa85f" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_19d2d80cfb2f315a294faf3fb33" FOREIGN KEY ("prodCatId") REFERENCES "product_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_904370c093ceea4369659a3c810" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_904370c093ceea4369659a3c810"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_19d2d80cfb2f315a294faf3fb33"`);
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_371eb56ecc4104c2644711fa85f"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "UQ_19d2d80cfb2f315a294faf3fb33" UNIQUE ("prodCatId")`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-25 07:13:24.978'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-25 07:13:24.978'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-25T07:13:24.978Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_19d2d80cfb2f315a294faf3fb33" FOREIGN KEY ("prodCatId") REFERENCES "product_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-25 07:13:24.978'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-25 07:13:24.978'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-25T07:13:24.978Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-25 07:13:24.978'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-25 07:13:24.978'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-25T07:13:24.978Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-25 07:13:24.978'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-25 07:13:24.978'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-25T07:13:24.978Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-25 07:13:24.978'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-25 07:13:24.978'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-25T07:13:24.978Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ADD "orderId" integer`);
        await queryRunner.query(`DROP TABLE "order_item"`);
        await queryRunner.query(`DROP TABLE "cart"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_87ffe09e725a6e79f87dd6c0b69" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
