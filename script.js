// 网站数据
let websitesData = [];
let currentCategory = '全部';

// 默认数据作为后备方案
const defaultWebsitesData = [
  {
    "title": "凹凸工坊",
    "url": "https://www.autohanding.com",
    "description": "免费的在线AI手写模拟器，能将电子文档快速转换为逼真的手写稿图片，支持多种字体和纸张背景选择"
  },
  {
    "title": "iFixit",
    "url": "https://www.ifixit.com",
    "description": "知名的DIY维修指南网站，提供各种电子产品和设备的维修教程、拆解指南和零件销售"
  },
  {
    "title": "RAWGraphs",
    "url": "https://www.rawgraphs.io",
    "description": "开源的数据可视化工具，支持多种图表类型，帮助用户将数据转换为直观的可视化图表"
  },
  {
    "title": "Skyline Conference",
    "url": "https://skylineconference.org",
    "description": "体育会议官方网站，提供赛事信息、成绩、排名等体育相关内容"
  },
  {
    "title": "考试酷",
    "url": "https://www.examcoo.com",
    "description": "永久免费的在线考试系统，提供海量题库资源和在线考试功能，涵盖各类职业资格考试"
  },
  {
    "title": "国家高等教育智慧教育平台",
    "url": "https://higher.smartedu.cn",
    "description": "教育部主导的国家级在线开放课程平台，汇聚全国高校优质课程资源"
  },
  {
    "title": "国家智慧教育平台",
    "url": "https://www.zxx.edu.cn",
    "description": "教育部主办的全国性智慧教育平台，涵盖基础教育、职业教育、高等教育等各个学段"
  },
  {
    "title": "BdayRecap",
    "url": "https://bdayrecap.com",
    "description": "查看出生当天历史新闻的网站，基于纽约时报档案数据，展现出生当天的世界大事"
  },
  {
    "title": "ChinaTextbook",
    "url": "https://github.com/TapXWorld/ChinaTextbook",
    "description": "GitHub上的开源项目，免费提供国内小学到大学的PDF教材资源，支持多版本教材下载"
  },
  {
    "title": "DrivenListen",
    "url": "https://drivenlisten.com",
    "description": "在线虚拟旅行网站，结合高清街景视频和本地广播音频，让用户足不出户体验世界各地风情"
  },
  {
    "title": "iLovePDF",
    "url": "https://www.ilovepdf.com",
    "description": "全面的PDF处理工具，支持合并、拆分、转换格式、压缩等操作，完全免费使用"
  },
  {
    "title": "这b班上得值不值",
    "url": "https://worth-calculator.vercel.app",
    "description": "工作性价比计算器，通过输入薪资、工作时长等数据，评估工作的性价比和满意度"
  },
  {
    "title": "大盘云图",
    "url": "https://52etf.site",
    "description": "A股市场热力图工具，直观展示股票涨跌情况，帮助投资者快速了解市场动态"
  },
  {
    "title": "HullQin联机桌游",
    "url": "https://game.hullqin.cn",
    "description": "在线联机桌游平台，提供UNO、斗地主、五子棋等多人联机游戏，无需下载即可游玩"
  },
  {
    "title": "懒人Excel",
    "url": "https://www.lanrenexcel.com",
    "description": "Excel学习平台，提供函数公式、操作技巧、数据分析等教程，适合各水平用户学习"
  },
  {
    "title": "码上",
    "url": "https://ucloud.bupt.edu.cn/ezcoding",
    "description": "北邮开发的编程教学应用平台，基于大模型提供智能代码纠错和编程辅导功能"
  },
  {
    "title": "高速公路云实时监控",
    "url": "http://luodianyun.com",
    "description": "全国高速公路实时监控系统，提供各省份高速路况信息，帮助用户规划出行路线"
  },
  {
    "title": "千亿像素看中国",
    "url": "http://bigpixel.cn",
    "description": "超高像素全景图片网站，展示中国各大城市的千亿像素级全景图像，可放大观看细节"
  },
  {
    "title": "Convertio",
    "url": "https://convertio.co",
    "description": "在线文件格式转换工具，支持超过300种文件格式的相互转换，操作简单快速"
  },
  {
    "title": "Photopea",
    "url": "https://www.photopea.com",
    "description": "免费在线图片编辑器，功能类似Photoshop，支持PSD等多种格式，无需安装即可使用"
  },
  {
    "title": "33字幕图",
    "url": "https://zmt.agilestudio.cn",
    "description": "电影台词字幕拼图制作工具，可根据台词搜索电影片段并生成字幕拼图，适合社交媒体分享"
  },
  {
    "title": "SnapAny",
    "url": "https://snapany.com",
    "description": "在线视频图片下载工具，支持从1000多个平台解析下载视频和图片内容"
  },
  {
    "title": "ScribeHow",
    "url": "https://scribehow.com",
    "description": "AI驱动的流程文档生成工具，自动记录操作步骤并生成详细的操作指南和截图说明"
  },
  {
    "title": "书签地球",
    "url": "https://www.bookmarkearth.cn",
    "description": "浏览器书签共享平台，用户可以分享和发现优质网站书签，构建互联网资源导航社区"
  },
  {
    "title": "荣耀萤火开放素材库",
    "url": "https://pvp.icreate.qq.com",
    "description": "王者荣耀官方素材平台，提供英雄海报、游戏CG、音效等2万多种官方素材下载"
  },
  {
    "title": "TMailor",
    "url": "https://tmailor.com",
    "description": "临时邮箱生成器，提供一次性邮箱地址，保护真实邮箱免受垃圾邮件骚扰"
  },
  {
    "title": "Instructables",
    "url": "https://www.instructables.com",
    "description": "DIY制作教程分享社区，用户可分享各种手工制作、烹饪、电子等项目教程"
  },
  {
    "title": "食用手册",
    "url": "https://cook.yunyoujun.cn",
    "description": "智能菜谱推荐工具，根据现有食材和厨具推荐合适的菜谱，配有视频教程"
  },
  {
    "title": "Canva可画",
    "url": "https://www.canva.cn",
    "description": "在线设计平台，提供丰富的模板和素材，无需专业技能即可制作精美的设计作品"
  },
  {
    "title": "PaperMe",
    "url": "https://paperme.toolooz.com",
    "description": "自定义打印纸生成器，可制作各种格式的笔记本、草稿纸、乐谱纸等，支持PDF导出"
  },
  {
    "title": "Freesound",
    "url": "https://freesound.org",
    "description": "协作式音效分享平台，提供超过50万种Creative Commons授权的音频素材"
  },
  {
    "title": "MuscleWiki",
    "url": "https://musclewiki.com",
    "description": "健身指导网站，通过交互式身体地图精准定位肌肉群，提供详细的锻炼指导"
  }
];

