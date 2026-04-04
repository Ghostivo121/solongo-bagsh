import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, ScrollView, useColorScheme } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import { Colors } from "../../constants/Colors";
import { USER_DATA } from "../../data/MockData";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";

const Profile = () => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const handleLogout = () => {
    router.replace("/(auth)/studentLogin");
  };

  return (
    <ThemedView style={styles.container}>

      <View style={styles.headerBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color={Colors.primary} />
        </TouchableOpacity>
        <ThemedText title={true} style={styles.headerTitle}>Хувийн мэдээлэл</ThemedText>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
    
        <View style={styles.profileSection}>
          <View style={styles.imageWrapper}>
            <Image 
              source={USER_DATA.profileImage} 
              style={styles.largeProfileImg} 
            />
            <TouchableOpacity style={styles.editIcon}>
              <Ionicons name="camera" size={18} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <Spacer height={20} />

        <View style={styles.sectionContainer}>
          <ThemedText style={styles.sectionLabel}>Үндсэн мэдээлэл</ThemedText>
          <ProfileItem label="Овог нэр" value={`${USER_DATA.lastName} ${USER_DATA.firstName}`} />
          <ProfileItem label="Элссэн он" value={USER_DATA.admissionYear} />
        </View>

        <View style={styles.sectionContainer}>
          <ThemedText style={styles.sectionLabel}>Холбоо барих</ThemedText>
          <ProfileItem label="Цахим шуудан" value={USER_DATA.email} />
          <ProfileItem label="Оюутны код" value={USER_DATA.studentCode} />
        </View>

        <View style={styles.sectionContainer}>
          <ThemedText style={styles.sectionLabel}>Сургуулийн мэдээлэл</ThemedText>
          <ProfileItem label="Анги" value={USER_DATA.class} />
          <ProfileItem label="Тэнхим" value={USER_DATA.department} />
          <ProfileItem label="Төлөв" value={USER_DATA.status} />
        </View>

        <Spacer height={30} />
             
        <ThemedButton 
          title="Системээс гарах" 
          onPress={handleLogout}
          style={styles.logoutBtnCustom}
        />

      </ScrollView>
    </ThemedView>
  );
};

const ProfileItem = ({ label, value }) => (
  <View style={styles.itemWrapper}>
    <ThemedText style={styles.itemLabel}>{label}</ThemedText>
    <View style={styles.itemValueBox}>
      <ThemedText style={styles.itemValue}>{value}</ThemedText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    paddingHorizontal: 20 
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  headerTitle: { 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  profileSection: { 
    alignItems: 'center', 
    marginTop: 10 
  },
  imageWrapper: { 
    position: 'relative' 
  },
  largeProfileImg: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    borderWidth: 1, 
    borderColor: '#ddd' 
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: Colors.primary,
    padding: 6,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'white',
  },
  sectionContainer: { 
    marginTop: 20 
  },
  sectionLabel: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginBottom: 10 
  },
  itemWrapper: { 
    marginBottom: 15 
  },
  itemLabel: { 
    fontSize: 13, 
    opacity: 0.6, 
    marginBottom: 5, 
    marginLeft: 5 
  },
  itemValueBox: {
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  itemValue: { 
    fontSize: 15, 
    fontWeight: '500' 
  },
  logoutBtnCustom: {
    backgroundColor: Colors.warning,
    marginTop: 10,
  }
});

export default Profile;