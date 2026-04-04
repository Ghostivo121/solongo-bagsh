import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import { SEMESTER_GRADES } from "../../data/MockData";
import { Colors } from "../../constants/Colors";

const GradeScreen = () => {

  const totalCredits = SEMESTER_GRADES.reduce((sum, sem) => sum + sem.totalCredit, 0);
  const avgGpa = (SEMESTER_GRADES.reduce((sum, sem) => sum + sem.gpa, 0) / SEMESTER_GRADES.length).toFixed(2);

  const getGradeColor = (grade) => {
    const g = grade.toUpperCase();
    if (g.startsWith('A')) return '#4CAF50'; 
    if (g.startsWith('B')) return '#2196F3'; 
    if (g.startsWith('C')) return '#FF9800';
    if (g.startsWith('D')) return '#FF5722';
    if (g.startsWith('F')) return '#F44336'; 
    return '#F44336'; 
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText title style={styles.headerTitle}>Дүнгийн түүх</ThemedText>
        <View style={styles.overallStats}>
          <View style={styles.statBox}>
            <ThemedText style={styles.statLabel}>Дундаж GPA</ThemedText>
            <ThemedText style={styles.statValue}>{avgGpa}</ThemedText>
          </View>
          <View style={[styles.statBox, styles.statDivider]}>
            <ThemedText style={styles.statLabel}>Нийт Кредит</ThemedText>
            <ThemedText style={styles.statValue}>{totalCredits}</ThemedText>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {SEMESTER_GRADES.map((sem, index) => (
          <View key={index} style={styles.semesterCard}>
            <View style={styles.semHeader}>
              <View>
                <ThemedText style={styles.semTitle}>{sem.semester}</ThemedText>
                <ThemedText style={styles.semSubTitle}>{sem.totalCredit} Кредит үзсэн</ThemedText>
              </View>
              <View style={styles.semGpaBox}>
                <ThemedText style={styles.semGpaText}>{sem.gpa.toFixed(2)}</ThemedText>
                <ThemedText style={styles.semGpaLabel}>GPA</ThemedText>
              </View>
            </View>

            <View style={styles.courseList}>
              {sem.courses.map((course) => (
                <View key={course.id} style={styles.courseRow}>
                  <View style={styles.courseMain}>
                    <ThemedText style={styles.courseName}>{course.name}</ThemedText>
                    <ThemedText style={styles.courseCredit}>
                      {course.credit} Кредит • {course.score} оноо
                    </ThemedText>
                  </View>
                  <View 
                    style={[
                      styles.gradeBadge, 
                      { backgroundColor: getGradeColor(course.grade) + '15' }
                    ]}
                  >
                    <ThemedText style={[styles.gradeLetter, { color: getGradeColor(course.grade) }]}>
                      {course.grade}
                    </ThemedText>
                  </View>
                </View>
              ))}
            </View>
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
  header: { 
    marginTop: 20, 
    marginBottom: 20 
  },
  headerTitle: {
    fontSize: 24, 
    fontWeight: 'bold' 
  },
  overallStats: { 
    flexDirection: 'row', 
    backgroundColor: '#FFF', 
    borderRadius: 18, 
    padding: 18, 
    marginTop: 15,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  statBox: { 
    flex: 1, 
    alignItems: 'center' 
  },
  statDivider: { 
    borderLeftWidth: 1, 
    borderLeftColor: '#F0F0F0' 
  },
  statLabel: { 
    fontSize: 11, 
    color: '#888', 
    textTransform: 'uppercase', 
    marginBottom: 5, 
    fontWeight: '600' 
  },
  statValue: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#2196F3' 
  },
  scrollContent: { 
    paddingBottom: 40 
  },
  semesterCard: { 
    backgroundColor: '#FFF', 
    borderRadius: 22, 
    padding: 20, 
    marginBottom: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  semHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
    paddingBottom: 15
  },
  semTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#1A1A1A' 
  },
  semSubTitle: { 
    fontSize: 12, 
    color: '#999', 
    marginTop: 3 
  },
  semGpaBox: { 
    alignItems: 'center', 
    backgroundColor: '#F0F7FF', 
    paddingHorizontal: 12, 
    paddingVertical: 8, 
    borderRadius: 14, 
    minWidth: 55 
  },
  semGpaText: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#2196F3' 
  },
  semGpaLabel: { 
    fontSize: 9, 
    color: '#2196F3', 
    fontWeight: 'bold', 
    marginTop: -3 
  },
  courseList: { 
    gap: 14 
  },
  courseRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  courseMain: { 
    flex: 1, 
    paddingRight: 10 
  },
  courseName: { 
    fontSize: 15, 
    fontWeight: '600', 
    color: '#333' 
  },
  courseCredit: { 
    fontSize: 11, 
    color: '#A0A0A0', 
    marginTop: 3 
  },
  gradeBadge: { 
    width: 40, 
    height: 40, 
    borderRadius: 12, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  gradeLetter: { 
    fontSize: 15, 
    fontWeight: 'bold' 
  }
});

export default GradeScreen;