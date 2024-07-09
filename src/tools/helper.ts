import { Points } from "../interfaces/customer";

const filterPointsByDate = (points: Points[], days: number) => {
  if (!points) return [];
  const today = new Date().getTime();
  return points.filter((points) => {
    const pointsDate = new Date(points.date).getTime();
    const timeDifference = today - pointsDate;
    return timeDifference <= days * 24 * 60 * 60 * 1000;
  });
};

// Function to calculate total points
const calculateTotalPoints = (points: Points[]) => {
  return points.reduce((total, point) => total + point.count, 0);
};

function calculatePercentage(value: number, total: number) {
  if (total === 0) {
    return 0;
  }
  let percentage = (value / total) * 100;
  return Math.max(0, Math.min(percentage, 100)).toFixed(2);
}

export { filterPointsByDate, calculateTotalPoints, calculatePercentage };
