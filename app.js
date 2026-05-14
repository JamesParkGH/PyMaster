const STORAGE_KEY = "pymaster-state-v1";

const LESSONS = [
  {
    id: "variables-and-strings",
    level: "Warm up",
    title: "Variables and strings",
    summary: "Store values in variables and return a readable string from a function.",
    why: "Most technical assessments start with simple string handling and function writing.",
    takeaways: [
      "Variables let you reuse data without repeating yourself.",
      "f-strings make output easy to read.",
      "A good function returns one clear result.",
    ],
    challengeTitle: "Create a friendly student summary",
    challengePrompt:
      "Write describe_person(name, age) so it returns a string like 'Ada is 12 years old.'.",
    starterCode: `def describe_person(name, age):
    # Return one sentence that includes the name and age.
    pass`,
    hints: [
      "Use an f-string to build the sentence.",
      "Return the string instead of printing it.",
      "Match the punctuation exactly.",
    ],
    functionName: "describe_person",
    tests: [
      { args: ["Ada", 12], expected: "Ada is 12 years old." },
      { args: ["Sam", 9], expected: "Sam is 9 years old." },
    ],
  },
  {
    id: "lists-and-loops",
    level: "Core skill",
    title: "Lists and loops",
    summary: "Walk through a list and count only the values that match a condition.",
    why: "Loops and conditions are the backbone of everyday Python work.",
    takeaways: [
      "A for-loop processes one item at a time.",
      "An if-statement lets you filter values.",
      "Counting with a running total is a reusable pattern.",
    ],
    challengeTitle: "Count even numbers",
    challengePrompt:
      "Write count_even_numbers(numbers) so it returns how many numbers in the list are even.",
    starterCode: `def count_even_numbers(numbers):
    # Count how many values in the list are even.
    pass`,
    hints: [
      "Use % 2 to test whether a number is even.",
      "Start your counter at 0.",
      "Return the final count after the loop.",
    ],
    functionName: "count_even_numbers",
    tests: [
      { args: [[1, 2, 3, 4, 5, 6]], expected: 3 },
      { args: [[7, 9, 11]], expected: 0 },
      { args: [[2, 2, 2]], expected: 3 },
    ],
  },
  {
    id: "conditionals-and-grading",
    level: "Decision making",
    title: "Conditionals and grading",
    summary: "Turn a score into a letter grade with a clean set of boundaries.",
    why: "Technical assessments often check whether you can express logic clearly.",
    takeaways: [
      "Order your checks from highest to lowest threshold.",
      "Return one value for each branch.",
      "Clear branching makes your code easier to test.",
    ],
    challengeTitle: "Convert a score to a letter grade",
    challengePrompt:
      "Write grade_from_score(score) so it returns A, B, C, D, or F based on the number.",
    starterCode: `def grade_from_score(score):
    # Return A, B, C, D, or F.
    pass`,
    hints: [
      "Check the highest score first.",
      "Use elif to avoid extra checks.",
      "Keep the labels uppercase and exact.",
    ],
    functionName: "grade_from_score",
    tests: [
      { args: [96], expected: "A" },
      { args: [84], expected: "B" },
      { args: [73], expected: "C" },
      { args: [65], expected: "D" },
      { args: [12], expected: "F" },
    ],
  },
  {
    id: "dictionaries-and-summary",
    level: "Pattern building",
    title: "Dictionaries and summaries",
    summary: "Turn a list of scores into a labeled summary dictionary.",
    why: "A lot of real work is transforming raw input into structured output.",
    takeaways: [
      "Dictionaries are good when each value needs a label.",
      "count, minimum, maximum, and average are a common summary set.",
      "Return shapes that are easy to inspect and test.",
    ],
    challengeTitle: "Summarize score data",
    challengePrompt:
      "Write summarize_scores(scores) so it returns a dictionary with count, minimum, maximum, and average.",
    starterCode: `def summarize_scores(scores):
    # Build a summary dictionary.
    pass`,
    hints: [
      "The average is sum(scores) / len(scores).",
      "The return value should be a dictionary.",
      "Use descriptive keys so the result reads clearly.",
    ],
    functionName: "summarize_scores",
    tests: [
      {
        args: [[80, 90, 100]],
        expected: { count: 3, minimum: 80, maximum: 100, average: 90 },
      },
      {
        args: [[72]],
        expected: { count: 1, minimum: 72, maximum: 72, average: 72 },
      },
    ],
  },
  {
    id: "text-cleaning",
    level: "Data cleanup",
    title: "Text cleanup",
    summary: "Normalize messy names by trimming spaces and making the casing consistent.",
    why: "Cleaning input is a real-world skill that shows up constantly in assessments and apps.",
    takeaways: [
      "Strip removes extra whitespace around text.",
      "title() is useful for simple name formatting.",
      "Working with lists of strings is common in everyday Python.",
    ],
    challengeTitle: "Normalize a list of names",
    challengePrompt:
      "Write normalize_names(names) so it returns a new list with each name trimmed and title-cased.",
    starterCode: `def normalize_names(names):
    # Return a cleaned list of names.
    pass`,
    hints: [
      "Build a new list instead of changing the input in place.",
      "Call strip() before title().",
      "Return the cleaned list at the end.",
    ],
    functionName: "normalize_names",
    tests: [
      { args: [["  ada lovelace ", "grace hopper"]], expected: ["Ada Lovelace", "Grace Hopper"] },
      { args: [["  alan  turing  "]], expected: ["Alan Turing"] },
    ],
  },
  {
    id: "default-arguments",
    level: "Reusable functions",
    title: "Default arguments",
    summary: "Write a function that stays flexible with a sensible default value.",
    why: "Default arguments help you write code that is both convenient and explicit.",
    takeaways: [
      "A default parameter keeps the function easier to call.",
      "Named arguments can improve clarity when calling functions.",
      "Small reusable helpers are a sign of strong Python habits.",
    ],
    challengeTitle: "Build a greeting helper",
    challengePrompt:
      "Write build_greeting(name, greeting='Hello') so it returns a friendly sentence.",
    starterCode: `def build_greeting(name, greeting="Hello"):
    # Use the greeting and name in a return string.
    pass`,
    hints: [
      "Keep greeting as the default value.",
      "Use both arguments in the return string.",
      "Punctuation matters in the output.",
    ],
    functionName: "build_greeting",
    tests: [
      { args: ["Ada"], expected: "Hello, Ada!" },
      { args: ["Ada", "Welcome"], expected: "Welcome, Ada!" },
    ],
  },
  {
    id: "reflection-and-review",
    level: "Study habit",
    title: "Reflection and review",
    summary: "Turn learning into prompts you can revisit later.",
    why: "Confidence grows when you can explain the idea in your own words.",
    takeaways: [
      "Explaining code is part of becoming proficient.",
      "A short review habit helps memory stick.",
      "Reflection is how practice turns into understanding.",
    ],
    challengeTitle: "Create reflection prompts",
    challengePrompt:
      "Write reflection_points() so it returns at least three short prompts you want to study later.",
    starterCode: `def reflection_points():
    # Return at least three short study prompts.
    pass`,
    hints: [
      "Return a list of strings.",
      "Use at least three prompts.",
      "Keep each prompt short and specific.",
    ],
    functionName: "reflection_points",
    tests: [
      {
        args: [],
        validator: (value) => Array.isArray(value) && value.length >= 3 && value.every((item) => typeof item === "string" && item.trim()),
        expectedSummary: "a list with at least three non-empty strings",
      },
    ],
  },
];

