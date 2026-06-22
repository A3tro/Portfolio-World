const panelContent = document.getElementById("panelContent");
const sidePanel = document.getElementById("sidePanel");
const avatar = document.getElementById("avatar");

const STORAGE_KEY = "editablePortfolioWorldData";
const LANGUAGE_KEY = "portfolioLanguage";

let isEditMode = false;
let currentPanel = null;
let currentLanguage = localStorage.getItem(LANGUAGE_KEY) || "en";

const text = {
  en: {
    headerSubtitle: "Interactive Editable Digital Portfolio",
    openingSmallTitle: "Welcome to",
    openingJapaneseTitle: "Editable Portfolio World",
    openingText:
      "Explore profile, skills, projects, achievements, and edit the content directly inside each area.",
    enterButton: "Enter World",
    worldSubtitle: "Click an area on the island to explore.",

    navAbout: "About",
    navProjects: "Projects",
    navSkills: "Skills",
    navSchool: "School",
    navCareer: "Career",
    navAchievements: "Achievements",

    mapAbout: "About Me House",
    mapProjects: "Project Lab",
    mapSkills: "Skill Forest",
    mapSchool: "School Area",
    mapCareer: "Career Gate",
    mapAchievements: "Achievement Hall",

    languageButton: "日本語",
    editOff: "Edit Mode: OFF",
    editOn: "Edit Mode: ON",
    editLabel: "Edit Mode ON",

    aboutTitle: "🏠 About Me House",
    aboutSub:
      "This area introduces who I am, what I study, and what kind of developer I want to become.",
    profile: "Profile",
    selfIntro: "Self Introduction",
    name: "Name",
    school: "School",
    department: "Department",
    interest: "Interest",

    projectTitle: "💻 Project Lab",
    projectSub:
      "This lab shows my web apps, programming works, and school projects.",
    project: "Project",
    title: "Title",
    description: "Description",
    tags: "Tags separated by comma",
    addProject: "+ Add Project",

    skillTitle: "🌳 Skill Forest",
    skillSub:
      "This forest shows my current technical skills and learning progress.",
    skill: "Skill",
    skillName: "Skill Name",
    percent: "Percent",
    addSkill: "+ Add Skill",
    saveSkills: "Save Skills",
    deleteSkill: "Delete Skill",

    schoolTitle: "🏫 School Area",
    schoolSub:
      "This area shows what I have learned and created in school.",
    schoolCard: "School Card",
    addSchool: "+ Add School Card",

    careerTitle: "🚀 Career Gate",
    careerSub:
      "This gate shows my future goal and learning direction.",
    careerCard: "Career Card",
    addCareer: "+ Add Career Card",

    achievementTitle: "🏆 Achievement Hall",
    achievementSub:
      "This hall shows my achievements, certificates, and important experiences.",
    achievement: "Achievement",
    iconEmoji: "Icon / Emoji",
    addAchievement: "+ Add Achievement",

    save: "Save",
    delete: "Delete",
    resetAll: "Reset All Data",
    resetWarning: "This resets all edited data.",

    profileSaved: "Profile saved!",
    projectSaved: "Project saved!",
    skillsSaved: "Skills saved!",
    schoolSaved: "School card saved!",
    careerSaved: "Career card saved!",
    achievementSaved: "Achievement saved!"
  },

  ja: {
    headerSubtitle: "編集できるインタラクティブ・ポートフォリオ",
    openingSmallTitle: "Welcome to",
    openingJapaneseTitle: "編集できるポートフォリオワールド",
    openingText:
      "プロフィール、スキル、制作物、実績をマップ形式で見せ、各エリアで内容を編集できます。",
    enterButton: "ワールドに入る",
    worldSubtitle: "島のエリアをクリックして内容を見てください。",

    navAbout: "自己紹介",
    navProjects: "制作物",
    navSkills: "スキル",
    navSchool: "学校",
    navCareer: "キャリア",
    navAchievements: "実績",

    mapAbout: "自己紹介ハウス",
    mapProjects: "制作ラボ",
    mapSkills: "スキルの森",
    mapSchool: "学校エリア",
    mapCareer: "キャリアゲート",
    mapAchievements: "実績ホール",

    languageButton: "English",
    editOff: "編集モード：OFF",
    editOn: "編集モード：ON",
    editLabel: "編集モード ON",

    aboutTitle: "🏠 自己紹介ハウス",
    aboutSub:
      "このエリアでは、自分のプロフィール、学んでいること、将来なりたいエンジニア像を紹介します。",
    profile: "プロフィール",
    selfIntro: "自己紹介",
    name: "名前",
    school: "学校",
    department: "学科",
    interest: "興味",

    projectTitle: "💻 制作ラボ",
    projectSub:
      "このエリアでは、Webアプリ、プログラミング作品、学校で作成した制作物を紹介します。",
    project: "制作物",
    title: "タイトル",
    description: "説明",
    tags: "タグ（カンマで区切る）",
    addProject: "+ 制作物を追加",

    skillTitle: "🌳 スキルの森",
    skillSub:
      "このエリアでは、現在の技術スキルと学習の進み具合を表示します。",
    skill: "スキル",
    skillName: "スキル名",
    percent: "パーセント",
    addSkill: "+ スキルを追加",
    saveSkills: "スキルを保存",
    deleteSkill: "スキルを削除",

    schoolTitle: "🏫 学校エリア",
    schoolSub:
      "このエリアでは、学校で学んだ内容や取り組んだ課題を紹介します。",
    schoolCard: "学校カード",
    addSchool: "+ 学校カードを追加",

    careerTitle: "🚀 キャリアゲート",
    careerSub:
      "このエリアでは、将来の目標やこれから伸ばしたいスキルを紹介します。",
    careerCard: "キャリアカード",
    addCareer: "+ キャリアカードを追加",

    achievementTitle: "🏆 実績ホール",
    achievementSub:
      "このエリアでは、資格、経験、受賞歴、制作実績などを紹介します。",
    achievement: "実績",
    iconEmoji: "アイコン / 絵文字",
    addAchievement: "+ 実績を追加",

    save: "保存",
    delete: "削除",
    resetAll: "すべてリセット",
    resetWarning: "編集したすべてのデータを初期状態に戻します。",

    profileSaved: "プロフィールを保存しました！",
    projectSaved: "制作物を保存しました！",
    skillsSaved: "スキルを保存しました！",
    schoolSaved: "学校カードを保存しました！",
    careerSaved: "キャリアカードを保存しました！",
    achievementSaved: "実績を保存しました！"
  }
};

