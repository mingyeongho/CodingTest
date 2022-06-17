const solution = (s) => {
  if (s.length === 4 || s.length === 6) {
    const arr = s.split("");
    for (let i of arr) {
      if (isNaN(i)) return false;
    }
    return true;
  }
  return false;
};

console.log(solution("1e22"));
