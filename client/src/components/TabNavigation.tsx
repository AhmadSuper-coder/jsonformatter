import { TabType } from "./JsonFormatter";

interface TabNavigationProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const tabs = [
  { id: "prettyPrint" as TabType, label: "Pretty Print" },
  { id: "minify" as TabType, label: "Minify" },
  { id: "validate" as TabType, label: "Validate" },
  { id: "compare" as TabType, label: "Compare" },
  { id: "jsonToCsv" as TabType, label: "JSON to CSV" },
];

const TabNavigation = ({ activeTab, setActiveTab }: TabNavigationProps) => {
  return (
    <div className="border-b border-border">
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`
              px-1 py-4 font-medium text-sm border-b-2
              ${activeTab === tab.id 
                ? "border-primary text-primary hover:text-primary hover:border-primary" 
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"}
            `}
            onClick={() => setActiveTab(tab.id)}
            aria-current={activeTab === tab.id ? "page" : undefined}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;
