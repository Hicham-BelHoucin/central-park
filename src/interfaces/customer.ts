import Transaction from "./transaction";

interface Customer {
  id: number;
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  transactions: Transaction[];
  pointsEarned: Points[];
  pointsRedeemed: Points[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Points {
  count: number;
  date: string;
}

export default Customer;
