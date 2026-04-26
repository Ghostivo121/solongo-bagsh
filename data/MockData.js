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
        value: 9,
        max: 10,
        color: "#4CAF50",
        subDetails: [
          { week: 1, type: "Лекц", actualDate: "2026-02-02", status: "Ирсэн", value: "1" },
          { week: 1, type: "Семинар", actualDate: "2026-02-04", status: "Ирсэн", value: "1" },
          { week: 2, type: "Лекц", actualDate: "2026-02-09", status: "Ирсэн", value: "1" },
          { week: 2, type: "Семинар", actualDate: "2026-02-11", status: "Тасалсан", value: "0" },
          { week: 3, type: "Лекц", actualDate: "2026-02-16", status: "Ирсэн", value: "1" },
          { week: 3, type: "Семинар", actualDate: "2026-02-18", status: "Ирсэн", value: "1" },
          { week: 4, type: "Лекц", actualDate: "2026-02-23", status: "Ирсэн", value: "1" },
          { week: 4, type: "Семинар", actualDate: "2026-02-25", status: "Ирсэн", value: "1" },
          { week: 5, type: "Лекц", actualDate: "2026-03-02", status: "Тасалсан", value: "0" },
          { week: 5, type: "Семинар", actualDate: "2026-03-04", status: "Ирсэн", value: "1" },
          { week: 6, type: "Лекц", actualDate: "2026-03-09", status: "Ирсэн", value: "1" },
          { week: 6, type: "Семинар", actualDate: "2026-03-11", status: "Ирсэн", value: "1" },
          { week: 7, type: "Лекц", actualDate: "2026-03-16", status: "Ирсэн", value: "1" },
          { week: 7, type: "Семинар", actualDate: "2026-03-18", status: "Ирсэн", value: "1" },
          { week: 8, type: "Лекц", actualDate: "2026-03-23", status: "Ирсэн", value: "1" },
          { week: 9, type: "Лекц", actualDate: "2026-03-30", status: "Ирсэн", value: "1" },
          { week: 10, type: "Лекц", actualDate: "2026-04-06", status: "Ирсэн", value: "1" },
          { week: 10, type: "Семинар", actualDate: "2026-04-08", status: "Тасалсан", value: "0" },
          { week: 11, type: "Лекц", actualDate: "2026-04-13", status: "Ирсэн", value: "1" },
          { week: 12, type: "Лекц", actualDate: "2026-04-20", status: "Ирсэн", value: "1" },
          { week: 13, type: "Лекц", actualDate: "2026-04-27", status: "Ирсэн", value: "1" },
          { week: 14, type: "Лекц", actualDate: "2026-05-04", status: "Тасалсан", value: "0" },
          { week: 15, type: "Лекц", actualDate: "2026-05-11", status: "Ирсэн", value: "1" },
          { week: 16, type: "Лекц", actualDate: "2026-05-18", status: "Ирсэн", value: "1" },
          { week: 16, type: "Семинар", actualDate: "2026-05-20", status: "Тасалсан", value: "0" },
        ]
      },
      {
        id: "s2",
        label: "Даалгавар",
        value: 5,
        max: 10,
        color: "#9C27B0",
        subDetails: [
          { title: "Даалгавар 1", status: "Хийгдсэн", date: "3" },
          { title: "Даалгавар 2", status: "Хийгдсэн", date: "3" },
          { title: "Даалгавар 3", status: "Хийгдсэн", date: "3" },
          { title: "Даалгавар 4", status: "Хийгдсэн", date: "3" },
        ]
      },
      {
        id: "s3",
        label: "Явц",
        value: 20,
        max: 30,
        color: "#2196F3",
        subDetails: [
          { title: "Явц 1", status: "Амжилттай", date: "10/15" },
          { title: "Явц 2", status: "Дундаж", date: "10/15" },
        ]
      },
      {
        id: "s4",
        label: "Бие даалт",
        value: 15,
        max: 20,
        color: "#FF9800",
        subDetails: [
          { title: "Судалгааны ажил", status: "Хүлээгдэж буй", date: "5/10" },
          { title: "Төсөл", status: "Хийгдсэн", date: "10/10" },
        ]
      },
      {
        id: "s5",
        label: "Шалгалт",
        value: 30,
        max: 30,
        color: "#F44336",
        subDetails: [
          { title: "Улирлын шалгалт", status: "Онц", date: "30/30" },
        ]
      },
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
        subDetails: [
          { week: 1, type: "Лекц", actualDate: "2026-02-02", status: "Ирсэн", value: "1" },
          { week: 2, type: "Лаб", actualDate: "2026-02-10", status: "Ирсэн", value: "1" },
          { week: 3, type: "Лекц", actualDate: "2026-02-16", status: "Ирсэн", value: "1" },
          { week: 4, type: "Лаб", actualDate: "2026-02-24", status: "Ирсэн", value: "1" },
          { week: 5, type: "Лекц", actualDate: "2026-03-02", status: "Тасалсан", value: "0" },
          { week: 6, type: "Лаб", actualDate: "2026-03-10", status: "Ирсэн", value: "1" },
          { week: 7, type: "Лекц", actualDate: "2026-03-16", status: "Ирсэн", value: "1" },
          { week: 8, type: "Лаб", actualDate: "2026-03-24", status: "Ирсэн", value: "1" },
          { week: 9, type: "Лекц", actualDate: "2026-03-30", status: "Ирсэн", value: "1" },
          { week: 10, type: "Лаб", actualDate: "2026-04-07", status: "Тасалсан", value: "0" },
          { week: 11, type: "Лекц", actualDate: "2026-04-13", status: "Ирсэн", value: "1" },
          { week: 12, type: "Лаб", actualDate: "2026-04-21", status: "Ирсэн", value: "1" },
          { week: 13, type: "Лекц", actualDate: "2026-04-27", status: "Ирсэн", value: "1" },
          { week: 14, type: "Лаб", actualDate: "2026-05-05", status: "Ирсэн", value: "1" },
          { week: 15, type: "Лекц", actualDate: "2026-05-11", status: "Ирсэн", value: "1" },
          { week: 16, type: "Лаб", actualDate: "2026-05-19", status: "Ирсэн", value: "1" },
        ]
      },
      {
        id: "s2",
        label: "Даалгавар",
        value: 5,
        max: 10,
        color: "#9C27B0",
        subDetails: [
          { title: "Даалгавар 1", status: "Хийгдсэн", date: "1" },
          { title: "Даалгавар 2", status: "Хийгдсэн", date: "1" },
          { title: "Даалгавар 3", status: "Хийгдсэн", date: "1" },
          { title: "Даалгавар 4", status: "Хийгдсэн", date: "1" },
          { title: "Даалгавар 5", status: "Хийгдсэн", date: "1" },
          { title: "Даалгавар 6", status: "Хийгдсэн", date: "1" },

        ]
      },
      {
        id: "s3",
        label: "Явц",
        value: 20,
        max: 30,
        color: "#2196F3",
        subDetails: [
          { title: "Явц 1", status: "Амжилттай", date: "10/15" },
          { title: "Явц 2", status: "Дундаж", date: "10/15" },
        ]
      },
      {
        id: "s4",
        label: "Бие даалт",
        value: 15,
        max: 20,
        color: "#FF9800",
        subDetails: [
          { title: "Судалгааны ажил", status: "Хүлээгдэж буй", date: "15/20" },
          { title: "Төсөл", status: "Хийгдсэн", date: "15/20" },
        ]
      },
      {
        id: "s5",
        label: "Шалгалт",
        value: 30,
        max: 30,
        color: "#F44336",
        subDetails: [
          { title: "Улирлын шалгалт", status: "Онц", date: "30/30" },
        ]
      },
    ]
  },
  {
    id: "py_201",
    name: "Хиймэл оюун ухаан ба машин сургалт",
    teacher: "Н.Анхбаяр",
    credit: 3,
    totalScore: 78,
    scores: [
      { id: "s1", label: "Ирц", value: 10, max: 10, color: "#4CAF50", subDetails: [] },
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
      { id: "s1", label: "Ирц", value: 7, max: 10, color: "#4CAF50", subDetails: [] },
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
      { id: "s1", label: "Ирц", value: 10, max: 10, color: "#4CAF50", subDetails: [] },
    ]
  },
  {
    id: "cyber_402",
    name: "Цахим аюулгүй байдал",
    teacher: "С.Төгөлдөр",
    credit: 3,
    totalScore: 95,
    scores: [
      { id: "s1", label: "Ирц", value: 10, max: 10, color: "#4CAF50", subDetails: [] },
    ]
  },
  {
    id: "res_410",
    name: "Бакалаврын ахисан түвшний төсөл",
    teacher: "Т.Гантөр",
    credit: 2,
    totalScore: 70,
    scores: [
      { id: "s1", label: "Ирц", value: 10, max: 10, color: "#4CAF50", subDetails: [] },
    ]
  }
];

