// 예제문제 2
const user = {
    name: "이지은",
    age: 30,
    job: "가수",
    address: {
      city: "서울",
      district: "강남구"
    }
  };
  
// 1
  const {name, age, job, address} = user;
  const { city, district } = user.address;
  let name2 = user.name = "이지은";
  let age2 = user.age = 30;
  let job2 = user.job = "가수";
  console.log(user);

// 2
  let city2 = user.address.city;
  let district2 = user.address.district;