function t(key) {
  return text[currentLanguage][key];
}

const defaultData = {
  profile: {
    name: "Yair Yint Kyaw",
    school: "Kobe Denshi College",
    department: "Information Processing",
    interest: "Web apps, UI design, and interactive digital works.",
    intro:
      "I am an IT student who wants to create useful and interesting digital products. I enjoy making projects that combine design, programming, and real-life ideas."
  },

  projects: [
    {
      title: "Habit Garden",
      description: "A habit tracking app with growth and progress system.",
      tags: "HTML, CSS, JavaScript"
    },
    {
      title: "My Hometown Mandalay App",
      description:
        "A Windows Forms app introducing famous places, food, and culture from Mandalay.",
      tags: "C#, Windows Forms"
    },
    {
      title: "Snake Game",
      description:
        "A simple game project using programming logic, collision detection, and score system.",
      tags: "C, Game Logic"
    },
    {
      title: "Portfolio World",
      description:
        "An interactive editable portfolio website designed like a digital game map.",
      tags: "HTML, CSS Animation, JavaScript, LocalStorage"
    }
  ],

  skills: [
    { name: "HTML", percent: 80 },
    { name: "CSS", percent: 70 },
    { name: "JavaScript", percent: 55 },
    { name: "C# / Windows Forms", percent: 60 },
    { name: "SQL", percent: 45 }
  ],

  schoolArea: [
    {
      title: "Programming",
      description:
        "I studied basic programming logic, conditions, loops, arrays, and simple applications."
    },
    {
      title: "Database / SQL",
      description:
        "I practiced SQL queries such as SELECT, WHERE, and basic database thinking."
    },
    {
      title: "Group Work",
      description:
        "I learned how to discuss ideas, divide tasks, and present results with classmates."
    }
  ],

  career: [
    {
      title: "Future Goal",
      description:
        "My goal is to become a system engineer or software developer who can create useful systems for users."
    },
    {
      title: "What I Want to Improve",
      description:
        "I want to improve JavaScript, database knowledge, UI design, and problem-solving ability."
    },
    {
      title: "Career Plan",
      description:
        "I want to keep building projects and make a strong portfolio before graduation."
    }
  ],

  achievements: [
    { icon: "🗾", title: "JLPT N2", description: "Japanese language achievement" },
    { icon: "💼", title: "Internship", description: "Company experience" },
    { icon: "🎖️", title: "Part-time Award", description: "Work achievement" },
    { icon: "💻", title: "Projects", description: "Programming works" }
  ]
};

