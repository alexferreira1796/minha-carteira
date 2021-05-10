import React from 'react';

import gains from '../../database/gains';
import expenses from '../../database/expenses';

import monthsList from '../../utils/monthsList';
import SelectInput from '../SelectInput';

type SelectHeaderProps = {
  month: number;
  year: number;
  setMonth: Function;
  setYear: Function;
}

const SelectHeader: React.FC<SelectHeaderProps> = ({
  month, 
  year, 
  setMonth, 
  setYear
}) => {
  // Retornando os meses dinamicamente
  const months = React.useMemo(() => {
    return monthsList.map((item, index) => {
      return {
        value: index + 1,
        label: item
      }
    })
  }, []);

  // Buscando dinamicamente os anos que tem no banco de dados
  const years = React.useMemo(() => {
    let collectionsYears: Array<number> = [];

    [...gains, ...expenses].forEach(({date}) => {
      const year = new Date(date).getFullYear();
      if(!collectionsYears.includes(year))
        collectionsYears.push(year);
    });

    return collectionsYears.map(year => {
      return {
        value: year,
        label: year
      }
    })
  }, []);

  return (
    <>
      <SelectInput 
        options={months} 
        value={month} 
        onChange={({target}) => setMonth(+target.value)} 
      />
      <SelectInput 
        options={years} 
        value={year} 
        onChange={({target}) => setYear(+target.value)}
       />
    </>
  );
}

export default SelectHeader;