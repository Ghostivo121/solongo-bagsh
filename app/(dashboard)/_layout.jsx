import { Tabs } from "expo-router";
import { useColorScheme, View, Image, TouchableOpacity, StyleSheet, DeviceEventEmitter } from "react-native";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import ThemedText from "../../components/ThemedText";
import { useRouter } from "expo-router";
import { USER_DATA } from "../../data/MockData";

export default function DashboardLayout() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: { 
          backgroundColor: Colors.primary, 
          height: 60, 
        },
        headerTitleAlign: 'center', 
        headerShadowVisible: true,
        tabBarStyle: { 
          backgroundColor: theme.navBackground, 
          paddingTop: 5, 
          height: 70
        },
        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor,
      }}
    >
      <Tabs.Screen 
        name="home"
        options={{ 
          title: "Нүүр", 
          headerTitle: "", 
          headerLeft: () => (
            <TouchableOpacity 
              style={styles.headerLeftContainer} 
              onPress={() => router.push("/(auth)/profile")} 
              activeOpacity={0.7}
            >
              <Image 
                source={USER_DATA.profileImage} 
                style={styles.profileImg} 
              />
              <View style={styles.textWrapper}>
                <ThemedText style={styles.nameText}>{USER_DATA.firstName}</ThemedText>
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={styles.headerRightContainer}>
              <TouchableOpacity 
                style={styles.iconWrapper} 
                onPress={() => DeviceEventEmitter.emit('openTodoModal')}
                activeOpacity={0.6}
              >
                <Ionicons name="add-circle" size={30} color="white" />
              </TouchableOpacity>
            </View>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons size={24} name={focused ? 'home' : 'home-outline'} color={focused ? theme.iconColorFocused : theme.iconColor} />
          )
        }}
      />
      
      <Tabs.Screen 
        name="grade" 
        options={{ 
          title: "Дүн", 
          headerTitleStyle: { color: 'white', fontWeight: 'bold', fontSize: 18 },
          tabBarIcon: ({ focused }) => (
            <Ionicons size={24} name={focused ? 'stats-chart': 'stats-chart-outline'} color={focused ? theme.iconColorFocused : theme.iconColor} />
          )
        }} 
      />
      
      <Tabs.Screen 
        name="attendance" 
        options={{ 
          title: "Ирц", 
          headerTitleStyle: { color: 'white', fontWeight: 'bold', fontSize: 18 },
          tabBarIcon: ({ focused }) => (
            <Ionicons size={24} name={focused ? 'checkmark-done': 'checkmark-done-outline'} color={focused ? theme.iconColorFocused : theme.iconColor} />
          )
        }} 
      />

      <Tabs.Screen 
        name="lesson" 
        options={{ 
          title: "Хичээл", 
          headerTitleStyle: { color: 'white', fontWeight: 'bold', fontSize: 18 },
          tabBarIcon: ({ focused }) => (
            <Ionicons size={24} name={focused ? 'book': 'book-outline'} color={focused ? theme.iconColorFocused : theme.iconColor} />
          )
        }} 
      />
      
      <Tabs.Screen 
        name="schedule" 
        options={{ 
          title: "Хуваарь", 
          headerTitleStyle: { color: 'white', fontWeight: 'bold', fontSize: 18 },
          tabBarIcon: ({ focused }) => (
            <Ionicons size={24} name={focused ? 'calendar': 'calendar-outline'} color={focused ? theme.iconColorFocused : theme.iconColor} />
          )
        }} 
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerLeftContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingLeft: 15 
  },
  profileImg: { 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    borderWidth: 1.5, 
    borderColor: 'white' },
  textWrapper: { 
    marginLeft: 10 
  },
  nameText: { 
    color: 'white', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  headerRightContainer: { 
    paddingRight: 15 
  },
  iconWrapper: { 
    padding: 5 
  }
});