let portfolioData = loadData();
fixOldData();

const avatarPositions = {
  about: { left: "130px", top: "30px" },
  projects: { left: "650px", top: "30px" },
  skills: { left: "400px", top: "130px" },
  school: { left: "150px", top: "350px" },
  career: { left: "650px", top: "350px" },
  achievements: { left: "400px", top: "390px" }
};

updateStaticLanguage();

/* BASIC UI */

function enterWorld() {
  document.getElementById("openingScreen").classList.add("hidden");
  document.getElementById("mainApp").classList.remove("hidden");
}

function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "ja" : "en";
  localStorage.setItem(LANGUAGE_KEY, currentLanguage);

  updateStaticLanguage();

  if (currentPanel) {
    openPanel(currentPanel);
  }
}

function updateStaticLanguage() {
  setText("headerSubtitle", t("headerSubtitle"));
  setText("openingSmallTitle", t("openingSmallTitle"));
  setText("openingJapaneseTitle", t("openingJapaneseTitle"));
  setText("openingText", t("openingText"));
  setText("enterButton", t("enterButton"));
  setText("worldSubtitle", t("worldSubtitle"));

  setText("navAbout", t("navAbout"));
  setText("navProjects", t("navProjects"));
  setText("navSkills", t("navSkills"));
  setText("navSchool", t("navSchool"));
  setText("navCareer", t("navCareer"));
  setText("navAchievements", t("navAchievements"));

  setText("mapAbout", t("mapAbout"));
  setText("mapProjects", t("mapProjects"));
  setText("mapSkills", t("mapSkills"));
  setText("mapSchool", t("mapSchool"));
  setText("mapCareer", t("mapCareer"));
  setText("mapAchievements", t("mapAchievements"));

  setText("languageToggleBtn", t("languageButton"));
  setText("editToggleBtn", isEditMode ? t("editOn") : t("editOff"));
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function toggleEditMode() {
  isEditMode = !isEditMode;

  const btn = document.getElementById("editToggleBtn");

  if (isEditMode) {
    btn.textContent = t("editOn");
    btn.classList.add("on");
  } else {
    btn.textContent = t("editOff");
    btn.classList.remove("on");
  }

  if (currentPanel) {
    openPanel(currentPanel);
  }
}

function openPanel(type) {
  currentPanel = type;
  moveAvatar(type);

  if (type === "about") {
    panelContent.innerHTML = renderAbout();
  } else if (type === "projects") {
    panelContent.innerHTML = renderProjects();
  } else if (type === "skills") {
    panelContent.innerHTML = renderSkills();
    setTimeout(animateSkillBars, 150);
  } else if (type === "school") {
    panelContent.innerHTML = renderSchool();
  } else if (type === "career") {
    panelContent.innerHTML = renderCareer();
  } else if (type === "achievements") {
    panelContent.innerHTML = renderAchievements();
  }

  sidePanel.classList.add("open");
}

function closePanel() {
  sidePanel.classList.remove("open");
}

function moveAvatar(type) {
  const position = avatarPositions[type];
  if (!position) return;

  avatar.style.left = position.left;
  avatar.style.top = position.top;
}

/* DATA */

function loadData() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (!savedData) {
    return structuredClone(defaultData);
  }

  try {
    return JSON.parse(savedData);
  } catch (error) {
    return structuredClone(defaultData);
  }
}

