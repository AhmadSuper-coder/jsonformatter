import { useState } from "react";
import TabNavigation from "./TabNavigation";
import PrettyPrintTab from "./FeatureTabs/PrettyPrintTab";
import MinifyTab from "./FeatureTabs/MinifyTab";
import ValidateTab from "./FeatureTabs/ValidateTab";
import CompareTab from "./FeatureTabs/CompareTab";
import JsonToCsvTab from "./FeatureTabs/JsonToCsvTab";
import Notification from "./Notification";

export type TabType = "prettyPrint" | "minify" | "validate" | "compare" | "jsonToCsv";

export type NotificationType = {
  message: string;
  isSuccess: boolean;
  isVisible: boolean;
};

const JsonFormatter = () => {
  const [activeTab, setActiveTab] = useState<TabType>("prettyPrint");
  const [notification, setNotification] = useState<NotificationType>({
    message: "",
    isSuccess: true,
    isVisible: false,
  });

  const showNotification = (message: string, isSuccess: boolean = true) => {
    setNotification({
      message,
      isSuccess,
      isVisible: true,
    });

    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification(prev => ({ ...prev, isVisible: false }));
    }, 3000);
  };

  return (
    <>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-6">
        {activeTab === "prettyPrint" && (
          <PrettyPrintTab showNotification={showNotification} />
        )}
        
        {activeTab === "minify" && (
          <MinifyTab showNotification={showNotification} />
        )}
        
        {activeTab === "validate" && (
          <ValidateTab showNotification={showNotification} />
        )}
        
        {activeTab === "compare" && (
          <CompareTab showNotification={showNotification} />
        )}
        
        {activeTab === "jsonToCsv" && (
          <JsonToCsvTab showNotification={showNotification} />
        )}
      </div>

      <Notification 
        message={notification.message}
        isSuccess={notification.isSuccess}
        isVisible={notification.isVisible}
      />
    </>
  );
};

export default JsonFormatter;
