const BASEURL = "https://fitnesstrac-kr.herokuapp.com/api";

export async function registerPerson(event) {
  const registerUsername = event.target[0].value;
  const registerPassword = event.target[1].value;
  try {
    const response = await fetch(`${BASEURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: registerUsername,
        password: registerPassword,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function confirmLogin(loginUsername, loginPassword) {
  try {
    const response = await fetch(`${BASEURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: loginUsername,
        password: loginPassword,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getProfile(token) {
  const response = await fetch(`${BASEURL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
}

export async function getRoutines() {
  const response = await fetch(`${BASEURL}/routines`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
}

export async function newRoutine(token, name, goal) {
  const response = await fetch(`${BASEURL}/routines`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      goal: goal,
      isPublic: true,
    }),
  });
  const result = await response.json();
  return result;
}

export async function getActivities() {
  const response = await fetch(`${BASEURL}/activities`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
}

export async function newActivity(token, name, description) {
  const response = await fetch(`${BASEURL}/activities`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      description: description,
    }),
  });
  const result = await response.json();
  return result;
}

export async function getUserRoutines(username, token) {
  const response = await fetch(`${BASEURL}/users/${username}/routines`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
}

export async function deleteRoutine(routineId, token) {
  const response = await fetch(`${BASEURL}/routines/${routineId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
}

export async function editRoutine(routineId, token, name, goal) {
  const response = await fetch(`${BASEURL}/routines/${routineId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      goal: goal,
    }),
  });
  const result = await response.json();
  return result;
}

export async function attachActivity(
  routineId,
  activityId,
  count = 0,
  duration = 0
) {
  const response = await fetch(`${BASEURL}/routines/${routineId}/activities`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      activityId: activityId,
      count: count,
      duration: duration,
    }),
  });
  const result = await response.json();
  return result;
}

export async function removeActivity(routineActivityId, token) {
  const response = await fetch(
    `${BASEURL}/routine_activities/${routineActivityId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const result = await response.json();
  return result;
}

export async function editActivity(routineActivityId, token, duration, count) {
  const response = await fetch(
    `${BASEURL}/routine_activities/${routineActivityId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        count: count,
        duration: duration,
      }),
    }
  );
  const result = await response.json();
  return result;
}
