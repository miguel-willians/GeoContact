import Form from "@/ui/Form";
import FormRowVertical from "@/ui/FormRowVertical";
import Input from "@/ui/Input";
import Logo from "@/ui/Logo";
import Link from "next/link";

export default function Login() {
  return (
    <main className="min-h-screen grid grid-cols-[48rem] content-center justify-center gap-8 bg-gray-50">
      <Logo />
      <Form>
        <FormRowVertical label="E-mail">
          <Input type="email" id="e-mail" autoComplete="username" />
        </FormRowVertical>

        <FormRowVertical label="Senha">
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </FormRowVertical>

        <div className=" flex flex-col justify-center items-center gap-2 mt-3">
          <Link href="/">Login</Link>
          <span>
            Não possui uma conta ainda?
            <Link href="/">Crie uma conta agora.</Link>
          </span>
        </div>
      </Form>
    </main>
  );
}
