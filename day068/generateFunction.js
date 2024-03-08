// 제너레이터 함수 정의
// function* (제너레이터 함수 이름)() {
//   yield (값) - 첫 번쩨 중단점 (반복문의 continue);
//   yield (값) - 두 번쩨 중단점 (반복문의 continue);
// 목적은 함수 내의 로직을 순차적으로 실행하면서 중간에 값을 반환하는 것

const gen = function* () {
	console.log("first");
	yield 1;
	console.log("second");
	yield 2;
	console.log("third");
	yield 3;
};

const display = gen();

display.next();
