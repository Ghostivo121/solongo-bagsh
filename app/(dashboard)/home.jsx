import React from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedBar from "../../components/ThemedBar"; 
import { WEEKLY_SCHEDULE, UPCOMING_DEADLINES } from "../../data/MockData";
import Spacer from "../../components/Spacer";

const Home = () => {
  const router = useRouter();
  const dayKey = "day1"; 
  const todaysLessons = WEEKLY_SCHEDULE[dayKey] || [];

  const getTypeStyles = (type) => {
    switch (type) {
      case 'Lecture': return { color: '#4CAF50', bg: '#E8F5E9', icon: 'journal' };
      case 'Laboratory': return { color: '#2196F3', bg: '#E3F2FD', icon: 'flask' };
      case 'Seminar': return { color: '#FF9800', bg: '#FFF3E0', icon: 'people' };
      default: return { color: '#9E9E9E', bg: '#F5F5F5', icon: 'book' };
    }
  };

  return (
    <ThemedView style={styles.container}>
      <Spacer height={10} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
        
        {/* Өнөөдрийн хуваарь гарчиг */}
        <View style={styles.headerRow}>
          <ThemedText title={true} style={styles.sectionTitle}>Өнөөдрийн хуваарь</ThemedText>
          <ThemedText style={styles.dateText}>2026.03.23 (Даваа)</ThemedText>
        </View>

        {todaysLessons.map((lesson) => {
          const stylesConfig = getTypeStyles(lesson.type);
          return (
            <ThemedBar 
              key={lesson.id}
              style={styles.lessonBar}
              icon={
                <View style={[styles.typeIconBox, { backgroundColor: stylesConfig.bg }]}>
                  <Ionicons name={stylesConfig.icon} size={22} color={stylesConfig.color} />
                </View>
              }
            >
              <View style={styles.creditBadge}>
                <ThemedText style={styles.creditLabel}>Кредит</ThemedText>
                <ThemedText style={styles.creditValue}>{lesson.credit}</ThemedText>
              </View>

              <View style={styles.lessonInfoContainer}>
                <ThemedText style={styles.lessonTitle}>{lesson.name}</ThemedText>
                <ThemedText style={styles.subText}>
                  {lesson.startTime} • {lesson.room} • {lesson.type}
                </ThemedText>
              </View>

              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle={styles.scoreContainer}
              >
                {lesson.scores.map((score) => (
                  <TouchableOpacity 
                    key={score.id} 
                    style={styles.scoreWrapper}
                    onPress={() => router.push("/grade")}
                    activeOpacity={0.7}
                  >
                    <View style={[styles.circle, { borderColor: score.color }]}>
                      <ThemedText style={styles.scoreValue}>{score.value}{score.unit === '%' ? '%' : ''}</ThemedText>
                    </View>
                    <ThemedText style={styles.scoreLabel}>{score.label}</ThemedText>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </ThemedBar>
          );
        })}

        {/* Бие даалтын хугацаа */}
        <View style={[styles.headerRow, { marginTop: 10 }]}>
          <ThemedText style={styles.sectionTitle} title={true}>Бие даалтын хугацаа</ThemedText>
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.deadlineList}
        >
          {UPCOMING_DEADLINES.map((item) => (
            <ThemedBar 
              key={item.id} 
              style={styles.deadlineBar}
              onPress={() => {}} 
            >
              {/* Зүүн талын өнгөт зураас */}
              <View style={[styles.priorityLine, { backgroundColor: item.color }]} />
              
              <View style={styles.deadlineContent}>
                <ThemedText style={styles.deadlineSubject}>{item.subject}</ThemedText>
                <ThemedText style={styles.deadlineTask} numberOfLines={1}>{item.task}</ThemedText>
                
                <View style={styles.deadlineFooter}>
                  <Ionicons name="time-outline" size={14} color={item.color} />
                  <ThemedText style={[styles.daysLeftText, { color: item.color }]}>
                    {item.daysLeft} хоног үлдлээ
                  </ThemedText>
                </View>
              </View>
            </ThemedBar>
          ))}
        </ScrollView>

      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  dateText: { fontSize: 13, color: '#888' },
  
  lessonBar: {
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    paddingRight: 10,
    alignItems: 'flex-start', 
  },
  typeIconBox: { width: 44, height: 44, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  lessonInfoContainer: { marginBottom: 15 },
  lessonTitle: { fontSize: 16, fontWeight: 'bold' },
  subText: { fontSize: 12, color: '#777', marginTop: 2 },
  
  creditBadge: {
    position: 'absolute',
    top: 15,
    right: 15,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.03)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  creditLabel: { fontSize: 7, color: '#888', textTransform: 'uppercase' },
  creditValue: { fontSize: 14, fontWeight: 'bold' },

  scoreContainer: { paddingVertical: 5, marginTop: 5 },
  scoreWrapper: { alignItems: 'center', marginRight: 20, width: 65 },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  scoreValue: { fontSize: 13, fontWeight: 'bold' },
  scoreLabel: { fontSize: 10, color: '#666', textAlign: 'center' },
  
  deadlineList: { paddingRight: 20 },
  deadlineBar: {
    width: 240, 
    marginRight: 15,
    paddingLeft: 0, 
    paddingVertical: 12,
    overflow: 'hidden',
    elevation: 2,
    flexDirection: 'row',
  },
  priorityLine: { 
    position: 'absolute', 
    left: 0, 
    top: -9, 
    bottom: -9, 
    width: 6
  },
  deadlineContent: {
    flex: 1,
    paddingLeft: 20, 
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  deadlineSubject: { fontSize: 11, color: '#888', marginBottom: 2 },
  deadlineTask: { fontSize: 14, fontWeight: 'bold', marginBottom: 8 },
  deadlineFooter: { flexDirection: 'row', alignItems: 'center' },
  daysLeftText: { fontSize: 11, fontWeight: '600', marginLeft: 4 }
});

export default Home;