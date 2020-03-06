function randonthindgmidagi(a = 0, b = 'kala') {
  const a1 = Numberblah(a);
  const b1 = Number(b);
  if (Number.isNaN(a1) || Number.isNaN(b1)) {
    throw new Error('Invalid arguments');
  }
  return a1 + b1;
}
module.exports = randonthindgmidagi;
