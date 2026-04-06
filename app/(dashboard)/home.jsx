import React, { useState, useEffect } from "react";
import { 
  StyleSheet, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  Modal, 
  TextInput, 
  DeviceEventEmitter 
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedBar from "../../components/ThemedBar"; 
import { WEEKLY_SCHEDULE, CURRENT_LESSONS, UPCOMING_DEADLINES } from "../../data/MockData";
import Spacer from "../../components/Spacer";
import { Colors } from "../../constants/Colors";

const Home = () => {
  const router = useRouter();
  
  // States
  const [modalVisible, setModalVisible] = useState(false);
  const [todoTitle, setTodoTitle] = useState('');
  const [localTodos, setLocalTodos] = useState([]);

  // Апп ачааллах үед AsyncStorage-аас дата унших болон Layout-аас ирэх Event-ийг сонсох
  useEffect(() => {
    loadTodos();

    const subscription = DeviceEventEmitter.addListener('openTodoModal', () => {
      setModalVisible(true);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const loadTodos = async () => {
    try {
      const saved = await AsyncStorage.getItem('user_todos');
      if (saved) setLocalTodos(JSON.parse(saved));
    } catch (e) {
      console.error("Дата уншихад алдаа гарлаа:", e);
    }
  };

  const handleAddTodo = async () => {
    if (todoTitle.trim() === '') return;
    const newTodo = { id: `todo_${Date.now()}`, title: todoTitle };
    const updated = [newTodo, ...localTodos];
    setLocalTodos(updated);
    await AsyncStorage.setItem('user_todos', JSON.stringify(updated));
    setTodoTitle('');
    setModalVisible(false);
  };

  const removeTodo = async (id) => {
    const updated = localTodos.filter(t => t.id !== id);
    setLocalTodos(updated);
    await AsyncStorage.setItem('user_todos', JSON.stringify(updated));
  };

  const getDayKey = () => {
    const today = new Date().getDay(); 
    const days = ['day7', 'day1', 'day2', 'day3', 'day4', 'day5', 'day6'];
    const currentDay = days[today];
    return WEEKLY_SCHEDULE[currentDay] ? currentDay : "day1";
  };

  const dayKey = getDayKey();
  const todaysSchedule = WEEKLY_SCHEDULE[dayKey] || [];

  const getTypeStyles = (type) => {
    switch (type) {
      case 'Лекц': return { color: '#4CAF50', bg: '#E8F5E9', icon: 'journal' };
      case 'Лаб': return { color: '#2196F3', bg: '#E3F2FD', icon: 'flask' };
      case 'Семинар': return { color: '#FF9800', bg: '#FFF3E0', icon: 'people' };
      default: return { color: '#9E9E9E', bg: '#F5F5F5', icon: 'book' };
    }
  };

  return (
    <ThemedView style={styles.container}>
      <Spacer height={10} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
        
        {localTodos.map((todo) => (
          <View key={todo.id} style={styles.todoItem}>
            <TouchableOpacity 
              onPress={() => removeTodo(todo.id)} 
              style={styles.checkBox}
              activeOpacity={0.7}
            >
              <Ionicons onPress={() => removeTodo(todo.id)} name="ellipse-outline" size={26} color={Colors.primary} />
            </TouchableOpacity>
            
            <View style={styles.todoTextContent}>
              <ThemedText style={styles.todoText}>{todo.title}</ThemedText>
              <View style={styles.tagWrapper}>
                <View style={[styles.tagDot, { backgroundColor: Colors.primary }]} />
                <ThemedText style={styles.todoSubText}>Төлөвлөгөө</ThemedText>
              </View>
            </View>
          </View>
        ))}

        <View style={styles.headerRow}>
          <ThemedText title={true} style={styles.sectionTitle}>Өнөөдрийн хуваарь</ThemedText>
          <ThemedText style={styles.dateText}>2026.04.04 (Бямба)</ThemedText>
        </View>

        {todaysSchedule.length === 0 && localTodos.length === 0 && (
          <ThemedText style={styles.emptyText}>Өнөөдөр хичээл болон төлөвлөгөө байхгүй байна.</ThemedText>
        )}

        {todaysSchedule.map((item) => {
          const lessonDetail = CURRENT_LESSONS.find(l => l.id === item.lessonId);
          const stylesConfig = getTypeStyles(item.type);
          if (!lessonDetail) return null;

          return (
            <ThemedBar 
              key={item.id}
              style={styles.lessonBar}
              icon={
                <View style={[styles.typeIconBox, { backgroundColor: stylesConfig.bg }]}>
                  <Ionicons name={stylesConfig.icon} size={22} color={stylesConfig.color} />
                </View>
              }
            >
              <View style={styles.creditBadge}>
                <ThemedText style={styles.creditLabel}>Кредит</ThemedText>
                <ThemedText style={styles.creditValue}>{lessonDetail.credit}</ThemedText>
              </View>

              <View style={styles.lessonInfoContainer}>
                <ThemedText style={styles.lessonTitle}>{lessonDetail.name}</ThemedText>
                <ThemedText style={styles.subText}>
                  {item.startTime} • {item.room} • {item.type}
                </ThemedText>
              </View>

              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scoreContainer}>
                {lessonDetail.scores.map((score) => (
                  <TouchableOpacity 
                    key={score.id} 
                    style={styles.scoreWrapper}
                    onPress={() => router.push({ pathname: "/lesson", params: { openId: lessonDetail.id }})}
                  >
                    <View style={[styles.circle, { borderColor: score.color }]}>
                      <ThemedText style={styles.scoreValue}>{score.value}</ThemedText>
                    </View>
                    <ThemedText style={styles.scoreLabel}>{score.label}</ThemedText>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </ThemedBar>
          );
        })}
        
        <View style={[styles.headerRow, { marginTop: 10 }]}>
          <ThemedText style={styles.sectionTitle} title={true}>Бие даалтын хугацаа</ThemedText>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.deadlineList}>
          {UPCOMING_DEADLINES.map((item) => (
            <ThemedBar key={item.id} style={styles.deadlineBar}>
              <View style={[styles.priorityLine, { backgroundColor: item.color }]} />
              <View style={styles.deadlineContent}>
                <ThemedText style={styles.deadlineSubject}>{item.subject}</ThemedText>
                <ThemedText style={styles.deadlineTask} numberOfLines={1}>{item.task}</ThemedText>
                <View style={styles.deadlineFooter}>
                  <Ionicons name="time-outline" size={14} color={item.color} />
                  <ThemedText style={[styles.daysLeftText, { color: item.color }]}>{item.daysLeft} хоног үлдлээ</ThemedText>
                </View>
              </View>
            </ThemedBar>
          ))}
        </ScrollView>
      </ScrollView>


      <Modal visible={modalVisible} animationType="fade" transparent={true} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <ThemedText style={styles.modalTitle}>Шинэ ажил нэмэх</ThemedText>
            <TextInput 
              style={styles.input}
              placeholder="Юу хийх вэ?"
              value={todoTitle}
              onChangeText={setTodoTitle}
              autoFocus
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <ThemedText style={{ color: '#666' }}>Болих</ThemedText>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleAddTodo} style={styles.addBtn}>
                <ThemedText style={{ color: 'white', fontWeight: 'bold' }}>Нэмэх</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    paddingHorizontal: 20 
  },
  headerRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginVertical: 15 
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  dateText: { 
    fontSize: 13, 
    color: '#888' 
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F5F5F5',
  },
  checkBox: { 
    marginRight: 12 
  },
  todoTextContent: { 
    flex: 1 
  },
  todoText: { 
    fontSize: 15, 
    fontWeight: '600', 
    color: '#333' 
  },
  tagWrapper: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 4 
  },
  tagDot: { 
    width: 6, 
    height: 6, 
    borderRadius: 3, 
    marginRight: 6 
  },
  todoSubText: { 
    fontSize: 11, 
    color: '#999' 
  },
  lessonBar: { 
    marginBottom: 12, 
    padding: 15, 
    backgroundColor: '#FFF', 
    borderRadius: 15,
    elevation: 3 
  
  },
  typeIconBox: { 
    width: 44, 
    height: 44, 
    borderRadius: 12, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  lessonInfoContainer: { 
    marginBottom: 15 
  },
  lessonTitle: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    width: 200,
    
  },
  subText: { 
    fontSize: 12, 
    color: '#777', 
    marginTop: 2 
  },
  creditBadge: { 
    position: 'absolute', 
    top: 5, 
    right: 5, 
    alignItems: 'center', 
    backgroundColor: 'rgba(0,0,0,0.03)', 
    paddingHorizontal: 8, 
    paddingVertical: 2, 
    borderRadius: 10 
  },
  creditLabel: { 
    fontSize: 7, 
    color: '#888', 
    textTransform: 'uppercase' 
  },
  creditValue: { 
    fontSize: 14, 
    fontWeight: 'bold' 
  },
  scoreContainer: { 
    paddingVertical: 5, 
    marginTop: 5 
  },
  scoreWrapper: { 
    alignItems: 'center', 
    marginRight: 20, 
    width: 65 
  },
  circle: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    borderWidth: 2, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 4 
  },
  scoreValue: { 
    fontSize: 13, 
    fontWeight: 'bold' 
  },
  scoreLabel: { 
    fontSize: 10,
    color: '#666', 
    textAlign: 'center' 
  },
  deadlineList: { 
    paddingRight: 20,
  },
  deadlineBar: { 
    width: 250, 
    marginRight: 15, 
    paddingVertical: 15, 
    backgroundColor: '#FFF', 
    overflow: 'hidden',
    borderRadius: 15, 
    elevation: 3 
  },
  priorityLine: { 
    position: 'absolute', 
    left: -15, 
    top: -20, 
    bottom: -20, 
    width: 7,
  },
  deadlineContent: { 
    flex: 1, 
    paddingLeft: 10
  },
  deadlineSubject: { 
    fontSize: 11, 
    color: '#888', 
    marginBottom: 4 
  },
  deadlineTask: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    marginBottom: 10 
  },
  deadlineFooter: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  daysLeftText: { 
    fontSize: 11, 
    fontWeight: '600', 
    marginLeft: 6 
  },
  emptyText: { 
    textAlign: 'center', 
    marginTop: 20, 
    color: '#888' 
  },
  modalOverlay: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.4)', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  modalView: { 
    width: '85%', 
    backgroundColor: 'white', 
    borderRadius: 24, 
    padding: 25, 
    elevation: 10 
  },
  modalTitle: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 15, 
    textAlign: 'center' 
  },
  input: { 
    backgroundColor: '#F8F8F8', 
    borderRadius: 12, 
    padding: 16, 
    fontSize: 16, 
    marginBottom: 20, 
    borderWidth: 1, 
    borderColor: '#EEE' 
  },
  modalButtons: { 
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    gap: 25, 
    alignItems: 'center' 
  },
  addBtn: { 
    backgroundColor: Colors.primary, 
    paddingHorizontal: 24, 
    paddingVertical: 12, 
    borderRadius: 12 
  }
});

export default Home;