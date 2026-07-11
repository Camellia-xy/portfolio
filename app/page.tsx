const navItems = [
  ["top", "首页"],
  ["projects", "项目故事"],
  ["author", "作者简介"],
  ["contact", "联系"],
];

const enterpriseFlow = [
  ["登录入口", "管理员进入平台"],
  ["数据全景", "46 个数据库对象总览"],
  ["业务管理", "学员、课程、考试、培训任务"],
  ["数据库展示", "表、视图、存储过程、触发器"],
  ["运营洞察", "大屏与统计报表辅助决策"],
];

const enterpriseScreens = [
  { src: "/project-assets/learning-platform-login.png", label: "登录入口", note: "明确管理员进入场景，让系统从第一眼就有产品感。" },
  { src: "/project-assets/enterprise-data-overview.png", label: "数据全景", note: "展示 16 张表、10 个视图、10 个存储过程和 10 个触发器。" },
  { src: "/project-assets/enterprise-dashboard.png", label: "可视化大屏", note: "用图表呈现学习活跃、考试及格率和任务完成率。" },
  { src: "/project-assets/enterprise-student-manager.png", label: "学员管理", note: "维护账号、岗位、状态，并支持导入与报表导出。" },
  { src: "/project-assets/enterprise-course-manager.png", label: "课程管理", note: "管理课程目录、分类、上架状态与课程资源。" },
  { src: "/project-assets/learning-platform-exams.png", label: "考试管理", note: "配置考试、及格线、发布状态，并查看成绩与答卷。" },
  { src: "/project-assets/enterprise-training-tasks.png", label: "培训任务", note: "按岗位派发任务，跟踪参与人数和完成进度。" },
  { src: "/project-assets/enterprise-table-manager.png", label: "数据表管理", note: "查看字段定义、约束、关联表和记录数量。" },
  { src: "/project-assets/enterprise-view-center.png", label: "视图展示中心", note: "展示统计查询、数据脱敏、异常检测等多维度视图。" },
  { src: "/project-assets/enterprise-procedure-console.png", label: "存储过程控制台", note: "呈现业务过程参数、调用入口和自动化流程封装。" },
  { src: "/project-assets/enterprise-trigger-center.png", label: "触发器演示中心", note: "展示打卡联动、权限拦截、防作弊检测等规则逻辑。" },
];

