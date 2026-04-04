import React, { useState } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import { WEEKLY_SCHEDULE, CURRENT_LESSONS } from "../../data/MockData";
import { Colors } from "../../constants/Colors";

const DAYS = [
  { id: 'Да', key: 'day1' },
  { id: 'Мя', key: 'day2' },
  { id: 'Лх', key: 'day3' },
  { id: 'Пү', key: 'day4' },
  { id: 'Ба', key: 'day5' },
];

const ScheduleScreen = () => {
  const router = useRouter();
  const [selectedDay, setSelectedDay] = useState('Да');

  const activeDayKey = DAYS.find(d => d.id === selectedDay)?.key;
  const todaySchedule = WEEKLY_SCHEDULE[activeDayKey] || [];

  const getLessonName = (id) => {
    const lesson = CURRENT_LESSONS.find(l => l.id === id);
    return lesson ? lesson.name : "Тодорхойгүй хичээл";
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'Lecture': return '#4CAF50';
      case 'Lab': return '#FF9800';
      case 'Seminar': return '#2196F3';
      default: return '#888';
    }
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText title style={styles.headerTitle}>Хичээлийн хуваарь</ThemedText>
      </View>

      <View style={styles.daySelector}>
        {DAYS.map((day) => (
          <TouchableOpacity 
            key={day.id} 
            onPress={() => setSelectedDay(day.id)}
            style={styles.dayTab}
            activeOpacity={0.7}
          >
            <ThemedText style={[
              styles.dayId, 
              selectedDay === day.id && styles.activeDayText
            ]}>
              {day.id}
            </ThemedText>
            {selectedDay === day.id && (
              <View style={[styles.activeUnderline, { backgroundColor: Colors.primary }]} />
            )}
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {todaySchedule.length > 0 ? (
          todaySchedule.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={styles.card}
              activeOpacity={0.8}
              onPress={() => router.push({
                pathname: "/lesson",
                params: { openId: item.lessonId }
              })}
            >
              <View style={[styles.colorBar, { backgroundColor: getTypeColor(item.type) }]} />
              
              <View style={styles.cardContent}>
                <View style={styles.infoSection}>
                  <ThemedText style={styles.courseTime}>{item.startTime}</ThemedText>
                  <ThemedText style={styles.courseName}>{getLessonName(item.lessonId)}</ThemedText>
                  
                  <View style={styles.detailRow}>
                    <Ionicons name="location-outline" size={14} color="#888" />
                    <ThemedText style={styles.detailText}>{item.room} тоот • {item.type}</ThemedText>
                  </View>
                </View>

                <View style={styles.moreBtn}>
                  <Ionicons name="chevron-forward" size={18} color="#CCC" />
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="calendar-clear-outline" size={60} color="#EEE" />
            <ThemedText style={styles.emptyText}>Энэ өдөр хичээл ороогүй байна.</ThemedText>
          </View>
        )}
      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    paddingHorizontal: 20 
  },
  header: { 
    marginTop: 20, 
    marginBottom: 15 
  },
  headerTitle: { 
    fontSize: 24, 
    fontWeight: 'bold' 
  },
  daySelector: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 20,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5'
  },
  dayTab: { 
    alignItems: 'center', 
    flex: 1, 
    paddingVertical: 10 
  },
  dayId: { 
    fontSize: 16, 
    color: '#AAA', 
    fontWeight: '500' 
  },
  activeDayText: { 
    color: '#5D5D81', 
    fontWeight: 'bold' 
  },
  activeUnderline: { 
    height: 4, 
    width: 25, 
    borderRadius: 2,
    position: 'absolute',
    bottom: -1
  },

  scrollContent: { 
    paddingBottom: 30 
  },
  card: {
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    flexDirection: 'row',
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  colorBar: { 
    width: 5 
  },
  cardContent: {
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  infoSection: { 
    flex: 1 
  },
  courseTime: { 
    fontSize: 12, 
    fontWeight: '700', 
    color: '#888', 
    marginBottom: 4 
  },
  courseName: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#333', 
    marginBottom: 6 
  },
  detailRow: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  detailText: { 
    fontSize: 13, 
    color: '#999', 
    marginLeft: 4 
  },
  moreBtn: { 
    marginLeft: 10 
  },
  emptyState: { 
    alignItems: 'center', 
    marginTop: 100 
  },
  emptyText: {
    color: '#CCC', 
    marginTop: 10, 
    fontSize: 15 
  }
});

export default ScheduleScreen;