// DOM 元素
const searchInput = document.getElementById('searchInput');
const websitesContainer = document.getElementById('websitesContainer');
const themeToggle = document.getElementById('themeToggle');
const categoriesContainer = document.getElementById('categoriesContainer');
const totalWebsitesSpan = document.getElementById('totalWebsites');

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 加载网站数据
    loadWebsitesData();
    
    // 设置搜索事件监听器
    setupSearch();
    
    // 设置主题切换
    setupThemeToggle();
    
    // 应用保存的主题
    applySavedTheme();
    
    // 添加输入框动画
    setupInputAnimation();
});

// 加载网站数据
async function loadWebsitesData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        websitesData = await response.json();
        renderWebsites(websitesData);
        renderCategories();
        updateStats();
    } catch (error) {
        console.error('加载数据失败，使用默认数据:', error);
        // 如果加载失败，使用默认数据
        websitesData = defaultWebsitesData;
        renderWebsites(websitesData);
        renderCategories();
        updateStats();
    }
}

// 渲染网站卡片
function renderWebsites(websites) {
    websitesContainer.innerHTML = '';
    
    if (websites.length === 0) {
        websitesContainer.innerHTML = '<p class="no-results">没有找到匹配的网站 🙁</p>';
        return;
    }
    
    // 创建网站数据的副本并随机打乱顺序
    const shuffledWebsites = [...websites];
    shuffleArray(shuffledWebsites);
    
    shuffledWebsites.forEach((website, index) => {
        const websiteCard = document.createElement('div');
        websiteCard.className = 'website-card';
        
        // 添加延迟动画效果
        websiteCard.style.animationDelay = `${index * 0.1}s`;
        websiteCard.style.animation = 'fadeInUp 0.6s ease forwards';
        websiteCard.style.opacity = '0';
        
        // 获取网站对应的图标
        const icon = getWebsiteIcon(website.title, website.description);
        
        websiteCard.innerHTML = `
            <h2><span class="icon">${icon}</span> ${escapeHtml(website.title)}</h2>
            <div class="url">
                <a href="${website.url}" target="_blank">🔗 ${escapeHtml(website.url)}</a>
            </div>
            <div class="description">
                📝 ${escapeHtml(website.description)}
            </div>
            <div class="actions">
                <button class="visit-btn" onclick="window.open('${website.url}', '_blank')">
                    <span>访问网站</span> 🌐
                </button>
            </div>
        `;
        
        websitesContainer.appendChild(websiteCard);
    });
}

