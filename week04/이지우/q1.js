const student = {
    name: "홍길동",
    age: 20,
    isGraduated: false,
    subjects: ["수학", "영어", "과학"],
    address: {
      city: "서울",
      street: "강남구 역삼동"
    },
    getStudentInfo: function() {
      return `${this.name}은(는) ${this.age}세이고, ${this.address.city}에 살고 있습니다.`;
    },
    addSubject: function(subject) {
      this.subjects.push(subject);
    }
  };

  // 문제 1
  console.log(student.name);
  console.log(student.isGraduated);
  console.log(student.subjects[1]);
  console.log(student.address.city);

  // 문제 2
  console.log(student.getStudentInfo());
  // 홍길동은(는) 20세이고, 서울에 살고 있습니다.

  // 문제 3
  // #1
    student.age = 21
  // #2
    student.subjects.push("컴퓨터");
  // #3
    console.log(student.subjects);

  // 문제 4
    student.address.street = "서초구 반포봉"
    console.log(student.address.street);