const projects = [
  {
    id: "learning-platform",
    title: "企业在线学习平台",
    category: "数据库课程设计",
    period: "2026",
    oneLine: "把企业培训中的学员、课程、考试、任务进度和数据库对象组织成一套可演示的学习运营系统。",
    why: "这个项目来自数据库课程设计。它不只是写几张表，而是把企业培训场景拆成业务管理和数据库展示两条线：前台能管理学员、课程、考试与培训任务，后台能展示表、视图、存储过程和触发器如何支撑真实业务。",
    structure: ["前端页面负责产品化展示与操作入口", "后端接口负责业务调用和 Mock 服务演示", "MySQL 负责表、视图、存储过程与触发器规则"],
    functions: ["学员、课程、考试与培训任务管理", "学习运营可视化大屏与统计报表", "数据库表、视图、存储过程和触发器展示"],
    role: "我重点整理数据库结构、业务模块关系和页面展示逻辑，把原本分散的课程设计内容包装成一个别人能快速看懂的系统型项目。",
    result: "项目形成了可运行的前端演示、数据库对象展示、业务管理界面和课程设计材料。它能体现我对数据库设计、业务拆解、前后端协作和项目表达的综合理解。",
    tags: ["Spring Boot", "MyBatis", "React", "MySQL"],
    visuals: [
      { src: "/project-assets/enterprise-data-overview.png", label: "数据库全景总览" },
      { src: "/project-assets/learning-platform-exams.png", label: "考试管理核心页面" },
      { src: "/project-assets/enterprise-dashboard.png", label: "学习运营可视化大屏" },
    ],
  },
  {
    id: "fuwuwaibao",
    title: "泛雅 AI 智课系统",
    category: "服务外包创新创业大赛",
    period: "2026",
    oneLine: "我们基于 GitHub 协作开发的 AI 教学平台项目，获得区域赛二等奖，并已进入国赛三等奖成果阶段。",
    why: "这个项目来自中国大学生服务外包创新创业大赛。它比普通课程作业更适合作为重点展示，因为它有真实团队协作、完整工程结构、比赛成果和可继续补充的产品材料。",
    structure: ["Go 后端服务负责业务接口与数据管理", "Python AI 引擎负责课件解析、讲稿生成和问答能力", "Vue 前端负责学生端、教师端等交互页面"],
    functions: ["PDF/PPTX 课件解析", "AI 讲稿生成与问答", "教学平台多端协作"],
    role: "我参与团队协作开发和项目材料整理，后续会继续补充我负责的具体模块、提交记录、页面截图和比赛答辩材料。",
    result: "项目已在 GitHub 上协作开发，公开仓库包含 backend、ai_engine、frontend、docs 等完整目录；目前可展示区域赛二等奖证书，国赛三等奖证书待正式发放后补充。",
    tags: ["Vue", "Go", "Python", "AI 教学平台", "GitHub 协作"],
    visuals: [
      { src: "/project-assets/fuwuwaibao-architecture.png", label: "泛雅 AI 智课系统架构图" },
    ],
  },
  {
    id: "isolet",
    title: "ISOLET 英文字母识别系统",
    category: "人工智能综合项目",
    period: "2026",
    oneLine: "使用 C 语言完成英文字母语音特征识别，并输出模型评估、混淆矩阵和算法对比结果。",
    why: "这个项目资料最完整：不仅有代码和报告，还有真实结果图。它适合展示我对实验流程、模型评估和结果表达的理解。",
    structure: ["读取 ISOLET 语音特征数据", "训练分类模型", "评估准确率与 Macro F1", "生成对比图和混淆矩阵"],
    functions: ["字母识别预测", "算法效果对比", "混淆矩阵与学习曲线分析"],
    role: "我整理了项目运行结果、指标含义和可视化图表，用它展示实验项目如何从代码变成可说明的成果。",
    result: "测试样本 1559 条，正确识别 1489 条，准确率约 95.51%，Macro F1 约 95.48%。",
    tags: ["C", "ISOLET", "分类模型", "模型评估"],
    visuals: [
      { src: "/project-assets/isolet-summary.png", label: "模型指标摘要" },
      { src: "/project-assets/isolet-algorithm-comparison.png", label: "算法对比结果" },
      { src: "/project-assets/isolet-confusion-matrix.png", label: "混淆矩阵" },
    ],
  },
  {
    id: "housing-price",
    title: "房价预测机器学习实验",
    category: "机器学习实验",
    period: "2026",
    oneLine: "用线性回归完成房价预测，并比较不同特征组合下的模型表现。",
    why: "这是一个把机器学习流程拆清楚的实验项目。重点不是模型多复杂，而是能完整说明数据处理、特征选择、模型训练和评估指标。",
    structure: ["读取并清洗房价数据", "划分训练集与测试集", "训练多组线性回归模型", "用 R2 对比预测表现"],
    functions: ["单特征回归", "多特征回归", "最优特征组合评估"],
    role: "我完成数据读取、清洗、训练集划分、模型训练和 R2 指标评估。",
    result: "我根据原始数据重新生成了预测值对比图和特征相关性图，用来解释模型表现。",
    tags: ["Python", "Pandas", "Scikit-learn", "线性回归"],
    visuals: [
      { src: "/project-assets/housing-regression-analysis.png", label: "模型结果与特征分析" },
    ],
  },
];

const skills = ["Python", "C++", "Java / Spring Boot", "React", "MySQL", "机器学习", "项目文档", "PPT 汇报"];

function ProjectImage({ src, label }: { src: string; label: string }) {
  return (
    <figure className="project-image">
      <img src={src} alt={label} />
      <figcaption>{label}</figcaption>
    </figure>
  );
}

