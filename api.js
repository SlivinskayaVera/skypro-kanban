const API_URL_TASKS = "https://wedev-api.sky.pro/api/kanban";
const API_URL_USERS = "https://wedev-api.sky.pro/api/user";

export async function registration({ name, login, password }) {
  const response = await fetch(API_URL_USERS, {
    method: "POST",
    body: JSON.stringify({
      name,
      login,
      password,
    }),
  });

  if (response.status === 400) {
    throw new Error("Пользователь с таким логином уже существует");
  }

  const data = await response.json();
  const token = await data.user.token;
  return token;
}

export async function loginInApp({ login, password }) {
  const response = await fetch(`${API_URL_USERS}/login`, {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  const userData = await data.user;
  return userData;
}

export async function getTasks({ setCards }) {
  const token = localStorage.getItem("token");

  const response = await fetch(API_URL_TASKS, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  setCards(data.tasks);
  return data.tasks;
}

export async function addTasks({ setCards }) {
  const token = localStorage.getItem("token");

  const response = await fetch(API_URL_TASKS, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: "Новая задача 4!",
      topic: "Web Design",
      status: "Нужно сделать",
      description: "Подробное описание задачи",
      date: "2024-01-19T16:26:18.179Z",
    }),
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const taskList = await response.json();
  setCards(taskList.tasks);
  return taskList.tasks;
}
