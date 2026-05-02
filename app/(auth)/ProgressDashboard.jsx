import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import { Lesson } from "../../data/MockData";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";

const ProgressDashboard = () => {
  const router = useRouter();
  const data = Lesson;
  const [expandedCats, setExpandedCats] = useState({ 0: true });

  const toggleExpand = (idx) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedCats(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const renderLessons = (lessons) => {
    return lessons.map((lesson, idx) => (
      <View key={idx} style={styles.lessonRow}>
        <View style={styles.lessonInfo}>
          <ThemedText style={styles.lessonName}>{lesson.name}</ThemedText>
          <ThemedText style={styles.lessonDetail}>{lesson.code}</ThemedText>
        </View>
        <View style={styles.yearBadge}>
          <ThemedText style={styles.yearBadgeText}>{lesson.year}</ThemedText>
        </View>
      </View>
    ));
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={{ flex: 1 }} edges={['top']}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="chevron-back" size={24} color="#f4f4f4" />
          </TouchableOpacity>
          <ThemedText style={styles.headerTitle}>Сургалтын хөтөлбөр</ThemedText>
          <View style={{ width: 40 }} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          <View style={styles.summaryCard}>
            <View style={styles.summaryInfo}>
              <ThemedText style={styles.summaryTitle}>Бакалаврын хөтөлбөр</ThemedText>
              <ThemedText style={styles.summaryDesc}>
                Үндсэн 3 бүлэг хичээлийн жагсаалт, улирлын хуваарилалт.
              </ThemedText>
              
              <TouchableOpacity 
                style={styles.actionButton}
                onPress={() => router.push('/CompletedLessons')}
              >
                <ThemedText style={styles.actionButtonText}>Үзсэн хичээлээ харах</ThemedText>
                <Ionicons name="arrow-forward" size={16} color="#6e1818" />
              </TouchableOpacity>
            </View>
            <Ionicons name="library" size={50} color="rgba(255,255,255,0.2)" style={styles.bgIcon} />
          </View>

          {data.map((cat, idx) => (
            <View key={idx} style={styles.categoryCard}>
              <TouchableOpacity activeOpacity={0.8} onPress={() => toggleExpand(idx)} style={styles.categoryHeader}>
                <View style={styles.catTitleInfo}>
                  <View style={styles.statusIndicator} />
                  <ThemedText style={styles.categoryName}>{cat.title}</ThemedText>
                </View>
                <Ionicons name={expandedCats[idx] ? "chevron-up" : "chevron-down"} size={20} color="#666" />
              </TouchableOpacity>

              {expandedCats[idx] && (
                <View style={styles.expandContent}>
                  {cat.sections.map((section, secIdx) => (
                    <View key={secIdx} style={styles.subSection}>
                      <ThemedText style={styles.subSectionTitle}>{section.type}</ThemedText>
                      {section.semesters.map((sem, semIdx) => (
                        <View key={semIdx} style={styles.semesterGroup}>
                          <View style={[styles.semesterTitleRow, sem.season === 'Намар' ? styles.autumnRow : styles.springRow]}>
                            <ThemedText style={[styles.semesterTitleText, sem.season === 'Намар' ? styles.autumnText : styles.springText]}>
                              {sem.season.toUpperCase()} УЛИРАЛ
                            </ThemedText>
                          </View>
                          {renderLessons(sem.lessons)}
                        </View>
                      ))}
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
          <View style={{ height: 40 }} />
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, backgroundColor: '#6e1818', borderBottomWidth: 1, borderBottomColor: '#F0F0F0' },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#f4f4f4' },
  backBtn: { padding: 4 },
  scrollContent: { padding: 16 },

  summaryCard: { backgroundColor: '#6e1818', borderRadius: 20, padding: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, elevation: 4 },
  summaryInfo: { flex: 1, zIndex: 2 },
  summaryTitle: { color: '#FFF', fontSize: 20, fontWeight: 'bold', marginBottom: 6 },
  summaryDesc: { color: 'rgba(255,255,255,0.8)', fontSize: 13, lineHeight: 18, marginBottom: 16 },
  bgIcon: { position: 'absolute', right: 20, bottom: 19, zIndex: 1 },
  
  actionButton: { backgroundColor: '#FFF', flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20 },
  actionButtonText: { color: '#6e1818', fontWeight: '700', fontSize: 13, marginRight: 6 },

  categoryCard: { backgroundColor: '#FFFFFF', borderRadius: 16, marginBottom: 16, elevation: 2, overflow: 'hidden', borderWidth: 1, borderColor: '#F0F2F5' },
  categoryHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 18, backgroundColor: '#FAFAFA' },
  catTitleInfo: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  statusIndicator: { width: 4, height: 16, backgroundColor: '#6e1818', borderRadius: 2, marginRight: 12 },
  categoryName: { fontSize: 15, fontWeight: '700', color: '#1F2937', flexShrink: 1 },

  expandContent: { padding: 18, paddingTop: 10, backgroundColor: '#FFF' },
  subSection: { marginTop: 10, marginBottom: 10 },
  subSectionTitle: { fontSize: 13, fontWeight: '800', color: '#4B5563', marginBottom: 12, letterSpacing: 0.5, borderBottomWidth: 1, borderBottomColor: '#F3F4F6', paddingBottom: 6 },
  semesterGroup: { marginBottom: 16, paddingLeft: 8, borderLeftWidth: 2, borderLeftColor: '#F3F4F6' },
  semesterTitleRow: { paddingVertical: 4, paddingHorizontal: 10, borderRadius: 6, alignSelf: 'flex-start', marginBottom: 8 },
  autumnRow: { backgroundColor: '#FFF3E0' },
  springRow: { backgroundColor: '#E8F5E9' },
  semesterTitleText: { fontSize: 10, fontWeight: 'bold' },
  autumnText: { color: '#E65100' },
  springText: { color: '#2E7D32' },
  lessonRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#F9FAFB' },
  lessonInfo: { flex: 1, paddingRight: 12 },
  lessonName: { fontSize: 13, fontWeight: '600', color: '#374151', marginBottom: 4 },
  lessonDetail: { fontSize: 11, color: '#9CA3AF', fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace' },
  yearBadge: { backgroundColor: '#F3F4F6', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  yearBadgeText: { fontSize: 10, fontWeight: '700', color: '#6B7280' },
});

export default ProgressDashboard;