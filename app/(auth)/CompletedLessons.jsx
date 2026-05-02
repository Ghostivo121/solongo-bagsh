import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import { MyProgress } from "../../data/MockData";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";

const CompletedLessons = () => {
  const router = useRouter();
  const data = MyProgress;
  const [expandedCats, setExpandedCats] = useState({});

  useEffect(() => {
    let initialExpanded = {};
    data.categories.forEach((cat, idx) => {
      if (!cat.isCompleted) {
        initialExpanded[idx] = true;
      }
    });
    setExpandedCats(initialExpanded);
  }, []);

  const toggleExpand = (idx) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedCats(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const progressPercent = Math.round((data.creditsEarned / data.totalCreditsRequired) * 100);

  const renderLessons = (lessons, type = 'remaining') => {
    const grouped = lessons.reduce((acc, lesson) => {
      const sem = lesson.semester || "Бусад";
      if (!acc[sem]) acc[sem] = [];
      acc[sem].push(lesson);
      return acc;
    }, {});

    return Object.keys(grouped).sort().map((semKey) => (
      <View key={semKey} style={styles.semesterGroup}>
        <View style={[styles.semesterTitleRow, type === 'completed' ? styles.completedSemRow : styles.remainingSemRow]}>
          <ThemedText style={[styles.semesterTitleText, type === 'completed' ? styles.completedSemText : styles.remainingSemText]}>
            {semKey.toUpperCase()} УЛИРАЛ
          </ThemedText>
        </View>
        {grouped[semKey].map((lesson, idx) => (
          <View key={idx} style={styles.lessonRow}>
            <View style={styles.lessonInfo}>
              <ThemedText style={styles.lessonName}>{lesson.name}</ThemedText>
              <ThemedText style={styles.lessonDetail}>{lesson.code} • {lesson.credit} кр</ThemedText>
            </View>
            <Ionicons 
              name={type === 'completed' ? "checkmark-circle" : "ellipse-outline"} 
              size={20} 
              color={type === 'completed' ? "#4CAF50" : "#CFD8DC"} 
            />
          </View>
        ))}
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
          <ThemedText style={styles.headerTitle}>Хичээлүүдийн явц</ThemedText>
          <View style={{ width: 40 }} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          {/* Ерөнхий прогресс харуулах хэсэг */}
          <View style={styles.summaryCard}>
            <View style={styles.progressRing}>
              <ThemedText style={styles.percentText}>{progressPercent}%</ThemedText>
            </View>
            <View style={styles.summaryInfo}>
              <ThemedText style={styles.summaryLabel}>Нийт гүйцэтгэл</ThemedText>
              <ThemedText style={styles.summaryValue}>{data.creditsEarned} / {data.totalCreditsRequired} Кредит</ThemedText>
              <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, { width: `${progressPercent}%` }]} />
              </View>
            </View>
          </View>

          {/* 1, 2, 3, 4-р курсийн жагсаалт */}
          {data.categories.map((cat, idx) => (
            <View 
              key={idx} 
              style={[
                styles.categoryCard, 
                cat.isCompleted ? styles.completedCard : styles.activeCard
              ]}
            >
              <TouchableOpacity activeOpacity={0.8} onPress={() => toggleExpand(idx)} style={styles.categoryHeader}>
                <View style={styles.catTitleInfo}>
                  <View style={[styles.statusIndicator, { backgroundColor: cat.isCompleted ? '#4CAF50' : '#FF9800' }]} />
                  <ThemedText style={[styles.categoryName, cat.isCompleted && styles.completedText]}>
                    {cat.name}
                  </ThemedText>
                </View>
                <View style={styles.headerRight}>
                  <ThemedText style={styles.creditText}>{cat.earned}/{cat.required} кр</ThemedText>
                  <Ionicons 
                    name={expandedCats[idx] ? "chevron-up" : "chevron-down"} 
                    size={18} 
                    color={cat.isCompleted ? "#2E7D32" : "#666"} 
                    style={{ marginLeft: 8 }}
                  />
                </View>
              </TouchableOpacity>

              {/* Дэлгэж харуулах хэсэг */}
              {expandedCats[idx] && (
                <View style={styles.expandContent}>
                  
                  {/* Үзсэн хичээлүүд (Ногоон) */}
                  {cat.completedLessons.length > 0 && (
                    <View style={styles.subSection}>
                      <ThemedText style={styles.subSectionTitle}>Судалсан хичээлүүд</ThemedText>
                      {renderLessons(cat.completedLessons, 'completed')}
                    </View>
                  )}
                  
                  {/* Үзээгүй хичээлүүд (Саарал) */}
                  {cat.remainingLessons.length > 0 && (
                    <View style={styles.subSection}>
                      <ThemedText style={styles.subSectionTitle}>Судлах дутуу</ThemedText>
                      {renderLessons(cat.remainingLessons, 'remaining')}
                    </View>
                  )}

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
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, backgroundColor: '#6e1818' },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#f4f4f4' },
  backBtn: { padding: 4, },
  scrollContent: { padding: 16 },

  summaryCard: { backgroundColor: '#6e1818', borderRadius: 24, padding: 24, flexDirection: 'row', alignItems: 'center', marginBottom: 24, elevation: 4 },
  progressRing: { width: 70, height: 70, borderRadius: 35, borderWidth: 5, borderColor: 'rgba(255,255,255,0.2)', borderTopColor: '#FFF', alignItems: 'center', justifyContent: 'center' },
  percentText: { color: '#FFF', fontWeight: 'bold', fontSize: 18 },
  summaryInfo: { marginLeft: 20, flex: 1 },
  summaryLabel: { color: 'rgba(255,255,255,0.6)', fontSize: 12, fontWeight: '600' },
  summaryValue: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginVertical: 4 },
  progressBarBg: { height: 6, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 3, marginTop: 8 },
  progressBarFill: { height: 6, backgroundColor: '#4CAF50', borderRadius: 3 },

  categoryCard: { borderRadius: 20, marginBottom: 12, elevation: 1, overflow: 'hidden', borderWidth: 1 },
  completedCard: { backgroundColor: '#F1F8E9', borderColor: '#C8E6C9' },
  activeCard: { backgroundColor: '#FFFFFF', borderColor: '#ECEFF1' },
  categoryHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 18 },
  catTitleInfo: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  statusIndicator: { width: 8, height: 8, borderRadius: 4, marginRight: 10 },
  categoryName: { fontSize: 15, fontWeight: '700', color: '#333' },
  completedText: { color: '#2E7D32' },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  creditText: { fontSize: 12, fontWeight: '600', color: '#666' },

  expandContent: { padding: 18, paddingTop: 0, borderTopWidth: 1, borderTopColor: 'rgba(0,0,0,0.05)' },
  subSection: { marginTop: 15 },
  subSectionTitle: { fontSize: 11, fontWeight: '800', color: '#90A4AE', marginBottom: 10, letterSpacing: 0.5, textTransform: 'uppercase' },
  
  semesterGroup: { marginBottom: 12 },
  semesterTitleRow: { paddingVertical: 4, paddingHorizontal: 10, borderRadius: 6, alignSelf: 'flex-start', marginBottom: 8 },
  completedSemRow: { backgroundColor: '#E8F5E9' },
  remainingSemRow: { backgroundColor: '#F5F7F8' },
  semesterTitleText: { fontSize: 10, fontWeight: 'bold' },
  completedSemText: { color: '#2E7D32' },
  remainingSemText: { color: '#78909C' },
  
  lessonRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.03)' },
  lessonInfo: { flex: 1, paddingRight: 10 },
  lessonName: { fontSize: 14, fontWeight: '600', color: '#37474F' },
  lessonDetail: { fontSize: 11, color: '#90A4AE', marginTop: 4 },
});

export default CompletedLessons;