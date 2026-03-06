/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  GraduationCap, 
  Users, 
  Briefcase, 
  Globe, 
  Radio, 
  Sprout, 
  University, 
  Church,
  Rocket,
  MessageCircle,
  ChevronDown,
  Star,
  FileText,
  Settings,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Menu,
  X,
  Lightbulb,
  ChartLine,
  FileEdit,
  BookOpen,
  ClipboardCheck,
  Users2,
  UserPlus,
  Handshake,
  BarChart3,
  Cpu,
  PieChart,
  Megaphone,
  HeartHandshake,
  Video,
  MessagesSquare,
  Tractor,
  Presentation,
  Microscope,
  Book,
  Heart,
  Download
} from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "./components/Logo";
import { jsPDF } from "jspdf";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AudiencePage } from "./components/AudiencePage";
import { ContactPage } from "./components/ContactPage";

const WHATSAPP_NUMBER = "250798600238";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

type Audience = 
  | "students" | "teachers" | "hr" | "ceos" | "ngos" 
  | "media" | "agriculture" | "government";

interface Plan {
  name: string;
  price: string;
  tagline?: string;
  features: string[];
  popular?: boolean;
}

interface AudienceData {
  id: Audience;
  label: string;
  icon: any;
  plans: Plan[];
  content: {
    title: string;
    description: string;
    icon: any;
  }[];
  samples: {
    title: string;
    desc: string;
    content: string;
  }[];
}

