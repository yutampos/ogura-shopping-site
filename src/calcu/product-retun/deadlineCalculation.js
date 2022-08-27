export const deadlineCalcu = (num) => {
  const date = new Date(num.replace(/-/g, "/")); // safariだと「-」区切りの日付型に対応していないためinvalid data（無効な日付）となる。そのため「/」区切りにしてあげる必要がある。
  console.log(date);
  return date.setDate(date.getDate() + 30);
};
