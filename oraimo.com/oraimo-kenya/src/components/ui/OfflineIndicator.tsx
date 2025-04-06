import { useEffect, useState } from 'react';
import { isOffline, addOfflineStatusListener } from '../../utils/registerServiceWorker';

const OfflineIndicator = () => {
  const [offline, setOffline] = useState<boolean>(isOffline());

  useEffect(() => {
    // Add event listener for online/offline status
    const removeListener = addOfflineStatusListener(setOffline);

    // Remove event listener on cleanup
    return removeListener;
  }, []);

  if (!offline) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-oraimo-red text-white p-3 rounded-lg shadow-lg flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-14-14zM14 12V9a4 4 0 00-8 0v3a1 1 0 001 1h6a1 1 0 001-1zm-4-7a1 1 0 011 1v3a1 1 0 11-2 0V6a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
      <span>You're currently offline. Some content may be unavailable.</span>
    </div>
  );
};

export default OfflineIndicator;