const AUDIENCES: AudienceData[] = [
  {
    id: "students",
    label: "Students (Primary, Secondary, University, Masters & PhDs)",
    icon: GraduationCap,
    plans: [
      { 
        name: "Deadline Lifeline", 
        price: "3,000 RWF", 
        tagline: "Best for: Primary, Secondary, and Undergraduates stuck the night before an assignment is due. \"Don't panic. Get unstuck and get it done safely.\"",
        features: ["WhatsApp Prompt Rescue", "Safe AI Anti-Plagiarism Guide", "The Assignment Structurer"] 
      },
      { 
        name: "Research Engine", 
        price: "5,000 RWF", 
        tagline: "Best for: Final-year Undergrads and Masters students writing dissertations. \"Stop reading 50-page PDFs. Let AI do the heavy lifting.\"",
        features: ["Literature Review Automator", "The Academic Paraphraser", "The Data Assistant"],
        popular: true 
      },
      { 
        name: "VIP Thesis Clinic", 
        price: "15,000 RWF", 
        tagline: "Best for: PhDs, serious Masters students, or anyone doing a final-year project who has zero time to waste. \"Your personal AI research assistant, custom-built for your exact thesis.\"",
        features: ["2-Hour Hands-On Practice Session", "Custom Prompt Engineering", "Priority Concierge Support"] 
      }
    ],
    content: [
      { title: "Research Planning", description: "Get help with research gap identification, literature review, and methodology design for your thesis.", icon: Lightbulb },
      { title: "The Research Engine", description: "Our flagship AI-powered system for automated literature synthesis, citation mapping, and identifying high-impact research trends.", icon: Rocket },
      { title: "Data Analysis", description: "Professional guidance on statistical analysis, interpretation, and presentation of findings.", icon: ChartLine },
      { title: "Writing Support", description: "Structure your thesis, improve academic writing, and ensure university standards.", icon: FileEdit },
      { title: "Prompt Engineering", description: "Master the art of crafting high-precision academic prompts using our specialized RGCC framework.", icon: Cpu },
      { title: "PhD Research Design", description: "Advanced research methodology, experimental design, and statistical frameworks for doctoral studies.", icon: Microscope },
    ],
    samples: [
      { 
        title: "Academic Prompt Library", 
        desc: "The official AriseBlueprint Lab Prompt Bank with RGCC framework.",
        content: "ARISE BLUEPRINT LAB: ACADEMIC PROMPT LIBRARY\n\nOVERVIEW\nWelcome to the official AriseBlueprint Lab Prompt Bank. This resource provides a curated set of high-quality academic prompts designed to support rigorous, ethical, and effective research workflows across disciplines.\n\nTHE RGCC FRAMEWORK FOR ACADEMIC PROMPTING\nHigh-quality AI outputs begin with well-structured prompts. Arise Blueprint Lab applies the RGCC Framework to ensure academic precision and reliability.\n\nR — Role: Assign the AI a specific academic role.\nG — Goal: Clearly state the task to be completed.\nC — Context: Provide relevant background information.\nC — Constraint: Set boundaries and academic rules.\n\nCATEGORY 1: TOPIC SEARCH & RESEARCH DESIGN\n1. Research Gap Finder: \"Act as a Senior Academic Researcher. My topic is [Insert Topic]. Identify three current research gaps in recent literature that could be explored in a thesis. Constraint: Focus on gaps from the last five years.\"\n2. Problem Statement Architect: \"Act as a Thesis Advisor. Draft a formal problem statement for research on [Insert Topic]. Context: PhD-level proposal. Constraint: Highlight the tension between the current state and the ideal state.\"\n3. Research Question Refiner: \"Act as a Research Methodologist. Refine the following research question to improve clarity and researchability: [Insert Question]. Constraint: Ensure it is open-ended and empirically grounded.\"\n4. Theoretical Framework Scout: \"Act as a Social Science Expert. Recommend two to three theoretical frameworks relevant to a study on [Insert Topic], and briefly explain their relevance.\"\n5. Academic Title Generator: \"Act as an Academic Editor. Generate five formal thesis titles based on [Insert Topic and Key Findings]. Constraint: Titles must be precise and descriptive.\"\n6. Methodology Consultant: \"Act as a Qualitative Research Specialist. For the topic [Insert Topic], recommend the most appropriate data collection method and justify the choice.\"\n7. Keyword Strategy Builder: \"Act as a Research Librarian. Based on [Insert Topic], generate ten academic keywords and Boolean search strings suitable for databases such as Scopus or JSTOR.\"\n\nCATEGORY 2: SUMMARIZATION & LITERATURE REVIEW\n8. Methodology Snapshot: \"Act as a Senior Researcher. Extract and summarize the methodology from the following text: [Paste Text]. Goal: Present sample size, design, and analysis tools in three bullet points.\"\n9. Findings Extractor: \"Act as an Academic Assistant. Summarize the key findings from this abstract: [Paste Abstract]. Constraint: Maximum 100 words.\"\n10. Comparative Synthesis: \"Act as a Literature Review Expert. Compare the arguments in the following two summaries: [Paste Text A] and [Paste Text B]. Goal: Identify one shared theme and one conflicting finding.\"\n11. Abstract Drafter: \"Act as a Scientific Writer. Using the following results [Insert Results], draft a 250-word abstract. Constraint: Follow the IMRaD structure.\"\n12. Jargon Clarifier: \"Act as a Subject Matter Expert. Explain the following technical concept in clear, accessible academic language: [Insert Concept].\"\n13. Reference Formatter: \"Act as a Formatting Assistant. Convert the following citation into APA or MLA (7th edition): [Paste Reference].\"\n14. Critical Appraisal: \"Act as a Peer Reviewer. Analyze the following paragraph and identify potential biases or limitations: [Paste Text].\"\n\nCATEGORY 3: EDITING & ACADEMIC VOICE\n15. Academic Tone Enhancer: \"Act as an Expert Thesis Editor. Rewrite the following text to improve formality and objectivity. Constraint: Remove first-person language.\"\n16. Conciseness Editor: \"Act as a Copy Editor. Reduce the length of this section by 30% while preserving academic rigor: [Paste Text].\"\n17. Logical Flow Connector: \"Act as a Writing Coach. Propose a transition sentence that logically connects the following two ideas: [Idea A] and [Idea B].\"\n18. Grammar and Syntax Audit: \"Act as a Professional Proofreader. Review the following text for grammar and syntax errors. Output: Provide a corrected version and list of changes.\"\n19. Active Voice Converter: \"Act as a Writing Editor. Identify passive constructions and rewrite them in active voice: [Paste Text].\"\n20. AI Disclosure Statement Generator: \"Act as an Ethics Officer. Draft a three-sentence AI Disclosure Statement describing how AI was used for editing or summarization in academic work.\"\n\nQUALITY & ETHICS NOTE\nVerification: Always verify AI-generated citations and factual claims.\nAcademic Integrity: Use AI as a support tool, not a substitute for independent scholarship."
      },
      {
        title: "Research Proposal Template (One-Page)",
        desc: "Initial supervisor meetings, funding applications, or research planning.",
        content: "ARISE RESEARCH BLUEPRINT LAB\n\nRESEARCH PROPOSAL TEMPLATE (ONE-PAGE VERSION)\n\nSTUDENT INFORMATION\nName: _________________________________\nStudent ID: _________________________________\nProgram: _________________________________ (e.g., MBA, MSc Public Health)\nSupervisor: _________________________________\nDate: _________________________________\n\n1. PROPOSED RESEARCH TITLE\nFormat: [Action Word] + [Main Variable] + [Context/Population] + [Location]\nExamples:\n- \"Assessing the Impact of Mobile Money on SME Growth in Kigali, Rwanda\"\n- \"Factors Influencing E-learning Adoption Among University Students in Rwanda\"\n- \"Exploring Maternal Health Outcomes in Rural Districts of Rwanda\"\n\n2. BACKGROUND AND RATIONALE (200-300 words)\n- Context: Explain the broader topic and why it matters globally and in Rwanda.\n- The Problem: What specific issue are you addressing?\n- Research Gap: What is missing in current knowledge?\n\n3. RESEARCH OBJECTIVES\n- General Objective: One broad statement of what you want to achieve.\n- Specific Objectives: 3-5 measurable, specific objectives.\n\n4. RESEARCH QUESTIONS\n- Main Research Question: One broad question aligned with your general objective.\n- Sub-Questions: 3-5 specific questions aligned with your specific objectives.\n\n5. RESEARCH METHODOLOGY (150-200 words)\n- Research Design: Descriptive, Correlational, Experimental, Case Study, or Mixed Methods.\n- Approach: Quantitative, Qualitative, or Mixed Methods.\n- Target Population: e.g., \"SMEs in Kigali with 5-50 employees registered with RDB\".\n- Sample Size: participants (justify with formula or citation).\n- Sampling Method: Random, Stratified, Purposive, or Convenience Sampling.\n- Data Collection Methods: Primary (Survey, Interview, Focus Group) and Secondary (NISR, RDB, Journals).\n- Data Analysis: Quantitative (SPSS/Excel) and Qualitative (NVivo/Manual Coding).\n\n6. EXPECTED OUTCOMES AND SIGNIFICANCE\n- Expected Results: What do you expect to find?\n- Significance: For SMEs, For Policymakers, For Academia.\n\n7. TENTATIVE TIMELINE (6 Months)\n- Month 1-2: Literature Review\n- Month 2: Proposal Defense\n- Month 2-3: Data collection tool design\n- Month 3: Ethical clearance\n- Month 3-4: Data collection\n- Month 4-5: Data analysis\n- Month 5-6: Report writing\n- Month 6: Final thesis submission\n\n8. PRELIMINARY REFERENCES (5-10 key sources)\nFormat: Use APA, Harvard, or your university's preferred style."
      },
      { 
        title: "PhD Research Methodology", 
        desc: "Advanced framework for doctoral level research.",
        content: "ARISE RESEARCH BLUEPRINT LAB\n\nPHD RESEARCH METHODOLOGY\n\n1. Research Philosophy (Ontology/Epistemology)\n2. Research Approach (Inductive/Deductive)\n3. Research Strategy\n4. Data Collection Instruments\n5. Data Analysis Techniques (NVivo/SPSS/R)\n6. Ethical Considerations"
      }
    ]
  },
  {
    id: "teachers",
    label: "Teachers & Educators",
    icon: Presentation,
    plans: [
      { 
        name: "The Full AI Toolkit", 
        price: "10,000 RWF", 
        tagline: "One-Time Payment. \"Everything you need to start automating your lesson plans today.\"",
        features: [
          "The Blueprint PDF: Instant access to our complete library of 50+ premium RGCC prompts, advanced templates, and grading rubrics.",
          "1 Month WhatsApp Support: Got stuck on a prompt? Text the helpline, and we will help you fix your prompt so you can keep moving."
        ] 
      },
      { 
        name: "The VIP Educator Setup", 
        price: "20,000 RWF", 
        tagline: "Per Academic Term. \"Your personal AI teaching assistant. We build your term strategy together.\"",
        features: [
          "The Full AI Toolkit: You get the complete Blueprint PDF and all premium templates.",
          "2-Hour Hands-On Practice (Live): We sit down with you (via Zoom or in person) and your actual syllabus to generate core lesson plans and exams.",
          "Full AI Strategy & Support (1 Term): Priority WhatsApp access for the entire school term to help you integrate AI into your specific subjects."
        ],
        popular: true 
      }
    ],
    content: [
      { title: "CBC Lesson Plans", description: "Complete CBC-aligned lesson plans with activities, assessments, and differentiation strategies.", icon: BookOpen },
      { title: "Assessment Tools", description: "Ready-to-use rubrics, assessment criteria, and evaluation frameworks for all grade levels.", icon: ClipboardCheck },
      { title: "Quiz Preparation & Generation", description: "Automated quiz generation, marking schemes, and question bank management tools.", icon: FileText },
      { title: "Classroom Management", description: "Strategies for managing diverse classrooms and creating inclusive learning environments.", icon: Users2 },
    ],
    samples: [
      { 
        title: "CBC Lesson Plan Template", 
        desc: "Standardized CBC lesson plan for primary and secondary levels.",
        content: "ARISE RESEARCH BLUEPRINT LAB\nCBC LESSON PLAN TEMPLATE\nFor All Teachers · All Levels · All Subjects · Rwanda\n\nSECTION A: Basic Lesson Information\n- Teacher Name: [Your Full Name]\n- School Name: [Name of Your School / Institution]\n- Level / Class: [e.g. P4 / S2 / Year 1 University]\n- Subject: [e.g. Mathematics / English / Biology]\n- Topic: [Specific Lesson Topic]\n- Sub-topic: [Specific focus within the topic]\n- Duration: [e.g. 40 min / 60 min / 90 min]\n- Number of Students: [e.g. 35 students]\n- Date: [DD / MM / YYYY]\n- Lesson Number in Unit: [e.g. Lesson 3 of 8 in Unit 2]\n\nSECTION B: Curriculum Alignment\n- Curriculum: [e.g. Rwanda CBC — Primary / Secondary]\n- Unit / Chapter: [e.g. Unit 3: Fractions]\n- Key CBC Competencies Targeted: Critical Thinking, Communication, Creativity, Cooperation, Character, Citizenship, Lifelong Learning.\n\nSECTION C: Learning Outcomes\nBy the end of this lesson, students will be able to:\n- KNOWLEDGE (Know): [Facts, definitions, concepts]\n- SKILLS (Do): [Actions, procedures, processes]\n- ATTITUDES (Be): [Values or behaviours developed]\n\nSECTION D: Materials & Resources\n- Teacher Materials: [Textbook, projector, etc.]\n- Student Materials: [Exercise books, pens, etc.]\n- Technology: [Laptop, internet, etc.]\n- Reference / Source: [REB Textbook, etc.]\n\nSECTION E: Lesson Procedure (Step-by-Step)\n1. INTRODUCTION / HOOK (5–10 min): Purpose, Teacher Action, Student Response.\n2. MAIN TEACHING ACTIVITY: Instruction, Vocabulary, Examples, Student Activity.\n3. GUIDED PRACTICE: Activity Description, Grouping, Differentiation.\n\nSECTION F: Assessment Plan\n- Assessment Type: [Formative / Summative]\n- Method: [Oral questioning, worksheet, etc.]\n- Criteria: [Accuracy, participation, etc.]\n- Recording: [Tick list, rubric, etc.]\n- Follow-up: [Reteach, move on, etc.]\n\nSECTION G: Post-Lesson Teacher Reflection\n- What went well? / What didn't go as planned?\n- Evidence of student learning.\n- What I will do differently next lesson.\n- Students who need extra support."
      },
      {
        title: "AI Quiz Generation Master Prompt",
        desc: "Master prompt for generating high-quality quizzes using ChatGPT and NotebookLM.",
        content: "ARISE RESEARCH BLUEPRINT LAB\nAI Quiz Generation Master Prompt for Teachers\n(ChatGPT + NotebookLM Demonstration Edition)\n\nPURPOSE\nThis prompt helps teachers generate:\n- High-quality quizzes\n- Competency-based assessments\n- Higher-order thinking questions\n- Marking guides\n- Feedback explanations\n- Auto-differentiated versions (easy / medium / advanced)\n\nPART 1: USING ChatGPT TO GENERATE A SMART QUIZ\n\nCOPY & PASTE THIS INTO ChatGPT:\n\"Act as an experienced curriculum expert and assessment designer. Create a high-quality quiz for:\n\nSubject: [Insert Subject]\nTopic: [Insert Topic]\nLevel: [Primary / Secondary / University / TVET]\nCurriculum: [CBC / National Curriculum / Cambridge / etc.]\nDuration: [e.g., 30 minutes]\n\nThe quiz must include:\n1. 5 Multiple Choice Questions (with 4 options each)\n2. 3 Short Answer Questions\n3. 2 Application or Case-Based Questions\n4. 1 Higher-Order Thinking Question (Analysis or Evaluation level)\n\nThen provide:\n- Answer key\n- Marking scheme with allocated marks\n- Short explanation for each correct answer\n- One differentiated easier version\n- One advanced extension question\n\nEnsure questions test understanding, not memorization. Make it engaging, clear, and suitable for classroom use.\"\n\nWhy you need This\nWith one prompt, ChatGPT:\n- Designs structured assessments\n- Aligns with learning objectives\n- Provides marking guides instantly\n- Creates differentiated learning versions\n- Saves 2–3 hours of manual work\nIt feels like having a professional assessment designer in your laptop.\n\nPART 2: USING NotebookLM TO GENERATE A QUIZ FROM YOUR OWN NOTES\nNow we make it even more powerful.\n\nNotebookLM works differently from ChatGPT. Instead of generating from general knowledge, it generates quizzes directly from:\n- Your lesson notes\n- Your PDF textbook\n- Your scheme of work\n- Your PowerPoint slides\n- Government curriculum documents\n\nFor example:\n- Upload Rwanda REB curriculum guide\n- Upload your own lesson notes\n- Upload a chapter PDF\n\nThen ask NotebookLM:\n\nCOPY THIS INTO NotebookLM:\n\"Based only on the uploaded documents, generate a structured quiz for my students.\n\nInclude:\n- 5 multiple choice questions\n- 3 short answer questions\n- 2 application questions\n- 1 higher-order thinking question\n\nEnsure all questions strictly come from the uploaded materials. Provide answers and marking scheme. Highlight which section of the document each question is based on.\"\n\nWhy This Is Powerful\nNotebookLM:\n- Prevents hallucination\n- Uses ONLY your curriculum material\n- Cites exact sections\n- Keeps alignment with school standards\n- Increases academic integrity\nIt becomes your AI-powered curriculum assistant.\n\nThe Magic: Combining Both Tools\n\nChatGPT:\n- Creative\n- Flexible\n- Fast structuring\n- Differentiation expert\n\nNotebookLM:\n- Curriculum-based\n- Evidence-based\n- Document-grounded\n- Policy-aligned\n\nTogether, they create:\n- Smarter assessments\n- Faster preparation\n- Better question quality\n- Reduced teacher burnout\n- More engaging student evaluation\n\nDemo Scenario\nImagine a Mathematics teacher teaching:\nTopic: Quadratic Equations\nLevel: Senior 3\n\nWithin 5 minutes:\nChatGPT:\n- Creates structured quiz\n- Adds application problem\n- Provides marking scheme\n\nNotebookLM:\n- Pulls exact definitions from REB document\n- Generates exam-style question aligned to national standards\n- Cites curriculum source\n\nThe teacher now has:\n- Professional-level assessment\n- Curriculum-aligned\n- Differentiated\n- Ready to print\nWithout staying up late writing questions.\n\nTraining Invitation\nThis is just 5% of what AI can do for teachers. In our full training, you will learn:\n- How to design competency-based AI prompts\n- How to generate exam papers in minutes\n- How to create marking rubrics automatically\n- How to prevent AI misuse by students\n- How to use AI ethically in classrooms\n- How to turn your lesson notes into smart assessments\n- How to build your own AI Teaching Toolkit\n\nConclusion\nAI is not replacing teachers. It is upgrading powerful teachers. The future classroom is not about working harder. It is about working smarter. Teachers who understand AI today."
      },
      {
        title: "Mastering CBC Lesson Planning",
        desc: "The AI-Powered Teacher: From Administrative Burden to Creative Teaching.",
        content: "ARISE RESEARCH BLUEPRINT LAB\n\nTHE AI-POWERED TEACHER: MASTERING CBC LESSON PLANNING\n\n1. THE CHALLENGE: WHY CBC PLANNING FEELS SO HARD\nCompetency-Based Curriculum (CBC) is excellent for students but exhausting for teachers. You are required to:\n- Align every lesson with specific 'Key Unit Competences'.\n- Break down objectives into Knowledge, Skills, and Attitudes (KSA).\n- Plan 'Learner-Centered' activities that keep 40+ students engaged.\n- Integrate 'Cross-Cutting Issues' (Gender, Environment, Financial Literacy).\n- Differentiate instruction for students with special needs.\n\n2. THE SOLUTION: YOUR DIGITAL TEACHING ASSISTANTS\nAI is here to be your Secretary, Research Assistant, and Planner. \n\n- ChatGPT: The 'Instant Drafter'. Best for creating full lesson plan drafts from scratch.\n  Prompt: 'Act as an expert Rwandan CBC teacher. Create a 40-minute lesson plan for [Subject: Biology], [Grade: S3], on the topic of [Photosynthesis]. Include a KSA table and Learner-Centered activities.'\n\n- Google Gemini: The 'Curriculum Aligner'. Great for making abstract topics relatable to Rwandan students.\n  Prompt: 'I am teaching [Topic: Financial Literacy] to Senior 4 students in Rwanda. Suggest 3 Discovery Activities using real-world Rwandan examples like Mobile Money or local markets.'\n\n- NotebookLM: The 'Syllabus Expert'. For strict compliance. Upload the official REB Syllabus PDF and it answers only from that book.\n  Prompt: 'Based strictly on the uploaded syllabus, generate a Scheme of Work for [Unit 3]. List the Key Unit Competence and Learning Objectives.'\n\n- Gamma: The 'Slide Designer'. Creates visual presentations in 1 click.\n  Prompt: 'Create a 10-slide presentation for a high school history class on [Topic: The 1994 Genocide against the Tutsi]. Keep the tone respectful and educational.'\n\n- Perplexity: The 'Fact-Checker'. Finds accurate sources and up-to-date statistics.\n  Prompt: 'Find the latest statistics on [Coffee Exports in Rwanda] for 2023-2024. Cite the official source like NAEB or NISR.'\n\n- Claude.ai: The 'Long-Form Planner'. Best for Schemes of Work and Term Planning.\n  Prompt: 'I have these 15 topics to cover in [Term 2]. Create a Weekly Scheme of Work table with columns for Week, Topic, and Teaching Methods.'\n\n3. CONCLUSION\nDon't just read about the future—build it in your classroom. Arise provides the hands-on training that turns 'Technology' into 'Teaching Power'."
      }
    ]
  },
  {
    id: "hr",
    label: "HR Professionals",
    icon: Users,
    plans: [
      { 
        name: "The Admin Hack", 
        price: "5,000 RWF", 
        tagline: "Best For: HR Officers who want instant relief from daily typing and drafting. \"Never write a routine document from scratch again.\"",
        features: ["The JD & Interview Architect", "The Policy & Memo Drafter", "WhatsApp Tone Check Support"] 
      },
      { 
        name: "The Talent Engine", 
        price: "15,000 RWF", 
        tagline: "Best For: HR Managers handling mass recruitment and performance review cycles. \"Automate the heavy lifting of recruitment and data.\"",
        features: ["The CV Screener System", "The Performance Review Automator", "The Onboarding Assistant"],
        popular: true 
      },
      { 
        name: "The VIP Strategic Partner", 
        price: "100,000 RWF", 
        tagline: "Best For: Solo HR Managers who want an expert to help them build their internal AI systems. \"Your bespoke AI HR department, set up for you.\"",
        features: ["2-Hour Live System Setup", "Custom Company Prompts", "30-Day Executive Concierge"] 
      }
    ],
    content: [
      { title: "Recruitment Templates", description: "Professional job descriptions, interview guides, and candidate evaluation frameworks.", icon: UserPlus },
      { title: "Policy Documents", description: "HR policies, employee handbooks, and compliance documents tailored to Rwandan laws.", icon: Handshake },
      { title: "Performance Systems", description: "Performance review templates, goal-setting frameworks, and development plans.", icon: BarChart3 },
    ],
    samples: [
      { 
        title: "Employee Handbook Outline", 
        desc: "Essential policies for a modern Rwandan workplace.",
        content: "ARISE RESEARCH BLUEPRINT LAB\n\nEMPLOYEE HANDBOOK OUTLINE\n\n1. Welcome and Introduction\n2. Employment Policies\n- Recruitment and Selection\n- Probation Period\n3. Code of Conduct\n4. Compensation and Benefits\n5. Leave Policies\n6. Disciplinary Procedures"
      },
      {
        title: "AI Recruitment Accelerator",
        desc: "Simplify your hiring workflow from Job Description to Offer Letter.",
        content: "ARISE RESEARCH BLUEPRINT LAB\n\nTHE AI RECRUITMENT ACCELERATOR – RWANDA EDITION\n\n1. PHASE 1: THE JOB DESCRIPTION ARCHITECT\nStop drafting from scratch. Create strategic, performance-driven JDs aligned with Rwanda's talent market.\nPrompt: 'Act as a Senior HR Manager in Rwanda. Write a professional JD for a [Job Title] in the [Industry] sector. Include KSA, 7 actionable bullet points, and KPIs for the first 90 days.'\n\n2. PHASE 2: THE INTERVIEW QUESTION GENERATOR\nMove beyond 'Tell me about yourself'. Generate behavioral questions using the STAR Method.\nPrompt: 'I am interviewing a candidate for [Job Title]. Generate 7 Behavioral Interview Questions based on the STAR Method. Focus on Conflict Resolution, Problem Solving, and Integrity.'\n\n3. PHASE 3: THE CV SCREENER RUBRIC\nStandardize and score objectively. Create a Candidate Evaluation Scorecard.\nPrompt: 'Act as an expert Recruiter. Create a Candidate Evaluation Scorecard (Matrix) for the [Job Title] position. Include Criteria, Weight, and a 1-5 Scoring guide.'\n\n4. PHASE 4: THE HR COMMUNICATION ASSISTANT\nProfessional emails in seconds. No more rewriting offer letters or rejection emails.\n- Option A: Job Offer Email (Warm and celebratory).\n- Option B: Polite Rejection Email (Respectful and empathetic).\n\n5. CONCLUSION\nArise helps you hire smarter, faster, and more objectively. We introduce numerous AI tools like Perplexity, Claude.ai, and Gemini to master the HR lifecycle."
      }
    ]
  },
  {
    id: "ceos",
    label: "CEOs",
    icon: Briefcase,
    plans: [
      { name: "Quick Fix", price: "5,000 RWF", features: ["WhatsApp Text Helpline", "Basic Templates", "Email Support", "Standard Workflow"] },
      { name: "Professional", price: "15,000 RWF", features: ["50+ Premium Prompts", "Advanced Templates", "WhatsApp Support", "Optimized Workflow"], popular: true },
      { name: "Enterprise", price: "100,000 RWF", features: ["Unlimited Prompts", "Custom Templates", "Priority Support", "Full AI Strategy"] }
    ],
    content: [
      { title: "AI Strategy", description: "Develop AI implementation strategies that align with your business goals and resources.", icon: Cpu },
      { title: "Business Reports", description: "Professional business plans, financial projections, and strategic analysis documents.", icon: PieChart },
      { title: "Crisis Communication", description: "Crisis management plans, communication templates, and reputation strategies.", icon: Megaphone },
    ],
    samples: [
      { 
        title: "AI Implementation Roadmap", 
        desc: "Strategic plan for integrating AI into business operations.",
        content: "ARISE RESEARCH BLUEPRINT LAB\n\nAI IMPLEMENTATION ROADMAP\n\nPhase 1: Assessment (Week 1-2)\n- Identify business processes for AI automation\n- Data readiness check\n\nPhase 2: Tool Selection (Week 3-4)\n- Evaluating AI vendors\n- Pilot project identification\n\nPhase 3: Implementation (Week 5-12)\n- Staff training\n- Deployment and monitoring"
      }
    ]
  },
  {
    id: "ngos",
    label: "NGOs & Development",
    icon: Globe,
    plans: [
      { name: "Quick Fix", price: "5,000 RWF", features: ["WhatsApp Text Helpline", "Basic Templates", "Email Support", "Standard Workflow"] },
      { name: "Professional", price: "15,000 RWF", features: ["50+ Premium Prompts", "Advanced Templates", "WhatsApp Support", "Optimized Workflow"], popular: true },
      { name: "Enterprise", price: "100,000 RWF", features: ["Unlimited Prompts", "Custom Templates", "Priority Support", "Full AI Strategy"] }
    ],
    content: [
      { title: "Proposal Writing & Concept Note Generation", description: "Professional project proposals, concept notes, and donor reports for development projects.", icon: HeartHandshake },
      { title: "Impact Assessment", description: "Comprehensive project evaluation reports, impact assessments, and M&E frameworks.", icon: ChartLine },
      { title: "Stakeholder Engagement", description: "Community consultation frameworks, partnership agreements, and communication strategies.", icon: Users2 },
    ],
    samples: [
      { 
        title: "Proposal & Concept Note Blueprint", 
        desc: "Winning structure for development project proposals and concept notes.",
        content: "ARISE RESEARCH BLUEPRINT LAB\n\nPROPOSAL & CONCEPT NOTE BLUEPRINT\n\n1. Project Summary\n2. Problem Statement / Needs Assessment\n3. Concept Note Overview\n4. Project Goals and Objectives\n5. Implementation Plan\n6. Monitoring and Evaluation\n7. Sustainability Plan\n8. Budget Justification"
      }
    ]
  },
  {
    id: "media",
    label: "Media & Comms",
    icon: Radio,
    plans: [
      { name: "Quick Fix", price: "5,000 RWF", features: ["WhatsApp Text Helpline", "Basic Templates", "Email Support", "Standard Workflow"] },
      { name: "Professional", price: "15,000 RWF", features: ["50+ Premium Prompts", "Advanced Templates", "WhatsApp Support", "Optimized Workflow"], popular: true },
      { name: "Enterprise", price: "100,000 RWF", features: ["Unlimited Prompts", "Custom Templates", "Priority Support", "Full AI Strategy"] }
    ],
    content: [
      { title: "Press Releases", description: "Professional press releases, media kits, and strategies for effective media engagement.", icon: FileText },
      { title: "Content Strategy", description: "Social media content calendars, multimedia campaign strategies, and engagement frameworks.", icon: Video },
      { title: "Crisis Communication", description: "Reputation management plans, crisis protocols, and stakeholder messaging.", icon: MessagesSquare },
    ],
    samples: [
      { 
        title: "Press Release Template", 
        desc: "Professional format for media announcements.",
        content: "ARISE RESEARCH BLUEPRINT LAB\n\nPRESS RELEASE TEMPLATE\n\nFOR IMMEDIATE RELEASE\n\n[Headline: Catchy and informative]\n\n[City, Country] — [Date]\n\n[Lead Paragraph: The who, what, when, where, and why]\n\n[Body Paragraphs: Additional details and quotes]\n\n[Boilerplate: About the organization]\n\n[Contact Information]"
      }
    ]
  },
  {
    id: "agriculture",
    label: "Agriculture",
    icon: Sprout,
    plans: [
      { 
        name: "The Grant & Report Hack", 
        price: "5,000 RWF", 
        tagline: "Best For: Cooperative Managers and Agronomists who spend too much time on paperwork instead of in the field. \"Turn rough field notes into professional, donor-ready documents in minutes.\"",
        features: ["The Grant Winning Architect", "The Field Report Generator", "The Training Localizer"] 
      },
      { 
        name: "The Field Data Engine", 
        price: "15,000 RWF", 
        tagline: "Best For: Agri-Tech Startups, mid-sized farms, and NGOs managing dozens of field agents and large harvests. \"Make sense of your harvest data and instantly diagnose crop issues.\"",
        features: ["The AI Agronomist Vision Guide", "The Harvest Survey Analyzer", "The Supply Chain Organizer"],
        popular: true 
      },
      { 
        name: "The VIP Agribusiness Partner", 
        price: "100,000 RWF", 
        tagline: "Best For: Directors of Agricultural NGOs or large-scale Commercial Farmers who want a complete AI system built for their specific crops. \"Your bespoke agricultural data department, set up for you.\"",
        features: ["2-Hour Live System Setup", "Custom Crop Prompts", "30-Day Harvest Concierge"] 
      }
    ],
    content: [
      { title: "Farm Management", description: "Agricultural business plans, crop planning tools, and systems for cooperatives.", icon: Tractor },
      { title: "Cooperative Governance", description: "Cooperative bylaws, member engagement strategies, and governance frameworks.", icon: Sprout },
      { title: "Market Analysis", description: "Market research reports, value chain analysis, and pricing strategies.", icon: BarChart3 },
    ],
    samples: [
      { 
        title: "Cooperative Bylaws Template", 
        desc: "Governance structure for agricultural cooperatives.",
        content: "ARISE RESEARCH BLUEPRINT LAB\n\nCOOPERATIVE BYLAWS TEMPLATE\n\nArticle 1: Name and Location\nArticle 2: Objectives\nArticle 3: Membership Requirements\nArticle 4: Rights and Duties of Members\nArticle 5: Governance Structure\n- General Assembly\n- Board of Directors\nArticle 6: Financial Management"
      }
    ]
  },
  {
    id: "government",
    label: "Government",
    icon: University,
    plans: [
      { name: "Quick Fix", price: "5,000 RWF", features: ["WhatsApp Text Helpline", "Basic Templates", "Email Support", "Standard Workflow"] },
      { name: "Professional", price: "15,000 RWF", features: ["50+ Premium Prompts", "Advanced Templates", "WhatsApp Support", "Optimized Workflow"], popular: true },
      { name: "Enterprise", price: "100,000 RWF", features: ["Unlimited Prompts", "Custom Templates", "Priority Support", "Full AI Strategy"] }
    ],
    content: [
      { title: "Policy Documents", description: "Policy briefs, white papers, and legislative analysis for decision-making.", icon: FileText },
      { title: "Cabinet Briefs", description: "Executive summaries, briefing notes, and presentation materials for officials.", icon: Presentation },
      { title: "Stakeholder Consultation", description: "Public consultation frameworks and citizen feedback systems.", icon: Handshake },
    ],
    samples: [
      { 
        title: "Policy Brief Template", 
        desc: "Concise document for executive decision-making.",
        content: "ARISE RESEARCH BLUEPRINT LAB\n\nPOLICY BRIEF TEMPLATE\n\n1. Executive Summary\n2. Introduction\n3. The Problem\n4. Policy Options\n5. Recommendation\n6. Implementation Considerations"
      }
    ]
  }
];

const FAQS = [
  {
    question: "What exactly do I get when I purchase a package?",
    answer: "You get instant access to our complete library of AI-powered prompts, templates, and workflow guides specific to your role. This includes 50+ premium prompts, professional templates, and step-by-step guides."
  },
  {
    question: "How do I access the materials after purchase?",
    answer: "After contacting us via WhatsApp and confirming your payment, we send you secure access links to download all materials. You can access them anytime, anywhere."
  },
  {
    question: "Are these resources suitable for beginners?",
    answer: "Absolutely! Our resources are designed for all skill levels. Each prompt and template comes with detailed instructions and examples."
  },
  {
    question: "Can I request custom modifications?",
    answer: "Yes! We offer customization services for an additional fee. Contact us via WhatsApp with your specific requirements."
  }
];

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home audiences={AUDIENCES} faqs={FAQS} />} />
        <Route path="/audience/:id" element={<AudiencePage audiences={AUDIENCES} />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