export const WEEKLY_SCHEDULE = {
  day1: [
    { id: "1", lessonId: "math_101", startTime: "08:20", type: "Лекц", room: "712" },
    { id: "2", lessonId: "mobile_301", startTime: "10:00", type: "Лаб", room: "914" },
    { id: "3", lessonId: "py_201", startTime: "11:40", type: "Лекц", room: "809" },
  ],
  day2: [
    { id: "4", lessonId: "swe_401", startTime: "10:00", type: "Лекц", room: "712" },
    { id: "5", lessonId: "net_302", startTime: "11:40", type: "Лаб", room: "912" },
    { id: "6", lessonId: "math_101", startTime: "14:00", type: "Семинар", room: "709" },
  ],
  day3: [
    { id: "7", lessonId: "cyber_402", startTime: "10:00", type: "Лекц", room: "809" },
    { id: "8", lessonId: "res_410", startTime: "11:40", type: "Лекц", room: "712" },
    { id: "9", lessonId: "mobile_301", startTime: "14:00", type: "Лекц", room: "809" },
  ],
  day4: [
    { id: "10", lessonId: "py_201", startTime: "10:00", type: "Лаб", room: "913" },
    { id: "11", lessonId: "swe_401", startTime: "11:40", type: "Семинар", room: "910" },
    { id: "12", lessonId: "net_302", startTime: "14:00", type: "Лекц", room: "712" },
  ],
  day5: [
    { id: "13", lessonId: "cyber_402", startTime: "10:00", type: "Лаб", room: "912" },
    { id: "14", lessonId: "res_410", startTime: "11:40", type: "Семинар", room: "910" },
    { id: "15", lessonId: "mobile_301", startTime: "14:00", type: "Лаб", room: "912" },
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
export const DEGREE_DATA = {
  totalCreditsRequired: 120,
  creditsEarned: 85,
  categories: [
    {
      name: "1-р курс",
      required: 33,
      earned: 33,
      isCompleted: true,
      completedLessons: [
        { code: "MAT101", name: "Инженерийн математик I", credit: 3, semester: "1A" },
        { code: "PHY101", name: "Хэрэглээний физик I", credit: 3, semester: "1A" },
        { code: "ENG101", name: "Англи хэл I", credit: 3, semester: "1A" },
        { code: "MNG101", name: "Монгол хэл бичиг, найруулга зүй", credit: 3, semester: "1A" },
        { code: "DIM101", name: "Гамшгаас хамгаалах менежментийн үндэс", credit: 1, semester: "1A" },
        { code: "CS100", name: "Инженерийн удиртгал", credit: 2, semester: "1A" },
        { code: "MAT102", name: "Инженерийн математик II", credit: 3, semester: "1B" },
        { code: "PHY102", name: "Хэрэглээний физик II", credit: 3, semester: "1B" },
        { code: "ENG102", name: "Англи хэл II", credit: 3, semester: "1B" },
        { code: "CHE101", name: "Ерөнхий хими", credit: 3, semester: "1B" },
        { code: "MNH101", name: "Монголын түүх, соёл, ёс заншил", credit: 3, semester: "1B" },
        { code: "PHE102", name: "Биеийн тамир II", credit: 1, semester: "1B" },
        { code: "SE101", name: "Програмчлалын үндэс", credit: 3, semester: "1B" },
      ],
      remainingLessons: []
    },
    {
      name: "2-р курс",
      required: 29,
      earned: 29,
      isCompleted: true,
      completedLessons: [
        { code: "PHI201", name: "Сэтгэлгээний түүх, соёл", credit: 3, semester: "2A" },
        { code: "SE201", name: "Холбоост өгөгдлийн сангийн систем", credit: 3, semester: "2A" },
        { code: "SE202", name: "Объект хандлагат програмчлал", credit: 3, semester: "2A" },
        { code: "JPN201", name: "Япон хэл I", credit: 2, semester: "2A" },
        { code: "MAT202", name: "Дискрет математик-I", credit: 3, semester: "2A" },
        { code: "HUD201", name: "Хүний хөгжил, харилцааны ёс зүй, эрх зүй", credit: 3, semester: "2B" },
        { code: "SE203", name: "Веб технологи", credit: 3, semester: "2B" },
        { code: "SE302", name: "Инженерчлэлийн асуудлыг шийдвэрлэх нь", credit: 3, semester: "2B" },
        { code: "MAT203", name: "Шугаман алгебр", credit: 3, semester: "2B" },
        { code: "C09.203", name: "Хүн ба компьютерийн харилцааны зохиомж", credit: 3, semester: "2B" },
      ],
      remainingLessons: []
    },
    {
      name: "3-р курс",
      required: 32,
      earned: 16,
      isCompleted: false,
      completedLessons: [
        { code: "SE301", name: "Веб програмчлал", credit: 3, semester: "3A" },
        { code: "B09.302", name: "Үйлдлийн системийн онол", credit: 3, semester: "3A" },
        { code: "C09.404", name: "Програм хангамжийн инженерчлэл", credit: 3, semester: "3A" },
        { code: "MAT201", name: "Инженерийн математик III", credit: 3, semester: "3A" },
        { code: "ENG201", name: "Мэргэжлийн англи хэл", credit: 3, semester: "3A" },
        { code: "SEIN1", name: "Танилцах дадлага", credit: 1, semester: "3A" },
      ],
      remainingLessons: [
        { code: "CS304", name: "Цахим аюулгүй байдал", credit: 3, semester: "3B" },
        { code: "SE304", name: "Програм хангамжийн шаардлагын шинжилгээ", credit: 3, semester: "3B" },
        { code: "CS306", name: "Компьютерийн сүлжээ", credit: 3, semester: "3B" },
        { code: "SE305", name: "Мобайл програмчлал", credit: 3, semester: "3B" },
        { code: "CS305", name: "Хиймэл оюун ухаан ба машин сургалт", credit: 3, semester: "3B" },
        { code: "SEUP1", name: "Бакалаврын ахисан түвшний төсөл I", credit: 1, semester: "3B" },
        { code: "MAT204", name: "Магадлал ба статистик", credit: 3, semester: "3B" },
      ]
    },
    {
      name: "4-р курс",
      required: 26,
      earned: 0,
      isCompleted: false,
      completedLessons: [],
      remainingLessons: [
        { code: "C09.401", name: "Програм хангамжийн төслийн менежмент", credit: 3, semester: "4A" },
        { code: "C09.412", name: "Өгөгдлийн олборлолт", credit: 3, semester: "4A" },
        { code: "C09.403", name: "Өргөн хүрээний системийн хөгжүүлэлт", credit: 3, semester: "4A" },
        { code: "SEUP2", name: "Програм хангамжийн инженерийн төсөл", credit: 2, semester: "4A" },
        { code: "SEIN2", name: "Үйлдвэрлэлийн дадлага", credit: 2, semester: "4A" },
        { code: "SE411", name: "Програм хангамжийн тестчлэл", credit: 3, semester: "4B" },
        { code: "SEUTH", name: "Бакалаврын судалгааны ажил", credit: 5, semester: "4B" },
      ]
    }
  ]
};