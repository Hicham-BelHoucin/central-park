import Customer from "../interfaces/customer";
import api from "../api/api";

async function createData() {
  let users = (await api.get("/users")).data as Customer[];

  users = await Promise.all(
    users.map(async (user: Customer) => {
      // CREATE POINTS on random dates
      user.pointsEarned = Array.from({ length: 10 }, (_, index) => {
        return {
          count: Math.floor(Math.random() * 100),
          date: new Date(
            new Date().getTime() -
              Math.floor(Math.random() * 100) * 24 * 60 * 60 * 1000
          ).toISOString(),
        };
      });
      user.pointsRedeemed = Array.from({ length: 10 }, (_, index) => {
        return {
          count: Math.floor(Math.random() * 100),
          date: new Date(
            new Date().getTime() -
              Math.floor(Math.random() * 100) * 24 * 60 * 60 * 1000
          ).toISOString(),
        };
      });

      return user;
    })
  );

  return users;
}

export default createData;
