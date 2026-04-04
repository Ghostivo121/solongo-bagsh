
export const USER_DATA = {
    id: "1",
    lastName: "Сод-Эрдэнэ",     
    firstName: "Дагвадорж",      
    email: "se22d11@nmit.edu.mn",
    studentCode: "SE22D11",
    class: "Программ хангамж-3", 
    department: "Компьютерийн ухааны тэнхим", 
    status: "Идэвхтэй",        
    profileImage: require("../assets/img/icon.png"), 
    admissionYear: "2022",     
  };
  
export const CURRENT_LESSONS = [
  {
    id: "math_101",
    name: "Магадлал ба статистик",
    teacher: "Б.Санчир",
    credit: 3,
    totalScore: 85,
    scores: [
      { 
        id: "s1", 
        label: "Ирц", 
        value: 10, 
        max: 10, 
        color: "#4CAF50",
        attendanceDetails: [
          { date: "03.01", type: "Lecture", status: true },
          { date: "03.03", type: "Seminar", status: true },
          { date: "03.08", type: "Lecture", status: false },
          { date: "03.10", type: "Seminar", status: true },
        ]
      },
      { id: "s2", label: "Явц 1", value: 20, max: 30, color: "#2196F3" },
      { id: "s3", label: "Бие даалт", value: 15, max: 20, color: "#FF9800" },
      { id: "s4", label: "Шалгалт", value: 40, max: 40, color: "#F44336" },
    ]
  },
  {
    id: "mobile_301",
    name: "Мобайл програмчлал",
    teacher: "Ц.Солонгоо",
    credit: 3,
    totalScore: 92,
    scores: [
      { 
        id: "s1", 
        label: "Ирц", 
        value: 9, 
        max: 10, 
        color: "#4CAF50",
        attendanceDetails: [
          { date: "03.02", type: "Lecture", status: true },
          { date: "03.04", type: "Lab", status: true },
        ]
      },
      { id: "s2", label: "Lab 1", value: 10, max: 10, color: "#2196F3" },
      { id: "s3", label: "Төсөл", value: 25, max: 30, color: "#673AB7" },
    ]
  },
  {
    id: "py_201",
    name: "Хиймэл оюун ухаан ба машин сургалт",
    teacher: "Н.Анхбаяр",
    credit: 3,
    totalScore: 78,
    scores: [
      { id: "s1", label: "Ирц", value: 10, max: 10, color: "#4CAF50", attendanceDetails: [] },
      { id: "s2", label: "Lab", value: 28, max: 30, color: "#2196F3" },
    ]
  },
  {
    id: "swe_401",
    name: "Программ хангамжийн шаардлагын шинжилгээ",
    teacher: "Д.Золжаргал",
    credit: 3,
    totalScore: 65,
    scores: [
      { id: "s1", label: "Ирц", value: 7, max: 10, color: "#4CAF50", attendanceDetails: [] },
      { id: "s2", label: "Шалгалт", value: 40, max: 60, color: "#F44336" },
    ]
  },
  {
    id: "net_302",
    name: "Компьютер сүлжээ",
    teacher: "Э.Одонтуяа",
    credit: 3,
    totalScore: 88,
    scores: [
      { id: "s1", label: "Ирц", value: 10, max: 10, color: "#4CAF50", attendanceDetails: [] },
    ]
  },
  {
    id: "cyber_402",
    name: "Цахим аюулгүй байдал",
    teacher: "С.Төгөлдөр",
    credit: 3,
    totalScore: 95,
    scores: [
      { id: "s1", label: "Ирц", value: 10, max: 10, color: "#4CAF50", attendanceDetails: [] },
    ]
  },
  {
    id: "res_410",
    name: "Бакалаврын ахисан түвшний төсөл",
    teacher: "Т.Гантөр",
    credit: 2,
    totalScore: 70,
    scores: [
      { id: "s1", label: "Ирц", value: 10, max: 10, color: "#4CAF50", attendanceDetails: [] },
    ]
  }
];

