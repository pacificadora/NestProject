import { MigrationInterface, QueryRunner } from "typeorm";

export class nm1675408082707 implements MigrationInterface {
    name = 'nm1675408082707'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cart" ("id" SERIAL NOT NULL, "createdBy" character varying, "updatedBy" character varying NOT NULL DEFAULT '"2023-02-03T07:08:04.575Z"', "createdOn" TIMESTAMP NOT NULL DEFAULT '"2023-02-03T07:08:04.575Z"', "updatedOn" TIMESTAMP NOT NULL DEFAULT '"2023-02-03T07:08:04.575Z"', "deletedOn" TIMESTAMP, "quantity" integer NOT NULL, "productId" integer NOT NULL, "userId" integer NOT NULL, "checkout" boolean NOT NULL, CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-02-03T07:08:04.575Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "createdOn" SET DEFAULT '"2023-02-03T07:08:04.575Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-02-03T07:08:04.575Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-02-03T07:08:04.575Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "createdOn" SET DEFAULT '"2023-02-03T07:08:04.575Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-02-03T07:08:04.575Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-02-03T07:08:04.575Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '"2023-02-03T07:08:04.575Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-02-03T07:08:04.575Z"'`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_caabe91507b3379c7ba73637b84"`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-02-03T07:08:04.575Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "createdOn" SET DEFAULT '"2023-02-03T07:08:04.575Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-02-03T07:08:04.575Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0"`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-02-03T07:08:04.575Z"'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "createdOn" SET DEFAULT '"2023-02-03T07:08:04.575Z"'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-02-03T07:08:04.575Z"'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "orderId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-02-03T07:08:04.575Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "createdOn" SET DEFAULT '"2023-02-03T07:08:04.575Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-02-03T07:08:04.575Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_caabe91507b3379c7ba73637b84" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_371eb56ecc4104c2644711fa85f" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_756f53ab9466eb52a52619ee019" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_756f53ab9466eb52a52619ee019"`);
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_371eb56ecc4104c2644711fa85f"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_caabe91507b3379c7ba73637b84"`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedOn" SET DEFAULT '2023-02-01 11:48:40.315'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "createdOn" SET DEFAULT '2023-02-01 11:48:40.315'`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-02-01T11:48:40.315Z"'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "orderId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "updatedOn" SET DEFAULT '2023-02-01 11:48:40.315'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "createdOn" SET DEFAULT '2023-02-01 11:48:40.315'`);
        await queryRunner.query(`ALTER TABLE "order_item" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-02-01T11:48:40.315Z"'`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedOn" SET DEFAULT '2023-02-01 11:48:40.315'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "createdOn" SET DEFAULT '2023-02-01 11:48:40.315'`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-02-01T11:48:40.315Z"'`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_caabe91507b3379c7ba73637b84" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT '2023-02-01 11:48:40.315'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '2023-02-01 11:48:40.315'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-02-01T11:48:40.315Z"'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedOn" SET DEFAULT '2023-02-01 11:48:40.315'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "createdOn" SET DEFAULT '2023-02-01 11:48:40.315'`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-02-01T11:48:40.315Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedOn" SET DEFAULT '2023-02-01 11:48:40.315'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "createdOn" SET DEFAULT '2023-02-01 11:48:40.315'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-02-01T11:48:40.315Z"'`);
        await queryRunner.query(`DROP TABLE "cart"`);
    }

}
