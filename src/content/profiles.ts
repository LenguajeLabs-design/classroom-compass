export type ProfileId = "dyslexia" | "dysgraphia" | "dyscalculia" | "adhd" | "autism";

export type ProfileStrategyLevel = "teacher-ready" | "specialist-supported";

export type EvidenceBasis =
  | "evidence-backed practice"
  | "practice-guide recommendation"
  | "professional consensus"
  | "access accommodation";

export type EvidenceSource = {
  id: string;
  organization: string;
  title: string;
  url: string;
};

export type Profile = {
  id: ProfileId;
  name: string;
  shortName: string;
  description: string;
  safeguard: string;
};

export type ProfileStrategy = {
  id: string;
  profileIds: ProfileId[];
  concernIds: string[];
  supportAreaIds: string[];
  level: ProfileStrategyLevel;
  title: string;
  needAddressed: string;
  teacherAction: string;
  tryTomorrow: string;
  monitor: string[];
  evidenceBasis: EvidenceBasis;
  evidenceNote: string;
  sourceIds: string[];
  trainingNeeded?: string;
  avoid?: { practice: string; reason: string }[];
};

export const profiles: Profile[] = [
  {
    id: "dyslexia",
    name: "Specific Learning Disorder in reading",
    shortName: "Dyslexia",
    description:
      "A known or documented learning profile that primarily affects reading. It may involve accurate or fluent word reading, decoding, spelling, or the effort required to read.",
    safeguard:
      "Access tools such as audio and text-to-speech support participation, but they do not replace explicit, systematic reading instruction.",
  },
  {
    id: "dysgraphia",
    name: "Specific Learning Disorder in written expression",
    shortName: "Dysgraphia",
    description:
      "A known or documented learning profile that primarily affects written expression. It may involve spelling, sentence construction, organizing ideas, handwriting, or producing written work efficiently.",
    safeguard:
      "Reduce avoidable transcription barriers while preserving opportunities for explicit writing instruction and meaningful expression.",
  },
  {
    id: "dyscalculia",
    name: "Specific Learning Disorder in mathematics",
    shortName: "Dyscalculia",
    description:
      "A known or documented learning profile that primarily affects mathematics. It may involve number sense, calculation, recalling mathematical facts, or mathematical reasoning.",
    safeguard:
      "Use concrete and visual representations to support understanding; do not assume that speed or fact recall alone represents mathematical ability.",
  },
  {
    id: "adhd",
    name: "Attention-deficit/hyperactivity disorder (ADHD)",
    shortName: "ADHD",
    description:
      "Use only when ADHD is already known. Recommendations should be selected with the student because the same environment or tool can help one learner and distract another.",
    safeguard:
      "Do not interpret inconsistent attention, movement, or slow task entry as a lack of effort. Keep expectations clear, achievable, and positively supported.",
  },
  {
    id: "autism",
    name: "Autism",
    shortName: "Autism",
    description:
      "Use only when autism is already known. Recommendations should support communication, access, predictability, autonomy, and regulation—not make a student appear less autistic.",
    safeguard:
      "Do not require eye contact, suppress harmless stimming, remove reliable communication, or make compliance and appearing ‘normal’ the goal.",
  },
];

