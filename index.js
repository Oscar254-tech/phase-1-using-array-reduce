//const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const batteryBatches = [
  { batch: 1, amount: 5 },
  { batch: 2, amount: 8 },
  { batch: 3, amount: 12 },
  { batch: 4, amount: 6 },
];

const totalBatteries = batteryBatches.reduce((accumulator, currentBatch) => {
  return accumulator + currentBatch.amount;
}, 0); // The '0' is the initial value of the accumulator