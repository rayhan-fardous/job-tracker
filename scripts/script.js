let bdJobs = [
  {
    id: 1,
    company: "Pathao",
    position: "Frontend Engineer (React)",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "BDT 18,00,000 - 25,00,000 / year",
    status: "not applied",
    description:
      "Build and maintain scalable web interfaces using React. Work closely with product and design teams on high-traffic platforms.",
  },
  {
    id: 2,
    company: "bKash Limited",
    position: "Backend Software Engineer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "BDT 20,00,000 - 30,00,000 / year",
    status: "not applied",
    description:
      "Develop secure and high-performance backend services using Node.js and Java for large-scale fintech systems.",
  },
  {
    id: 3,
    company: "Brain Station 23",
    position: "Full Stack Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "BDT 15,00,000 - 22,00,000 / year",
    status: "not applied",
    description:
      "Work across frontend and backend technologies to deliver enterprise-grade software solutions for global clients.",
  },
  {
    id: 4,
    company: "TigerIT Bangladesh",
    position: "DevOps Engineer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "BDT 18,00,000 - 26,00,000 / year",
    status: "not applied",
    description:
      "Manage cloud infrastructure, CI/CD pipelines, and system reliability using AWS, Docker, and Kubernetes.",
  },
  {
    id: 5,
    company: "ShopUp",
    position: "Data Analyst",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "BDT 14,00,000 - 20,00,000 / year",
    status: "not applied",
    description:
      "Analyze large datasets to generate insights that drive business decisions across commerce and logistics platforms.",
  },
  {
    id: 6,
    company: "Enosis Solutions",
    position: "QA Automation Engineer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "BDT 12,00,000 - 18,00,000 / year",
    status: "not applied",
    description:
      "Design and implement automated testing frameworks to ensure software quality across multiple products.",
  },
  {
    id: 7,
    company: "BJIT Group",
    position: "Mobile App Developer (Flutter)",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "BDT 16,00,000 - 23,00,000 / year",
    status: "not applied",
    description:
      "Develop cross-platform mobile applications using Flutter for international clients and enterprise products.",
  },
  {
    id: 8,
    company: "Kona Software Lab",
    title: "Machine Learning Engineer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "BDT 22,00,000 - 32,00,000 / year",
    status: "not applied",
    description:
      "Build and deploy machine learning models focused on fintech, data security, and intelligent automation.",
  },
];

let currentTab = "all";

const jobsContainer = document.getElementById("jobs-container");
const emptyContainer = document.getElementById("empty-container");
const total = document.getElementById("total");
const interview = document.getElementById("interview");
const rejected = document.getElementById("rejected");
const jobsCount = document.getElementById("jobs-count");
const tabButtons = document.querySelectorAll(".tab-btn");

function init(){
  renderJobs();
  updateStats();
  setupEventListeners();
}

