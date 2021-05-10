import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import * as S from './styles';

type PieChartProps = {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[]
}

const PieChartComponent: React.FC<PieChartProps> = ({data}) => (
  <S.Container>
    <S.SideLeft>
      <h2>Relação</h2>
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

    {
      data && (
        <S.SideRight>
          <ResponsiveContainer>
            <PieChart>
              <Pie 
                data={data} 
                dataKey="percent"
                cx="50%"
                cy="50%"
              >
                {
                  data.map(({name, color}) => (
                    <Cell key={name} fill={color} />
                  ))
                }
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </S.SideRight>
      )
    }
  </S.Container>
);

export default PieChartComponent;