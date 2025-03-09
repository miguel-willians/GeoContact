"use client";
import { useRouter } from "next/navigation";

import Button from "@/ui/Button";
import Form from "@/ui/Form";
import FormRowVertical from "@/ui/FormRowVertical";
import Input from "@/ui/Input";
import Logo from "@/ui/Logo";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function NewUserForm() {
  const router = useRouter();

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm();

  function onSubmit(data: object) {}

  return (
    <main className="min-h-screen grid grid-cols-[48rem] content-center justify-center gap-8 bg-blue-950 text-white p-6">
      <Logo />
      <h1 className="text-xl">Crie sua conta!</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRowVertical
          label="Nome"
          error={errors?.name?.message as string | undefined}
        >
          <Input
            type="text"
            id="name"
            autoComplete="username"
            styleType="regular"
            {...register("name", { required: "O nome é obrigatório" })}
          />
        </FormRowVertical>

        <FormRowVertical
          label="E-mail"
          error={errors?.email?.message as string | undefined}
        >
          <Input
            type="email"
            id="email"
            autoComplete="username"
            styleType="regular"
            {...register("email", {
              required: "O e-mail é obrigatório",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Informe um endereço de e-mail válido",
              },
            })}
          />
        </FormRowVertical>

        <FormRowVertical
          label="Senha"
          error={errors?.password?.message as string | undefined}
        >
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            styleType="regular"
            {...register("password", {
              required: "A senha é obrigatória",
            })}
          />
        </FormRowVertical>

        <FormRowVertical
          label="Confirme a senha"
          error={errors?.passwordConfirm?.message as string | undefined}
        >
          <Input
            type="password"
            id="passwordConfirm"
            autoComplete="current-password"
            styleType="regular"
            {...register("passwordConfirm", {
              required: "Confirmar a senha é obrigatório",
              validate: (value) =>
                value === getValues().password || "Senhas precisam ser iguais",
            })}
          />
        </FormRowVertical>

        <div className=" flex flex-col justify-center items-center gap-5 mt-3">
          <Button variation="primary" type="submit">
            Criar Conta
          </Button>
          <p>
            Já possui uma conta?{" "}
            <Link href="/" className="underline">
              Logue-se agora.
            </Link>
          </p>
        </div>
      </Form>
    </main>
  );
}