const appState = loadState();
const lessonById = Object.fromEntries(LESSONS.map((lesson) => [lesson.id, lesson]));

const dom = {
  lessonGrid: document.getElementById("lesson-grid"),
  progressPercent: document.getElementById("progress-percent"),
  progressCopy: document.getElementById("progress-copy"),
  resumeBtn: document.getElementById("resume-btn"),
  lessonLevel: document.getElementById("lesson-level"),
  lessonTitle: document.getElementById("lesson-title"),
  lessonSummary: document.getElementById("lesson-summary"),
  lessonWhy: document.getElementById("lesson-why"),
  lessonTakeaways: document.getElementById("lesson-takeaways"),
  challengeTitle: document.getElementById("challenge-title"),
  challengePrompt: document.getElementById("challenge-prompt"),
  starterPreview: document.getElementById("starter-preview"),
  challengeHints: document.getElementById("challenge-hints"),
  runBtn: document.getElementById("run-btn"),
  resetBtn: document.getElementById("reset-btn"),
  markDoneBtn: document.getElementById("mark-done-btn"),
  editorStatus: document.getElementById("editor-status"),
  attemptCount: document.getElementById("attempt-count"),
  feedbackBody: document.getElementById("feedback-body"),
};

let pyodideInstance = null;
let editor = null;
let activeLessonId = appState.activeLessonId || LESSONS[0].id;

