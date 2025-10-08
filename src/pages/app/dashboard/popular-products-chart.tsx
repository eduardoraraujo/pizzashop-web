import { BarChart } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const data = [
  { product: 'Pepperoni', amount: 30 },
  { product: 'Mussarela', amount: 20 },
  { product: 'Marguerita', amount: 15 },
  { product: '4 Queijos', amount: 27 },
  { product: 'Frango frito', amount: 52 },
]

const COLORS = [
  colors.sky['500'],
  colors.amber['500'],
  colors.violet['500'],
  colors.emerald['500'],
  colors.rose['500'],
]

export default function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
          <BarChart className="w-4 h-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              data={data}
              dataKey="amount"
              nameKey="product"
              cx="50%"
              cy="50%"
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }: {
                cx?: number | string
                cy?: number | string
                midAngle?: number
                innerRadius?: number
                outerRadius?: number
                value?: number
                index?: number
              }) => {
                const RADIAN = Math.PI / 180
                const cxNum = typeof cx === 'number' ? cx : Number(cx) || 0
                const cyNum = typeof cy === 'number' ? cy : Number(cy) || 0
                const midAngleNum =
                  typeof midAngle === 'number'
                    ? midAngle
                    : Number(midAngle) || 0
                const innerRadiusNum =
                  typeof innerRadius === 'number'
                    ? innerRadius
                    : Number(innerRadius) || 0
                const outerRadiusNum =
                  typeof outerRadius === 'number'
                    ? outerRadius
                    : Number(outerRadius) || 0
                const radius =
                  12 + innerRadiusNum + (outerRadiusNum - innerRadiusNum)
                const x = cxNum + radius * Math.cos(-midAngleNum * RADIAN)
                const y = cyNum + radius * Math.sin(-midAngleNum * RADIAN)

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cxNum ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    {typeof index === 'number' &&
                    data[index].product.length > 12
                      ? data[index].product.substring(0, 12).concat('...')
                      : typeof index === 'number'
                        ? data[index].product
                        : ''}{' '}
                    ({value})
                  </text>
                )
              }}
            >
              {data.map((_, i) => {
                return (
                  <Cell
                    key={`cell-${i}`}
                    fill={COLORS[i]}
                    className="stroke-background hover:opacity-80"
                  />
                )
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
