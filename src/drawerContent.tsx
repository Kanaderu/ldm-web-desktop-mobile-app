import React from 'react';
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Animated from 'react-native-reanimated';

import { SafeAreaView } from "react-navigation";
import { DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';

import {
  Appbar,
  Drawer,
  Avatar,
  Title,
  Caption,
  Paragraph,
  TouchableRipple,
  Switch,
  useTheme,
 } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PreferencesContext } from './context/preferencesContext';

import logo from './assets/logo.png';

type DrawerContentProps = DrawerContentComponentProps<DrawerNavigationProp>;

export const DrawerContent = (props: DrawerContentProps) => {
  const paperTheme = useTheme();
  const { theme, toggleTheme } = React.useContext(
    PreferencesContext
  );
  const translateX = Animated.interpolate(props.progress, {
    inputRange: [0, 0.5, 0.7, 0.8, 1],
    outputRange: [-100, -85, -70, -45, 0],
  });

  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
        <Animated.View
        style={[
          styles.drawerContent
        ]}
        >
          <View style={styles.userInfoSection}>
            <Avatar.Image
              source={logo}
              style={{
                borderRadius: 0,
                backgroundColor: "#ff",
              }}
              size={80}
            />
            <Title style={styles.title}>David Fan</Title>
            <Caption style={styles.caption}>Lil Data Monster</Caption>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  202
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  159
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <Drawer.Item
                icon={({ color, size }) => (
                  <MaterialCommunityIcons
                    name="account-outline"
                    color={color}
                    size={size}
                  />
                )}
                label="Profile"
                onPress={() => {}}
              />
            <Drawer.Item
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="bluetooth" color={color} size={size} />
              )}
              label="Bluetooth"
              onPress={() => props.navigation.navigate("Bluetooth")}
            />
            <Drawer.Item
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="tune" color={color} size={size} />
              )}
              label="Preferences"
              onPress={() => {}}
            />
            <Drawer.Item
              active="true"
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="bookmark-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Bookmarks"
              onPress={() => {}}
            />
            <Drawer.Item
              label="First Page"
              active="true"
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="bookmark-outline"
                  color={color}
                  size={size}
                />
              )}
              onPress={() => props.navigation.navigate("First")}
            />
            <Drawer.Item
              label="Second Page"
              active="true"
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="bookmark-outline"
                  color={color}
                  size={size}
                />
              )}
              onPress={() => props.navigation.navigate("Second")}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={toggleTheme}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={theme === 'dark'} />
                </View>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.preference}>
                <Text>RTL</Text>
                <View pointerEvents="none">
                  <Switch value={false} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </Animated.View>
      </SafeAreaView>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
  },
  userInfoSection: {
    paddingLeft: 20,
    marginBottom: 15,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
