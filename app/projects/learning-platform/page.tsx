const chapterNav = [
  ["overview", "项目概览"],
  ["flow", "演示流程"],
  ["modules", "功能章节"],
  ["database", "数据库设计"],
  ["value", "项目价值"],
];

const enterpriseFlow = [
  ["登录入口", "管理员进入平台"],
  ["数据全景", "46 个数据库对象总览"],
  ["业务管理", "学员、课程、考试、培训任务"],
  ["数据库展示", "表、视图、存储过程、触发器"],
  ["运营洞察", "大屏与统计报表辅助决策"],
];

const featureChapters = [
  {
    title: "业务管理层",
    desc: "围绕企业培训的真实操作展开，包含学员、课程、考试和培训任务，能体现系统不是孤立页面，而是完整业务流程。",
    images: [
      { src: "/project-assets/enterprise-student-manager.png", label: "学员管理", note: "管理账号、岗位、状态和导入导出。" },
      { src: "/project-assets/enterprise-course-manager.png", label: "课程管理", note: "维护课程目录、分类和上下架状态。" },
      { src: "/project-assets/learning-platform-exams.png", label: "考试管理", note: "配置考试、及格线、成绩和答卷入口。" },
      { src: "/project-assets/enterprise-training-tasks.png", label: "培训任务", note: "按岗位派发任务并跟踪完成进度。" },
    ],
  },
  {
    title: "数据库展示层",
    desc: "把课程设计里最能体现数据库能力的部分单独展示出来，包括表结构、统计视图、存储过程和触发器规则。",
    images: [
      { src: "/project-assets/enterprise-table-manager.png", label: "数据表管理", note: "查看字段、约束、关联表和记录数。" },
      { src: "/project-assets/enterprise-view-center.png", label: "视图展示中心", note: "展示统计查询、数据脱敏和异常检测视图。" },
      { src: "/project-assets/enterprise-procedure-console.png", label: "存储过程控制台", note: "封装批量派发、统计归档等业务过程。" },
      { src: "/project-assets/enterprise-trigger-center.png", label: "触发器演示中心", note: "展示打卡联动、防作弊检测和权限拦截。" },
    ],
  },
];

function ProjectShot({ src, label, note }: { src: string; label: string; note: string }) {
  return (
    <figure className="screen-card">
      <img src={src} alt={label} />
      <figcaption>
        <strong>{label}</strong>
        <span>{note}</span>
      </figcaption>
    </figure>
  );
}

export default function LearningPlatformPage() {
  return (
    <main className="detail-shell">
      <aside className="detail-nav" aria-label="项目章节目录">
        <a className="back-link" href="/#projects">返回作品集</a>
        <h1>企业在线学习平台</h1>
        <p>数据库课程设计 · 学习运营与数据库展示系统</p>
        <nav>
          {chapterNav.map(([href, label]) => (
            <a href={`#${href}`} key={href}>
              {label}
            </a>
          ))}
        </nav>
      </aside>

      <div className="detail-content">
        <section className="detail-hero" id="overview">
          <div>
            <p className="eyebrow">Case 01 · Database Course Design</p>
            <h2>把企业培训业务做成可演示、可理解的系统项目</h2>
            <p>
              这个项目不是单纯的后台管理界面，而是把企业学习场景拆成“业务管理”和“数据库支撑”两条线：
              一边管理学员、课程、考试和培训任务，一边展示表、视图、存储过程、触发器如何让数据流动起来。
            </p>
            <div className="detail-actions">
              <a className="primary" href="#flow">查看演示流程</a>
              <a className="secondary" href="#modules">浏览功能章节</a>
            </div>
          </div>
          <figure className="hero-shot">
            <img src="/project-assets/enterprise-data-overview.png" alt="企业在线学习平台数据全景" />
            <figcaption>数据全景总览：把 46 个数据库对象可视化呈现出来。</figcaption>
          </figure>
        </section>

        <section className="detail-section" id="flow">
          <div className="chapter-title">
            <p className="eyebrow">Interactive Walkthrough</p>
            <h2>演示流程</h2>
            <p>这段动画用来告诉访问者：这个项目从哪里进入、处理什么业务、数据库能力体现在哪里。</p>
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

          <div className="screen-rail" aria-label="主要页面截图导览">
            <ProjectShot src="/project-assets/learning-platform-login.png" label="登录入口" note="先建立管理员进入平台的使用场景。" />
            <ProjectShot src="/project-assets/enterprise-data-overview.png" label="数据全景" note="快速说明系统背后有哪些数据库对象。" />
            <ProjectShot src="/project-assets/enterprise-dashboard.png" label="可视化大屏" note="用图表呈现运营状态和学习趋势。" />
          </div>
        </section>

        <section className="detail-section" id="modules">
          <div className="chapter-title">
            <p className="eyebrow">Feature Chapters</p>
            <h2>功能章节</h2>
            <p>图片不再平铺堆砌，而是按模块组织。每一章先讲这组页面解决什么问题，再展示关键截图。</p>
          </div>

          {featureChapters.map((chapter) => (
            <article className="feature-chapter" key={chapter.title}>
              <div className="feature-copy">
                <h3>{chapter.title}</h3>
                <p>{chapter.desc}</p>
              </div>
              <div className="screen-grid">
                {chapter.images.map((image) => (
                  <ProjectShot src={image.src} label={image.label} note={image.note} key={image.src} />
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="detail-section split-section" id="database">
          <div className="chapter-title">
            <p className="eyebrow">Database Design</p>
            <h2>数据库设计重点</h2>
            <p>
              数据库部分是这个项目最值得讲清楚的技术点：不仅有表结构，还通过视图、存储过程和触发器把业务规则固化到数据层。
            </p>
          </div>
          <div className="metric-grid">
            <div><strong>16</strong><span>核心数据表</span></div>
            <div><strong>10</strong><span>统计与展示视图</span></div>
            <div><strong>10</strong><span>业务存储过程</span></div>
            <div><strong>10</strong><span>自动化触发器</span></div>
          </div>
        </section>

        <section className="detail-section value-section" id="value">
          <p className="eyebrow">Project Value</p>
          <h2>这个项目能说明什么</h2>
          <p>
            它能展示我对“系统型课程项目”的理解：不只是完成页面和代码，而是把业务场景、数据库结构、功能模块和展示表达连起来。
            对外展示时，访问者可以先理解项目整体，再沿着章节看到具体功能和技术实现。
          </p>
          <a className="primary" href="/#projects">回到项目目录</a>
        </section>
      </div>
    </main>
  );
}
