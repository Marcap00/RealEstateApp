# App.json

- `"orientation": "portrait",` : It could be `"landscape"`

- `"scheme": "RealEstateApp",` : This is for deep linking. You can change it to your app name.

- `"userInterfaceStyle": "automatic",` : It could be `"light"` or `"dark"`. It determines whether the app should be in light or dark mode.

- `"newArchEnabled": true,` : This is for the new architecture. You can set it to `false` if you want to use the old architecture. It uses newer version of React Native for better performance. It's also konwn as a "bridgeless" architecture, meaning that it doesn't use the bridge to communicate between JavaScript and native code. React Native introduced new methods like "Fabric" for rendering, "TurboModules" for native modules, and "JSI" to allow direct synchronous communication between JavaScript and native code without the bridge.

Expo immediately supports this new architecture without you needing to do anything and along this you can use the latest React feature like transitions

Then we have the specifics for each platform:

- `"ios": {` : iOS specific configurations

  - `"bundleIdentifier": "com.yourcompany.yourapp",` : This is the bundle identifier for your app. It should be unique. You can change it to your own.

  - `"supportsTablet": true,` : It could be `false` if you don't want to support tablets.

  - `"config": {` : This is for the configuration of the app. You can add your own configurations here.

- `"android": {` : Android specific configurations 

  - `"package": "com.yourcompany.yourapp",` : This is the package name for your app. It should be unique. You can change it to your own.

  - `"adaptiveIcon": {` : This is for the adaptive icon. You can change the colors and shapes of the icon here.

  - `"config": {` : This is for the configuration of the app. You can add your own configurations here.

- `"web": {` : Web specific configurations
    
    - `"favicon": "./assets/favicon.png",` : This is the favicon for your app. You can change it to your own.
    
    - `"name": "Your App Name",` : This is the name of your app.
    
    - `"shortName": "Your App",` : This is the short name of your app.
    
    - `"themeColor": "#000000",` : This is the theme color of your app. You can change it to your own.
    
    - `"config": {` : This is for the configuration of the app. You can add your own configurations here.