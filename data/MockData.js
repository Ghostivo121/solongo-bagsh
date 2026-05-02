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

export const Lesson = [
  {
    title: "I. ЕРӨНХИЙ СУУРЬ ХИЧЭЭЛҮҮД",
    sections: [
      {
        type: "Заавал судлах хичээл",
        semesters: [
          { season: "Намар", lessons: [{ code: "MAT101", name: "Инженерийн математик I", year: "1-р курс" }, { code: "PHY101", name: "Хэрэглээний физик I", year: "1-р курс" }, { code: "ENG101", name: "Англи хэл I", year: "1-р курс" }, { code: "JPN201", name: "Япон хэл I", year: "2-р курс" }, { code: "MNH101", name: "Монголын түүх, соёл, ёс заншил", year: "1-р курс" }, { code: "MNG101", name: "Монгол хэл бичиг, найруулга зүй", year: "1-р курс" }, { code: "ECO201", name: "Эдийн засгийн үндэс", year: "2-р курс" }, { code: "DIM101", name: "Гамшгаас хамгаалах менежментийн үндэс", year: "1-р курс" }, { code: "PHE101", name: "Биеийн тамир I", year: "1-р курс" }] },
          { season: "Хавар", lessons: [{ code: "MAT102", name: "Инженерийн математик II", year: "1-р курс" }, { code: "ENG102", name: "Англи хэл II", year: "1-р курс" }, { code: "PHE102", name: "Биеийн тамир II", year: "1-р курс" }, { code: "CS101", name: "Компьютерын ухааны удиртгал", year: "1-р курс" }] }
        ]
      },
      {
        type: "Сонгон судлах хичээл",
        semesters: [
          { season: "Намар", lessons: [{ code: "POL201", name: "Улс төр судлалын үндэс", year: "2-р курс" }, { code: "MAN201", name: "Менежментийн үндэс", year: "2-р курс" }, { code: "ENG103", name: "Англи хэл III", year: "1-р курс" }, { code: "CHE100", name: "Ерөнхий хими", year: "1-р курс" }] },
          { season: "Хавар", lessons: [{ code: "JPN202", name: "Япон хэл II", year: "2-р курс" }, { code: "EDU102", name: "Сэтгэл судлалын үндэс", year: "1-р курс" }, { code: "EDU310", name: "Тогтвортой хөгжлийн боловсрол", year: "3-р курс" }, { code: "PHY102", name: "Хэрэглээний физик II", year: "1-р курс" }, { code: "PEC100", name: "Өгөгдлийн шинжилгээ", year: "1-р курс" }] }
        ]
      }
    ]
  },
  {
    title: "II. МЭРГЭЖЛИЙН СУУРЬ ХИЧЭЭЛҮҮД",
    sections: [
      {
        type: "Заавал судлах хичээл",
        semesters: [
          { season: "Намар", lessons: [{ code: "CS201", name: "Өгөгдлийн бүтэц ба алгоритм", year: "2-р курс" }, { code: "ENG201", name: "Мэргэжлийн англи хэл", year: "2-р курс" }, { code: "SE201", name: "Өгөгдлийн сангийн систем", year: "2-р курс" }, { code: "SE202", name: "Объект хандалтат програмчлал", year: "2-р курс" }, { code: "MAT201", name: "Инженерийн математик III", year: "2-р курс" }] },
          { season: "Хавар", lessons: [{ code: "SE101", name: "Програмчлалын үндэс", year: "1-р курс" }, { code: "MAT205", name: "Магадлалын онол ба статистик", year: "2-р курс" }] }
        ]
      },
      {
        type: "Сонгон судлах хичээл",
        semesters: [
          { season: "Намар", lessons: [{ code: "MAT202", name: "Дискрет математик I", year: "2-р курс" }, { code: "MAT203", name: "Шугаман алгебр I", year: "2-р курс" }, { code: "CS302", name: "Компьютерийн архитектур ба зох.байг", year: "3-р курс" }, { code: "MEC203", name: "ХАБЭА", year: "2-р курс" }, { code: "CHE201", name: "Биологи", year: "2-р курс" }, { code: "CS203", name: "Криптографийн үндэс", year: "2-р курс" }] },
          { season: "Хавар", lessons: [{ code: "EEE201", name: "Цахилгааны хэлхээний онол I", year: "2-р курс" }, { code: "ARC201", name: "Дүрслэх геометр", year: "2-р курс" }, { code: "EEE203", name: "Хэлхээ ба электроник", year: "2-р курс" }] }
        ]
      }
    ]
  },
  {
    title: "III. МЭРГЭШҮҮЛЭХ ХИЧЭЭЛҮҮД",
    sections: [
      {
        type: "Заавал судлах хичээл",
        semesters: [
          { season: "Намар", lessons: [{ code: "SE301", name: "Веб програмчлал", year: "3-р курс" }, { code: "CS301", name: "Үйлдлийн системийн онол", year: "3-р курс" }, { code: "SEUP1", name: "Бакалаврын ахисан түвшний төсөл I", year: "Төсөл" }] },
          { season: "Хавар", lessons: [{ code: "SE203", name: "Веб технологи", year: "2-р курс" }, { code: "CS202", name: "Хүн ба компьютерийн харилцааны технологи", year: "2-р курс" }, { code: "SE302", name: "Инженерчлэлийн асуудлыг шийдвэрлэх нь", year: "3-р курс" }, { code: "SE303", name: "Програм хангамжийн инженерчлэл", year: "3-р курс" }, { code: "SE304", name: "Програм хангамжийн шаардлагын шинжилгээ", year: "3-р курс" }, { code: "SE305", name: "Мобайл програмчлал", year: "3-р курс" }, { code: "CS305", name: "Машин сургалт I", year: "3-р курс" }, { code: "CS306", name: "Компьютерийн сүлжээ", year: "3-р курс" }, { code: "CS304", name: "Цахим аюулгүй байдал", year: "3-р курс" }, { code: "SEUP2", name: "Бакалаврын ахисан түвшний төсөл II", year: "Төсөл" }] }
        ]
      },
      {
        type: "Сонгон судлах хичээл",
        semesters: [
          { season: "Намар", lessons: [{ code: "SE402", name: "Өргөн хүрээний системийн хөгжүүлэлт", year: "4-р курс" }, { code: "CS401", name: "Өгөгдлийн олборлолт", year: "4-р курс" }, { code: "CS402", name: "Машин сургалт II", year: "4-р курс" }, { code: "SE401", name: "Програм хангамжийн төслийн менежмент", year: "4-р курс" }, { code: "CS406", name: "Зураг боловсруулалт", year: "4-р курс" }, { code: "CS408", name: "Үүлэн програмчлал", year: "4-р курс" }, { code: "CS410", name: "Хөрвүүлэгч / Компилятор", year: "4-р курс" }, { code: "DS309", name: "Өгөгдлийн дүрслэл", year: "3-р курс" }, { code: "CS325", name: "Паралель програмчлал", year: "3-р курс" }, { code: "DS311", name: "Их өгөгдлийн шинжилгээ", year: "3-р курс" }, { code: "DS309_2", name: "Өгөгдлийн аюулгүй байдал", year: "3-р курс" }, { code: "SEIN1", name: "Танилцах дадлага", year: "Дадлага" }] },
          { season: "Хавар", lessons: [{ code: "SE411", name: "Програм хангамжийн тестчилэл", year: "4-р курс" }, { code: "CS405", name: "Яриа боловсруулалт", year: "4-р курс" }, { code: "CS407", name: "Машин сургалт болон дүрс таних", year: "4-р курс" }, { code: "CS409", name: "Програмчлалын хэлүүд", year: "4-р курс" }, { code: "CS403", name: "Зүйлсийн интернетийн үндэс", year: "4-р курс" }, { code: "CS303", name: "Алгоритмын шинжилгээ", year: "3-р курс" }, { code: "DS310", name: "Их өгөгдлийн сан бүтэц", year: "3-р курс" }, { code: "SEIN2", name: "Үйлдвэрлэлийн дадлага", year: "Дадлага" }, { code: "SEDTH", name: "Бакалаврын судалгааны ажил", year: "Төгсөлт" }] }
        ]
      }
    ]
  }
];