function EnterpriseInteractiveDemo() {
  return (
    <section className="enterprise-demo" aria-label="企业在线学习平台交互演示">
      <div className="demo-head">
        <p className="eyebrow">Interactive Walkthrough</p>
        <h4>从登录到数据库规则的业务闭环</h4>
        <p>
          这组截图按真实使用路径组织：先进入平台，再管理业务对象，最后展示数据库视图、存储过程和触发器如何支撑运营决策。
          你可以横向滚动查看每个页面，整体更像在看一个完整产品，而不是图片堆叠。
        </p>
      </div>

      <div className="flow-track">
        {enterpriseFlow.map(([title, desc], index) => (
          <div className="flow-step" style={{ ["--i" as string]: index }} key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{title}</strong>
            <p>{desc}</p>
          </div>
        ))}
      </div>

      <div className="screen-rail" aria-label="企业在线学习平台截图导览">
        {enterpriseScreens.map((screen) => (
          <figure className="screen-card" key={screen.src}>
            <img src={screen.src} alt={screen.label} />
            <figcaption>
              <strong>{screen.label}</strong>
              <span>{screen.note}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="portfolio-shell">
      <aside className="side-nav" aria-label="页面目录">
        <a className="side-brand" href="#top">
          <span>XY</span>
          <strong>向洋作品集</strong>
        </a>
        <nav>
          {navItems.map(([href, label]) => (
            <a href={`#${href}`} key={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="side-note">
          <span>HDU</span>
          <p>杭州电子科技大学 · 大二</p>
        </div>
      </aside>

      <div className="page-content">
        <section className="hero" id="top">
          <div className="mobile-topbar">
            <a className="side-brand" href="#top">
              <span>XY</span>
              <strong>向洋作品集</strong>
            </a>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">杭州电子科技大学 · 大二 · 项目作品集</p>
              <h1>向洋</h1>
              <p className="hero-subtitle">在课程、实验和代码里，一点点把想法做成能展示的项目。</p>
              <p className="lead">
                我希望这个网站不是截图相册，而是一个能讲清楚项目整体、功能、意义和个人成长的作品集。
                图片会作为辅助说明，让内容更直观、更好看，也更容易被理解。
              </p>
              <div className="hero-actions">
                <a className="primary" href="#projects">阅读项目故事</a>
                <a className="secondary" href="#author">查看作者简介</a>
              </div>
            </div>

            <section className="hero-preview" aria-label="作品集预览">
              <div className="preview-header">
                <span>Project Story Board</span>
                <b>HDU sophomore</b>
              </div>
              <div className="status-card">
                <span>当前阶段</span>
                <strong>从课程实践走向项目表达</strong>
                <p>把代码、文档、PPT 和截图整理成别人能快速理解的项目故事。</p>
              </div>
              <div className="story-map">
                <span>背景</span>
                <span>结构</span>
                <span>功能</span>
                <span>成果</span>
              </div>
            </section>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-title">
            <p className="eyebrow">Project Stories</p>
            <h2>项目故事</h2>
            <p>
              首页只作为项目目录。点进具体项目后，再按章节展示背景、功能、技术结构、截图演示和项目意义。
              这样别人先快速浏览你的作品，再选择感兴趣的项目深入阅读。
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-entry" id={project.id} key={project.id}>
                <ProjectImage src={project.visuals[0].src} label={project.visuals[0].label} />
                <div className="project-entry-body">
                  <p className="case-index">Case 0{index + 1}</p>
                  <div className="card-meta">
                    <span>{project.category}</span>
                    <time>{project.period}</time>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.oneLine}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {project.id === "learning-platform" && (
                    <a className="primary project-link" href="/projects/learning-platform">
                      查看项目章节
                    </a>
                  )}
                  {project.id === "fuwuwaibao" && (
                    <a className="primary project-link" href="/projects/fuwuwaibao">
                      查看比赛项目
                    </a>
                  )}
                  {!["learning-platform", "fuwuwaibao"].includes(project.id) && (
                    <span className="secondary project-link muted-link">后续整理详情</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="author-page" id="author">
          <div className="author-card">
            <div className="author-photo">
              <span>XY</span>
              <small>HDU</small>
            </div>
            <div>
              <p className="eyebrow">Author Profile</p>
              <h2>作者简介</h2>
              <p>
                我是向洋，目前就读于杭州电子科技大学，大二。现在正在通过课程设计、实验项目和编程实践，
                积累从“能写出来”到“能讲清楚、能展示出来”的项目能力。
              </p>
              <p>
                我希望这个作品集能记录我的成长路线：哪些项目是课程推动我完成的，哪些技术是我主动去试的，
                哪些结果值得留下来继续优化。这里会持续补充我的项目、比赛经历、GitHub 协作记录和更完整的个人介绍。
              </p>
              <div className="profile-links">
                <a href="https://github.com/Camellia-xy" target="_blank" rel="noreferrer">
                  GitHub · Camellia-xy
                </a>
                <a href="tel:19032570319">电话 · 19032570319</a>
              </div>
            </div>
          </div>

          <div className="author-panels">
            <section>
              <h3>能力方向</h3>
              <div className="skill-grid">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </section>
            <section>
              <h3>正在形成的项目表达</h3>
              <ul>
                <li>把项目背景和解决问题讲清楚</li>
                <li>突出自己负责的模块和实际贡献</li>
                <li>用截图、文档和成果图增强可信度</li>
                <li>把课程项目、比赛经历和个人项目整理成统一作品集</li>
              </ul>
            </section>
          </div>
        </section>

        <section className="contact" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>欢迎了解我的项目经历</h2>
            <p>
              如果你想进一步了解我的项目经历、比赛作品或协作开发记录，可以通过下面的方式联系我。
            </p>
            <div className="contact-methods">
              <a href="https://github.com/Camellia-xy" target="_blank" rel="noreferrer">
                <span>GitHub</span>
                <strong>github.com/Camellia-xy</strong>
              </a>
              <a href="tel:19032570319">
                <span>Phone</span>
                <strong>19032570319</strong>
              </a>
            </div>
          </div>
          <a className="primary" href="#top">回到首页</a>
        </section>
      </div>
    </main>
  );
}
