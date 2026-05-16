import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon, TrendingUp, TrendingDown, Minus } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: "up" | "down" | "neutral";
}

const StatsCard = ({ title, value, change, icon: Icon, trend }: StatsCardProps) => {
  const trendIcons = {
    up: TrendingUp,
    down: TrendingDown,
    neutral: Minus
  };

  const trendColors = {
    up: "text-green-500",
    down: "text-red-500",
    neutral: "text-muted-foreground"
  };

  const TrendIcon = trendIcons[trend];

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="text-2xl font-bold">{value}</h3>
          <div className="flex items-center gap-1">
            <TrendIcon className={`w-4 h-4 ${trendColors[trend]}`} />
            <p className={`text-xs ${trendColors[trend]}`}>{change}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
