import type { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateProjectStatus1774368596868 implements MigrationInterface {
  name = 'UpdateProjectStatus1774368596868';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "task" DROP CONSTRAINT "FK_3797a20ef5553ae87af126bc2fe"`,
    );
    await queryRunner.query(
      `ALTER TABLE "project" DROP CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57"`,
    );
    await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "project" ADD "id" SERIAL NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "project" ADD CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "projectId"`);
    await queryRunner.query(`ALTER TABLE "task" ADD "projectId" integer`);
    await queryRunner.query(
      `ALTER TABLE "task" ADD CONSTRAINT "FK_3797a20ef5553ae87af126bc2fe" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "task" DROP CONSTRAINT "FK_3797a20ef5553ae87af126bc2fe"`,
    );
    await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "projectId"`);
    await queryRunner.query(`ALTER TABLE "task" ADD "projectId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "project" DROP CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57"`,
    );
    await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "id"`);
    await queryRunner.query(
      `ALTER TABLE "project" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "project" ADD CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "task" ADD CONSTRAINT "FK_3797a20ef5553ae87af126bc2fe" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
