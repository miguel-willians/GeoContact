import Button from "@/ui/Button";
import Form from "@/ui/Form";
import FormRowHorizontal from "@/ui/FormRowHorizontal";
import Input from "@/ui/Input";
import { useForm } from "react-hook-form";

export default function CreateNewContactForm() {
  const { register, handleSubmit } = useForm();

  function onSubmit() {}

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full overflow-auto"
    >
      <FormRowHorizontal label="Nome completo">
        <Input type="text" id="name" styleType="small" {...register("name")} />
      </FormRowHorizontal>

      <FormRowHorizontal label="CPF">
        <Input type="text" id="cpf" styleType="small" {...register("cpf")} />
      </FormRowHorizontal>

      <FormRowHorizontal label="Telefone">
        <Input type="tel" id="phone" styleType="small" {...register("phone")} />
      </FormRowHorizontal>

      <FormRowHorizontal label="CEP">
        <Input type="text" id="cep" styleType="small" {...register("cep")} />
      </FormRowHorizontal>

      <FormRowHorizontal label="UF">
        <Input type="text" id="uf" styleType="small" {...register("uf")} />
      </FormRowHorizontal>

      <FormRowHorizontal label="Cidade">
        <Input type="text" id="city" styleType="small" {...register("city")} />
      </FormRowHorizontal>

      <FormRowHorizontal label="Endereço">
        <Input
          type="text"
          id="address"
          styleType="small"
          {...register("address")}
        />
      </FormRowHorizontal>

      <FormRowHorizontal label="Complemento">
        <Input
          type="text"
          id="complement"
          styleType="small"
          {...register("complement")}
        />
      </FormRowHorizontal>

      {/* Campos ocultos para Latitude e Longitude - serão preenchidos automaticamente */}
      <input type="hidden" id="latitude" />
      <input type="hidden" id="longitude" />

      <div className="flex justify-center mt-9 gap-2">
        <Button type="pSmall">Criar contato</Button>
        <Button type="sSmall">Cancelar</Button>
      </div>
    </Form>
  );
}
