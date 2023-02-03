import { MigrationInterface, QueryRunner } from "typeorm";

export class nm1675242574139 implements MigrationInterface {
    name = 'nm1675242574139'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "createdBy" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-02-01T09:09:35.558Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "createdOn" SET DEFAULT '"2023-02-01T09:09:35.558Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-02-01T09:09:35.558Z"'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "createdBy" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-02-01T09:09:35.558Z"'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "createdOn" SET DEFAULT '"2023-02-01T09:09:35.558Z"'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-02-01T09:09:35.558Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "createdBy" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-02-01T09:09:35.558Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "createdOn" SET DEFAULT '"2023-02-01T09:09:35.558Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-02-01T09:09:35.558Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "createdBy" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-02-01T09:09:35.558Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "createdOn" SET DEFAULT '"2023-02-01T09:09:35.558Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-02-01T09:09:35.558Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdBy" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-02-01T09:09:35.558Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '"2023-02-01T09:09:35.558Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-02-01T09:09:35.558Z"'`);
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_371eb56ecc4104c2644711fa85f"`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "createdBy" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-02-01T09:09:35.558Z"'`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "createdOn" SET DEFAULT '"2023-02-01T09:09:35.558Z"'`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-02-01T09:09:35.558Z"'`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "UQ_371eb56ecc4104c2644711fa85f" UNIQUE ("productId")`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "createdBy" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-02-01T09:09:35.558Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "createdOn" SET DEFAULT '"2023-02-01T09:09:35.558Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-02-01T09:09:35.558Z"'`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_371eb56ecc4104c2644711fa85f" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_756f53ab9466eb52a52619ee019" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_756f53ab9466eb52a52619ee019"`);
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_371eb56ecc4104c2644711fa85f"`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-31 09:13:08.964'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-31 09:13:08.964'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "createdBy" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "UQ_371eb56ecc4104c2644711fa85f"`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-31 09:13:08.964'`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-31 09:13:08.964'`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "createdBy" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_371eb56ecc4104c2644711fa85f" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-31 09:13:08.964'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-31 09:13:08.964'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdBy" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-31 09:13:08.964'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-31 09:13:08.964'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "createdBy" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-31 09:13:08.964'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-31 09:13:08.964'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "createdBy" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-31 09:13:08.964'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-31 09:13:08.964'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "createdBy" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-31 09:13:08.964'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-31 09:13:08.964'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-31T09:13:08.964Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "createdBy" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cart" DROP COLUMN "userId"`);
    }

}