export const WEEKLY_SCHEDULE = {
  day1: [ 
    { id: "1", lessonId: "math_101", startTime: "08:20", type: "Lecture", room: "712" },
    { id: "2", lessonId: "mobile_301", startTime: "10:00", type: "Lab", room: "914" },
    { id: "3", lessonId: "py_201", startTime: "11:40", type: "Lecture", room: "809" },
    
  ],
  day2: [ 
    { id: "4", lessonId: "swe_401", startTime: "10:00", type: "Lecture", room: "712" },
    { id: "5", lessonId: "net_302", startTime: "11:40", type: "Lab", room: "912" },
    { id: "6", lessonId: "math_101", startTime: "14:00", type: "Seminar", room: "709" },
  ],
  day3: [ 
    { id: "7", lessonId: "cyber_402", startTime: "10:00", type: "Lecture", room: "809" },
    { id: "8", lessonId: "res_410", startTime: "11:40", type: "Lecture", room: "712" },
    { id: "9", lessonId: "mobile_301", startTime: "14:00", type: "Lecture", room: "809" },
  ],
  day4: [
    { id: "10", lessonId: "py_201", startTime: "10:00", type: "Lab", room: "913" },
    { id: "11", lessonId: "swe_401", startTime: "11:40", type: "Seminar", room: "910" },
    { id: "12", lessonId: "net_302", startTime: "14:00", type: "Lecture", room: "712" },
  ],
  day5: [ 
    { id: "13", lessonId: "cyber_402", startTime: "10:00", type: "Lab", room: "912" },
    { id: "14", lessonId: "res_410", startTime: "11:40", type: "Seminar", room: "910" },
    { id: "15", lessonId: "mobile_301", startTime: "14:00", type: "Lab", room: "912" },
  ],
};


export const UPCOMING_DEADLINES = [
  {
    id: "d1",
    subject: "Мобайл програмчлал",
    task: "Бие даалт 1 (UI Design)",
    dueDate: "2026-03-25", 
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

export const SEMESTER_GRADES = [
  {
    semester: "2025-2026 Намар",
    gpa: 3.72,
    totalCredit: 18,
    courses: [
      { id: "s5_1", name: "Өгөгдлийн сан", grade: "A", score: 96, credit: 3 },
      { id: "s5_2", name: "Үйлдлийн систем", grade: "B+", score: 87, credit: 3 },
      { id: "s5_3", name: "Вэб програмчлал II", grade: "A-", score: 91, credit: 3 },
      { id: "s5_4", name: "Дискрет математик II", grade: "A", score: 94, credit: 3 },
      { id: "s5_5", name: "Мэдээллийн аюулгүй байдал", grade: "B", score: 81, credit: 3 },
      { id: "s5_6", name: "Мэргэжлийн англи хэл", grade: "A", score: 98, credit: 3 },
    ]
  },
  {
    semester: "2024-2025 Хавар",
    gpa: 3.45,
    totalCredit: 15,
    courses: [
      { id: "s4_1", name: "Өгөгдлийн бүтэц", grade: "A-", score: 92, credit: 3 },
      { id: "s4_2", name: "Вэб програмчлал I", grade: "B+", score: 86, credit: 3 },
      { id: "s4_3", name: "Объект хандлагат технологи", grade: "A", score: 95, credit: 3 },
      { id: "s4_4", name: "Магадлалын онол", grade: "C+", score: 76, credit: 3 },
      { id: "s4_5", name: "Хэрэглээний статистик", grade: "B", score: 82, credit: 3 },
    ]
  },
  {
    semester: "2024-2025 Намар",
    gpa: 3.60,
    totalCredit: 18,
    courses: [
      { id: "s3_1", name: "Алгоритмын үндэс", grade: "A", score: 97, credit: 3 },
      { id: "s3_2", name: "Дискрет математик I", grade: "B+", score: 88, credit: 3 },
      { id: "s3_3", name: "Компьютерийн архитектур", grade: "A-", score: 90, credit: 3 },
      { id: "s3_4", name: "Жава програмчлал", grade: "A", score: 93, credit: 3 },
      { id: "s3_5", name: "Эдийн засгийн үндэс", grade: "B-", score: 79, credit: 3 },
      { id: "s3_6", name: "Физик II", grade: "B", score: 84, credit: 3 },
    ]
  },
  {
    semester: "2023-2024 Хавар",
    gpa: 3.20,
    totalCredit: 15,
    courses: [
      { id: "s2_1", name: "С програмчлал II", grade: "B", score: 83, credit: 3 },
      { id: "s2_2", name: "Шугаман алгебр", grade: "C", score: 72, credit: 3 },
      { id: "s2_3", name: "Физик I", grade: "A-", score: 89, credit: 3 },
      { id: "s2_4", name: "Монгол хэл", grade: "A", score: 96, credit: 3 },
      { id: "s2_5", name: "Бизнесийн харилцаа", grade: "B+", score: 87, credit: 3 },
    ]
  },
  {
    semester: "2022-2023 Намар",
    gpa: 3.85,
    totalCredit: 15,
    courses: [
      { id: "s1_1", name: "С програмчлал I", grade: "A", score: 98, credit: 3 },
      { id: "s1_2", name: "Математик анализ I", grade: "A-", score: 91, credit: 3 },
      { id: "s1_3", name: "Мэдээлэл технологийн үндэс", grade: "A", score: 95, credit: 3 },
      { id: "s1_4", name: "Биеийн тамир", grade: "A", score: 100, credit: 3 },
      { id: "s1_5", name: "Хүмүүний харилцаа", grade: "B+", score: 88, credit: 3 },
    ]
  }
];