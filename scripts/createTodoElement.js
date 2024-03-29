/**
 * A single Todo item we will
 * store.
 *
 * @typedef {{
 * id: number,
 * title: string,
 * isComplete: boolean,
 * createdAt: Date,
 * updatedAt: Date,
 * }} Todo
 */
/**
 * Takes a Todo Item and generates a HTML Element for that Todo
 * You are free to make wathever HTLM you feel necessary,
 * But it should be semantically meaningful and
 * look decent
 *
 * @param {Todo} data
 * @returns {HTMLElement}
 */

/* ------------------- Create HTML Element With Attributes ------------------ */
function createNode(node, attributes) {
  const el = document.createElement(node);
  for (let key in attributes) {
    el.setAttribute(key, attributes[key]);
  }
  return el;
}

/* -------------------------- Create Html Template -------------------------- */
export function createTodoElement(data) {
  const wrapper = createNode("li", {});

  const divTodo = createNode("div", {
    class: "todo-item flex",
  });

  const completeBtn = createNode("button", {
    class: "complete-btn",
    name: "complete",
    value: data.id,
    title: "check/uncheck",
  });
  if (data.isComplete === true) {
    completeBtn.innerHTML = "<i class='fa fa-check-square'></i>";
  } else {
    completeBtn.innerHTML = "<i class='fa fa-square'></i>";
  }

  divTodo.appendChild(completeBtn);

  const title = createNode("input", {
    id: `input-${data.id}`,
    type: "text",
    value: data.title,
    class: "update-title-input",
    disabled: "",
  });
  title.innerText = data.title;
  divTodo.appendChild(title);

  /* -------------------------------------------------------------------------- */
  const editBtn = createNode("button", {
    class: "edit-btn",
    name: "edit",
    value: data.id,
    title: "Edit",
  });
  editBtn.innerHTML = "<i class='fa fa-edit'></i>";
  divTodo.appendChild(editBtn);

  const saveBtn = createNode("button", {
    class: "save-btn",
    name: "save",
    value: data.id,
    title: "Save",
  });
  saveBtn.innerHTML = "<i class='fa fa-save'></i>";
  divTodo.appendChild(saveBtn);

  /* -------------------------------------------------------------------------- */
  const deleteBtn = createNode("button", {
    class: "trash-btn",
    name: "delete",
    value: data.id,
    title: "Delete",
  });
  deleteBtn.innerHTML = "<i class='fa fa-trash'></i>";
  divTodo.appendChild(deleteBtn);

  wrapper.appendChild(divTodo);

  const divInfo = createNode("div", {
    class: "addInfo flex",
  });

  if (data.editedAt !== "" && data.editedAt !== undefined) {
    const pEdited = createNode("p", {});
    pEdited.innerText = "Edited at: ";

    const editedAt = createNode("span", {});
    editedAt.innerText = data.editedAt;
    pEdited.appendChild(editedAt);

    divInfo.appendChild(pEdited);
  }

  const pCreated = createNode("p", {});
  pCreated.innerText = "Created at: ";

  const createdAt = createNode("span", {});
  createdAt.innerText = data.createdAt;
  pCreated.appendChild(createdAt);

  divInfo.appendChild(pCreated);

  wrapper.appendChild(divInfo);

  if (data.isComplete) {
    const isComplete = wrapper.querySelector(".update-title-input");
    isComplete.classList.add("complete");
  }

  return wrapper;
}