function fixOldData() {
  if (!portfolioData.profile) portfolioData.profile = structuredClone(defaultData.profile);
  if (!portfolioData.projects) portfolioData.projects = structuredClone(defaultData.projects);
  if (!portfolioData.skills) portfolioData.skills = structuredClone(defaultData.skills);
  if (!portfolioData.schoolArea) portfolioData.schoolArea = structuredClone(defaultData.schoolArea);
  if (!portfolioData.career) portfolioData.career = structuredClone(defaultData.career);
  if (!portfolioData.achievements) portfolioData.achievements = structuredClone(defaultData.achievements);

  saveData();
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(portfolioData));
}

function resetAllData() {
  const confirmReset = confirm("Reset all data?");

  if (!confirmReset) return;

  localStorage.removeItem(STORAGE_KEY);
  portfolioData = structuredClone(defaultData);
  saveData();

  if (currentPanel) {
    openPanel(currentPanel);
  }
}

/* ABOUT */

function renderAbout() {
  const p = portfolioData.profile;

  if (!isEditMode) {
    return `
      <h1 class="panel-title">${t("aboutTitle")}</h1>
      <p class="panel-subtitle">${t("aboutSub")}</p>

      <div class="card">
        <h3>${t("profile")}</h3>
        <p><strong>${t("name")}:</strong> ${escapeHTML(p.name)}</p>
        <p><strong>${t("school")}:</strong> ${escapeHTML(p.school)}</p>
        <p><strong>${t("department")}:</strong> ${escapeHTML(p.department)}</p>
        <p><strong>${t("interest")}:</strong> ${escapeHTML(p.interest)}</p>
      </div>

      <div class="card">
        <h3>${t("selfIntro")}</h3>
        <p>${escapeHTML(p.intro)}</p>
      </div>
    `;
  }

  return `
    <h1 class="panel-title">${t("aboutTitle")}</h1>
    <span class="edit-mode-label">${t("editLabel")}</span>

    <div class="card">
      <h3>${t("profile")}</h3>

      <div class="form-group">
        <label>${t("name")}</label>
        <input id="editName" class="form-input" value="${escapeAttribute(p.name)}" />
      </div>

      <div class="form-group">
        <label>${t("school")}</label>
        <input id="editSchool" class="form-input" value="${escapeAttribute(p.school)}" />
      </div>

      <div class="form-group">
        <label>${t("department")}</label>
        <input id="editDepartment" class="form-input" value="${escapeAttribute(p.department)}" />
      </div>

      <div class="form-group">
        <label>${t("interest")}</label>
        <input id="editInterest" class="form-input" value="${escapeAttribute(p.interest)}" />
      </div>

      <div class="form-group">
        <label>${t("selfIntro")}</label>
        <textarea id="editIntro" class="form-textarea">${escapeHTML(p.intro)}</textarea>
      </div>

      <button class="save-btn" onclick="saveProfile()">${t("save")}</button>
      <p id="editMessage"></p>
    </div>
  `;
}

function saveProfile() {
  portfolioData.profile.name = document.getElementById("editName").value;
  portfolioData.profile.school = document.getElementById("editSchool").value;
  portfolioData.profile.department = document.getElementById("editDepartment").value;
  portfolioData.profile.interest = document.getElementById("editInterest").value;
  portfolioData.profile.intro = document.getElementById("editIntro").value;

  saveData();
  showEditMessage(t("profileSaved"));
}

/* PROJECTS */

