export async function registration({ name, login, password }) {
  const response = await fetch("https://wedev-api.sky.pro/api/user", {
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
  const response = await fetch("https://wedev-api.sky.pro/api/user/login", {
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

  const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const taskList = await response.json();
  setCards(taskList.tasks);
  return taskList.tasks;
}

export async function addTasks({ setCards }) {
  const token = localStorage.getItem("token");

  const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: "Новая задача 3!",
      topic: "Web Design",
      status: "Тестирование",
      description: "Подробное описание задачи",
      date: "2024-01-07T16:26:18.179Z",
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
