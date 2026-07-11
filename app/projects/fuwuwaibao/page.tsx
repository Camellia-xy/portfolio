import DemoVideo from "./DemoVideo";

const chapterNav = [
  ["overview", "项目概览"],
  ["award", "比赛成果"],
  ["demo", "演示视频"],
  ["architecture", "系统架构"],
  ["collaboration", "协作开发"],
  ["value", "项目价值"],
];

const techModules = [
  {
    title: "Go 后端服务",
    desc: "负责业务接口、数据管理、对象存储和服务整合，是平台稳定运行的核心支撑。",
    tags: ["Gin", "GORM", "Redis", "MinIO"],
  },
  {
    title: "Python AI 引擎",
    desc: "负责 PDF/PPTX 解析、讲稿生成、智能问答等 AI 能力，让平台从普通教学系统升级为智能教学助手。",
    tags: ["Python", "课件解析", "讲稿生成", "问答"],
  },
  {
    title: "Vue 前端应用",
    desc: "面向学生端、教师端等使用场景组织页面，让不同角色可以完成学习、备课、问答和资源管理。",
    tags: ["Vue", "学生端", "教师端", "交互页面"],
  },
];

const collaborationFacts = [
  ["公开仓库", "SOLECA794/FuWuWaiBao"],
  ["协作方式", "GitHub 多人协作开发"],
  ["提交记录", "仓库公开页面显示 181 次提交"],
  ["主要语言", "Vue、Go、Python、JavaScript"],
];

export default function FuWuWaiBaoPage() {
  return (
    <main className="detail-shell">
      <aside className="detail-nav" aria-label="项目章节目录">
        <a className="back-link" href="/#projects">返回作品集</a>
        <h1>泛雅 AI 智课系统</h1>
        <p>服务外包创新创业大赛 · AI 教学平台</p>
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
            <p className="eyebrow">Case 02 · Competition Project</p>
            <h2>一个用 GitHub 协作完成的 AI 教学平台比赛项目</h2>
            <p>
              这是中国大学生服务外包创新创业大赛团队作品。项目围绕“AI + 教学”展开，
              用 Go 后端、Python AI 引擎和 Vue 前端组合出一套泛雅 AI 智课系统。
            </p>
            <div className="detail-actions">
              <a className="primary" href="#award">查看比赛成果</a>
              <a className="secondary" href="https://github.com/SOLECA794/FuWuWaiBao" target="_blank" rel="noreferrer">
                打开 GitHub 仓库
              </a>
            </div>
          </div>
          <figure className="hero-shot">
            <img src="/project-assets/fuwuwaibao-architecture.png" alt="泛雅 AI 智课系统架构图" />
            <figcaption>项目架构图：展示前端、后端、AI 引擎与基础服务之间的关系。</figcaption>
          </figure>
        </section>

        <section className="detail-section award-section" id="award">
          <div className="chapter-title">
            <p className="eyebrow">Award</p>
            <h2>比赛成果</h2>
            <p>
              项目在赛事评审中取得区域赛二等奖，并获得国赛三等奖成果。区域赛证书作为当前页面的正式成果材料展示。
            </p>
          </div>
          <div className="award-grid">
            <div className="award-card">
              <span>区域赛</span>
              <strong>二等奖</strong>
              <p>已提供证书 PDF，作为当前页面的正式成果材料。</p>
              <a className="secondary" href="/project-assets/fuwuwaibao-regional-certificate.pdf" target="_blank" rel="noreferrer">
                查看证书 PDF
              </a>
            </div>
            <div className="award-card pending">
              <span>国赛</span>
              <strong>三等奖</strong>
              <p>国赛成果体现项目在完整性、创新性和应用价值上的进一步认可。</p>
            </div>
          </div>
          <iframe
            className="certificate-frame"
            src="/project-assets/fuwuwaibao-regional-certificate.pdf"
            title="服务外包区域赛二等奖证书"
          />
        </section>

        <section className="detail-section" id="demo">
          <div className="chapter-title">
            <p className="eyebrow">Product Demo</p>
            <h2>系统演示视频</h2>
            <p>
              演示视频呈现系统的真实运行过程，帮助访问者在阅读技术结构前先建立直观印象。
            </p>
          </div>
          <DemoVideo />
        </section>

        <section className="detail-section" id="architecture">
          <div className="chapter-title">
            <p className="eyebrow">Architecture</p>
            <h2>系统架构</h2>
            <p>
              这个项目的展示重点不是单个页面，而是完整工程能力：前端负责角色交互，后端负责业务服务，
              AI 引擎负责智能能力，基础服务负责数据与文件存储。
            </p>
          </div>
          <div className="module-grid">
            {techModules.map((module) => (
              <article className="module-card" key={module.title}>
                <h3>{module.title}</h3>
                <p>{module.desc}</p>
                <div className="tag-row">
                  {module.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="detail-section" id="collaboration">
          <div className="chapter-title">
            <p className="eyebrow">GitHub Collaboration</p>
            <h2>协作开发痕迹</h2>
            <p>
              这个项目不是单机练习，而是在 GitHub 上持续协作推进的比赛项目。公开仓库保留了工程结构、提交记录与团队协作痕迹。
            </p>
          </div>
          <div className="fact-grid">
            {collaborationFacts.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="detail-section value-section" id="value">
          <p className="eyebrow">Project Value</p>
          <h2>项目价值</h2>
          <p>
            泛雅 AI 智课系统体现了从需求场景、工程实现到比赛展示的完整实践链路。项目同时覆盖前端交互、后端服务、AI 能力接入和团队协作，
            适合作为作品集中展示综合开发能力与竞赛经历的重点项目。
          </p>
          <a className="primary" href="/#projects">回到项目目录</a>
        </section>
      </div>
    </main>
  );
}
