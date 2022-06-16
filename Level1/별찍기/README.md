문제. https://programmers.co.kr/learn/courses/30/lessons/12969?language=javascript

1. 문제 지문에 대한 나의 해석(<- 중요함)

   - data를 row와 col로 나눈다.
   - for문을 돌리며 \*을 찍는다.

2. 그 해석에 따른 풀이 방법 고안 및 적용(<- 중요함)

   - data: string 을 split을 사용해서 row와 col로 나눈다.
   - 두 개의 for문을 돌리면서 /\*을 찍는다.
   - console.log는 개행을 하므로 process.stdout.write을 사용한다.

3. 2번의 풀이 방법에 따른 해당 코드 구현부(코드와 풀이 방법 연결)

   - solution.js 참고

4. 해당 풀이의 적절성(효율성) 고찰(<- 중요함) & 다른 사람의 풀이(코드)와 비교

   - for문 두 개 돌리는 경우와 repeat 함수 사용하는 경우를 비교했을 때 repeat이 더 짧은 시간이 소요된다.
   - <img width="93" alt="image" src="https://user-images.githubusercontent.com/57670160/174066002-44cb40fe-ab3d-4fb7-b278-5addcbcd820c.png">
   - repeat 함수를 알았음.

5. 고쳐야 할 것 및 반성할 것(기타 등등 메모) (<- 옵션)
