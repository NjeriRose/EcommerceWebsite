import { Workbox } from 'workbox-window';

// Function to register a service worker
export function registerServiceWorker(): void {
  // Only register service worker in production
  if (import.meta.env.PROD) {
    // Check if service workers are supported
    if ('serviceWorker' in navigator) {
      const wb = new Workbox('/sw.js');

      // Add event listeners to handle updates
      wb.addEventListener('installed', (event) => {
        if (event.isUpdate) {
          // If it's an update, show a notification or prompt
          if (confirm('New version available! Click OK to update.')) {
            window.location.reload();
          }
        } else {
          console.log('Content is cached for offline use.');
        }
      });

      wb.addEventListener('activated', () => {
        console.log('Service worker activated');
      });

      wb.addEventListener('waiting', () => {
        console.log('Service worker waiting');
      });

      wb.addEventListener('controlling', () => {
        console.log('Service worker is controlling the page');
      });

      wb.addEventListener('message', (event) => {
        console.log('Service worker message:', event.data);
      });

      // Register the service worker
      wb.register().catch((error) => {
        console.error('Service worker registration failed:', error);
      });
    } else {
      console.log('Service workers are not supported by this browser');
    }
  } else {
    console.log('Service worker not registered in development mode');
  }
}

// Function to check if app is running in offline mode
export function isOffline(): boolean {
  return !navigator.onLine;
}

// Function to add offline status listener
export function addOfflineStatusListener(callback: (isOffline: boolean) => void): () => void {
  const handleOnline = () => {
    callback(false);
  };

  const handleOffline = () => {
    callback(true);
  };

  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);

  // Return a function to remove the event listeners
  return () => {
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline);
  };
}