export const evidenceSources: EvidenceSource[] = [
  {
    id: "ies-english-learners",
    organization: "Institute of Education Sciences / What Works Clearinghouse",
    title: "Teaching Academic Content and Literacy to English Learners in Elementary and Middle School",
    url: "https://ies.ed.gov/ncee/wwc/PracticeGuide/19",
  },
  {
    id: "wida-2020-framework",
    organization: "WIDA",
    title: "WIDA English Language Development Standards Framework, 2020 Edition",
    url: "https://wida.wisc.edu/teach/standards/eld/2020",
  },
  {
    id: "asha-selective-mutism",
    organization: "American Speech-Language-Hearing Association",
    title: "Selective Mutism Practice Portal",
    url: "https://www.asha.org/practice-portal/clinical-topics/selective-mutism/",
  },
  {
    id: "asha-spoken-language",
    organization: "American Speech-Language-Hearing Association",
    title: "Spoken Language Disorders Practice Portal",
    url: "https://www.asha.org/practice-portal/clinical-topics/spoken-language-disorders/",
  },
  {
    id: "asha-speech-sound",
    organization: "American Speech-Language-Hearing Association",
    title: "Speech Sound Disorders: Articulation and Phonology",
    url: "https://www.asha.org/practice-portal/clinical-topics/articulation-and-phonology/",
  },
  {
    id: "ies-foundational-reading",
    organization: "Institute of Education Sciences / What Works Clearinghouse",
    title: "Foundational Skills to Support Reading for Understanding in Kindergarten Through 3rd Grade",
    url: "https://ies.ed.gov/ncee/wwc/PracticeGuide/21/Published",
  },
  {
    id: "ies-reading-intervention",
    organization: "Institute of Education Sciences / What Works Clearinghouse",
    title: "Providing Reading Interventions for Students in Grades 4–9",
    url: "https://ies.ed.gov/ncee/wwc/PracticeGuide/29",
  },
  {
    id: "ida-structured-literacy",
    organization: "International Dyslexia Association",
    title: "Structured Literacy: Effective Instruction for Students with Dyslexia and Related Reading Difficulties",
    url: "https://dyslexiaida.org/structured-literacy-effective-instruction-for-students-with-dyslexia-and-related-reading-difficulties/",
  },
  {
    id: "ies-elementary-writing",
    organization: "Institute of Education Sciences / What Works Clearinghouse",
    title: "Teaching Elementary School Students to Be Effective Writers",
    url: "https://ies.ed.gov/ncee/wwc/PracticeGuide/17/Published",
  },
  {
    id: "ies-elementary-mathematics",
    organization: "Institute of Education Sciences / What Works Clearinghouse",
    title: "Assisting Students Struggling with Mathematics: Intervention in the Elementary Grades",
    url: "https://ies.ed.gov/ncee/wwc/PracticeGuide/26",
  },
  {
    id: "speldnsw-dyscalculia",
    organization: "SPELD NSW",
    title: "Dyscalculia",
    url: "https://www.speldnsw.org.au/information/dyscalculia/",
  },
  {
    id: "cdc-adhd-classroom",
    organization: "Centers for Disease Control and Prevention",
    title: "ADHD in the Classroom: Helping Children Succeed in School",
    url: "https://www.cdc.gov/adhd/treatment/classroom.html",
  },
  {
    id: "pbis-classroom",
    organization: "Center on PBIS",
    title: "Supporting and Responding to Behavior: Evidence-Based Classroom Strategies for Teachers",
    url: "https://www.pbis.org/resource/supporting-and-responding-to-behavior-evidence-based-classroom-strategies-for-teachers",
  },
  {
    id: "afirm-modules",
    organization: "AFIRM, UNC Frank Porter Graham Child Development Institute",
    title: "Autism Focused Intervention Resources and Modules",
    url: "https://afirm.fpg.unc.edu/afirm-modules",
  },
  {
    id: "iris-autism-ebp",
    organization: "IRIS Center, Vanderbilt University",
    title: "Autism Spectrum Disorder: Evidence-Based Practices",
    url: "https://iris.peabody.vanderbilt.edu/module/asd2/",
  },
  {
    id: "nas-communication",
    organization: "National Autistic Society",
    title: "Communication with autistic pupils",
    url: "https://www.autism.org.uk/learn/knowledge-hub/professional-practice/communication-pupils",
  },
];

