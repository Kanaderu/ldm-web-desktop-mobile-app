import React from 'react';
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
} from 'react-native-paper';
import { createAppContainer } from 'react-navigation';
import { useColorScheme } from 'react-native-appearance';

// import Menu from './components/layout/menu';
import RootNavigator from './rootNavigator';
import PreferencesContext from './context/preferencesContext';

const toggleTheme = () => {
  setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
}

const theme = {
  ...DarkTheme,
  roundness: 2,
  colors: {
    ...DarkTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

// const AppNav = createAppContainer(Menu);

export const Main = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = React.useState<'light' | 'dark'>(
    colorScheme === 'dark' ? 'dark' : 'light'
  );

  const toggleTheme = () => {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
  };

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      theme,
    }),
    [theme]
  );

  const themeLight = theme === 'light';

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider
        theme={
          themeLight
            ? {
                ...DefaultTheme,
                colors: { ...DefaultTheme.colors, primary: '#1ba1f2' },
              }
            : {
                ...DarkTheme,
                colors: { ...DarkTheme.colors, primary: '#1ba1f2' },
              }
        }>
        <RootNavigator />
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
