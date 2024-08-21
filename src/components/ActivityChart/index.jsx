import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const renderCustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: '#E60000',
          color: '#FFFFFF',
          padding: '24px 4px',
          textAlign: 'center',
          fontSize: '14px',
          fontWeight: '500',
        }}
      >
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}kCal`}</p>
      </div>
    )
  }
  return null
}

export default function ActivityChart({ data }) {
  for (let i = 0; i < data.data.sessions.length; i++) {
    data.data.sessions[i].day = i + 1
  }

  return (
    <ResponsiveContainer width="100%" height="90%">
      <BarChart data={data.data.sessions} barGap={12} barSize={8}>
        <text
          x={0}
          y={20}
          textAnchor="left"
          style={{
            fontSize: '1.8rem',
            fontWeight: 500,
            fill: '#000000',
          }}
        >
          Activité quotidienne
        </text>
        <CartesianGrid strokeDasharray="3 3" opacity={0.5} vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={{ stroke: '#DEDEDE' }}
          tick={{ stroke: '#9B9EAC', fontWeight: '400' }}
          dy={14}
        />
        <YAxis
          yAxisId="kilogram"
          dataKey="kilogram"
          orientation="right"
          stroke="#282D30"
          axisLine={false}
          tickLine={false}
          tickCount={3}
          tick={{ stroke: '#9B9EAC', fontWeight: '400' }}
          type="number"
          domain={['dataMin - 5', 'auto']}
          dx={14}
        />
        <YAxis
          yAxisId="calories"
          dataKey="calories"
          orientation="left"
          stroke="#E60000"
          axisLine={false}
          tickLine={false}
          tickCount={3}
          hide={true}
          domain={['dataMin - 50', 'auto']}
          dx={-16}
        />
        <Tooltip content={renderCustomTooltip} />
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="right"
          iconType="circle"
          wrapperStyle={{
            paddingBottom: '48px',
          }}
        />
        <Bar
          yAxisId="kilogram"
          dataKey="kilogram"
          fill="#282D30"
          radius={[20, 20, 0, 0]}
          name="Poids (kg)"
        />
        <Bar
          yAxisId="calories"
          dataKey="calories"
          fill="#E60000"
          radius={[20, 20, 0, 0]}
          name="Calories brûlées (kCal)"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