function renderJobs(){
  jobsContainer.innerHTML = "";

  const filteredJobs = bdJobs.filter(function(job){
    if(currentTab === "all") return true;
    return job.status === currentTab;
  });

  jobsCount.textContent = filteredJobs.length;

  if(filteredJobs.length === 0){
    jobsContainer.classList.add("hidden");
    emptyContainer.classList.remove("hidden");
    emptyContainer.classList.add("flex");
  } else{
    jobsContainer.classList.remove("hidden");
    emptyContainer.classList.add("hidden");
    emptyContainer.classList.remove("flex");
  

    filteredJobs.forEach(function(job){
      const card = document.createElement("div");
      card.className = "job-card bg-white rounded-lg p-5 md:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col gap-2 relative";

      let badgeText = "NOT APPLIED";
      let badgeClass = "bg-yellow-100/70 text-orange-500";

      if(job.status === "interview"){
        badgeText = "INTERVIEWING";
        badgeClass = "bg-emerald-50 text-emerald-600 border border-emerald-100";
      }else if(job.status === "rejected"){
        badgeText = "REJECTED";
        badgeClass = "bg-red-50 text-red-600 border border-red-100";
      }

      const interviewBtnClass = 
        job.status === "interview"
          ? "bg-emerald-50 text-emerald-600 border-green-500 font-semibold"
          : "bg-white text-emerald-500 border-green-300 hover:bg-emerald-50";

      const rejectedBtnClass =
        job.status === "rejected"
          ? "bg-red-50 text-red-600 border-red-500 font-semibold"
          : "bg-white text-red-400 border-red-300 hover:bg-red-50";

      card.innerHTML = `<div class="flex justify-between items-start">
                    <h3 class="font-bold text-[#1e293b] text-base md:text-lg">${job.company}</h3>
                    <button class="delete-btn text-slate-400 hover:text-red-500 transition-colors p-1" data-id="${job.id}" title="Delete Job">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
                
                <p class="text-slate-500 text-[13px] md:text-sm -mt-2">${job.position}</p>
                
                <div class="flex flex-wrap items-center gap-1.5 md:gap-2 text-[11px] md:text-xs text-slate-400 mt-1 mb-2">
                    <span>${job.location}</span>
                    <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>${job.type}</span>
                    <span class="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>${job.salary}</span>
                </div>
                
                <div class="mt-1 mb-2 text-[10px] font-bold tracking-wider inline-flex w-fit px-2.5 py-1 rounded-sm uppercase ${badgeClass}">
                    ${badgeText}
                </div>
                
                <p class="text-[14px] text-slate-600 mb-2 leading-relaxed">
                    ${job.description}
                </p>
                
                <div class="flex gap-3 mt-2">
                    <button class="action-btn px-3 py-1 text-[11px] rounded-sm border transition-colors uppercase font-medium tracking-wide ${interviewBtnClass}" data-action="interview" data-id="${job.id}">
                        Interview
                    </button>
                    <button class="action-btn px-3 py-1 text-[11px] rounded-sm border transition-colors uppercase font-medium tracking-wide ${rejectedBtnClass}" data-action="rejected" data-id="${job.id}">
                        Rejected
                    </button>
                </div>`;
      jobsContainer.appendChild(card);
    });
  }
}

function updateStats(){
  total.textContent = bdJobs.length;
  interview.textContent = bdJobs.filter(function (j) {
    return j.status === "interview";
  }).length;
  rejected.textContent = bdJobs.filter(function (j) {
    return j.status === "rejected";
  }).length;
}

function setupEventListeners(){
  tabButtons.forEach(function(btn){
    btn.addEventListener("click", function(e){
      tabButtons.forEach(function(b){
        b.classList.remove("bg-blue-500", "text-white", "border-blue-500");
        b.classList.add("bg-white", "text-slate-500", "border-slate-200");
      });
      e.target.classList.remove(
        "bg-white",
        "text-slate-500",
        "border-slate-200",
      );
      e.target.classList.add(
        "bg-blue-500", 
        "text-white", 
        "border-blue-500",
      );

      currentTab = e.target.dataset.tab;
      renderJobs();
    });
  });

  jobsContainer.addEventListener("click", function (e) {
    const actionBtn = e.target.closest(".action-btn");
    const deleteBtn = e.target.closest(".delete-btn");

    if (actionBtn) {
      const action = actionBtn.dataset.action;
      const id = parseInt(actionBtn.dataset.id, 10);
      let jobIndex = -1;

      for (let i = 0; i < bdJobs.length; i++) {
        if (bdJobs[i].id === id) {
          jobIndex = i;
          break;
        }
      }

      if (jobIndex > -1) {
        bdJobs[jobIndex].status = action;
        updateStats();
        renderJobs();
      }
    }

    if (deleteBtn) {
      const id = parseInt(deleteBtn.dataset.id, 10);
      let jobIndex = -1;

      for (let i = 0; i < bdJobs.length; i++) {
        if (bdJobs[i].id === id) {
          jobIndex = i;
          break;
        }
      }

      if (jobIndex > -1) {
        bdJobs.splice(jobIndex, 1);
        updateStats();
        renderJobs();
      }
    }
  });
}

init();