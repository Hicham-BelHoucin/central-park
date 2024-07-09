interface Transaction {
  id: number;
  pointsEarned: number;
  pointsRedeemed: number;
  userId: number;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export default Transaction;
