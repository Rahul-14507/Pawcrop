import { site, isTodo } from "../content/site";

interface TodoItem {
  path: string;
  message: string;
}

function findTodos(obj: Record<string, any>, currentPath = "site"): TodoItem[] {
  const todos: TodoItem[] = [];

  for (const [key, val] of Object.entries(obj)) {
    const fullPath = `${currentPath}.${key}`;
    if (isTodo(val)) {
      todos.push({ path: fullPath, message: val.todo });
    } else if (val && typeof val === "object" && !Array.isArray(val)) {
      todos.push(...findTodos(val, fullPath));
    } else if (Array.isArray(val)) {
      val.forEach((item, index) => {
        if (isTodo(item)) {
          todos.push({ path: `${fullPath}[${index}]`, message: item.todo });
        } else if (item && typeof item === "object") {
          todos.push(...findTodos(item, `${fullPath}[${index}]`));
        }
      });
    }
  }

  return todos;
}

console.log("=================================================");
console.log("  PAWCROP SITE AUDIT: ACTIVE TODO ITEMS");
console.log("=================================================\n");

const todos = findTodos(site);

if (todos.length === 0) {
  console.log("✅ No active TODO items found. Site content is 100% complete!");
} else {
  console.log(`Found ${todos.length} active TODO item(s) awaiting real-world data:\n`);
  todos.forEach((item, i) => {
    console.log(` [${i + 1}] ${item.path}`);
    console.log(`     Action Required: "${item.message}"\n`);
  });
  console.log("Note: In development, these render as dashed signal-orange tags.");
  console.log("In production, they render gracefully or omit placeholders.\n");
}
