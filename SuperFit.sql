CREATE TABLE "public.modalidades" (
	"id" serial NOT NULL,
	"nome" varchar(100) NOT NULL,
	CONSTRAINT "modalidades_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.planos" (
	"id" serial NOT NULL,
	"nome" varchar NOT NULL,
	"descricao" TEXT NOT NULL,
	"preco" money(4,2) NOT NULL,
	CONSTRAINT "planos_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.modalidades_planos" (
	"modalidade_id" integer NOT NULL,
	"planos_id" integer NOT NULL,
	CONSTRAINT "modalidades_planos_pk" PRIMARY KEY ("modalidade_id","planos_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.pessoas" (
	"id" serial NOT NULL,
	"nome" varchar(255) NOT NULL,
	"cgc" varchar(14) NOT NULL UNIQUE,
	"tipo_pessoa" char(1) NOT NULL,
	"email" varchar(255) NOT NULL UNIQUE,
	"tipo_cadastro" char(1) NOT NULL,
	"ativo" char(1) NOT NULL,
	"dimplente" boolean NOT NULL DEFAULT true;
	CONSTRAINT "pessoas_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.horarios_aulas" (
	"id" serial NOT NULL,
	"dia_semana" integer NOT NULL,
	"hora_inicio" TIME NOT NULL,
	"hora_fim" TIME NOT NULL,
	"modalidade_id" integer NOT NULL,
	"instrutor_id" integer NOT NULL,
	CONSTRAINT "horarios_aulas_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.matriculas" (
	"id" serial NOT NULL,
	"aluno_id" integer NOT NULL,
	"plano_id" integer NOT NULL,
	"dia_vencimento" integer NOT NULL,
	"valor_mensalidade" money(4,2) NOT NULL,
	"data_inicio" DATE NOT NULL,
	"data_fim" DATE,
	CONSTRAINT "matricula_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "modalidades_planos" ADD CONSTRAINT "modalidades_planos_fk0" FOREIGN KEY ("modalidade_id") REFERENCES "modalidades"("id");
ALTER TABLE "modalidades_planos" ADD CONSTRAINT "modalidades_planos_fk1" FOREIGN KEY ("planos_id") REFERENCES "planos"("id");


ALTER TABLE "horarios_aulas" ADD CONSTRAINT "horarios_aulas_fk0" FOREIGN KEY ("modalidade_id") REFERENCES "modalidades"("id");
ALTER TABLE "horarios_aulas" ADD CONSTRAINT "horarios_aulas_fk1" FOREIGN KEY ("instrutor_id") REFERENCES "pessoas"("id");

ALTER TABLE "matricula" ADD CONSTRAINT "matricula_fk0" FOREIGN KEY ("aluno_id") REFERENCES "pessoas"("id");
ALTER TABLE "matricula" ADD CONSTRAINT "matricula_fk1" FOREIGN KEY ("plano_id") REFERENCES "planos"("id");







