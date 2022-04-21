import { StatusBar } from 'expo-status-bar';
import AuthStack from './Components/Routing/AuthStack';
import { Provider as ReduxProvider } from 'react-redux'
import store from './Components/Redux/Store';

export default function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <StatusBar style="dark" />
        <AuthStack />
      </ReduxProvider>
    </>
  );
}
