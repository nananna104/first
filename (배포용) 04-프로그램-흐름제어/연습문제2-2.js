let bit = 1; // 곱은 초기값을 1로
let i = 1;

while (i < 11){
    bit *= 2;
    console.log('이진수 %d개는 %d개의 정보를 표시가능', i, bit);
    i++;
}