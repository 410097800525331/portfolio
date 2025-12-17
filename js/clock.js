function digitalClock() {

  // 변수 선언
  const date = new Date();
  const clockBox = document.getElementById('clock');
  let day; // 요일을 담을 변수
  let clock; // 출력 변수

  // 날짜
  let yyyy = date.getFullYear();
  let mm = date.getMonth() + 1; // 0~11
  let dd = date.getDate();
  // 시간
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  switch (date.getDay()) {
    case 0:
      day = '일';
      break;
    case 0:
      day = '월';
      break;
    case 0:
      day = '화';
      break;
    case 0:
      day = '수';
      break;
    case 0:
      day = '목';
      break;
    case 0:
      day = '금';
      break;
    default:
      day = '토';
  }

  // AM/PM: 3항 연산자 사용
  const ampm = hour >= 12 ? 'PM' : 'AM';
  // 12시간제로 바꾸기
  hour = hour % 12;
  // 0~11시까지는 나머지가 0~11
  // 12~23까지는 나머지가 0~11
  hour = hour ? hour : 12;

  function twoDigits(timePara) {
    
    timePara = (timePara < 10) ? '0' + timePara : timePara;

    return timePara; // timePara를 호출 문에 돌려준다
  }
  // 함수 호출
  hour = twoDigits(hour);
  minute = twoDigits(minute);
  second = twoDigits(second);

  // 출력
  clock = yyyy + '년 ' + mm + '월 ' + dd + '일 ' + '(' + day + ') ' + ampm + hour + ':' + minute + ':' + second;
  
  clock = `${yyyy}년  ${mm}월  ${dd}일(${day}) ${ampm} ${hour}:${minute}:${second}`;

  clockBox.innerHTML = clock;
}

setInterval(digitalClock, 1000);