declare module 'react-native-config' {
  interface Config {
    google_map_api_key: string;
    API_URL: string;
  }

  const Config: Config;
  export default Config;
}
