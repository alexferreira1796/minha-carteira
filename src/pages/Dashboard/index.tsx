import React from "react";
import * as S from './styles';

import expenses from '../../database/expenses';
import gains from '../../database/gains';

import ContentHeader from "../../components/ContentHeader";
import SelectHeader from '../../components/SelectHeader';
import WalletBox from '../../components/WalletBox';
import WalletMessage from '../../components/WalletMessage';
import PieChartComponent from '../../components/PieChart';
import BarChartBox from '../../components/BarChartBox';

import happy from '../../assets/happy.svg';
import sad from '../../assets/sad.svg';
import grinning from '../../assets/grinning.svg';


const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = React.useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = React.useState<number>(new Date().getUTCFullYear());

  // Calcula o total de despesa
  const totalExpenses = React.useMemo(() => {
    let total:number = 0;
    expenses.forEach(({date, amount}) => {
      const dateFormatted = new Date(date);
      const month = dateFormatted.getMonth() + 1;
      const year = dateFormatted.getFullYear();
      if(month === monthSelected && year === yearSelected) {
        total += Number(amount);
      }
    });
    return total;
  }, [monthSelected, yearSelected]);

  // Calcula o total de ganhos
  const totalGains = React.useMemo(() => {
    let total:number = 0;
    gains.forEach(({date, amount}) => {
      const dateFormatted = new Date(date);
      const month = dateFormatted.getMonth() + 1;
      const year = dateFormatted.getFullYear();
      if(month === monthSelected && year === yearSelected) {
        total += Number(amount);
      }
    });
    return total;
  }, [monthSelected, yearSelected]);

  const totalBalance = React.useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalGains, totalExpenses]);

  // Mensagem exibida dependendo do salo atual
  const messageBalance = React.useMemo(() => {
    if(totalBalance < 0) {
      return {
        title:"Que triste!",
        description:"Neste m??s, voc?? gastou mais do que deveria.",
        footerText:"Verifique seus ganhos e tente cortar algumas coisas desnecess??rias.",
        icon:sad
      }
    } else if(totalBalance === 0 && totalGains === 0 && totalExpenses === 0) {
      return {
        title:"Ops!",
        description:"Neste m??s, n??o h?? registros de entradas ou sa??das.",
        footerText:"Parece que voc?? n??o fez nenhum registro no m??s e ano selecionado.",
        icon:grinning
      }
    } else if(totalBalance === 0) {
      return {
        title:"Ufaa!",
        description:"Neste m??s, voc?? gastou exatamente oque ganhou.",
        footerText:"Tenha cuidado. No pr??ximo tente poupar o seu dinheiro.",
        icon:grinning
      }
    } else {
      return {
        title:"Muito bem!",
        description:"Sua carteira est?? positiva!",
        footerText:"Continue assim. Considere investir o seu saldo.",
        icon:happy
      }
    }
  }, [totalBalance, totalGains, totalExpenses]);

  // Calculando a porcentagem de entrada e saida
  const relationExpensesVersusGains = React.useMemo(() => {
    const total = totalGains + totalExpenses;

    let percentGains;
    let percentExpenses
    if(total > 0) {
      percentGains = +((totalGains / total) * 100).toFixed(1);
      percentExpenses = +((totalExpenses / total) * 100).toFixed(1);
    } else {
      percentGains = 0;
      percentExpenses = 0;
    }

    return [
      {
        name: 'Entradas',
        value: totalGains,
        percent: percentGains,
        color: '#F7931B',
      },
      {
        name: 'Sa??das',
        value: totalExpenses,
        percent: percentExpenses,
        color: '#E44C4E',
      },
    ]

  }, [totalGains, totalExpenses]);

  // Gr??fico barra
  const relationsExpensesEventual = React.useMemo(() => {
    let amountRecurrent:number = 0;
    let amontEventual:number = 0;;

    // Total de gastos fixos e eventuais
    expenses.filter(({date}) => {
      const dateFormatted = new Date(date);
      const month = dateFormatted.getMonth() + 1;
      const year = dateFormatted.getFullYear();
      return month === monthSelected && year === yearSelected;;
    }).forEach(({frequency, amount}) => {
      if(frequency === 'recorrente') {
        return amountRecurrent += Number(amount);
      }
      if(frequency === 'eventual') {
        return amontEventual += Number(amount);
      }
    });

    const total = amountRecurrent + amontEventual;

    const percentRecurrent = Number(((amountRecurrent / total) * 100).toFixed(1));
    const percentEventual = Number(((amontEventual / total) * 100).toFixed(1));

    return [
      {
        name: 'Recorrentes',
        amount: amountRecurrent,
        percent: percentRecurrent ? percentRecurrent : 0,
        color: '#F7931B'
      },
      {
        name: 'Eventuais',
        amount: amontEventual,
        percent: percentEventual ? percentEventual : 0,
        color: '#E44C4E',
      },
    ];

  }, [monthSelected, yearSelected]);

  const relationsGainsEventual = React.useMemo(() => {
    let amountRecurrent:number = 0;
    let amontEventual:number = 0;;

    // Total de gastos fixos e eventuais
    gains.filter(({date}) => {
      const dateFormatted = new Date(date);
      const month = dateFormatted.getMonth() + 1;
      const year = dateFormatted.getFullYear();
      return month === monthSelected && year === yearSelected;;
    }).forEach(({frequency, amount}) => {
      if(frequency === 'recorrente') {
        return amountRecurrent += Number(amount);
      }
      if(frequency === 'eventual') {
        return amontEventual += Number(amount);
      }
    });

    const total = amountRecurrent + amontEventual;
    
    const percentRecurrent = Number(((amountRecurrent / total) * 100).toFixed(1));
    const percentEventual = Number(((amontEventual / total) * 100).toFixed(1));

    return [
      {
        name: 'Recorrentes',
        amount: amountRecurrent,
        percent: percentRecurrent ? percentRecurrent : 0,
        color: '#F7931B'
      },
      {
        name: 'Eventuais',
        amount: amontEventual,
        percent: percentEventual ? percentEventual : 0,
        color: '#E44C4E',
      },
    ];

  }, [monthSelected, yearSelected]);

  return (
    <S.Container>
      <ContentHeader title="Dashboard" lineColor="#4E41F0">
        <SelectHeader 
          setMonth={setMonthSelected}
          setYear={setYearSelected}
          year={yearSelected}
          month={monthSelected}
        />
      </ContentHeader>
      
      <S.Content>
        <WalletBox
          title="saldo"
          amount={totalBalance}
          footerLabel="atualizado com base nas entradas e sa??das"
          icon="dollar"
          color="#4E41F0"
        />

        <WalletBox
          title="entradas"
          amount={totalGains}
          footerLabel="atualizado com base nas entradas e sa??das"
          icon="arrowUp"
          color="#F7931B"
        />

        <WalletBox
          title="sa??das"
          amount={totalExpenses}
          footerLabel="atualizado com base nas entradas e sa??das"
          icon="arrowDown"
          color="#E44C4E"
        />

        <WalletMessage
          title={messageBalance.title}
          description={messageBalance.description}
          footerText={messageBalance.footerText}
          icon={messageBalance.icon}
        />

        <PieChartComponent data={relationExpensesVersusGains}/>

        <BarChartBox 
          data={relationsExpensesEventual} 
          title="Sa??das"
        />

        <BarChartBox 
          data={relationsGainsEventual} 
          title="Entradas"
        />

      </S.Content>
    </S.Container>
  )
}

export default Dashboard;