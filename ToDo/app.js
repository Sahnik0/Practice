// ---- state ----
const STORE_KEY = "things.todos.v1";
let todos = load();
let filter = "all";

// ---- elements ----
const list = document.getElementById("list");
const form = document.getElementById("composer");
const input = document.getElementById("input");
const empty = document.getElementById("empty");
const foot = document.getElementById("foot");
const countLabel = document.getElementById("countLabel");
const ringFill = document.getElementById("ringFill");
const ringPct = document.getElementById("ringPct");
const filters = document.getElementById("filters");
const clearDone = document.getElementById("clearDone");

const RING_LEN = 2 * Math.PI * 19; // matches r=19 in the SVG

// ---- date in the header ----
document.getElementById("today").textContent =
  new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });

// ---- persistence ----
function load() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) || [];
  } catch {
    return [];
  }
}
function save() {
  localStorage.setItem(STORE_KEY, JSON.stringify(todos));
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

// ---- actions ----
function addTodo(text) {
  todos.unshift({ id: uid(), text, done: false });
  save();
  render();
}

function toggle(id) {
  const t = todos.find((t) => t.id === id);
  if (t) t.done = !t.done;
  save();
  render();
}

function edit(id, text) {
  const t = todos.find((t) => t.id === id);
  const clean = text.trim();
  if (!t) return;
  if (clean) t.text = clean;
  save();
  render();
}

function remove(id, el) {
  el.classList.add("is-leaving");
  el.addEventListener(
    "animationend",
    () => {
      todos = todos.filter((t) => t.id !== id);
      save();
      render();
    },
    { once: true }
  );
}

// ---- view ----
function visible() {
  if (filter === "active") return todos.filter((t) => !t.done);
  if (filter === "done") return todos.filter((t) => t.done);
  return todos;
}

function render() {
  const items = visible();
  list.innerHTML = "";

  for (const t of items) {
    list.appendChild(itemEl(t));
  }

  // empty state: distinguish "no todos at all" from "filter hides them"
  const noneAtAll = todos.length === 0;
  empty.hidden = items.length !== 0;
  if (!empty.hidden) {
    empty.querySelector(".empty__title").textContent = noneAtAll
      ? "Nothing here yet"
      : "All clear in this view";
    empty.querySelector(".empty__sub").textContent = noneAtAll
      ? "Add your first task above and get going."
      : "Switch filters to see your other tasks.";
  }

  // footer + progress
  const left = todos.filter((t) => !t.done).length;
  const done = todos.length - left;
  foot.hidden = todos.length === 0;
  countLabel.textContent = `${left} ${left === 1 ? "task" : "tasks"} left`;

  const pct = todos.length ? Math.round((done / todos.length) * 100) : 0;
  ringFill.style.strokeDashoffset = RING_LEN * (1 - pct / 100);
  ringPct.textContent = `${pct}%`;
}

function itemEl(t) {
  const li = document.createElement("li");
  li.className = "item" + (t.done ? " done" : "");

  const check = document.createElement("button");
  check.className = "check";
  check.setAttribute("aria-label", t.done ? "Mark as not done" : "Mark as done");
  check.innerHTML =
    '<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M4 12.5l5 5L20 6" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  check.addEventListener("click", () => toggle(t.id));

  const text = document.createElement("span");
  text.className = "item__text";
  text.textContent = t.text;
  text.title = "Double-click to edit";
  text.addEventListener("dblclick", () => beginEdit(text, t.id));

  const del = document.createElement("button");
  del.className = "del";
  del.setAttribute("aria-label", "Delete task");
  del.innerHTML =
    '<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M6 7h12M9 7V5h6v2M8 7l1 12h6l1-12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  del.addEventListener("click", () => remove(t.id, li));

  li.append(check, text, del);
  return li;
}

function beginEdit(span, id) {
  span.contentEditable = "true";
  span.focus();
  // place caret at end
  const range = document.createRange();
  range.selectNodeContents(span);
  range.collapse(false);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);

  const finish = () => {
    span.contentEditable = "false";
    edit(id, span.textContent);
  };
  span.addEventListener("blur", finish, { once: true });
  span.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      span.blur();
    }
    if (e.key === "Escape") {
      span.textContent = (todos.find((t) => t.id === id) || {}).text || "";
      span.blur();
    }
  });
}

// ---- events ----
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) {
    input.focus();
    return;
  }
  addTodo(text);
  input.value = "";
  input.focus();
});

filters.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip[data-filter]");
  if (!btn) return;
  filter = btn.dataset.filter;
  document.querySelectorAll(".chip[data-filter]").forEach((c) =>
    c.classList.toggle("is-active", c === btn)
  );
  render();
});

clearDone.addEventListener("click", () => {
  todos = todos.filter((t) => !t.done);
  save();
  render();
});

// ---- go ----
render();
