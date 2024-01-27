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
  const userData = await data.user;
  return userData;
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

export async function addTasks({
  setCards,
  token,
  dataTask,
  selectedDay,
}) {

  const response = await fetch(API_URL_TASKS, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: dataTask.nameTask,
      topic: dataTask.topic,
      status: "Без статуса",
      description: dataTask.description,
      date: selectedDay,
    }),
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  setCards(data.tasks);
  return data.tasks;
}

export async function delTasks({ setCards, id, token }) {
  const response = await fetch(`${API_URL_TASKS}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  setCards(data.tasks);
  return data.tasks;
}

export async function editTasks({ setCards, id, token, newDataTask }) {
  const response = await fetch(`${API_URL_TASKS}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: newDataTask.title,
      topic: newDataTask.topic,
      status: newDataTask.status,
      description: newDataTask.description,
      date: newDataTask.date,
    }),
    method: "PUT",
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  setCards(data.tasks);
  return data.tasks;
}
