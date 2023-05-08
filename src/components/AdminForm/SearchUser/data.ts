import { AuthUser } from "../../../interface/User";

const data = [
  {
    id: 1,
    img:'./default_profile.png',
    username: '김철수',
    email: 'kcheolsoo17@example.com',
    role: 'ADMIN',
    createAt: '2023-01-01',
  },
  {
    id: 2,
    img:'./default_profile.png',
    username: '박영희',
    email: 'parkyounghee@example.com',
    role: 'USER',
    createAt: '2023-01-10',
  },
  {
    id: 3,
    img:'./default_profile.png',
    username: '이민수',
    email: 'leeminsu39@example.com',
    role: 'USER',
    createAt: '2023-01-20',
  },
  {
    id: 4,
    img:'./default_profile.png',
    username: '최지은',
    email: 'choijieun@example.com',
    role: 'ADMIN',
    createAt: '2023-02-01',
  },
  {
    id: 5,
    img:'./profile-img-1.webp',
    username: '장혜진',
    email: 'janghyejin09@example.com',
    role: 'USER',
    createAt: '2023-02-10',
  },
  {
    id: 6,
    img:'./default_profile.png',
    username: '김영수',
    email: 'kimyoungsoo20@example.com',
    role: 'ADMIN',
    createAt: '2023-01-01',
  },
  {
    id: 7,
    img:'./default_profile.png',
    username: '박지영',
    email: 'parkjiyoung@example.com',
    role: 'USER',
    createAt: '2023-01-10',
  },
  {
    id: 8,
    img:'./default_profile.png',
    username: '이수진',
    email: 'leesujin13@example.com',
    role: 'USER',
    createAt: '2023-01-20',
  },
  {
    id: 9,
    img:'./default_profile.png',
    username: '최민재',
    email: 'choiminjae14@example.com',
    role: 'ADMIN',
    createAt: '2023-02-01',
  },
  {
    id: 10,
    img:'./default_profile.png',
    username: '장서윤',
    email: 'jangseoyoon@example.com',
    role: 'USER',
    createAt: '2023-02-10',
  },
];

export const myGetUsers = (): Promise<AuthUser[]> => {
  return new Promise((resolve) => {
    console.log('users requested');
    setTimeout(() => {

      resolve(data);
      console.log('request has been responded')
    }, 2000);
  });
};

interface updateRoleData {
  auth: string
  userId: number
  newRole: string
}

export const updateRole = ({auth, userId, newRole}: updateRoleData): Promise<AuthUser> => {
  return new Promise((resolve, reject) => {
    console.log('updateRole requested');

    // 1. auth가 "ADMIN"이 아닌 경우 오류를 발생시킵니다.
    if (auth !== "ADMIN") {
      reject("Error: You don't have permission to update the role.");
      return;
    }

    setTimeout(() => {
      // 2. userId를 사용하여 데이터에서 해당 ID를 찾습니다.
      const userIndex = data.findIndex((user) => user.id === userId);

      // 4. userId가 데이터에 없으면 오류를 발생시킵니다.
      if (userIndex === -1) {
        reject("Error: User not found.");
        return;
      }

      // 3. newRole을 사용하여 찾은 사용자의 역할을 변경합니다.
      const targetUser = data[userIndex]
      targetUser.role = newRole;

      resolve(targetUser);
      console.log('update has been completed');
    }, 2000);
  });
};