// 根据网站标题和描述获取对应的图标
function getWebsiteIcon(title, description) {
    const titleLower = title.toLowerCase();
    const descLower = description.toLowerCase();
    
    // 教育类
    if (titleLower.includes('教育') || titleLower.includes('学校') || titleLower.includes('大学') || 
        titleLower.includes('学堂') || titleLower.includes('教材') || titleLower.includes('课程') ||
        descLower.includes('教育') || descLower.includes('学习') || descLower.includes('教学')) {
        return '📚';
    }
    
    // 工具类
    if (titleLower.includes('工具') || titleLower.includes('pdf') || titleLower.includes('转换') ||
        titleLower.includes('编辑') || titleLower.includes('处理') || titleLower.includes('converter') ||
        descLower.includes('工具') || descLower.includes('处理') || descLower.includes('编辑')) {
        return '🛠️';
    }
    
    // 设计类
    if (titleLower.includes('设计') || titleLower.includes('canva') || titleLower.includes('photo') ||
        descLower.includes('设计') || descLower.includes('模板') || descLower.includes('素材')) {
        return '🎨';
    }
    
    // 游戏类
    if (titleLower.includes('游戏') || titleLower.includes('桌游') || titleLower.includes('王者') ||
        descLower.includes('游戏') || descLower.includes('桌游')) {
        return '🎮';
    }
    
    // 健康/健身类
    if (titleLower.includes('健身') || titleLower.includes('健康') || titleLower.includes('运动') ||
        descLower.includes('健身') || descLower.includes('锻炼') || descLower.includes('健康')) {
        return '💪';
    }
    
    // 音频/音乐类
    if (titleLower.includes('音乐') || titleLower.includes('sound') || titleLower.includes('音频') ||
        descLower.includes('音乐') || descLower.includes('音频') || descLower.includes('sound')) {
        return '🎵';
    }
    
    // 视频/图片类
    if (titleLower.includes('视频') || titleLower.includes('图片') || titleLower.includes('image') ||
        titleLower.includes('video') || descLower.includes('视频') || descLower.includes('图片')) {
        return '🎬';
    }
    
    // 交通/地图类
    if (titleLower.includes('地图') || titleLower.includes('导航') || titleLower.includes('交通') ||
        titleLower.includes('高速') || descLower.includes('地图') || descLower.includes('导航')) {
        return '🗺️';
    }
    
    // 办公/效率类
    if (titleLower.includes('excel') || titleLower.includes('办公') || titleLower.includes('效率') ||
        descLower.includes('excel') || descLower.includes('办公') || descLower.includes('效率')) {
        return '📊';
    }
    
    // 默认图标
    return '🌐';
}

// Fisher-Yates 洗牌算法，用于随机打乱数组
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 渲染分类选项
function renderCategories() {
    // 定义分类
    const categories = [
        '全部',
        '教育学习',
        '工具软件',
        '设计素材',
        '娱乐游戏',
        '健康运动',
        '影音媒体',
        '办公效率',
        '其他'
    ];
    
    categoriesContainer.innerHTML = '';
    
    categories.forEach(category => {
        const categoryBtn = document.createElement('button');
        categoryBtn.className = `category-btn ${currentCategory === category ? 'active' : ''}`;
        categoryBtn.textContent = category;
        categoryBtn.addEventListener('click', () => {
            currentCategory = category;
            renderCategories();
            filterWebsites();
        });
        categoriesContainer.appendChild(categoryBtn);
    });
}

