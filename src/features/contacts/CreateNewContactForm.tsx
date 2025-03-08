import Button from "@/ui/Button";
import Form from "@/ui/Form";
import FormRowHorizontal from "@/ui/FormRowHorizontal";
import Input from "@/ui/Input";
import { useForm } from "react-hook-form";
import { cpf as cpfValidator } from "cpf-cnpj-validator";
import { isCEP } from "brazilian-values";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContact } from "@/services/apiContacts";

export default function CreateNewContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const { mutate, isPending: isCreating } = useMutation({
    mutationFn: createContact,
    onSuccess: () => {
      alert("Contato criado com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
    onError: (err) => alert(err.message),
  });

  const [isLoadingCep, setIsLoadingCep] = useState(false);
  const [cepError, setCepError] = useState("");

  // Função para validar e buscar dados do CEP
  async function handleCepBlur(cep: string) {
    if (!isCEP(cep)) {
      setCepError("CEP inválido");
      return;
    }

    setIsLoadingCep(true);
    setCepError("");

    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    // Preencher os campos com os dados retornados pela API
    setValue("address", data.logradouro || "");
    setValue("city", data.localidade || "");
    setValue("uf", data.uf || "");
    setValue("complement", data.complemento || "");

    setIsLoadingCep(false);
  }

  const onSubmit = (data: object) => {
    mutate(data);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full overflow-auto"
    >
      <FormRowHorizontal
        label="Nome completo"
        error={errors.name?.message as string | undefined}
      >
        <Input
          type="text"
          id="name"
          styleType="small"
          {...register("name", { required: "O nome é obrigatório" })}
        />
      </FormRowHorizontal>

      <FormRowHorizontal
        label="CPF"
        error={errors.cpf?.message as string | undefined}
      >
        <Input
          type="text"
          id="cpf"
          styleType="small"
          {...register("cpf", {
            required: "O CPF é obrigatório",
            validate: (value) => cpfValidator.isValid(value) || "CPF inválido",
          })}
        />
      </FormRowHorizontal>

      <FormRowHorizontal
        label="Telefone"
        error={errors.phone?.message as string | undefined}
      >
        <Input
          type="tel"
          id="phone"
          styleType="small"
          {...register("phone", { required: "O telefone é obrigatório" })}
        />
      </FormRowHorizontal>

      <FormRowHorizontal
        label="CEP"
        error={cepError || (errors.cep?.message as string | undefined)}
      >
        <Input
          type="text"
          id="cep"
          styleType="small"
          {...register("cep", {
            required: "O CEP é obrigatório",
            validate: (value) => isCEP(value) || "CEP inválido",
          })}
          onBlur={(e) => handleCepBlur(e.target.value)} // Valida e busca dados ao perder o foco
          disabled={isLoadingCep}
        />
      </FormRowHorizontal>

      <FormRowHorizontal
        label="Estado"
        error={errors.uf?.message as string | undefined}
      >
        <Input
          type="text"
          id="state"
          styleType="small"
          {...register("state", {
            required: "O estado é obrigatório",
          })}
          disabled={isLoadingCep}
        />
      </FormRowHorizontal>

      <FormRowHorizontal
        label="Cidade"
        error={errors.city?.message as string | undefined}
      >
        <Input
          type="text"
          id="city"
          styleType="small"
          {...register("city", { required: "A cidade é obrigatória" })}
          disabled={isLoadingCep}
        />
      </FormRowHorizontal>

      <FormRowHorizontal
        label="Endereço"
        error={errors.address?.message as string | undefined}
      >
        <Input
          type="text"
          id="address"
          styleType="small"
          {...register("address", { required: "O endereço é obrigatório" })}
          disabled={isLoadingCep}
        />
      </FormRowHorizontal>

      <FormRowHorizontal
        label="Complemento"
        error={errors.complement?.message as string | undefined}
      >
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
        <Button type="pSmall" disabled={isCreating}>
          Criar contato
        </Button>
        <Button type="sSmall" disabled={isCreating}>
          Cancelar
        </Button>
      </div>
    </Form>
  );
}
