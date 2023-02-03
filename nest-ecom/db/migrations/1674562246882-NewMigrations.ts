import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigrations1674562246882 implements MigrationInterface {
    name = 'NewMigrations1674562246882'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "createdBy" character varying NOT NULL, "updatedBy" character varying NOT NULL DEFAULT '"2023-01-24T12:10:48.471Z"', "createdOn" TIMESTAMP NOT NULL DEFAULT '"2023-01-24T12:10:48.471Z"', "updatedOn" TIMESTAMP NOT NULL DEFAULT '"2023-01-24T12:10:48.471Z"', "deletedOn" TIMESTAMP, "name" character varying NOT NULL, "description" character varying NOT NULL, "orderId" integer, CONSTRAINT "UQ_22cc43e9a74d7498546e9a63e77" UNIQUE ("name"), CONSTRAINT "UQ_29a733971f71626611bb3808ebe" UNIQUE ("description"), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" SERIAL NOT NULL, "createdBy" character varying NOT NULL, "updatedBy" character varying NOT NULL DEFAULT '"2023-01-24T12:10:48.471Z"', "createdOn" TIMESTAMP NOT NULL DEFAULT '"2023-01-24T12:10:48.471Z"', "updatedOn" TIMESTAMP NOT NULL DEFAULT '"2023-01-24T12:10:48.471Z"', "deletedOn" TIMESTAMP, "userId" integer, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment" ("id" SERIAL NOT NULL, "createdBy" character varying NOT NULL, "updatedBy" character varying NOT NULL DEFAULT '"2023-01-24T12:10:48.471Z"', "createdOn" TIMESTAMP NOT NULL DEFAULT '"2023-01-24T12:10:48.471Z"', "updatedOn" TIMESTAMP NOT NULL DEFAULT '"2023-01-24T12:10:48.471Z"', "deletedOn" TIMESTAMP, "paymentComplete" boolean NOT NULL, "orderId" integer, CONSTRAINT "REL_d09d285fe1645cd2f0db811e29" UNIQUE ("orderId"), CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-24T12:10:48.471Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-24T12:10:48.471Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-24T12:10:48.471Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-24T12:10:48.471Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '"2023-01-24T12:10:48.471Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT '"2023-01-24T12:10:48.471Z"'`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_87ffe09e725a6e79f87dd6c0b69" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_caabe91507b3379c7ba73637b84" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "FK_d09d285fe1645cd2f0db811e293" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "FK_d09d285fe1645cd2f0db811e293"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_caabe91507b3379c7ba73637b84"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_87ffe09e725a6e79f87dd6c0b69"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-24 08:59:17.64'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-24 08:59:17.639'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-24T08:59:17.639Z"'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedOn" SET DEFAULT '2023-01-24 08:59:17.64'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "createdOn" SET DEFAULT '2023-01-24 08:59:17.639'`);
        await queryRunner.query(`ALTER TABLE "base_entity" ALTER COLUMN "updatedBy" SET DEFAULT '"2023-01-24T08:59:17.639Z"'`);
        await queryRunner.query(`DROP TABLE "payment"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
