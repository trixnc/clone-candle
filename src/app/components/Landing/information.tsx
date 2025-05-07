import { IconEye, IconBook, IconUser, IconChartBar, IconBell } from "@tabler/icons-react";
import { FC } from "react";
import { cn } from "@/lib/utils";

export const features = [
  {
    icon: <IconEye className="h-6 w-6 text-blue-600" />,
    title: "Smart Candle Pattern Analysis",
    description: "AI detects meaningful patterns in past candlesticks to guide future trades.",
  },
  {
    icon: <IconBook className="h-6 w-6 text-blue-600" />,
    title: "Backtesting Made Easy",
    description: "Validate strategies with historical data to improve confidence and accuracy.",
  },
  {
    icon: <IconUser className="h-6 w-6 text-blue-600" />,
    title: "Personal Trading Mentor",
    description: "Get personalized market insights and trading education from your AI assistant.",
  },
  {
    icon: <IconChartBar className="h-6 w-6 text-blue-600" />,
    title: "Chart Alerts & Notifications",
    description: "Stay updated with real-time alerts and notifications for market changes.",
  },
  {
    icon: <IconBell className="h-6 w-6 text-blue-600" />,
    title: "Built-in Day Trader Tools",
    description: "Access tools designed for both beginners and experienced traders.",
  },
  {
    icon: <IconEye className="h-6 w-6 text-blue-600" />,
    title: "AI-Powered Impact Analysis",
    description: "Predict market impact through news and economic data.",
  },
  {
    icon: <IconBook className="h-6 w-6 text-blue-600" />,
    title: "Backtesting Made Easy",
    description: "Test and validate your strategies with historical data.",
  },
  {
    icon: <IconUser className="h-6 w-6 text-blue-600" />,
    title: "Personalized Insights",
    description: "Receive tailored insights to enhance your trading strategies.",
  },
];

const Information = () => {
  return <FeatureGrid features={features} />;
};

interface Feature {
  icon: React.ReactElement;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
}

const FeatureGrid: FC<FeatureGridProps> = ({ features }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-center bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 text-transparent bg-clip-text font-bold text-4xl">
        Everything You Need to Trade Smarter
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        From AI-driven analysis to real-time alerts, discover the tools designed to sharpen your trading edge.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y border border-gray-200 rounded-lg overflow-hidden">
        {features.map((feature, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col gap-2 p-6",
              "even:border-l",
              "bg-white"
            )}
          >
            <div>{feature.icon}</div>
            <h3 className="font-semibold text-lg">{feature.title}</h3>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;