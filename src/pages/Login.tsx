"use client";
import { useRouter } from "next/navigation";

import Button from "@/ui/Button";
import Form from "@/ui/Form";
import FormRowVertical from "@/ui/FormRowVertical";
import Input from "@/ui/Input";
import Logo from "@/ui/Logo";
import Link from "next/link";

export default function Login() {
  const router = useRouter();

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    router.push("/main");
  }

  return (
    <main className="min-h-screen grid grid-cols-[48rem] content-center justify-center gap-8 bg-blue-950 text-white">
      <Logo />
      <h1 className="text-xl">Faça o login na sua conta!</h1>
      <Form>
        <FormRowVertical label="E-mail">
          <Input
            type="email"
            id="e-mail"
            autoComplete="username"
            styleType="regular"
          />
        </FormRowVertical>

        <FormRowVertical label="Senha">
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            styleType="regular"
          />
        </FormRowVertical>

        <div className=" flex flex-col justify-center items-center gap-5 mt-3">
          <Button type="primary" onClick={handleClick}>
            Login
          </Button>
          <p>
            Não possui uma conta ainda?{" "}
            <Link href="/signUp" className="underline">
              Crie uma conta agora.
            </Link>
          </p>
        </div>
      </Form>
    </main>
  );
}