export const MyProgress = {
  totalCreditsRequired: 130,
  creditsEarned: 88,
  categories: [
    {
      name: "1-р курс",
      required: 34, earned: 34, isCompleted: true,
      completedLessons: [
        { code: "MAT101", name: "Инженерийн математик I", credit: 3, semester: "Намар" },
        { code: "PHY101", name: "Хэрэглээний физик I", credit: 3, semester: "Намар" },
        { code: "ENG101", name: "Англи хэл I", credit: 3, semester: "Намар" },
        { code: "MNH101", name: "Монголын түүх, соёл, ёс заншил", credit: 3, semester: "Намар" },
        { code: "MNG101", name: "Монгол хэл бичиг, найруулга зүй", credit: 3, semester: "Намар" },
        { code: "DIM101", name: "Гамшгаас хамгаалах менежментийн үндэс", credit: 1, semester: "Намар" },
        { code: "PHE101", name: "Биеийн тамир I", credit: 1, semester: "Намар" },
        { code: "ENG103", name: "Англи хэл III", credit: 3, semester: "Намар" },
        { code: "CHE100", name: "Ерөнхий хими", credit: 3, semester: "Намар" },
        { code: "MAT102", name: "Инженерийн математик II", credit: 3, semester: "Хавар" },
        { code: "ENG102", name: "Англи хэл II", credit: 3, semester: "Хавар" },
        { code: "PHE102", name: "Биеийн тамир II", credit: 1, semester: "Хавар" },
        { code: "CS101", name: "Компьютерын ухааны удиртгал", credit: 3, semester: "Хавар" },
        { code: "SE101", name: "Програмчлалын үндэс", credit: 3, semester: "Хавар" },
        { code: "EDU102", name: "Сэтгэл судлалын үндэс", credit: 3, semester: "Хавар" },
        { code: "PHY102", name: "Хэрэглээний физик II", credit: 3, semester: "Хавар" },
        { code: "PEC100", name: "Өгөгдлийн шинжилгээ", credit: 3, semester: "Хавар" },
      ],
      remainingLessons: []
    },
    {
      name: "2-р курс",
      required: 36, earned: 36, isCompleted: true,
      completedLessons: [
        { code: "JPN201", name: "Япон хэл I", credit: 2, semester: "Намар" },
        { code: "ECO201", name: "Эдийн засгийн үндэс", credit: 3, semester: "Намар" },
        { code: "POL201", name: "Улс төр судлалын үндэс", credit: 3, semester: "Намар" },
        { code: "MAN201", name: "Менежментийн үндэс", credit: 3, semester: "Намар" },
        { code: "CS201", name: "Өгөгдлийн бүтэц ба алгоритм", credit: 3, semester: "Намар" },
        { code: "ENG201", name: "Мэргэжлийн англи хэл", credit: 3, semester: "Намар" },
        { code: "SE201", name: "Өгөгдлийн сангийн систем", credit: 3, semester: "Намар" },
        { code: "SE202", name: "Объект хандалтат програмчлал", credit: 3, semester: "Намар" },
        { code: "MAT201", name: "Инженерийн математик III", credit: 3, semester: "Намар" },
        { code: "MAT202", name: "Дискрет математик I", credit: 3, semester: "Намар" },
        { code: "MAT203", name: "Шугаман алгебр I", credit: 3, semester: "Намар" },
        { code: "MEC203", name: "ХАБЭА", credit: 3, semester: "Намар" },
        { code: "CHE201", name: "Биологи", credit: 3, semester: "Намар" },
        { code: "CS203", name: "Криптографийн үндэс", credit: 3, semester: "Намар" },
        { code: "JPN202", name: "Япон хэл II", credit: 2, semester: "Хавар" },
        { code: "MAT205", name: "Магадлал ба статистик", credit: 3, semester: "Хавар" },
        { code: "EEE201", name: "Цахилгааны хэлхээний онол I", credit: 3, semester: "Хавар" },
        { code: "ARC201", name: "Дүрслэх геометр", credit: 3, semester: "Хавар" },
        { code: "EEE203", name: "Хэлхээ ба электроник", credit: 3, semester: "Хавар" },
        { code: "SE203", name: "Веб технологи", credit: 3, semester: "Хавар" },
        { code: "CS202", name: "Хүн ба компьютерийн харилцааны технологи", credit: 3, semester: "Хавар" },
      ],
      remainingLessons: []
    },
    {
      name: "3-р курс",
      required: 34, earned: 18, isCompleted: false, // Намар үзсэн, Хавар үзээгүй
      completedLessons: [
        { code: "CS302", name: "Компьютерийн архитектур ба зох.байг", credit: 3, semester: "Намар" },
        { code: "SE301", name: "Веб програмчлал", credit: 3, semester: "Намар" },
        { code: "CS301", name: "Үйлдлийн системийн онол", credit: 3, semester: "Намар" },
        { code: "SEUP1", name: "Бакалаврын ахисан түвшний төсөл I", credit: 1, semester: "Намар" },
        { code: "DS309", name: "Өгөгдлийн дүрслэл", credit: 3, semester: "Намар" },
        { code: "CS325", name: "Паралель програмчлал", credit: 3, semester: "Намар" },
        { code: "DS311", name: "Их өгөгдлийн шинжилгээ", credit: 3, semester: "Намар" },
        { code: "DS309_2", name: "Өгөгдлийн аюулгүй байдал", credit: 3, semester: "Намар" },
        { code: "SEIN1", name: "Танилцах дадлага", credit: 1, semester: "Намар" },
      ],
      remainingLessons: [
        { code: "EDU310", name: "Тогтвортой хөгжлийн боловсрол", credit: 3, semester: "Хавар" },
        { code: "SE302", name: "Инженерчлэлийн асуудлыг шийдвэрлэх нь", credit: 3, semester: "Хавар" },
        { code: "SE303", name: "Програм хангамжийн инженерчлэл", credit: 3, semester: "Хавар" },
        { code: "SE304", name: "Шаардлагын шинжилгээ", credit: 3, semester: "Хавар" },
        { code: "SE305", name: "Мобайл програмчлал", credit: 3, semester: "Хавар" },
        { code: "CS305", name: "Машин сургалт I", credit: 3, semester: "Хавар" },
        { code: "CS306", name: "Компьютерийн сүлжээ", credit: 3, semester: "Хавар" },
        { code: "CS304", name: "Цахим аюулгүй байдал", credit: 3, semester: "Хавар" },
        { code: "SEUP2", name: "Бакалаврын ахисан түвшний төсөл II", credit: 2, semester: "Хавар" },
        { code: "CS303", name: "Алгоритмын шинжилгээ", credit: 3, semester: "Хавар" },
        { code: "DS310", name: "Их өгөгдлийн сан бүтэц", credit: 3, semester: "Хавар" },
      ]
    },
    {
      name: "4-р курс",
      required: 26, earned: 0, isCompleted: false,
      completedLessons: [],
      remainingLessons: [
        { code: "SE402", name: "Өргөн хүрээний системийн хөгжүүлэлт", credit: 3, semester: "Намар" },
        { code: "CS401", name: "Өгөгдлийн олборлолт", credit: 3, semester: "Намар" },
        { code: "CS402", name: "Машин сургалт II", credit: 3, semester: "Намар" },
        { code: "SE401", name: "Програм хангамжийн төслийн менежмент", credit: 3, semester: "Намар" },
        { code: "CS406", name: "Зураг боловсруулалт", credit: 3, semester: "Намар" },
        { code: "CS408", name: "Үүлэн програмчлал", credit: 3, semester: "Намар" },
        { code: "CS410", name: "Хөрвүүлэгч / Компилятор", credit: 3, semester: "Намар" },
        { code: "SE411", name: "Програм хангамжийн тестчилэл", credit: 3, semester: "Хавар" },
        { code: "CS405", name: "Яриа боловсруулалт", credit: 3, semester: "Хавар" },
        { code: "CS407", name: "Машин сургалт болон дүрс таних", credit: 3, semester: "Хавар" },
        { code: "CS409", name: "Програмчлалын хэлүүд", credit: 3, semester: "Хавар" },
        { code: "CS403", name: "Зүйлсийн интернетийн үндэс", credit: 3, semester: "Хавар" },
        { code: "SEIN2", name: "Үйлдвэрлэлийн дадлага", credit: 2, semester: "Хавар" },
        { code: "SEDTH", name: "Бакалаврын судалгааны ажил", credit: 5, semester: "Хавар" },
      ]
    }
  ]
};