bootstrap();

async function bootstrap() {
  renderLessonCards();
  renderProgress();
  wireEvents();
  await loadEditor();
  await loadRuntime();
  setActiveLesson(activeLessonId, { preserveDraft: true });
  setFeedbackMessage("Select a lesson and run your code to see test results here.");
}

function loadState() {
  const fallback = { lessons: {}, drafts: {}, activeLessonId: LESSONS[0].id };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return fallback;
    }
    const parsed = JSON.parse(raw);
    return {
      lessons: parsed.lessons || {},
      drafts: parsed.drafts || {},
      activeLessonId: parsed.activeLessonId || LESSONS[0].id,
    };
  } catch {
    return fallback;
  }
}

function saveState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

function renderLessonCards() {
  const fragment = document.createDocumentFragment();

  LESSONS.forEach((lesson) => {
    const completion = appState.lessons[lesson.id] || { completed: false, attempts: 0 };
    const card = document.createElement("button");
    card.type = "button";
    card.className = `lesson-card${lesson.id === activeLessonId ? " is-active" : ""}`;
    card.dataset.lessonId = lesson.id;
    card.innerHTML = `
      <span class="lesson-chip ${completion.completed ? "chip-done" : ""}">${completion.completed ? "Completed" : lesson.level}</span>
      <h3>${lesson.title}</h3>
      <p>${lesson.summary}</p>
      <div class="lesson-card-footer">
        <span>${completion.attempts || 0} attempt${completion.attempts === 1 ? "" : "s"}</span>
        <span>${completion.completed ? "Saved" : "In progress"}</span>
      </div>
    `;
    card.addEventListener("click", () => setActiveLesson(lesson.id));
    fragment.appendChild(card);
  });

  dom.lessonGrid.replaceChildren(fragment);
}

function renderProgress() {
  const completedCount = LESSONS.filter((lesson) => appState.lessons[lesson.id]?.completed).length;
  const percent = Math.round((completedCount / LESSONS.length) * 100);
  dom.progressPercent.textContent = `${percent}%`;
  dom.progressCopy.textContent = `${completedCount} of ${LESSONS.length} lessons completed.`;

  document.documentElement.style.setProperty("--progress-value", `${percent}%`);
  updateAttemptLabel();
  renderLessonCards();
}

function wireEvents() {
  dom.resumeBtn.addEventListener("click", () => {
    const lessonId = appState.activeLessonId || Object.keys(appState.drafts)[0] || LESSONS[0].id;
    setActiveLesson(lessonId);
    document.getElementById("workspace").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  dom.runBtn.addEventListener("click", () => {
    void runCurrentLesson();
  });

  dom.resetBtn.addEventListener("click", () => {
    const lesson = lessonById[activeLessonId];
    if (!lesson || !editor) {
      return;
    }
    editor.setValue(lesson.starterCode, -1);
    appState.drafts[lesson.id] = lesson.starterCode;
    saveState();
    setFeedbackMessage("Starter code restored.");
  });

  dom.markDoneBtn.addEventListener("click", () => {
    markLessonCompleted(activeLessonId, true);
    setFeedbackMessage("Marked as completed in your local progress.");
  });
}

async function loadEditor() {
  editor = window.ace.edit("editor");
  editor.session.setMode("ace/mode/python");
  editor.setTheme("ace/theme/tomorrow_night_bright");
  editor.setOptions({
    fontSize: "15px",
    showPrintMargin: false,
    useSoftTabs: true,
    tabSize: 4,
    wrap: true,
    highlightActiveLine: true,
    highlightGutterLine: false,
  });
  editor.session.on("change", () => {
    const lesson = lessonById[activeLessonId];
    if (!lesson) {
      return;
    }
    appState.drafts[lesson.id] = editor.getValue();
    saveState();
  });
  dom.editorStatus.textContent = "Editor ready.";
}

async function loadRuntime() {
  dom.editorStatus.textContent = "Loading Python runtime...";
  pyodideInstance = await window.loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/",
  });
  dom.editorStatus.textContent = "Python runtime ready.";
}

