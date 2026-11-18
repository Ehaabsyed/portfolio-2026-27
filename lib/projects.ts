export interface ArchitectureStage {
  stage: string;
  component: string;
  status: "implemented" | "conceptual";
  details: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  extendedDescription?: string;
  tags: string[];
  verifiedTech?: { label: string; value: string }[];
  accent: string;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  isFeatured?: boolean;
  isRag?: boolean;
  architecture?: ArchitectureStage[];
}

export const projects: Project[] = [
  {
    id: "pogo-kids-watches",
    number: "01",
    title: "POGO Kids Watches",
    category: "Freelance Client Work / Business Website",
    description:
      "Developed a website for POGO Kids Watches, presenting its children's smartwatch products and associated features through a product-focused digital experience.",
    extendedDescription:
      "Delivered a modern, product-focused web presence for POGO Kids Watches, showcasing smart features including Live GPS tracking, video calling, SOS alerts, and safety perimeter zones with responsive layouts, fluid animations, and inquiry handling.",
    tags: ["Next.js", "React 19", "Tailwind CSS", "Lucide React", "Resend"],
    accent: "#ffffff",
    liveUrl: "https://www.pogokidswatches.com/",
    
    isFeatured: true,
    verifiedTech: [
      { label: "Frontend", value: "Next.js App Router & React 19" },
      { label: "Styling", value: "Tailwind CSS 4" },
      { label: "Messaging", value: "Resend Email Integration" },
      { label: "Deliverable", value: "Client E-Commerce Showcase" },
    ],
  },
  {
    id: "python-rag-pipeline",
    number: "02",
    title: "Python RAG Pipeline",
    category: "AI Engineering / Retrieval-Augmented Generation",
    description:
      "A Python-based RAG project focused on document ingestion and retrieval, exploring how documents can be processed and searched to provide relevant context to AI applications.",
    extendedDescription:
      "Engineered an end-to-end Python retrieval pipeline using local FastEmbed embeddings with ChromaDB vector storage and Google Gemini 3.5 Flash for grounded context synthesis, exposed via a FastAPI HTTP service.",
    tags: [
      "Python",
      "ChromaDB",
      "FastEmbed",
      "LangChain",
      "Google GenAI SDK",
      "Gemini Flash",
      "FastAPI",
    ],
    accent: "#ffffff",
    githubUrl: "https://github.com/Ehaabsyed",
    isFeatured: true,
    isRag: true,
    verifiedTech: [
      { label: "Vector Database", value: "ChromaDB (langchain_chroma, Cosine / HNSW)" },
      { label: "Embedding Model", value: "FastEmbed (BAAI/bge-small-en-v1.5)" },
      { label: "Document Splitting", value: "LangChain RecursiveCharacterTextSplitter (500/50)" },
      { label: "Retrieval Method", value: "Similarity score threshold (score_threshold: 0.5)" },
      { label: "LLM Generation", value: "Google GenAI SDK (gemini-3.5-flash-lite)" },
      { label: "API Layer", value: "FastAPI with CORS enabled" },
    ],
    architecture: [
      {
        stage: "01. Document Ingestion",
        component: "os.listdir + File Loader",
        status: "implemented",
        details: "Loads UTF-8 plain text (.txt) corpus from local data directory with source filename tracking.",
      },
      {
        stage: "02. Text Chunking",
        component: "RecursiveCharacterTextSplitter",
        status: "implemented",
        details: "Splits documents into 500-character windows with 50-character overlap, attaching origin metadata.",
      },
      {
        stage: "03. Local Embeddings",
        component: "FastEmbed (bge-small-en-v1.5)",
        status: "implemented",
        details: "Runs compact ONNX-optimized transformer locally, avoiding paid embedding API calls and network latency.",
      },
      {
        stage: "04. Vector Persistence",
        component: "ChromaDB ('documents')",
        status: "implemented",
        details: "Persists embeddings to disk at db/chroma_db with HNSW index using cosine similarity distance.",
      },
      {
        stage: "05. Threshold Retrieval",
        component: "Vector Retriever",
        status: "implemented",
        details: "Searches top similar chunks with strict 0.5 cosine threshold to prevent hallucinatory noise.",
      },
      {
        stage: "06. Context-Bound Prompting",
        component: "Grounded System Prompt",
        status: "implemented",
        details: "Enforces answer constraint: 'Answer strictly based on the context... otherwise respond: I don't know based on the provided documents.'",
      },
      {
        stage: "07. LLM Response Generation",
        component: "Google GenAI (Gemini Flash)",
        status: "implemented",
        details: "Calls Google GenAI client to generate accurate, plain-text answers grounded strictly in retrieved context.",
      },
      {
        stage: "08. Web Service API",
        component: "FastAPI POST /ask",
        status: "implemented",
        details: "Pydantic-validated endpoint with CORS middleware for seamless Next.js frontend integration.",
      },
      {
        stage: "09. Multi-Format Parser (PDF/DOCX)",
        component: "pypdf / unstructured",
        status: "conceptual",
        details: "Planned expansion for automated extraction of multi-column PDFs and rich office documents.",
      },
      {
        stage: "10. Cross-Encoder Re-Ranking",
        component: "FlashRank / Cohere",
        status: "conceptual",
        details: "Conceptual second-pass re-ranking stage to optimize semantic relevancy before context packing.",
      },
    ],
  },
  {
    id: "prismcode",
    number: "03",
    title: "PrismCode — AI Code Reviewer",
    category: "Full-Stack AI Application",
    description:
      "An AI-powered code reviewer that analyzes submitted code and returns structured reviews, efficiency ratings, error detection, improvement suggestions and corrected code.",
    extendedDescription:
      "Developed backend APIs using Express.js and Google GenAI SDK powered by Gemini 2.5 Flash. Applied structured prompt engineering to parse arbitrary codebases into actionable metrics, time/space complexity audits, vulnerability flags, and refactored code output.",
    tags: [
      "Express.js",
      "Google GenAI SDK",
      "Gemini 2.5 Flash",
      "JavaScript",
      "Node.js",
      "dotenv",
    ],
    accent: "#ffffff",
    githubUrl: "https://github.com/Ehaabsyed",
    isFeatured: true,
    verifiedTech: [
      { label: "Backend API", value: "Express.js & Node.js" },
      { label: "AI Engine", value: "Google GenAI SDK & Gemini 2.5 Flash" },
      { label: "Core Feature", value: "Automated Error Detection & Code Refactoring" },
      { label: "Security", value: "Strict dotenv Environment Key Handling" },
    ],
  },
  {
    id: "qr-event-system",
    number: "04",
    title: "QR Event Management System",
    category: "Backend Systems & Access Control",
    description:
      "An event management platform with registration, downloadable PDF tickets, unique QR codes, QR scanning and duplicate-entry prevention.",
    extendedDescription:
      "Built an attendee check-in and ticket issuance system using Node.js and Express.js. Generated printable event tickets on the fly with PDFKit containing unique cryptographic QR codes, coupled with a fast-scanner backend validation that flags already-used passes to eliminate gate fraud.",
    tags: ["Node.js", "Express.js", "PDFKit", "QR Scanning", "MongoDB"],
    accent: "#ffffff",
    githubUrl: "https://github.com/Ehaabsyed",
    isFeatured: false,
    verifiedTech: [
      { label: "Backend", value: "Node.js & Express.js" },
      { label: "PDF Generation", value: "PDFKit with dynamic QR stamps" },
      { label: "Security", value: "One-time validation & duplicate entry lockout" },
      { label: "Database", value: "MongoDB attendee records" },
    ],
  },
  {
    id: "book-my-pitch",
    number: "05",
    title: "BookMyPitch — Turf Booking System",
    category: "Full-Stack Sports Reservation Platform",
    description:
      "A full-stack turf booking platform featuring secure authentication, slot reservations, verification codes, booking confirmation emails, tournament suggestions and a simulated payment workflow.",
    extendedDescription:
      "Constructed a full-featured MERN reservation system with live slot locking, slot owner verification codes, automated confirmation emails via Nodemailer, tournament recommendations, and a simulated checkout flow.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Nodemailer"],
    accent: "#ffffff",
    githubUrl: "https://github.com/Ehaabsyed",
    isFeatured: false,
    verifiedTech: [
      { label: "Stack", value: "MERN (MongoDB, Express, React, Node.js)" },
      { label: "Authentication", value: "JSON Web Tokens (JWT) & Secure Cookies" },
      { label: "Email Engine", value: "Nodemailer Confirmation Dispatcher" },
      { label: "Workflow", value: "Slot lock verification & simulated payment loader" },
    ],
  },
  {
    id: "hospital-management-system",
    number: "06",
    title: "Hospital Management System",
    category: "Enterprise Role-Based Application",
    description:
      "A role-based hospital management application for patients, doctors and administrators, featuring appointment booking, email OTP login, password recovery and doctor profile management.",
    extendedDescription:
      "Engineered a scalable MERN healthcare application with multi-role access levels, time-sensitive email OTP logins, Cloudinary CDN doctor profile image pipelines, and production deployment across Vercel and Render.",
    tags: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT",
      "Cloudinary",
      "Vercel",
      "Render",
    ],
    accent: "#ffffff",
    githubUrl: "https://github.com/Ehaabsyed",
    isFeatured: false,
    verifiedTech: [
      { label: "Access Control", value: "Role-Based Access Control (Patient, Doctor, Admin)" },
      { label: "Authentication", value: "Email OTP two-factor & password reset" },
      { label: "Media Storage", value: "Cloudinary CDN integration" },
      { label: "Deployments", value: "Vercel (Client) + Render (API)" },
    ],
  },
  {
    id: "al-saquib-limited",
    number: "07",
    title: "Al Saquib Limited — Corporate Website",
    category: "Freelance Client Work / Corporate Website",
    description:
      "Developed a responsive corporate website using Next.js App Router, with a Zod-validated contact form and email delivery for customer inquiries.",
    extendedDescription:
      "Created a high-converting corporate web portal for client Al Saquib Limited. Built modern, accessible UI components with Tailwind CSS and shadcn/ui, incorporating server-side Zod validation and Resend email transmission to forward inquiries instantly to client executive mailboxes.",
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui", "Zod", "Resend"],
    accent: "#ffffff",
    isFeatured: false,
    verifiedTech: [
      { label: "Framework", value: "Next.js App Router & React Server Components" },
      { label: "UI System", value: "Tailwind CSS & shadcn/ui" },
      { label: "Validation", value: "Zod Schema Validation" },
      { label: "Delivery", value: "Resend Transactional Email" },
    ],
  },
];
