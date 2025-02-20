To fix this issue, you need to combine `Linking.getInitialURL` with `Linking.addEventListener`. `getInitialURL` will retrieve the initial URL when the app starts; `addEventListener` will handle subsequent links.

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [deepLink, setDeepLink] = useState(null);

  useEffect(() => {
    const handleDeepLink = (event) => {
      setDeepLink(event.url);
    };

    const getInitialLink = async () => {
      let initialUrl = await Linking.getInitialURL();
      if (initialUrl) {
        setDeepLink(initialUrl);
      }
    };
    
    getInitialLink();

    const linkSubscription = Linking.addEventListener('url', handleDeepLink);
    return () => {
      linkSubscription.remove();
    };
  }, []);

  useEffect(() => {
    if (deepLink) {
      // Process the deep link
      console.log('Deep link received:', deepLink);
    }
  }, [deepLink]);

  return (
    <View>
      {/* Your app content */}
    </View>
  );
};

export default App; 
```