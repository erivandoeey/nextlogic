import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", vendas: 850000, alugueis: 120000 },
  { name: "Fev", vendas: 920000, alugueis: 135000 },
  { name: "Mar", vendas: 1100000, alugueis: 145000 },
  { name: "Abr", vendas: 1350000, alugueis: 152000 },
  { name: "Mai", vendas: 1580000, alugueis: 168000 },
  { name: "Jun", vendas: 2400000, alugueis: 175000 }
];

const SalesChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis dataKey="name" className="text-xs" />
        <YAxis className="text-xs" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: "hsl(var(--card))", 
            border: "1px solid hsl(var(--border))",
            borderRadius: "8px"
          }}
          formatter={(value: number) => 
            new Intl.NumberFormat('pt-BR', { 
              style: 'currency', 
              currency: 'BRL',
              minimumFractionDigits: 0
            }).format(value)
          }
        />
        <Bar dataKey="vendas" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
        <Bar dataKey="alugueis" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