function setActiveLesson(lessonId, options = {}) {
  const lesson = lessonById[lessonId];
  if (!lesson || !editor) {
    return;
  }

  activeLessonId = lessonId;
  appState.activeLessonId = lessonId;
  saveState();

  const draft = options.preserveDraft ? appState.drafts[lessonId] : appState.drafts[lessonId] || lesson.starterCode;
  const source = draft || lesson.starterCode;

  dom.lessonLevel.textContent = lesson.level;
  dom.lessonTitle.textContent = lesson.title;
  dom.lessonSummary.textContent = lesson.summary;
  dom.lessonWhy.textContent = lesson.why;
  dom.lessonTakeaways.replaceChildren(...lesson.takeaways.map((item) => createListItem(item)));
  dom.challengeTitle.textContent = lesson.challengeTitle;
  dom.challengePrompt.textContent = lesson.challengePrompt;
  dom.starterPreview.textContent = lesson.starterCode;
  dom.challengeHints.replaceChildren(...lesson.hints.map((item) => createListItem(item)));

  editor.setValue(source, -1);
  appState.drafts[lessonId] = source;
  saveState();
  updateAttemptLabel();
  renderLessonCards();
}

function createListItem(text) {
  const item = document.createElement("li");
  item.textContent = text;
  return item;
}

function updateAttemptLabel() {
  const lesson = lessonById[activeLessonId];
  if (!lesson) {
    return;
  }
  const state = appState.lessons[lesson.id] || { attempts: 0, completed: false };
  const draftSaved = appState.drafts[lesson.id] ? "Draft saved locally." : "No draft yet.";
  dom.attemptCount.textContent = `${state.attempts || 0} attempt${state.attempts === 1 ? "" : "s"}. ${draftSaved}`;
}

function setFeedbackMessage(message, variant = "neutral") {
  dom.feedbackBody.innerHTML = "";
  const shell = document.createElement("div");
  shell.className = `feedback-message feedback-${variant}`;
  shell.textContent = message;
  dom.feedbackBody.appendChild(shell);
}

function markLessonCompleted(lessonId, completed) {
  const lessonState = appState.lessons[lessonId] || { attempts: 0, completed: false };
  lessonState.completed = completed;
  appState.lessons[lessonId] = lessonState;
  saveState();
  renderProgress();
}

async function runCurrentLesson() {
  const lesson = lessonById[activeLessonId];
  if (!lesson || !editor || !pyodideInstance) {
    setFeedbackMessage("The editor or Python runtime is not ready yet.", "warn");
    return;
  }

  const source = editor.getValue();
  appState.drafts[lesson.id] = source;
  const lessonState = appState.lessons[lesson.id] || { attempts: 0, completed: false };
  lessonState.attempts += 1;
  appState.lessons[lesson.id] = lessonState;
  saveState();
  updateAttemptLabel();
  renderProgress();

  dom.runBtn.disabled = true;
  dom.runBtn.textContent = "Running...";

  try {
    const report = await runLessonChecks(lesson, source);
    renderReport(lesson, report);
    if (report.passed) {
      markLessonCompleted(lesson.id, true);
    }
  } catch (error) {
    setFeedbackMessage(`Unexpected error: ${error.message}`, "warn");
  } finally {
    dom.runBtn.disabled = false;
    dom.runBtn.textContent = "Run checks";
  }
}

async function runLessonChecks(lesson, source) {
  if (lesson.id === "reflection-and-review") {
    return runReflectionLesson(lesson, source);
  }
  return runFunctionLesson(lesson, source);
}

