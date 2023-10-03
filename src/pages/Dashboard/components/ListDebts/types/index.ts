
export interface ParcelasProps {
  id: string;
  valor_parcela: string;
  dia_vencimento: number;
  qtde_parcelas: number;
  status: boolean;
}

export interface ListDebtsProps {
  id: string;
  name_debt: string;
  produto: string;
  parcelas: ParcelasProps[];
}