// 根据分类过滤网站
function filterWebsites() {
    const searchTerm = searchInput.value.toLowerCase();
    
    let filteredWebsites = websitesData;
    
    // 根据分类过滤
    if (currentCategory !== '全部') {
        filteredWebsites = websitesData.filter(website => {
            const titleLower = website.title.toLowerCase();
            const descLower = website.description.toLowerCase();
            
            switch (currentCategory) {
                case '教育学习':
                    return titleLower.includes('教育') || titleLower.includes('学校') || 
                           titleLower.includes('大学') || titleLower.includes('学堂') || 
                           titleLower.includes('教材') || titleLower.includes('课程') ||
                           titleLower.includes('考试') || titleLower.includes('学习') ||
                           descLower.includes('教育') || descLower.includes('学习') || 
                           descLower.includes('教学') || descLower.includes('课程');
                case '工具软件':
                    return titleLower.includes('工具') || titleLower.includes('pdf') || 
                           titleLower.includes('转换') || titleLower.includes('编辑') || 
                           titleLower.includes('处理') || titleLower.includes('converter') ||
                           titleLower.includes('软件') || titleLower.includes('app') ||
                           descLower.includes('工具') || descLower.includes('处理') || 
                           descLower.includes('编辑') || descLower.includes('软件');
                case '设计素材':
                    return titleLower.includes('设计') || titleLower.includes('canva') || 
                           titleLower.includes('photo') || titleLower.includes('素材') ||
                           titleLower.includes('模板') || titleLower.includes('字体') ||
                           descLower.includes('设计') || descLower.includes('模板') || 
                           descLower.includes('素材') || descLower.includes('创意');
                case '娱乐游戏':
                    return titleLower.includes('游戏') || titleLower.includes('桌游') || 
                           titleLower.includes('王者') || titleLower.includes('娱乐') ||
                           descLower.includes('游戏') || descLower.includes('桌游') || 
                           descLower.includes('娱乐');
                case '健康运动':
                    return titleLower.includes('健身') || titleLower.includes('健康') || 
                           titleLower.includes('运动') || titleLower.includes('锻炼') ||
                           descLower.includes('健身') || descLower.includes('锻炼') || 
                           descLower.includes('健康') || descLower.includes('运动');
                case '影音媒体':
                    return titleLower.includes('音乐') || titleLower.includes('sound') || 
                           titleLower.includes('音频') || titleLower.includes('视频') ||
                           titleLower.includes('图片') || titleLower.includes('image') ||
                           titleLower.includes('video') || titleLower.includes('电影') ||
                           descLower.includes('音乐') || descLower.includes('音频') || 
                           descLower.includes('sound') || descLower.includes('视频') ||
                           descLower.includes('图片') || descLower.includes('电影');
                case '办公效率':
                    return titleLower.includes('excel') || titleLower.includes('办公') || 
                           titleLower.includes('效率') || titleLower.includes('文档') ||
                           titleLower.includes('表格') || titleLower.includes('数据') ||
                           descLower.includes('excel') || descLower.includes('办公') || 
                           descLower.includes('效率') || descLower.includes('文档');
                default:
                    return true;
            }
        });
    }
    
    // 根据搜索词过滤（标题和描述）
    if (searchTerm) {
        filteredWebsites = filteredWebsites.filter(website => 
            website.title.toLowerCase().includes(searchTerm) || 
            website.description.toLowerCase().includes(searchTerm)
        );
    }
    
    renderWebsites(filteredWebsites);
    updateStats();
}

// 更新统计信息
function updateStats() {
    const total = websitesData.length;
    totalWebsitesSpan.textContent = `总计: ${total} 个网站`;
}

// 设置搜索功能
function setupSearch() {
    searchInput.addEventListener('input', function() {
        filterWebsites();
    });
}

// 设置主题切换
function setupThemeToggle() {
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        const isDarkTheme = document.body.classList.contains('dark-theme');
        
        // 添加点击动画效果
        this.style.transform = 'scale(0.8)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
        
        // 更新按钮图标
        themeToggle.textContent = isDarkTheme ? '☀️' : '🌙';
        
        // 保存主题偏好到本地存储
        localStorage.setItem('preferredTheme', isDarkTheme ? 'dark' : 'light');
    });
}

// 应用保存的主题
function applySavedTheme() {
    const savedTheme = localStorage.getItem('preferredTheme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
}

// 防止 XSS 攻击的转义函数
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

// 设置输入框动画
function setupInputAnimation() {
    searchInput.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    searchInput.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
}

// 添加淡入动画的CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .no-results {
        text-align: center;
        font-size: 1.2rem;
        color: #27ae60;
        margin-top: 2rem;
        font-family: 'Comic Sans MS', 'PingFang SC', cursive;
    }
`;
document.head.appendChild(style);