
export const USER_DATA = {
    id: "1",
    lastName: "Сод-Эрдэнэ",     // Овог
    firstName: "Дагвадорж",        // Нэр
    email: "se22d11@nmit.edu.mn",
    studentCode: "SE22D11",
    class: "Программ хангамж-3", // Анги
    department: "Компьютерийн ухааны тэнхим", // Тэнхим
    status: "Идэвхтэй",         // Төлөв
    profileImage: require("../assets/img/icon.png"), // Зурагны зам
    admissionYear: "2022",      // Элссэн он
  };
  


export const WEEKLY_SCHEDULE = {
  day1: [ // Даваа гараг (2026-03-23-нд таарч байгаа)
    { 
      id: 1, 
      name: "Компьютер сүлжээ", 
      startTime: "1-р пар",
      credit: 3, 
      type: "Lecture", 
      room: "301",
      // Олон төрлийн оноо - энд нэмэгдэх тусам хажуу тийшээ гүйнэ
      scores: [
        { id: "a1", label: "Ирц", value: 83, unit: "%", color: "#4CAF50" },
        { id: "a2", label: "Явц", value: 35, unit: "оноо", color: "#2196F3" },
        { id: "a3", label: "Бие даалт", value: 20, unit: "оноо", color: "#FF9800" },
      ]
    },
    { 
      id: 2, 
      name: "Кибер аюулгүй байдал", 
      startTime: "2-р пар",
      credit: 3, 
      type: "Laboratory", 
      room: "Lab 5",
      scores: [
        { id: "b1", label: "Ирц", value: 95, unit: "%", color: "#4CAF50" },
        { id: "b2", label: "Бие даалт", value: 15, unit: "оноо", color: "#FF9800" },
      ]
    },
  ],
  day2: [ // Даваа гараг (2026-03-23-нд таарч байгаа)
    { 
      id: 3, 
      name: "Магадлал ба статистик", 
      startTime: "1-р пар",
      credit: 3, 
      type: "Lecture", 
      room: "301",
      scores: [
        { id: "a1", label: "Ирц", value: 83, unit: "%", color: "#4CAF50" },
        { id: "a2", label: "Явц", value: 35, unit: "оноо", color: "#2196F3" },
        { id: "a3", label: "Бие даалт", value: 20, unit: "оноо", color: "#FF9800" },
      ]
    },
    { 
      id: 4, 
      name: "Хиймэл оюун ухаан машин сургалт", 
      startTime: "2-р пар",
      credit: 3, 
      type: "Laboratory", 
      room: "Lab 5",
      scores: [
        { id: "b1", label: "Ирц", value: 95, unit: "%", color: "#4CAF50" },
        { id: "b2", label: "Бие даалт", value: 15, unit: "оноо", color: "#FF9800" },
      ]
    },
  ],
}
// data/MockData.js

export const UPCOMING_DEADLINES = [
  {
    id: "d1",
    subject: "Мобайл програмчлал",
    task: "Бие даалт 1 (UI Design)",
    dueDate: "2026-03-25", // 2 хоногийн дараа
    daysLeft: 2,
    priority: "High",
    color: "#FF4B4B"
  },
  {
    id: "d2",
    subject: "Компьютер сүлжээ",
    task: "Лабораторийн тайлан №4",
    dueDate: "2026-03-27", 
    daysLeft: 4,
    priority: "Medium",
    color: "#FF9800"
  },
  {
    id: "d3",
    subject: "Кибер аюулгүй байдал",
    task: "Судалгааны ажил",
    dueDate: "2026-03-30",
    daysLeft: 7,
    priority: "Low",
    color: "#2196F3"
  },
];