async function runFunctionLesson(lesson, source) {
  pyodideInstance.globals.set("user_code", source);
  pyodideInstance.globals.set("function_name", lesson.functionName);
  pyodideInstance.globals.set("cases_json", JSON.stringify(lesson.tests));
  const resultJson = await pyodideInstance.runPythonAsync(`
import json

cases = json.loads(cases_json)
namespace = {}
report = {
    "passed": False,
    "tests": [],
    "messages": [],
    "hint": "",
}

try:
    exec(user_code, namespace)
except Exception as exc:
    report["messages"].append(f"Python error: {type(exc).__name__}: {exc}")
else:
    fn = namespace.get(function_name)
    if not callable(fn):
        report["messages"].append(f"Define a callable named {function_name}.")
    else:
        passed_all = True
        for case in cases:
            args = case["args"]
            expected = case["expected"]
            try:
                actual = fn(*args)
                passed = actual == expected
                report["tests"].append({
                    "args": args,
                    "expected": expected,
                    "actual": actual,
                    "passed": passed,
                })
                if not passed:
                    passed_all = False
                    if actual is None:
                        report["hint"] = "The function returned None. Did you forget a return statement?"
            except Exception as exc:
                passed_all = False
                report["tests"].append({
                    "args": args,
                    "expected": expected,
                    "actual": f"{type(exc).__name__}: {exc}",
                    "passed": False,
                })
        report["passed"] = passed_all

json.dumps(report)
`);

  return JSON.parse(resultJson);
}

async function runReflectionLesson(lesson, source) {
  pyodideInstance.globals.set("user_code", source);
  const resultJson = await pyodideInstance.runPythonAsync(`
import json

namespace = {}
report = {
    "passed": False,
    "tests": [],
    "messages": [],
    "hint": "",
}

try:
    exec(user_code, namespace)
except Exception as exc:
    report["messages"].append(f"Python error: {type(exc).__name__}: {exc}")
else:
    fn = namespace.get("reflection_points")
    if not callable(fn):
        report["messages"].append("Define a callable named reflection_points.")
    else:
        try:
            actual = fn()
            passed = isinstance(actual, list) and len(actual) >= 3 and all(isinstance(item, str) and item.strip() for item in actual)
            report["tests"].append({
                "args": [],
                "expected": "a list with at least three non-empty strings",
                "actual": actual,
                "passed": passed,
            })
            report["passed"] = passed
        except Exception as exc:
            report["tests"].append({
                "args": [],
                "expected": "a list with at least three non-empty strings",
                "actual": f"{type(exc).__name__}: {exc}",
                "passed": False,
            })

json.dumps(report)
`);

  return JSON.parse(resultJson);
}

function renderReport(lesson, report) {
  const classes = report.passed ? "feedback-good" : "feedback-bad";
  const parts = [];

  parts.push(`<div class="feedback-banner ${classes}">${report.passed ? "Passed" : "Needs work"}</div>`);

  if (report.messages && report.messages.length) {
    parts.push(`<ul class="feedback-list">${report.messages.map((message) => `<li>${escapeHtml(message)}</li>`).join("")}</ul>`);
  }

  if (report.hint) {
    parts.push(`<div class="feedback-hint"><strong>Hint:</strong> ${escapeHtml(report.hint)}</div>`);
  }

  const testRows = report.tests.map((test) => {
    const statusClass = test.passed ? "test-pass" : "test-fail";
    return `
      <li class="test-row ${statusClass}">
        <div><strong>Args</strong> ${escapeHtml(formatValue(test.args))}</div>
        <div><strong>Expected</strong> ${escapeHtml(formatValue(test.expected))}</div>
        <div><strong>Actual</strong> ${escapeHtml(formatValue(test.actual))}</div>
      </li>
    `;
  }).join("");

  if (testRows) {
    parts.push(`<ul class="test-list">${testRows}</ul>`);
  }

  if (report.passed) {
    parts.push(`<div class="feedback-success">Great work. This lesson has been marked complete and saved locally.</div>`);
  } else {
    parts.push(`<div class="feedback-next">Try again, or open the lesson notes and compare your output to the expected shape.</div>`);
  }

  dom.feedbackBody.innerHTML = parts.join("");
}

function formatValue(value) {
  if (typeof value === "string") {
    return value;
  }
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
