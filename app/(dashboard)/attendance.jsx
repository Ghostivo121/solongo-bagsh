import React, { useState } from 'react';
import { StyleSheet, View,TouchableOpacity, Text } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import { Ionicons } from "@expo/vector-icons";

const AttendanceScreen = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [isCameraVisible, setIsCameraVisible] = useState(false);

  if (!permission) {
    return <ThemedView />;
  }

  if (!permission.granted) {
    return (
      <ThemedView style={styles.permissionContainer}>
        <ThemedText style={styles.message}>Ирц бүртгэхийн тулд камерын зөвшөөрөл шаардлагатай</ThemedText>
        <ThemedButton title="Зөвшөөрөл олгох" onPress={requestPermission} />
      </ThemedView>
    );
  }

  const toggleCamera = () => {
    setIsCameraVisible(!isCameraVisible);
  };

  return (
    <ThemedView style={styles.container}>
      {!isCameraVisible ? (
        <View style={styles.mainContent}>
          <Ionicons name="qr-code-outline" size={100} color="#7d1616" style={{ marginBottom: 20 }} />
          <ThemedText title style={styles.headerTitle}>Ирц бүртгэл</ThemedText>
          <ThemedText style={styles.subTitle}>QR код уншуулж ирцээ баталгаажуулна уу</ThemedText>

          <ThemedButton 
            title="Камер нээх" 
            onPress={toggleCamera} 
            style={styles.customBtn} 
          />
        </View>
      ) : (
        <View style={styles.cameraWrapper}>
          <CameraView 
            style={styles.camera} 
            facing="back"
            onBarcodeScanned={({ data }) => {
                alert(`QR код уншигдлаа: ${data}`);
                setIsCameraVisible(false);
            }}
          >
            <View style={styles.overlay}>
              <TouchableOpacity style={styles.closeButton} onPress={toggleCamera}>
                <Ionicons name="close-circle" size={50} color="#FFF" />
              </TouchableOpacity>
              <View style={styles.scanFrame} />
              <Text style={styles.scanInstruction}>QR кодыг хүрээ дотор байрлуулна уу</Text>
            </View>
          </CameraView>
        </View>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1 
  },
  permissionContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20 
  },
  message: { 
    textAlign: 'center', 
    marginBottom: 20 
  },
  mainContent: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 40 
  },
  headerTitle: { 
    fontSize: 24, 
    marginBottom: 10 
  },
  subTitle: { 
    textAlign: 'center', 
    color: '#888', 
    marginBottom: 30 
  },
  customBtn: {
    width: '100%', 
    borderRadius: 12,
  },
  cameraWrapper: { flex: 1 },
  camera: { flex: 1 },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanFrame: {
    width: 260,
    height: 260,
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 24,
  },
  closeButton: {
    position: 'absolute',
    top: 60,
    right: 25,
  },
  scanInstruction: {
    color: '#FFF',
    marginTop: 30,
    fontSize: 16,
    fontWeight: '500',
  }
});

export default AttendanceScreen;