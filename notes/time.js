// Unix Epoch - January 1st 1970 00:00:00
// 0 means the above point of time.


// How to get dates and time using Unix Epoch
// const now = new Date();
// const timeStamp = now.getTime();
// const myDate = new Date(timeStamp); 
// console.log(myDate.getFullYear());

// How to get dates and time
// const now = new Date();
// console.log(now.toString());
// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day: ${now.getDate()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minutes: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);

// const birthday = new Date('January 12 1985 00:00:00');
// const wedding = new Date('August 1 2022 09:00:00');
// const today = new Date()
// const birthdayTimestamp = birthday.getTime();
// const weddingTimestamp = wedding.getTime()
// const todayTimestamp = today.getTime();
// //console.log(myBirthday.toString());


// const printFirstEvent = (event1, event2) => {
//     event1 > event2 ? console.log(event2.toString()) : console.log(event1.toString())
// }

// printFirstEvent(birthday, wedding);
// printFirstEvent(today, wedding);

// // **********   how to use moment.js ********  //


// const now = moment();
// console.log(now.toString());
// const year2021 = now.add(20, 'year');
// // I can format in user friendly way using .format()
// console.log(year2021.format("MMMM Do, YYYY")); 
// console.log(now.fromNow());
// const nowTimestamp = now.valueOf();
// console.log(moment(nowTimestamp).format());

//challenge #75
// 1. create a new moment
// 2. set the month, day and year to your birthday
// 3. use format to print it in the following way: Jan 6, 1991

// const chiBD = moment('1985-01-12');
// console.log(chiBD.format("MMM D, YYYY"));




// challenge #74
// 1. Create two dates in the past (use string for Date)
// 2. Get timestamps for both
// 3. Figure out which is first and print its time (use toString)