function renderProjects() {
  const projectCards = portfolioData.projects
    .map((project, index) => {
      const tags = project.tags
        .split(",")
        .map(tag => `<span class="tag">${escapeHTML(tag.trim())}</span>`)
        .join("");

      if (!isEditMode) {
        return `
          <div class="card">
            <h3>${escapeHTML(project.title)}</h3>
            <p>${escapeHTML(project.description)}</p>
            ${tags}
          </div>
        `;
      }

      return `
        <div class="card">
          <h3>${t("project")} ${index + 1}</h3>

          <div class="form-group">
            <label>${t("title")}</label>
            <input id="projectTitle${index}" class="form-input" value="${escapeAttribute(project.title)}" />
          </div>

          <div class="form-group">
            <label>${t("description")}</label>
            <textarea id="projectDescription${index}" class="form-textarea">${escapeHTML(project.description)}</textarea>
          </div>

          <div class="form-group">
            <label>${t("tags")}</label>
            <input id="projectTags${index}" class="form-input" value="${escapeAttribute(project.tags)}" />
          </div>

          <div class="action-row">
            <button class="save-btn" onclick="saveOneProject(${index})">${t("save")}</button>
            <button class="delete-btn" onclick="deleteProject(${index})">${t("delete")}</button>
          </div>
        </div>
      `;
    })
    .join("");

  return `
    <h1 class="panel-title">${t("projectTitle")}</h1>
    ${isEditMode ? `<span class="edit-mode-label">${t("editLabel")}</span>` : ""}
    <p class="panel-subtitle">${t("projectSub")}</p>

    ${projectCards}

    ${
      isEditMode
        ? `
          <button class="add-btn" onclick="addProject()">${t("addProject")}</button>
          <p id="editMessage"></p>
        `
        : ""
    }
  `;
}

function addProject() {
  portfolioData.projects.push({
    title: "New Project",
    description: "Write your project description here.",
    tags: "HTML, CSS, JavaScript"
  });

  saveData();
  openPanel("projects");
}

function saveOneProject(index) {
  portfolioData.projects[index] = {
    title: document.getElementById(`projectTitle${index}`).value,
    description: document.getElementById(`projectDescription${index}`).value,
    tags: document.getElementById(`projectTags${index}`).value
  };

  saveData();
  showEditMessage(t("projectSaved"));
}

function deleteProject(index) {
  const confirmDelete = confirm("Delete this project?");
  if (!confirmDelete) return;

  portfolioData.projects.splice(index, 1);
  saveData();
  openPanel("projects");
}

/* SKILLS */

function renderSkills() {
  if (!isEditMode) {
    const skillItems = portfolioData.skills
      .map(skill => {
        return `
          <div class="skill-item">
            <div class="skill-name">
              <span>${escapeHTML(skill.name)}</span>
              <span>${skill.percent}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" data-width="${skill.percent}%"></div>
            </div>
          </div>
        `;
      })
      .join("");

    return `
      <h1 class="panel-title">${t("skillTitle")}</h1>
      <p class="panel-subtitle">${t("skillSub")}</p>
      ${skillItems}
    `;
  }

  const editSkills = portfolioData.skills
    .map((skill, index) => {
      return `
        <div class="card">
          <h3>${t("skill")} ${index + 1}</h3>

          <div class="form-group">
            <label>${t("skillName")}</label>
            <input id="skillName${index}" class="form-input" value="${escapeAttribute(skill.name)}" />
          </div>

          <div class="form-group">
            <label>${t("percent")}</label>
            <input id="skillPercent${index}" class="form-input" type="number" min="0" max="100" value="${skill.percent}" />
          </div>

          <button class="delete-btn" onclick="deleteSkill(${index})">${t("deleteSkill")}</button>
        </div>
      `;
    })
    .join("");

  return `
    <h1 class="panel-title">${t("skillTitle")}</h1>
    <span class="edit-mode-label">${t("editLabel")}</span>

    ${editSkills}

    <div class="action-row">
      <button class="add-btn" onclick="addSkill()">${t("addSkill")}</button>
      <button class="save-btn" onclick="saveSkills()">${t("saveSkills")}</button>
    </div>

    <p id="editMessage"></p>
  `;
}

function addSkill() {
  portfolioData.skills.push({
    name: "New Skill",
    percent: 50
  });

  saveData();
  openPanel("skills");
}

function saveSkills() {
  const newSkills = [];

  for (let i = 0; i < portfolioData.skills.length; i++) {
    const nameInput = document.getElementById(`skillName${i}`);
    const percentInput = document.getElementById(`skillPercent${i}`);

    if (!nameInput || !percentInput) continue;

    let percent = Number(percentInput.value);

    if (percent < 0) percent = 0;
    if (percent > 100) percent = 100;

    newSkills.push({
      name: nameInput.value,
      percent
    });
  }

  portfolioData.skills = newSkills;
  saveData();
  showEditMessage(t("skillsSaved"));
}

