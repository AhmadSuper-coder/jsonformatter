interface NotificationProps {
  message: string;
  isSuccess: boolean;
  isVisible: boolean;
}

const Notification = ({ message, isSuccess, isVisible }: NotificationProps) => {
  const bgColor = isSuccess ? "bg-green-50" : "bg-red-50";
  const textColor = isSuccess ? "text-green-800" : "text-red-800";
  const iconColor = isSuccess ? "text-green-500" : "text-red-500";

  return (
    <div 
      id="notification" 
      className={`fixed bottom-4 right-4 px-4 py-3 rounded-md shadow-lg ${bgColor} ${textColor} transition transform duration-300 flex items-center z-50 ${
        isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      {isSuccess ? (
        <svg className={`h-5 w-5 ${iconColor} mr-2`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className={`h-5 w-5 ${iconColor} mr-2`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )}
      <span id="notificationText">{message}</span>
    </div>
  );
};

export default Notification;
