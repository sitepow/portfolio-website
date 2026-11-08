export type Language = "th" | "en";

export const translations = {
  th: {
    nav: {
      home: "หน้าแรก",
      about: "เกี่ยวกับฉัน",
      interests: "ความสนใจ",
      skills: "ทักษะ",
      featuredProjects: "โปรเจกต์เด่น",
      otherProjects: "โปรเจกต์อื่นๆ",
      contact: "ติดต่อ",
      resume: "ดาวน์โหลดเรซูเม่",
    },
    greeting: {
      headlinePrefix: "Building ",
      headlineHighlight: "modern web applications",
      headlineSuffix: " and scalable platforms.",
      role: "Full-Stack Developer",
      nickname: "ตุ้ย",
      introBeforeName: "สวัสดีครับ ผม",
      name: "ธีรพัฒน์ แสงก่ำ",
      introAfterName:
        "นักพัฒนาเว็บที่หลงใหลในการสร้างสรรค์ระบบตั้งแต่หน้าจอ UX/UI ไปจนถึง Architecture หลังบ้านและการบริหารจัดการฐานข้อมูล",
      platformIntro: "ผู้ก่อตั้งและพัฒนาแพลตฟอร์มเช่าร้านค้าออนไลน์",
      platformName: "Sitepow Store",
      platformAfter: "ระบบเพื่อพ่อค้าแม่ค้าไทยที่กำลังเติบโตอย่างต่อเนื่อง",
      btnResume: "ดาวน์โหลดเรซูเม่",
      btnTranscript: "ดาวน์โหลดวุฒิการศึกษา",
      btnGithub: "ดูโค้ดบน GitHub",
      btnFastwork: "จ้างงานผ่าน Fastwork",
      btnJobThai: "ดูข้อมูลบน JobThai",
    },
    interested: {
      title: "What I'm interested in right now.",
      text1: "ตอนนี้นอกจากเขียนเว็บไซต์แล้วผมยังสนใจเรื่องของ",
      highlight1: "Cyber Security",
      text2: "และกำลังศึกษาการทำ",
      highlight2: "Reverse engineering",
      text3:
        "โดยใช้ Ghidra ในการแปลงจากภาษา Assembly ให้กลายเป็นภาษา C ซึ่งจะช่วยให้ Debug ได้ง่าย และหาจุดแก้ไขได้ตามที่เราต้องการหรือจะศึกษาพฤติกรรมของโปรแกรม",
      highlight3:
        "ซึ่งก็เป็นอีกจุดหนึ่ง ที่ช่วยให้เราเข้าใจการทำงานของโปรแกรม ว่าจะป้องกันยังไงไม่ให้โดนแฮ็ก",
    },
    skills: {
      title: "My Skills",
      frameworks: "Frameworks",
      languages: "Languages",
      database: "Database & ORM",
      ecosystem: "Ecosystem & API",
      tools: "Tools & DevOps",
      security: "Cyber Security (Learning)",
    },
    featured: {
      title: "Featured Projects",
      sitepowDesc:
        "แพลตฟอร์มเปิดให้เช่าหน้าเว็บร้านค้าออนไลน์ เพิ่มความน่าเชื่อถือของร้านค้า และจัดการสต็อก/ออเดอร์ได้ง่าย พร้อมคำนวณราคาขนส่งอัตโนมัติ ออกแบบมาเพื่อแก้ปัญหาค่าธรรมเนียมแพลตฟอร์มต่างชาติที่แพงเกินไป",
      viewWebsite: "ดูเว็บไซต์",
      viewGithub: "ดูโค้ดบน GitHub",
    },
    otherProjects: {
      title: "Other Projects",
      elearningDesc:
        "ระบบการเรียนรู้ออนไลน์ โปรเจกต์จบจากมหาวิทยาลัยราชภัฏธนบุรี สมุทรปราการ (สาขาวิทยาการคอมพิวเตอร์)",
      erpDesc:
        "ระบบบริหารจัดการทรัพยากรและกระบวนการทำงานทั้งหมดขององค์กร แผนกต่างๆ เช่น การเงิน, บัญชี, คลังสินค้า, การผลิต, จัดซื้อ และฝ่ายบุคคล",
      viewGithub: "ดูโค้ดบน GitHub",
    },
    contact: {
      title: "Contact",
      description:
        "สนใจร่วมงานหรือสอบถามข้อมูลเพิ่มเติม สามารถติดต่อได้ที่ช่องทางด้านล่างนี้ครับ",
      emailLabel: "ส่งอีเมลถึงผม",
      otherChannels: "ช่องทางอื่นๆ",
    },
    docTitle: "ธีรพัฒน์ แสงก่ำ | Full-Stack Developer",
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      interests: "Interests",
      skills: "Skills",
      featuredProjects: "Featured",
      otherProjects: "Other Projects",
      contact: "Contact",
      resume: "Download Resume",
    },
    greeting: {
      headlinePrefix: "Building ",
      headlineHighlight: "modern web applications",
      headlineSuffix: " and scalable platforms.",
      role: "Full-Stack Developer",
      nickname: "Tui",
      introBeforeName: "Hi, I'm ",
      name: "Teeraphat Saengkum",
      introAfterName:
        "a Web Developer passionate about building end-to-end digital experiences — from intuitive UX/UI design to robust backend servers and database management.",
      platformIntro: "Founder and Lead Developer of ",
      platformName: "Sitepow Store",
      platformAfter:
        ", an e-commerce platform built to help online merchants thrive.",
      btnResume: "Download Resume",
      btnTranscript: "Download Academic Record",
      btnGithub: "GitHub Profile",
      btnFastwork: "Hire via Fastwork",
      btnJobThai: "JobThai Profile",
    },
    interested: {
      title: "What I'm interested in right now.",
      text1: "Beyond building websites, I am currently interested in",
      highlight1: "Cyber Security",
      text2: "and actively studying",
      highlight2: "Reverse Engineering",
      text3:
        "using Ghidra to decompile Assembly into C code. This makes debugging and behavioral analysis much easier,",
      highlight3:
        "giving a deep understanding of software internals and how to defend systems from vulnerabilities.",
    },
    skills: {
      title: "My Skills",
      frameworks: "Frameworks",
      languages: "Languages",
      database: "Database & ORM",
      ecosystem: "Ecosystem & API",
      tools: "Tools & DevOps",
      security: "Cyber Security (Learning)",
    },
    featured: {
      title: "Featured Projects",
      sitepowDesc:
        "An e-commerce SaaS platform allowing merchants to launch branded web stores, manage inventory/orders, and handle automated shipping logic — solving high marketplace commissions.",
      viewWebsite: "Visit Website",
      viewGithub: "View Code on GitHub",
    },
    otherProjects: {
      title: "Other Projects",
      elearningDesc:
        "Online Learning System, graduation capstone project from Dhonburi Rajabhat University Samut Prakan (Computer Science).",
      erpDesc:
        "Enterprise Resource Planning system managing all core business processes across Finance, Accounting, Inventory, Manufacturing, Procurement, and HR.",
      viewGithub: "View Code on GitHub",
    },
    contact: {
      title: "Contact",
      description:
        "Interested in collaborating or have any questions? Feel free to reach out through any of the channels below.",
      emailLabel: "Send me an email",
      otherChannels: "Other Channels",
    },
    docTitle: "Teeraphat Saengkum | Full-Stack Developer",
  },
};

export type TranslationDict = typeof translations.th;
