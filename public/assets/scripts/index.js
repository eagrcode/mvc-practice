const form = document.getElementById("form");

function createTaskItem(formData) {
  const ul = document.getElementById("task-list");

  const li = document.createElement("li");

  li.textContent = `${formData["title"]}: ${formData["description"]}`;
  ul.appendChild(li);
}

async function postFormData(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: formData.get("title"),
      description: formData.get("description"),
    }),
  };

  const result = await fetch("http://localhost:3000/tasks", options);

  if (result.status == 201) {
    window.location.reload();
  }
}

async function loadTasks() {
  const response = await fetch("http://localhost:3000/tasks");

  if (response.status == 200) {
    const tasks = await response.json();

    tasks.forEach((p) => {
      createTaskItem(p);
    });
  } else return;
}

loadTasks();

// async function getTasks() {
//   // Reach out to the API
//   const response = await fetch("http://localhost:3000/tasks");

//   // Extract the quotes data from the response
//   const tasks = await response.json();

//   // Return the data
//   return tasks;
// }

// async function displayQuote(e) {
//   e.preventDefault();
//   const tasks = await getTasks();

//   console.log(tasks);

//   const task = {
//     title: title.value,
//     description: description.value,
//   };

//   console.log(task);

//   const ul = document.getElementById("task-list");
//   const li = document.createElement("li");

//   li.textContent = `${task.title}: ${task.description}`;
//   ul.appendChild(li);
// }

form.addEventListener("submit", postFormData);
