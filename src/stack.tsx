import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Appbar, Avatar, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// import { BottomTabs } from './bottomTabs';
import logo from './assets/logo.png';
import { Details } from './stacks/details';
import { StackNavigatorParamlist } from './types';

const Stack = createStackNavigator<StackNavigatorParamlist>();

export const StackNavigator = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="FeedList"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => {
          const { options } = scene.descriptor;
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
              ? options.title
              : scene.route.name;

          return (
            <Appbar.Header
              theme={{ colors: { primary: theme.colors.surface } }}
            >
              {previous ? (
                <Appbar.BackAction
                  onPress={navigation.goBack}
                  color={theme.colors.primary}
                />
              ) : (
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={() => {
                    ((navigation as any) as DrawerNavigationProp<{}>).openDrawer();
                  }}
                >
                  <Avatar.Image
                    size={70}
                    source={logo}
                    style={{
                      borderRadius: 0,
                      backgroundColor: "#ff",
                      margin: 8
                    }}
                  />
                </TouchableOpacity>
              )}
              <Appbar.Content
                title={
                  title === '' ? (
                    <MaterialCommunityIcons
                      style={{ marginRight: 10 }}
                      name="twitter"
                      size={40}
                      color={theme.colors.primary}
                    />
                  ) : (title)
                }
                titleStyle={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: theme.colors.primary,
                }}
              />
            </Appbar.Header>
          );
        },
      }}
    >
    <Stack.Screen
      name="Home"
      component={ Details }
      options={{ headerTitle: 'Home' }}
    />
    <Stack.Screen
      name="Bluetooth"
      component={ Details }
      options={{ headerTitle: 'Bluetooth' }}
    />
    </Stack.Navigator>
  );

    // <Stack.Screen
    //   name="FeedList"
    //   component={BottomTabs}
    //   options={({ route }) => {
    //     console.log('!@# options', { route });
    //     const routeName = route.state
    //       ? route.state.routes[route.state.index].name
    //       : 'Feed';
    //     return { headerTitle: routeName };
    //   }}
    // />
    // <Stack.Screen
    //   name="Details"
    //   component={Details}
    //   options={{ headerTitle: 'Tweet' }}
    // />
};
