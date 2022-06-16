const solution = (data) => {
  console.log("for 두 개");
  const start = new Date().getTime();
  const [col, row] = data.split("");

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
  const end = new Date().getTime();
  console.log(end - start);
};

solution("53");

const answer = (data) => {
  console.log("repeat");
  const start = new Date().getTime();
  const [col, row] = data.split("");

  const asterisk = "*".repeat(col);
  for (let i = 0; i < row; i++) {
    console.log(asterisk);
  }
  const end = new Date().getTime();
  console.log(end - start);
};

answer("53");
