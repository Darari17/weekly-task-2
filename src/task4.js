const sortNumbers = (n) => {
  const str = String(n).split("0");
  const result = [];
  for (const x in str) {
    result.push(
      str[x]
        .split("")
        .sort((a, b) => a - b)
        .join("")
    );
  }
  console.log(parseInt(result.join("")));
};

sortNumbers(5956560159466056);