function deleteSkill(index) {
  const confirmDelete = confirm("Delete this skill?");
  if (!confirmDelete) return;

  portfolioData.skills.splice(index, 1);
  saveData();
  openPanel("skills");
}

/* SCHOOL */

function renderSchool() {
  if (!isEditMode) {
    const cards = portfolioData.schoolArea
      .map(item => {
        return `
          <div class="card">
            <h3>${escapeHTML(item.title)}</h3>
            <p>${escapeHTML(item.description)}</p>
          </div>
        `;
      })
      .join("");

    return `
      <h1 class="panel-title">${t("schoolTitle")}</h1>
      <p class="panel-subtitle">${t("schoolSub")}</p>
      ${cards}
    `;
  }

  const editCards = portfolioData.schoolArea
    .map((item, index) => {
      return `
        <div class="card">
          <h3>${t("schoolCard")} ${index + 1}</h3>

          <div class="form-group">
            <label>${t("title")}</label>
            <input id="schoolTitle${index}" class="form-input" value="${escapeAttribute(item.title)}" />
          </div>

          <div class="form-group">
            <label>${t("description")}</label>
            <textarea id="schoolDescription${index}" class="form-textarea">${escapeHTML(item.description)}</textarea>
          </div>

          <div class="action-row">
            <button class="save-btn" onclick="saveOneSchool(${index})">${t("save")}</button>
            <button class="delete-btn" onclick="deleteSchool(${index})">${t("delete")}</button>
          </div>
        </div>
      `;
    })
    .join("");

  return `
    <h1 class="panel-title">${t("schoolTitle")}</h1>
    <span class="edit-mode-label">${t("editLabel")}</span>

    ${editCards}

    <button class="add-btn" onclick="addSchool()">${t("addSchool")}</button>
    <p id="editMessage"></p>
  `;
}

function addSchool() {
  portfolioData.schoolArea.push({
    title: "New School Topic",
    description: "Write what you learned here."
  });

  saveData();
  openPanel("school");
}

function saveOneSchool(index) {
  portfolioData.schoolArea[index] = {
    title: document.getElementById(`schoolTitle${index}`).value,
    description: document.getElementById(`schoolDescription${index}`).value
  };

  saveData();
  showEditMessage(t("schoolSaved"));
}

function deleteSchool(index) {
  const confirmDelete = confirm("Delete this school card?");
  if (!confirmDelete) return;

  portfolioData.schoolArea.splice(index, 1);
  saveData();
  openPanel("school");
}

/* CAREER */

function renderCareer() {
  if (!isEditMode) {
    const cards = portfolioData.career
      .map(item => {
        return `
          <div class="card">
            <h3>${escapeHTML(item.title)}</h3>
            <p>${escapeHTML(item.description)}</p>
          </div>
        `;
      })
      .join("");

    return `
      <h1 class="panel-title">${t("careerTitle")}</h1>
      <p class="panel-subtitle">${t("careerSub")}</p>
      ${cards}
    `;
  }

  const editCards = portfolioData.career
    .map((item, index) => {
      return `
        <div class="card">
          <h3>${t("careerCard")} ${index + 1}</h3>

          <div class="form-group">
            <label>${t("title")}</label>
            <input id="careerTitle${index}" class="form-input" value="${escapeAttribute(item.title)}" />
          </div>

          <div class="form-group">
            <label>${t("description")}</label>
            <textarea id="careerDescription${index}" class="form-textarea">${escapeHTML(item.description)}</textarea>
          </div>

          <div class="action-row">
            <button class="save-btn" onclick="saveOneCareer(${index})">${t("save")}</button>
            <button class="delete-btn" onclick="deleteCareer(${index})">${t("delete")}</button>
          </div>
        </div>
      `;
    })
    .join("");

  return `
    <h1 class="panel-title">${t("careerTitle")}</h1>
    <span class="edit-mode-label">${t("editLabel")}</span>

    ${editCards}

    <button class="add-btn" onclick="addCareer()">${t("addCareer")}</button>
    <p id="editMessage"></p>
  `;
}

