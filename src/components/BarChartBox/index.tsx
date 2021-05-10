import React from 'react';
import * as S from './styles';

import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';
import { formatCurrency } from 'utils/functions';

type BarChartBoxProps = {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number
    color: string;
  }[]
};

const BarChartBox: React.FC<BarChartBoxProps> = ({title, data}) => {
  return (
    <S.Container>
      <S.SideLeft>
        <h2>{title}</h2>
        <S.LegendContainer>
        {
          data && data.map(({color, percent, name}) => {
            return (
              <S.Legend key={name} color={color}>
                <div>{percent}%</div>
                <span>{name}</span>
              </S.Legend>
            )
          })
        }
      </S.LegendContainer>
      </S.SideLeft>

      <S.SideRight>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey="amount" name="Valor">
              {
                data && data.map(({name, color}) => (
                  <Cell
                    key={name}
                    cursor="pointer"
                    fill={color}
                  />
                ))
              }
            </Bar>
            <Tooltip
              cursor={{fill: 'none'}}
              formatter={(value: number) => formatCurrency(Number(value))}
            />
          </BarChart>
        </ResponsiveContainer>
      </S.SideRight>
    </S.Container>
  )
};

export default BarChartBox;