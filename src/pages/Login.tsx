"use client";

import { useLogin } from "@/features/user/useLogin";
import Button from "@/ui/Button";
import Form from "@/ui/Form";
import FormRowVertical from "@/ui/FormRowVertical";
import Input from "@/ui/Input";
import Logo from "@/ui/Logo";
import Link from "next/link";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("teste@teste.com");
  const [password, setPassword] = useState("123456");

  const { login, isLoggingIn } = useLogin();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <main className="min-h-screen grid grid-cols-[48rem] content-center justify-center gap-8 bg-blue-950 text-white">
      <Logo />
      <h1 className="text-xl">Faça o login na sua conta!</h1>
      <Form onSubmit={handleSubmit}>
        <FormRowVertical label="E-mail">
          <Input
            type="email"
            id="e-mail"
            autoComplete="username"
            styleType="regular"
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoggingIn}
          />
        </FormRowVertical>

        <FormRowVertical label="Senha">
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            styleType="regular"
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoggingIn}
          />
        </FormRowVertical>

        <div className=" flex flex-col justify-center items-center gap-5 mt-3">
          <Button variation="primary" type="submit" disabled={isLoggingIn}>
            Login
          </Button>
          {!isLoggingIn && (
            <p>
              Não possui uma conta ainda?{" "}
              <Link href="/signUp" className="underline">
                Crie uma conta agora.
              </Link>
            </p>
          )}
        </div>
      </Form>
    </main>
  );
}