function addCareer() {
  portfolioData.career.push({
    title: "New Career Goal",
    description: "Write your career goal here."
  });

  saveData();
  openPanel("career");
}

function saveOneCareer(index) {
  portfolioData.career[index] = {
    title: document.getElementById(`careerTitle${index}`).value,
    description: document.getElementById(`careerDescription${index}`).value
  };

  saveData();
  showEditMessage(t("careerSaved"));
}

function deleteCareer(index) {
  const confirmDelete = confirm("Delete this career card?");
  if (!confirmDelete) return;

  portfolioData.career.splice(index, 1);
  saveData();
  openPanel("career");
}

/* ACHIEVEMENTS */

function renderAchievements() {
  if (!isEditMode) {
    const badges = portfolioData.achievements
      .map(achievement => {
        return `
          <div class="badge">
            <div class="badge-icon">${escapeHTML(achievement.icon)}</div>
            <h3>${escapeHTML(achievement.title)}</h3>
            <p>${escapeHTML(achievement.description)}</p>
          </div>
        `;
      })
      .join("");

    return `
      <h1 class="panel-title">${t("achievementTitle")}</h1>
      <p class="panel-subtitle">${t("achievementSub")}</p>

      <div class="badge-grid">
        ${badges}
      </div>
    `;
  }

  const editBadges = portfolioData.achievements
    .map((achievement, index) => {
      return `
        <div class="card">
          <h3>${t("achievement")} ${index + 1}</h3>

          <div class="form-group">
            <label>${t("iconEmoji")}</label>
            <input id="achievementIcon${index}" class="form-input" value="${escapeAttribute(achievement.icon)}" />
          </div>

          <div class="form-group">
            <label>${t("title")}</label>
            <input id="achievementTitle${index}" class="form-input" value="${escapeAttribute(achievement.title)}" />
          </div>

          <div class="form-group">
            <label>${t("description")}</label>
            <textarea id="achievementDescription${index}" class="form-textarea">${escapeHTML(achievement.description)}</textarea>
          </div>

          <div class="action-row">
            <button class="save-btn" onclick="saveOneAchievement(${index})">${t("save")}</button>
            <button class="delete-btn" onclick="deleteAchievement(${index})">${t("delete")}</button>
          </div>
        </div>
      `;
    })
    .join("");

  return `
    <h1 class="panel-title">${t("achievementTitle")}</h1>
    <span class="edit-mode-label">${t("editLabel")}</span>

    ${editBadges}

    <div class="action-row">
      <button class="add-btn" onclick="addAchievement()">${t("addAchievement")}</button>
      <button class="reset-btn" onclick="resetAllData()">${t("resetAll")}</button>
    </div>

    <p class="warning-message">${t("resetWarning")}</p>
    <p id="editMessage"></p>
  `;
}

function addAchievement() {
  portfolioData.achievements.push({
    icon: "⭐",
    title: "New Achievement",
    description: "Write achievement description here."
  });

  saveData();
  openPanel("achievements");
}

function saveOneAchievement(index) {
  portfolioData.achievements[index] = {
    icon: document.getElementById(`achievementIcon${index}`).value,
    title: document.getElementById(`achievementTitle${index}`).value,
    description: document.getElementById(`achievementDescription${index}`).value
  };

  saveData();
  showEditMessage(t("achievementSaved"));
}

function deleteAchievement(index) {
  const confirmDelete = confirm("Delete this achievement?");
  if (!confirmDelete) return;

  portfolioData.achievements.splice(index, 1);
  saveData();
  openPanel("achievements");
}

/* UI HELPERS */

function animateSkillBars() {
  const bars = document.querySelectorAll(".skill-fill");

  bars.forEach(bar => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width;
  });
}

function showEditMessage(message) {
  const editMessage = document.getElementById("editMessage");

  if (!editMessage) return;

  editMessage.textContent = message;
  editMessage.className = "success-message";

  setTimeout(() => {
    editMessage.textContent = "";
  }, 2000);
}

function escapeHTML(textValue) {
  return String(textValue)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeAttribute(textValue) {
  return String(textValue)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}