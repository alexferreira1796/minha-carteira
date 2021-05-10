import React from "react";
import * as S from './styles';

import gains from '../../database/gains';
import expenses from '../../database/expenses';
import { formatCurrency, formatDate } from '../../utils/functions';

import ContentHeader from '../../components/ContentHeader';
import SelectHeader from '../../components/SelectHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

type RouteParams = {
  match: {
    params: {
      type: string;
    }
  }
}

type ListData = {
  id: string;
  description: string;
  amount: string;
  frequency: string;
  date: string;
  tagColor: string;
}

const List: React.FC<RouteParams> = ({match}) => {
  const [data, setData] = React.useState<ListData[]>([]);

  const [monthSelected, setMonthSelected] = React.useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = React.useState<number>(new Date().getUTCFullYear());
  
  const [frequencyFilterSelected, setFrequencyFilterSelected] = React.useState<string[]>(
    ['recorrente', 'eventual']
  );

  // Recebendo pelo parametro o tipo
  // Destruturando o titulo, a cor e os dados que vem no database
  const movimentType = match.params.type;
  const { title, lineColor, listData } = React.useMemo(() => {
    return movimentType === 'entry-balance' ? {
      title: 'Entradas',
      lineColor: '#F7931B',
      listData: gains,
    } : {
      title: 'Saídas',
      lineColor: '#E44C4E',
      listData: expenses
    };
  }, [movimentType]);

  // Setando o objeto final da base de dados
  React.useEffect(() => {
    // Filtrando todos os dates pelo Mes e Ano selecionado
    const response: any = listData.filter(({date, frequency}) => {
      const filteredDate = new Date(date);
      const month = filteredDate.getMonth() + 1;
      const year = filteredDate.getFullYear();
      return month === monthSelected && year === yearSelected && frequencyFilterSelected.includes(frequency);
    }).map(({description, amount, frequency, date}) => {
      return {
        description,
        amount: formatCurrency(+amount),
        frequency,
        date: formatDate(date),
        tagColor: frequency === "recorrente" ? '#4E41F0' : '#E44C4E',
      }
    })
    setData(response);
  }, [monthSelected, yearSelected, listData, frequencyFilterSelected]);

  // Seleciona a frequencia
  // Todos vem selecionado por padrão
  // Se existe filtro pelos diferentes 
  // Caso nao exista mantem os anteriores e adiciona o novo
  const handleFrequency = (param: string): void => {
    const keyExists = frequencyFilterSelected.findIndex(item => item === param);
    //if(frequencyFilterSelected.includes(param)) {
    if(keyExists >= 0) {
      const findKey = frequencyFilterSelected.filter(item => item !== param);
      setFrequencyFilterSelected(findKey);
    } else {
      setFrequencyFilterSelected((frequencyAtt) => [...frequencyAtt, param]);
    }
  }

  return (
    <>
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectHeader 
          setMonth={setMonthSelected}
          setYear={setYearSelected}
          year={yearSelected}
          month={monthSelected}
        />
      </ContentHeader>

      <S.Filter>
        <button 
          type="button" 
          className={`tag-filter tag-filter-recurrent ${frequencyFilterSelected.includes('recorrente') && 'tag-active'} `}
          onClick={() => handleFrequency('recorrente')}
        >
          Recorrentes
        </button>
        <button 
          type="button" 
          className={`tag-filter tag-filter-eventual ${frequencyFilterSelected.includes('eventual') && 'tag-active'}`}
          onClick={() => handleFrequency('eventual')}
          >
            Eventuais
          </button>
      </S.Filter>

      <main>
        {
          data && data.map(({description, amount, date, tagColor}, index) => {
            return (
              <HistoryFinanceCard
                key={index}
                tagColor={tagColor}
                title={description}
                subtitle={date}
                amount={amount}
              />
            )
          })
        }
      </main>

    </>
  )
}

export default List;