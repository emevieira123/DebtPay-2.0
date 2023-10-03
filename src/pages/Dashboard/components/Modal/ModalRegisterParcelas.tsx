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
  Box,
  Text,
  Input,
} from '@chakra-ui/react'
import useModalParcelas from '../../../../hooks/useModalParcelas';
import { useForm } from 'react-hook-form';
import usePostParcelas from '../../../../hooks/usePostParcelas';
import { useDebtState } from '../../../../hooks/useDebtState';
import { ParcelasImg } from '../../../../assets/ParcelasImg';

export function ModalRegisterParcelas() {
  const { visible, hide } = useModalParcelas();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { debtId } = useDebtState();

  const { mutate: Save, isLoading } = usePostParcelas(() => onClose());

  function onClose() {
    reset();
    hide();
  }

  async function onSave(data: any, e: any) {
    e.preventDefault();
    try {
      if (data.valor_parcela <= 0 || data.dia_vencimento <= 0 || data.qtde_parcelas <= 0) {
        onClose();
      } else {
        for (let i = 0; i < data.qtde_parcelas; i++) {
          await Save({
            dia_vencimento: Number(data.dia_vencimento),
            qtde_parcelas: Number(data.qtde_parcelas),
            valor_parcela: Number(data.valor_parcela),
            id_debt: debtId,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal isOpen={visible} onClose={hide} size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Registro de parcelas</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box w="60%" h="270px" display="flex" alignItems="center" justifyContent="center">
              <ParcelasImg width="350" height="223" />
            </Box>
            <Box w="40%" minH="270px" display="flex" flexDirection="column" gap="1rem" bg="gray.900" p="1rem" borderRadius="1rem">
              <Text fontWeight="bold" lineHeight="2rem">
                Valor da parcela
                <Input {...register("valor_parcela", { required: true })} name="valor_parcela" type="number" />
                {errors.valor_parcela && <Text fontWeight="normal" color="red">Campo obrigatório</Text>}
              </Text>
              <Text fontWeight="bold" lineHeight="2rem">
                Vencimento
                <Input {...register("dia_vencimento", { required: true })} name="dia_vencimento" type="number" />
                {errors.dia_vencimento && <Text fontWeight="normal" color="red">Campo obrigatório</Text>}
              </Text>
              <Text fontWeight="bold" lineHeight="2rem">
                Quantidade de parcelas
                <Input {...register("qtde_parcelas", { required: true })} name="qtde_parcelas" type="number" />
                {errors.qtde_parcelas && <Text fontWeight="normal" color="red">Campo obrigatório</Text>}
              </Text>
            </Box>
          </Box>
        </ModalBody>

        <ModalFooter>
          <form onSubmit={handleSubmit(onSave)}>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" colorScheme='blue' isLoading={isLoading} loadingText="Salvando...">Salvar</Button>
          </form>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
