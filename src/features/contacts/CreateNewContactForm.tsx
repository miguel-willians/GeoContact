import Button from "@/ui/Button";
import Form from "@/ui/Form";
import FormRowHorizontal from "@/ui/FormRowHorizontal";
import Input from "@/ui/Input";

export default function CreateNewContactForm() {
  return (
    <Form className="flex flex-col w-full ">
      <FormRowHorizontal label="Nome completo">
        <Input type="text" id="name" styleType="small" />
      </FormRowHorizontal>

      <FormRowHorizontal label="CPF">
        <Input type="text" id="cpf" styleType="small" />
      </FormRowHorizontal>

      <FormRowHorizontal label="Telefone" error="Oi">
        <Input type="tel" id="contactNumber" styleType="small" />
      </FormRowHorizontal>

      <FormRowHorizontal label="CEP">
        <Input type="text" id="cep" styleType="small" />
      </FormRowHorizontal>

      <FormRowHorizontal label="UF">
        <Input type="email" id="uf" styleType="small" />
      </FormRowHorizontal>

      <FormRowHorizontal label="Cidade">
        <Input type="text" id="city" styleType="small" />
      </FormRowHorizontal>

      <div className="flex flex-col justify-center mt-4">
        <Button type="primary">Criar contato</Button>
        <Button type="secondary">Cancelar</Button>
      </div>
    </Form>
  );
}
