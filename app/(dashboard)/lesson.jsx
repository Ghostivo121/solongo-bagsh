import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity, LayoutAnimation, Platform, UIManager } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText"; 
import { CURRENT_LESSONS } from "../../data/MockData";


const LessonScreen = () => {
  const { openId } = useLocalSearchParams();
  const router = useRouter();
  const [expandedLesson, setExpandedLesson] = useState(null);
  const [expandedScore, setExpandedScore] = useState(null);

  useEffect(() => {
    if (openId) {
      setExpandedLesson(openId);
    }
  }, [openId]);

  const toggleLesson = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedLesson(expandedLesson === id ? null : id);
    setExpandedScore(null);
  };

  const toggleScore = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedScore(expandedScore === id ? null : id);
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.header}>
          <ThemedText title style={styles.headerTitle}>Миний хичээлүүд</ThemedText>
          <ThemedText style={styles.subHeader}>2025-2026 оны Хаврын семестр</ThemedText>
        </View>

        <TouchableOpacity 
          style={styles.planBtn} 
          onPress={() => router.push("/ProgressDashboard")}
          activeOpacity={0.7}
        >
          <Ionicons name="analytics" size={18} color="#7D1616" />
          <ThemedText style={styles.planBtnText}>Төлөвлөгөө</ThemedText>
        </TouchableOpacity>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {CURRENT_LESSONS.map((lesson) => (
          <View key={lesson.id} style={styles.cardWrapper}>
            <TouchableOpacity 
              style={[styles.lessonCard, expandedLesson === lesson.id && styles.activeCard]} 
              onPress={() => toggleLesson(lesson.id)}
              activeOpacity={0.9}
            >
              <View style={styles.cardHeader}>
                <View style={styles.mainInfo}>
                  <ThemedText style={styles.lessonName}>{lesson.name}</ThemedText>
                  <ThemedText style={styles.teacherName}>{lesson.teacher} • {lesson.credit} Кредит</ThemedText>
                </View>
                <View style={styles.rightInfo}>
                  <View style={styles.totalScoreBadge}>
                      <ThemedText style={styles.totalScore}>{lesson.totalScore}</ThemedText>
                  </View>
                  <Ionicons 
                    name={expandedLesson === lesson.id ? "chevron-up" : "chevron-down"} 
                    size={20} 
                    color="#888" 
                  />
                </View>
              </View>

              {expandedLesson === lesson.id && (
                <View style={styles.expandArea}>
                  <View style={styles.divider} />
                  
                  {lesson.scores.map((score) => (
                    <View key={score.id} style={styles.scoreItem}>
                      <TouchableOpacity 
                        onPress={() => toggleScore(score.id)}
                        style={styles.scoreRow}
                        activeOpacity={0.7}
                      >
                        <View style={styles.scoreHeader}>
                          <ThemedText style={styles.scoreLabel}>{score.label}</ThemedText>
                          <View style={styles.scoreValueContainer}>
                            <ThemedText style={styles.scoreVal}>{score.value}/{score.max}</ThemedText>
                            <Ionicons 
                              name={expandedScore === score.id ? "chevron-down" : "chevron-forward"} 
                              size={14} 
                              color="#888" 
                            />
                          </View>
                        </View>
                        <View style={styles.barBg}>
                          <View 
                            style={[
                              styles.barFill, 
                              { width: `${(score.value / score.max) * 100}%`, backgroundColor: score.color }
                            ]} 
                          />
                        </View>
                      </TouchableOpacity>
                      
                      {expandedScore === score.id && (
                        <View style={styles.detailsBox}>
                          {score.subDetails && score.subDetails.length > 0 ? (
                            score.subDetails.map((detail, idx) => (
                              
                              score.label === "Ирц" ? (
                                <View key={idx} style={styles.detailRow}>
                                  <View style={styles.detailTitleBox}>
                                    <ThemedText style={styles.detailTitleText}>{detail.week}-р 7 хоног ({detail.type})</ThemedText>
                                    <ThemedText style={styles.detailDateSubText}>{detail.actualDate}</ThemedText>
                                  </View>
                                  <ThemedText style={[
                                    styles.detailStatusText, 
                                    { color: detail.status === "Ирсэн" ? "#4CAF50" : "#F44336", fontWeight: "bold" }
                                  ]}>
                                    {detail.status}
                                  </ThemedText>
                                  <ThemedText style={styles.detailValueText}>{detail.value}</ThemedText>
                                </View>
                              ) : (
                                <View key={idx} style={styles.detailRow}>
                                  <View style={styles.detailTitleBox}>
                                    <ThemedText style={styles.detailTitleText}>{detail.title}</ThemedText>
                                  </View>
                                  <ThemedText style={styles.detailStatusText}>{detail.status}</ThemedText>
                                  <ThemedText style={styles.detailValueText}>{detail.date}</ThemedText>
                                </View>
                              )
                            ))
                          ) : (
                            <ThemedText style={styles.noData}>Мэдээлэл ороогүй байна.</ThemedText>
                          )}
                        </View>
                      )}
                    </View>
                  ))}
                </View>
              )}
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    paddingHorizontal: 20, 
    backgroundColor: '#F8F9FA' 
  },
  // Шинээр нэмэгдсэн хэсэг
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 15 
  },
  header: { 
    flex: 1
  },
  planBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FDECEC',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  planBtnText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#7D1616',
    marginLeft: 4,
  },
  headerTitle: { 
    fontSize: 24, 
    fontWeight: 'bold' 
  },
  subHeader: {
    fontSize: 13, 
    color: '#888', 
    marginTop: 4 
  },
  scrollContent: { 
    paddingBottom: 40 
  },
  cardWrapper: { 
    marginBottom: 12 
  },
  lessonCard: { 
    backgroundColor: '#FFF', 
    borderRadius: 16, 
    padding: 16, 
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  activeCard: { 
    borderLeftWidth: 4, 
    borderLeftColor: '#7d1616' 
  },
  cardHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  mainInfo: { 
    flex: 1 
  },
  lessonName: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#333' 
  },
  teacherName: { 
    fontSize: 12, 
    color: '#777', 
    marginTop: 3 
  },
  rightInfo: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  totalScoreBadge: { 
    backgroundColor: '#F0F7FF', 
    paddingHorizontal: 10, 
    paddingVertical: 4, 
    borderRadius: 12, 
    marginRight: 8 
  },
  totalScore: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#2196F3' 
  },
  expandArea: { 
    marginTop: 10 
  },
  divider: { 
    height: 1, 
    backgroundColor: '#F0F0F0', 
    marginBottom: 15 
  },
  scoreItem: { 
    marginBottom: 15 
  },
  scoreRow: { 
    width: '100%' 
  },
  scoreHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 6 
  },
  scoreLabel: { 
    fontSize: 13, 
    color: '#555', 
    fontWeight: '500' 
  },
  scoreValueContainer: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  scoreVal: { 
    fontSize: 13, 
    fontWeight: 'bold', 
    marginRight: 4 
  },
  barBg: { 
    height: 6, 
    backgroundColor: '#F0F0F0', 
    borderRadius: 3, 
    overflow: 'hidden' 
  },
  barFill: { 
    height: '100%', 
    borderRadius: 3 
  },
  detailsBox: { 
    backgroundColor: '#FAFAFA', 
    borderRadius: 12, 
    padding: 12, 
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#F0F0F0'
  },
  detailRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: '#F0F0F0' 
  },
  detailTitleBox: { 
    flex: 1.5 
  },
  detailTitleText: { 
    fontSize: 12, 
    fontWeight: '500',
    color: '#333' 
  },
  detailDateSubText: {
    fontSize: 10, 
    color: '#888', 
    marginTop: 2
  },
  detailStatusText: { 
    flex: 1,
    fontSize: 11, 
    color: '#666',
    textAlign: 'center'
  },
  detailValueText: { 
    flex: 0.5,
    fontSize: 12, 
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#2196F3'
  },
  noData: { 
    fontSize: 11, 
    color: '#AAA', 
    textAlign: 'center',
    paddingVertical: 10
  }
});

export default LessonScreen;