export const profileStrategies: ProfileStrategy[] = [
  {
    id: "dyslexia-explicit-word-reading",
    profileIds: ["dyslexia"],
    concernIds: ["reading", "shutdown"],
    supportAreaIds: ["reading-writing"],
    level: "specialist-supported",
    title: "Coordinate explicit, systematic word-reading instruction",
    needAddressed: "Accurate decoding, spelling, and recognition of increasingly complex words.",
    teacherAction:
      "Bring the observed reading pattern to the reading specialist or support team. Align classroom practice with the student's explicit, systematic phonics, decoding, spelling, and word-part instruction rather than asking the student to infer patterns independently.",
    tryTomorrow:
      "Note one recurring word-reading pattern, such as vowel confusion or difficulty breaking apart a multisyllabic word, and share that specific observation with the reading specialist.",
    monitor: [
      "Accuracy on the explicitly taught sound, spelling, or word-part pattern",
      "Whether the student applies the pattern in new words",
      "Whether reading avoidance decreases as the task becomes more accessible",
    ],
    evidenceBasis: "practice-guide recommendation",
    evidenceNote:
      "IES recommends explicit instruction linking speech sounds to letters and teaching students to decode words and analyze word parts. This aligns with the SSIS emphasis on phonics intervention, sound mapping, morphology, guided practice, and cumulative review.",
    sourceIds: ["ies-foundational-reading", "ies-reading-intervention", "ida-structured-literacy"],
    trainingNeeded: "Coordinate with a reading specialist or trained interventionist.",
    avoid: [
      {
        practice: "Guessing from pictures or context instead of reading the word",
        reason: "Context can support comprehension, but it should not replace attention to the letters and word parts needed for accurate decoding.",
      },
    ],
  },
  {
    id: "dyslexia-curriculum-access",
    profileIds: ["dyslexia"],
    concernIds: ["reading", "shutdown"],
    supportAreaIds: ["reading-writing", "emotional-regulation"],
    level: "teacher-ready",
    title: "Use audio or supported reading when decoding is not the goal",
    needAddressed: "Participation in grade-level content while reading skills continue to develop.",
    teacherAction:
      "Provide text-to-speech, an audiobook, a read-along, or a supported read-aloud when the lesson objective is content knowledge rather than independent decoding.",
    tryTomorrow:
      "Before the lesson, identify whether reading the text independently is the learning goal. If it is not, offer audio or read-aloud access without removing the printed text.",
    monitor: [
      "Whether the student contributes more ideas after the decoding barrier is reduced",
      "Comprehension of the lesson content",
      "Continued participation in the student’s planned reading instruction",
    ],
    evidenceBasis: "access accommodation",
    evidenceNote:
      "Audio, read-along, and text-to-speech tools reflect SSIS curriculum-access supports. They provide access to ideas but do not replace explicit reading instruction.",
    sourceIds: ["ies-foundational-reading", "ies-reading-intervention"],
  },
  {
    id: "dyslexia-reduce-transcription-load",
    profileIds: ["dyslexia"],
    concernIds: ["writing", "shutdown"],
    supportAreaIds: ["reading-writing"],
    level: "teacher-ready",
    title: "Reduce copying while preserving literacy thinking",
    needAddressed: "Working-memory and transcription load that can hide what a student knows.",
    teacherAction:
      "Provide printed directions or notes, allow keyboarding or speech-to-text when appropriate, and evaluate the intended learning rather than the amount copied from the board.",
    tryTomorrow:
      "Give the student a copy of the task directions and ask for one complete response that shows the target skill instead of requiring extensive copying.",
    monitor: [
      "Time taken to begin the meaningful part of the task",
      "Quality of ideas when copying demands are reduced",
      "Whether the support increases independence rather than adult prompting",
    ],
    evidenceBasis: "access accommodation",
    evidenceNote:
      "Reduced copying, printed notes, speech-to-text, and text-to-speech appear in the SSIS accommodations framework. They should preserve the learning objective and sit alongside explicit literacy teaching.",
    sourceIds: ["ida-structured-literacy", "ies-reading-intervention"],
  },
  {
    id: "dyslexia-protected-practice",
    profileIds: ["dyslexia"],
    concernIds: ["reading", "group-work", "shutdown"],
    supportAreaIds: ["reading-writing", "group-participation", "emotional-regulation"],
    level: "teacher-ready",
    title: "Rehearse reading before asking for public performance",
    needAddressed: "Practice and participation without surprise exposure or avoidable embarrassment.",
    teacherAction:
      "Give the student advance access to a short passage, allow rehearsal with a trusted partner, and offer a meaningful non-reading role when public oral reading is not the instructional goal.",
    tryTomorrow:
      "Privately preview the participation choices before the lesson and let the student choose whether to read a rehearsed portion, contribute an idea, or take another role.",
    monitor: [
      "Willingness to participate when the task is predictable",
      "Reading accuracy after supported rehearsal",
      "Signs of anxiety before and after public participation",
    ],
    evidenceBasis: "professional consensus",
    evidenceNote:
      "This aligns with the SSIS use of pre-practice, supported participation, and alternative presentation pathways. It is not a replacement for direct reading instruction.",
    sourceIds: ["ida-structured-literacy", "ies-foundational-reading"],
    avoid: [
      {
        practice: "Unexpected round-robin reading",
        reason: "It can turn reading difficulty into public performance pressure without providing systematic instruction or useful practice.",
      },
    ],
  },
  {
    id: "dysgraphia-separate-composition-transcription",
    profileIds: ["dysgraphia"],
    concernIds: ["writing", "shutdown"],
    supportAreaIds: ["reading-writing"],
    level: "teacher-ready",
    title: "Separate the quality of the idea from the act of handwriting",
    needAddressed: "Written expression when handwriting, spelling, or transcription effort hides what the student understands.",
    teacherAction:
      "Decide whether the lesson is assessing ideas, writing craft, spelling, or handwriting. When handwriting is not the goal, allow keyboarding, speech-to-text, dictation, or an oral response while keeping the thinking demand intact.",
    tryTomorrow:
      "Name the learning goal before the task and offer one appropriate alternative way to record the response.",
    monitor: [
      "Quality and amount of meaningful content produced",
      "Time needed to begin and complete the response",
      "Whether the student can use the access tool with increasing independence",
    ],
    evidenceBasis: "access accommodation",
    evidenceNote:
      "SSIS guidance includes alternative recording methods, speech-to-text, keyboarding, reduced copying, and adjusted written-output demands. These supports should preserve the intended learning goal.",
    sourceIds: ["ies-elementary-writing"],
  },
  {
    id: "dysgraphia-plan-rehearse-write",
    profileIds: ["dysgraphia"],
    concernIds: ["writing", "shutdown"],
    supportAreaIds: ["reading-writing"],
    level: "teacher-ready",
    title: "Plan and rehearse before writing",
    needAddressed: "Organizing ideas and constructing sentences without managing every writing demand at once.",
    teacherAction:
      "Use a brief graphic organizer, a model, key vocabulary, or sentence frames. Let the student say the idea aloud before writing, then work in one short section at a time.",
    tryTomorrow:
      "Ask the student to rehearse one sentence aloud, capture its key words, and then write or type it using a visible model.",
    monitor: [
      "Whether oral rehearsal leads to a more complete written idea",
      "Whether the organizer reduces adult prompting",
      "Which scaffold the student continues to need",
    ],
    evidenceBasis: "practice-guide recommendation",
    evidenceNote:
      "IES writing guidance recommends explicitly teaching the writing process and sentence construction. SSIS guidance includes spoken rehearsal, graphic organizers, sentence frames, models, and short distributed practice.",
    sourceIds: ["ies-elementary-writing"],
  },
  {
    id: "dysgraphia-explicit-writing-transcription",
    profileIds: ["dysgraphia"],
    concernIds: ["writing", "shutdown"],
    supportAreaIds: ["reading-writing"],
    level: "specialist-supported",
    title: "Coordinate explicit writing and transcription instruction",
    needAddressed: "Persistent difficulty with handwriting, spelling, sentence construction, typing, or written organization.",
    teacherAction:
      "Share specific writing samples with Learning Support and align classroom scaffolds with the student's explicit instruction. Follow documented fine-motor or occupational-therapy recommendations when those are part of the student's plan.",
    tryTomorrow:
      "Collect one short writing sample and note separately what you observe about ideas, sentence construction, spelling, handwriting, and task stamina.",
    monitor: [
      "Progress on the explicitly taught writing or transcription skill",
      "Whether the skill transfers into classroom writing",
      "Whether access tools reduce barriers without replacing instruction",
    ],
    evidenceBasis: "practice-guide recommendation",
    evidenceNote:
      "IES recommends teaching handwriting, spelling, sentence construction, typing, and word processing. Individual fine-motor tools should follow observed need and specialist guidance rather than being assigned to every student with the label.",
    sourceIds: ["ies-elementary-writing"],
    trainingNeeded: "Coordinate with Learning Support and, when relevant, the student's occupational therapist.",
  },
  {
    id: "dyscalculia-representations",
    profileIds: ["dyscalculia"],
    concernIds: ["mathematics", "shutdown"],
    supportAreaIds: ["mathematics-learning"],
    level: "teacher-ready",
    title: "Build the concept with concrete and visual representations",
    needAddressed: "Connecting quantity, mathematical relationships, symbols, and procedures.",
    teacherAction:
      "Use a small, consistent set of manipulatives and drawings that clearly represent the concept. Explicitly connect each part of the representation to the equation and mathematical language.",
    tryTomorrow:
      "Model one problem with objects, a diagram, and symbols, then ask the student to explain the connection in their own words.",
    monitor: [
      "Whether the student explains the relationship rather than copies a procedure",
      "Accuracy when moving from the representation to symbols",
      "Transfer to a new example",
    ],
    evidenceBasis: "evidence-backed practice",
    evidenceNote:
      "The IES mathematics intervention guide gives a strong-evidence recommendation for well-chosen concrete and semi-concrete representations.",
    sourceIds: ["ies-elementary-mathematics", "speldnsw-dyscalculia"],
  },
  {
    id: "dyscalculia-number-line",
    profileIds: ["dyscalculia"],
    concernIds: ["mathematics"],
    supportAreaIds: ["mathematics-learning"],
    level: "teacher-ready",
    title: "Teach the number line as a reasoning tool",
    needAddressed: "Magnitude, sequence, operations, fractions, and relationships between numbers.",
    teacherAction:
      "Model how to locate, compare, and operate on numbers using a number line. Ask the student to mark and explain the jumps instead of using the line as an unexplained answer aid.",
    tryTomorrow:
      "Solve one example together on a number line, label each jump, and then give a parallel example with the same structure.",
    monitor: [
      "Accuracy locating and comparing quantities",
      "Whether the student can explain the direction and size of each jump",
      "Reduced reliance on guessing or recounting from one",
    ],
    evidenceBasis: "evidence-backed practice",
    evidenceNote:
      "IES gives a strong-evidence recommendation for using number lines to develop mathematical concepts and procedures.",
    sourceIds: ["ies-elementary-mathematics"],
  },
  {
    id: "dyscalculia-word-problem-structure",
    profileIds: ["dyscalculia"],
    concernIds: ["mathematics"],
    supportAreaIds: ["mathematics-learning"],
    level: "teacher-ready",
    title: "Make word-problem structure and language explicit",
    needAddressed: "Applying mathematical ideas when language or problem structure adds another barrier.",
    teacherAction:
      "Teach the student to identify the situation, the known and unknown quantities, and their relationship before selecting an operation. Use a diagram and consistent mathematical language.",
    tryTomorrow:
      "Before calculating, have the student draw the relationship in one word problem and explain what needs to be found.",
    monitor: [
      "Whether the student identifies the mathematical relationship",
      "Choice of operation on a parallel problem",
      "Whether language clarification changes performance",
    ],
    evidenceBasis: "evidence-backed practice",
    evidenceNote:
      "IES gives strong-evidence recommendations for deliberate word-problem instruction and explicit mathematical language.",
    sourceIds: ["ies-elementary-mathematics"],
  },
  {
    id: "dyscalculia-systematic-intervention",
    profileIds: ["dyscalculia"],
    concernIds: ["mathematics", "shutdown"],
    supportAreaIds: ["mathematics-learning"],
    level: "specialist-supported",
    title: "Coordinate systematic, cumulative mathematics intervention",
    needAddressed: "Persistent foundational gaps that require an explicit sequence, guided practice, cumulative review, and progress monitoring.",
    teacherAction:
      "Bring specific error patterns and student explanations to Learning Support or the mathematics interventionist. Align classroom tools and language with the intervention sequence rather than adding disconnected drill.",
    tryTomorrow:
      "Record one recurring error, the representation used, and what the student says the numbers and symbols mean.",
    monitor: [
      "Progress on explicitly taught concepts and procedures",
      "Retention during cumulative review",
      "Application of the learning in regular classroom mathematics",
    ],
    evidenceBasis: "practice-guide recommendation",
    evidenceNote:
      "IES recommends systematic mathematics intervention using clear models, guided practice, representations, mathematical language, and cumulative review. SSIS similarly identifies targeted small-group and individualized mathematics support.",
    sourceIds: ["ies-elementary-mathematics", "speldnsw-dyscalculia"],
    trainingNeeded: "Coordinate with Learning Support or a trained mathematics interventionist.",
  },
  {
    id: "adhd-clear-task-entry",
    profileIds: ["adhd"],
    concernIds: ["off-task", "shutdown", "writing", "reading"],
    supportAreaIds: ["attention-focus", "behavior-self-regulation", "reading-writing"],
    level: "teacher-ready",
    title: "Make the first task step visible and achievable",
    needAddressed: "Task initiation, working memory, and sustaining attention through an unclear demand.",
    teacherAction:
      "State and display one concrete first step, reduce long or repetitive workload while preserving the objective, and check in briefly as the student begins.",
    tryTomorrow:
      "Put a box around the first item, say what ‘started’ looks like, and return in two minutes to give specific feedback on task entry.",
    monitor: [
      "Time from direction to task start",
      "Number of prompts needed to begin",
      "Completion of the essential learning task",
    ],
    evidenceBasis: "professional consensus",
    evidenceNote:
      "CDC classroom guidance recommends clear assignments, checking understanding, and avoiding unnecessarily long or repetitive tasks. Evidence is stronger for organized behavior-management approaches than for every individual accommodation.",
    sourceIds: ["cdc-adhd-classroom", "pbis-classroom"],
  },
  {
    id: "adhd-immediate-positive-feedback",
    profileIds: ["adhd"],
    concernIds: ["off-task", "shutdown", "transitions", "peer-conflict"],
    supportAreaIds: ["attention-focus", "behavior-self-regulation", "group-participation"],
    level: "teacher-ready",
    title: "Give immediate, specific feedback on the behavior being built",
    needAddressed: "Frequent feedback and reinforcement for a clearly defined, achievable behavior.",
    teacherAction:
      "Name the exact action that is helping learning—such as starting, checking the visual, waiting for a turn, or returning after a break—soon after it occurs.",
    tryTomorrow:
      "Choose one observable behavior and acknowledge it specifically at least twice before correction becomes necessary.",
    monitor: [
      "Frequency of the chosen behavior",
      "Ratio of positive feedback to corrective interactions",
      "Whether engagement lasts longer after feedback",
    ],
    evidenceBasis: "evidence-backed practice",
    evidenceNote:
      "Behavioral classroom management, which includes structured positive reinforcement and feedback, is among the school-based approaches identified by CDC as effective for students with ADHD.",
    sourceIds: ["cdc-adhd-classroom", "pbis-classroom"],
  },
  {
    id: "adhd-organization-routine",
    profileIds: ["adhd"],
    concernIds: ["off-task", "transitions", "writing"],
    supportAreaIds: ["attention-focus", "behavior-self-regulation", "reading-writing"],
    level: "specialist-supported",
    title: "Teach one repeatable organization routine",
    needAddressed: "Planning, tracking materials, remembering tasks, and following work through to completion.",
    teacherAction:
      "Use the same brief routine to record the task, collect materials, check completion, and pack up. Teach and practice each step rather than only providing a planner.",
    tryTomorrow:
      "Create a four-step visual check—record, gather, do, submit—and rehearse it with one real assignment.",
    monitor: [
      "Number of steps completed without an adult reminder",
      "Frequency of missing materials or assignments",
      "Whether the routine transfers across classes or tasks",
    ],
    evidenceBasis: "evidence-backed practice",
    evidenceNote:
      "CDC identifies organizational training as an effective school-based management strategy. A sustained program may require trained staff and coordination across adults.",
    sourceIds: ["cdc-adhd-classroom"],
    trainingNeeded: "Coordinate a consistent routine with the support team when it needs to operate across settings.",
  },
  {
    id: "adhd-movement-with-purpose",
    profileIds: ["adhd"],
    concernIds: ["off-task", "transitions", "big-reactions"],
    supportAreaIds: ["attention-focus", "behavior-self-regulation", "emotional-regulation"],
    level: "teacher-ready",
    title: "Plan movement with the student instead of waiting for disruption",
    needAddressed: "Regulation and attention when remaining still for long periods is effortful.",
    teacherAction:
      "Agree on a brief, predictable movement option tied to natural transitions or a quiet signal, then review whether it actually helps the student re-engage.",
    tryTomorrow:
      "Offer two possible movement routines and ask the student which one is most likely to help before independent work.",
    monitor: [
      "Return to learning after the movement opportunity",
      "Whether the timing prevents rather than interrupts dysregulation",
      "The student’s report of whether the option helps or distracts",
    ],
    evidenceBasis: "access accommodation",
    evidenceNote:
      "CDC includes breaks and movement among common classroom supports while noting that evidence for individual accommodations is limited. Treat this as a hypothesis to test with the student, not a guaranteed intervention.",
    sourceIds: ["cdc-adhd-classroom"],
    avoid: [
      {
        practice: "Removing movement or recess as punishment",
        reason: "Movement may be part of how the student regulates attention; removing it can make successful re-engagement harder.",
      },
    ],
  },
  {
    id: "autism-visual-predictability",
    profileIds: ["autism"],
    concernIds: ["transitions", "shutdown", "big-reactions", "off-task"],
    supportAreaIds: ["behavior-self-regulation", "emotional-regulation", "attention-focus"],
    level: "teacher-ready",
    title: "Show what is happening now, next, and when it is finished",
    needAddressed: "Predictability, transitions, task understanding, and reduced dependence on spoken reminders.",
    teacherAction:
      "Use a short visual sequence that shows the current activity, the next transition, and a clear finished state. Update it when the plan changes.",
    tryTomorrow:
      "Make a three-part now–next–finished card for the transition that is usually hardest and review it before the transition begins.",
    monitor: [
      "Number of spoken prompts needed during the transition",
      "Whether the student checks the visual independently",
      "Recovery time when a planned change is shown in advance",
    ],
    evidenceBasis: "evidence-backed practice",
    evidenceNote:
      "Visual supports are included in autism evidence-based-practice resources. Their form should match the student’s communication and comprehension needs.",
    sourceIds: ["afirm-modules", "iris-autism-ebp"],
  },
  {
    id: "autism-functional-communication",
    profileIds: ["autism"],
    concernIds: ["big-reactions", "shutdown", "group-work", "peer-conflict"],
    supportAreaIds: ["emotional-regulation", "group-participation", "behavior-self-regulation"],
    level: "specialist-supported",
    title: "Teach a reliable way to communicate the need behind the behavior",
    needAddressed: "Requesting help, a break, clarification, more time, or an end to an overwhelming interaction.",
    teacherAction:
      "Work with the student and communication or support team to identify an efficient communication response, ensure it is honored, and practice it when the student is regulated.",
    tryTomorrow:
      "Offer a simple spoken, written, gestural, or AAC-compatible way to request ‘help,’ ‘break,’ or ‘more time,’ and confirm privately that it works for the student.",
    monitor: [
      "Use of the communication response before escalation",
      "Whether adults recognize and honor the response consistently",
      "Reduction in distress—not merely outward compliance",
    ],
    evidenceBasis: "evidence-backed practice",
    evidenceNote:
      "Functional communication training and augmentative or alternative communication are represented in autism evidence-based-practice resources. Individual planning should involve communication specialists when appropriate.",
    sourceIds: ["afirm-modules", "iris-autism-ebp", "nas-communication"],
    trainingNeeded: "Coordinate with the student’s communication, learning-support, or behavior team.",
    avoid: [
      {
        practice: "Withholding an established communication system",
        reason: "Communication access is not a reward, and removing it can increase frustration and risk.",
      },
    ],
  },
  {
    id: "autism-low-pressure-participation",
    profileIds: ["autism"],
    concernIds: ["group-work", "peer-conflict", "shutdown"],
    supportAreaIds: ["group-participation", "emotional-regulation"],
    level: "teacher-ready",
    title: "Make participation explicit and offer equivalent communication modes",
    needAddressed: "Understanding social expectations and contributing without unnecessary speaking or eye-contact demands.",
    teacherAction:
      "Preview the participation routine, assign a clear role, and allow speaking, writing, pointing, typing, or AAC when those modes demonstrate the same learning.",
    tryTomorrow:
      "Before group work, privately show the student the available roles and communication choices, then let them select a meaningful way to contribute.",
    monitor: [
      "Meaningful contribution to the learning task",
      "Whether explicit roles reduce uncertainty",
      "The student’s comfort and preferred communication mode",
    ],
    evidenceBasis: "professional consensus",
    evidenceNote:
      "Autism guidance supports clear language, visual information, processing time, and access to appropriate communication. Success is meaningful participation, not performance of typical social behavior.",
    sourceIds: ["nas-communication", "afirm-modules"],
    avoid: [
      {
        practice: "Requiring eye contact to prove attention",
        reason: "Eye contact can increase cognitive or sensory demand and is not a reliable measure of listening or understanding.",
      },
    ],
  },
  {
    id: "autism-sensory-environment-check",
    profileIds: ["autism"],
    concernIds: ["big-reactions", "off-task", "shutdown", "transitions"],
    supportAreaIds: ["emotional-regulation", "attention-focus", "behavior-self-regulation"],
    level: "teacher-ready",
    title: "Check the environment before increasing the demand",
    needAddressed: "Sensory or environmental load that may be blocking access, regulation, or communication.",
    teacherAction:
      "Look for patterns involving sound, light, crowding, touch, uncertainty, or task intensity. Offer a practical adjustment and ask the student whether it helps.",
    tryTomorrow:
      "During one difficult routine, note what the student is hearing, seeing, and being asked to manage. Test one reversible adjustment rather than adding another verbal correction.",
    monitor: [
      "Distress before and after the adjustment",
      "Ability to communicate and re-engage",
      "The student’s report or behavior indicating whether the change helped",
    ],
    evidenceBasis: "professional consensus",
    evidenceNote:
      "Antecedent-based interventions and individualized environmental supports appear in autism practice resources. The useful adjustment depends on the individual and should be tested collaboratively.",
    sourceIds: ["afirm-modules", "iris-autism-ebp", "nas-communication"],
    avoid: [
      {
        practice: "Suppressing harmless stimming",
        reason: "Repetitive movement may support regulation or communication. Intervene only when there is a genuine safety or access concern and provide a safer alternative when needed.",
      },
    ],
  },
];

export function getProfileStrategies(profileIds: ProfileId[], concernId: string) {
  return profileStrategies.filter(
    strategy =>
      strategy.profileIds.some(profileId => profileIds.includes(profileId)) &&
      strategy.concernIds.includes(concernId),
  );
}

export function getEvidenceSources(sourceIds: string[]) {
  return sourceIds
    .map(sourceId => evidenceSources.find(source => source.id === sourceId))
    .filter((source): source is EvidenceSource => Boolean(source));
}
