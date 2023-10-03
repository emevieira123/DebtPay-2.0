/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form';
import { RegisterForm } from './components/RegisterForm';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import usePostUser from '../../hooks/usePostUser';
import { RegisterProps } from './types/register.interface';
import useModalRegister from '../../hooks/useModalRegister';

const schema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().email("Digite um email válido").required("O email é obrigatório"),
  password: yup.string().min(6, "A senha deve conter pelo menos 6 caracteres").required("A senha é obrigatório"),
  confirm_password: yup.string().required("A confirmação de senha é obrigatório").oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  github_user: yup.string(),
}).required();

export function Register() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({resolver: yupResolver(schema)});
  const { visible, hide } = useModalRegister();

  const { mutate: saveUser, isLoading } = usePostUser(onClose);

  function onClose() {
    hide();
    reset();
  }

  function onSave(data: RegisterProps) {
    const { name, email, password, github_user } = data;
    saveUser({ name, email, password, github_user });
  }

  return (
    <Modal isOpen={visible} onClose={hide} size="6xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cadastrar usuário</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <RegisterForm register={register} errors={errors} />
        </ModalBody>

        <ModalFooter>
          <form onSubmit={handleSubmit(onSave)}>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme='blue' type='submit' isLoading={isLoading} loadingText="Salvando...">Salvar</Button>
          </form>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
