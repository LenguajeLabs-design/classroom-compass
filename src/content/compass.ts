export type SupportLevel = "Universal" | "Intervention";

export type Strategy = {
  title: string;
  level: SupportLevel;
  helpsWith: string;
  classroomLook: string;
  whenToTry: string;
  bestFor?: string;
  supports?: string;
  tryTomorrow?: string;
  lookFor?: string;
  reference?: string;
};

export type SupportArea = {
  id: string;
  name: string;
  tagline: string;
  accent: string;
  accentSoft: string;
  icon: "focus" | "shield" | "heart" | "group" | "book" | "globe" | "voice";
  intro: string;
  decisionSupport?: string[];
  youMightBeHereIf: string[];
  teacherQuestion: string;
  lookFors: string[];
  avoids?: { avoid: string; why: string }[];
  meetingPrompts?: string[];
  universal: Strategy[];
  intervention: Strategy[];
};

export type Concern = {
  id: string;
  label: string;
  summary: string;
  supportAreaIds: string[];
};

export const supportAreas: SupportArea[] = [
  {
    id: "attention-focus",
    name: "Attention and Focus",
    tagline: "For students who miss directions, drift off, or struggle to stay with the task.",
    accent: "#F97316",
    accentSoft: "#FFF1E8",
    icon: "focus",
    intro:
      "Some students are not refusing to work. They are losing the thread of what is happening, missing key information, or struggling to hold attention long enough to begin and continue.",
    youMightBeHereIf: [
      "The student misses key directions and needs repeated prompting.",
      "The student starts slowly or not at all.",
      "The student looks distracted or restless during whole-group teaching.",
      "The student leaves tasks unfinished without clear understanding of why.",
    ],
    teacherQuestion: "Is this student refusing, or are they losing the thread of what to do?",
    lookFors: [
      "How quickly the student gets started",
      "How often directions need repeating",
      "Whether visual supports reduce prompts",
    ],
    universal: [
      {
        title: "Chunk instructions and post them visually",
        level: "Universal",
        helpsWith: "Students who get lost when too much information is given at once.",
        classroomLook:
          "Give one short direction at a time, then pause. Write cues and directions on the board or worksheet so the student does not have to hold everything in memory.",
        whenToTry:
          "When a student misses multi-step instructions, freezes at the start of a task, or repeatedly asks what to do next.",
      },
      {
        title: "Use planned seating and reduce background noise",
        level: "Universal",
        helpsWith: "Students whose attention drops because the environment is too busy or noisy.",
        classroomLook:
          "Seat the student intentionally, reduce distractions when possible, and use quieter zones or headphones during key listening and work times.",
        whenToTry: "When the student is easily pulled away by peer talk, movement, or room noise.",
      },
      {
        title: "Teach whole-body listening with visual cues",
        level: "Universal",
        helpsWith: "Students who need a concrete picture of what attention should look like.",
        classroomLook:
          "Use anchor charts, prompt cards, written cues, and repeated classroom language about what listening looks like in the body and during transitions.",
        whenToTry: "When verbal reminders alone are not changing listening and task-entry behaviors.",
      },
    ],
    intervention: [
      {
        title: "Create an individual visual schedule and task tracker",
        level: "Intervention",
        helpsWith: "Students who need stronger support monitoring attention and completing a task sequence.",
        classroomLook:
          "Use a visual schedule of tasks, moveable task cards, and a step-by-step tracker that the student can follow with short teacher check-ins.",
        whenToTry: "When universal checklists help a little but the student still cannot sustain task follow-through independently.",
      },
      {
        title: "Use visual timers, attention break cards, and movement seating",
        level: "Intervention",
        helpsWith: "Students who need more explicit regulation and pacing support to maintain attention.",
        classroomLook:
          "Add visual timers, attention break cards, wobble cushions, rocking chairs, stand-up desks, or a fidget box with clear expectations for use.",
        whenToTry: "When the student loses focus because work stamina and body regulation need more support.",
      },
      {
        title: "Add repeat-back checks and listening buddy support",
        level: "Intervention",
        helpsWith: "Students who hear directions but do not retain or process them accurately.",
        classroomLook:
          "Ask the student to repeat back the first step, use a listening buddy, and provide visual tracking sheets for listening tasks.",
        whenToTry: "When the student begins the wrong task or says they understand but cannot follow through.",
      },
    ],
  },
  {
    id: "behavior-self-regulation",
    name: "Behavior and Self-Regulation",
    tagline: "For students who avoid work, escalate, or need more support making expected choices.",
    accent: "#8B5CF6",
    accentSoft: "#F5F0FF",
    icon: "shield",
    intro:
      "Behavior is often the visible part of a larger problem. A student may be avoiding confusion, stress, lack of control, task difficulty, or social pressure.",
    youMightBeHereIf: [
      "The student argues, refuses, or pushes back.",
      "The student struggles with routines and expectations.",
      "Correction quickly leads to escalation.",
      "Behavior interrupts learning for the student or the group.",
    ],
    teacherQuestion: "What support would make the expected choice easier, not just more demanded?",
    lookFors: [
      "Whether escalation happens around the same task or routine",
      "Whether positive reinforcement changes the entry into work",
      "Whether behavior decreases when choices are clearer",
    ],
    universal: [
      {
        title: "Make expectations visible and predictable",
        level: "Universal",
        helpsWith: "Students who do better when routines and behavior expectations are concrete.",
        classroomLook:
          "Use classroom agreements, organized spaces, visual choice boards, and predictable response protocols so the student is not constantly guessing what is expected.",
        whenToTry: "When behavior problems spike during transitions, independent work, or moments of uncertainty.",
      },
      {
        title: "Use class-based positive reinforcement and self-tracking",
        level: "Universal",
        helpsWith: "Students who need more positive feedback before behavior slips.",
        classroomLook:
          "Reinforce expected behaviors early with verbal acknowledgment, simple self-tracking, jobs, or a classwide reward structure before the student is fully off course.",
        whenToTry: "When the team tends to interact with the student mostly after things go wrong.",
      },
      {
        title: "Offer limited choices and scheduled breaks",
        level: "Universal",
        helpsWith: "Students who escalate when they feel trapped, over-directed, or unsure.",
        classroomLook:
          "Offer two acceptable choices and build in planned cool-down time, movement breaks, or exit-ticket breaks before behavior escalates.",
        whenToTry: "When the student resists tasks but can engage once a sense of control is restored.",
      },
    ],
    intervention: [
      {
        title: "Use a targeted behavior chart with home-school feedback",
        level: "Intervention",
        helpsWith: "Students who need one clear focus behavior and consistent feedback across the day.",
        classroomLook:
          "Choose one target behavior, define what success looks like, and track it with a daily or weekly chart shared across school and home when helpful.",
        whenToTry: "When general reminders are not changing the pattern and the student needs more focused support.",
      },
      {
        title: "Use first-then boards and visual behavior prompts",
        level: "Intervention",
        helpsWith: "Students who avoid non-preferred tasks or need stronger structure to move through them.",
        classroomLook:
          "Use a first-then board, visual prompts, and a limited visual choice board so the student can see the next expected step and what comes after it.",
        whenToTry: "When the student gets stuck at the demand itself and needs a more structured pathway into work.",
      },
      {
        title: "Plan a safe de-escalation routine with token support",
        level: "Intervention",
        helpsWith: "Students who need a more explicit plan to reset and return without a full spiral.",
        classroomLook:
          "Use a separate safe space, regular sensory-motor breaks, and a token or counter system that reinforces the target behavior the team is teaching.",
        whenToTry: "When the student regularly reaches a point where staying in the main flow of the room makes things worse.",
      },
    ],
  },
  {
    id: "emotional-regulation",
    name: "Emotional Regulation",
    tagline: "For students who become overwhelmed, anxious, or shut down when learning feels too big.",
    accent: "#EC4899",
    accentSoft: "#FFF0F7",
    icon: "heart",
    intro:
      "Some students are not being defiant. They are overloaded. Emotional regulation support helps teachers notice when a student needs more predictability, more co-regulation, and safer ways to stay connected to learning.",
    youMightBeHereIf: [
      "The student shuts down when work becomes difficult.",
      "The student is visibly anxious before tasks or transitions.",
      "The student has big emotional responses that are hard to recover from.",
      "Stress appears to block access to learning.",
    ],
    teacherQuestion: "Is this student being oppositional, or are they overwhelmed?",
    lookFors: [
      "What tends to happen right before the emotional spike",
      "Whether the student can rejoin more quickly with a reset routine",
      "Whether predictability lowers anxiety",
    ],
    universal: [
      {
        title: "Teach calm-down tools before they are needed",
        level: "Universal",
        helpsWith: "Students who need shared language and familiar tools for regulation.",
        classroomLook:
          "Teach breathing, cool-off routines, emotion check-ins, and zones language during calm moments so the student can access them when stress rises.",
        whenToTry: "When the classroom only talks about regulation after a student is already overwhelmed.",
      },
      {
        title: "Make the day more predictable",
        level: "Universal",
        helpsWith: "Students who become anxious when routines shift or expectations feel unclear.",
        classroomLook:
          "Use visual schedules, advance warnings, transition countdowns, and clear previews of what is coming next.",
        whenToTry: "When emotional spikes happen around changes, surprises, or transitions.",
      },
      {
        title: "Use whole-class emotional check-ins and calming tools",
        level: "Universal",
        helpsWith: "Students who need permission and structure to regulate before overload becomes a crisis.",
        classroomLook:
          "Use feeling check-ins, emotional thermometers, gratitude or morning meeting routines, and access to calming tools like glitter jars, coloring, weighted supports, or pinwheels.",
        whenToTry: "When the student would benefit from stepping out of the emotional climb earlier.",
      },
    ],
    intervention: [
      {
        title: "Use break cards and a designed calm-down space",
        level: "Intervention",
        helpsWith: "Students who need more structured ways to step out and regulate before things become unmanageable.",
        classroomLook:
          "Create a calm-down space with self-monitoring tools, break cards, and a clear shared understanding of what a break looks like and how to return.",
        whenToTry: "When overwhelm seems frequent and the student needs a more concrete routine for stepping away and rejoining.",
      },
      {
        title: "Track emotions and build a coping plan with adult support",
        level: "Intervention",
        helpsWith: "Students who need a personalized regulation routine rather than generic classroom strategies.",
        classroomLook:
          "Use daily emotion tracking journals, size-of-the-problem lessons, and a stepladder coping or safety plan with adult coaching and clear shared language.",
        whenToTry: "When classwide regulation tools are not enough and the student needs a more individualized response.",
      },
      {
        title: "Provide planned decompression and transition warnings",
        level: "Intervention",
        helpsWith: "Students whose anxiety or dysregulation is closely tied to changes, vulnerable times, or intense demands.",
        classroomLook:
          "Schedule regular time to decompress in a safe space, give consistent individual warnings before transitions, and use social stories or reintegration plans when needed.",
        whenToTry: "When the student does best with emotional support that starts before the difficult moment arrives.",
      },
    ],
  },
  {
    id: "group-participation",
    name: "Group Participation",
    tagline: "For students who need more support joining discussion, group work, or class presentations.",
    accent: "#14B8A6",
    accentSoft: "#ECFEFA",
    icon: "group",
    intro:
      "Group participation is not just about confidence. For some students, the challenge is language load, social uncertainty, processing speed, performance anxiety, or not knowing how to enter the group plan.",
    youMightBeHereIf: [
      "The student avoids speaking in groups.",
      "The student disengages during collaborative work.",
      "The student needs heavy adult prompting to participate.",
      "Whole-class sharing or presenting creates visible stress.",
    ],
    teacherQuestion: "Does this student know how to participate, or do they need a more supported way in?",
    lookFors: [
      "Whether smaller entry routines increase participation",
      "Whether clear roles keep the student engaged longer",
      "Whether rehearsing lowers stress before contributing",
    ],
    universal: [
      {
        title: "Use safer entry routines",
        level: "Universal",
        helpsWith: "Students who need lower-pressure ways to participate before speaking to a whole group.",
        classroomLook:
          "Use think-pair-share, written response before verbal response, turn-and-talk, or yes-no entry questions before open discussion.",
        whenToTry: "When a student has ideas but avoids public participation.",
      },
      {
        title: "Give clear group roles and cues",
        level: "Universal",
        helpsWith: "Students who disengage because the group task is too socially or cognitively unstructured.",
        classroomLook:
          "Assign clear roles such as note-taker, pointer, starter, checker, or reporter and use turn-taking cues so the student knows how to contribute.",
        whenToTry: "When the student gets lost during open-ended group work.",
      },
      {
        title: "Preview participation expectations and practice first",
        level: "Universal",
        helpsWith: "Students who do better when they know what is coming.",
        classroomLook:
          "Tell the student how they might be invited to participate, warn them before their turn, and allow practice with notes, keywords, or a small rehearsal before group sharing.",
        whenToTry: "When group moments are stressful because the student feels put on the spot.",
      },
    ],
    intervention: [
      {
        title: "Use a structured participation goal and token support",
        level: "Intervention",
        helpsWith: "Students who need a more gradual pathway into group engagement.",
        classroomLook:
          "Set a specific goal such as stay with the group for five minutes, contribute one prepared idea, or complete one role with support and reinforcement for joining and staying with the group.",
        whenToTry: "When general participation encouragement is not enough to change the pattern.",
      },
      {
        title: "Teach group participation in small, supported steps",
        level: "Intervention",
        helpsWith: "Students who need practice before performing or speaking in the group setting.",
        classroomLook:
          "Use small-group social thinking lessons, peer buddy prompting, scripted participation strategies, and gradual skill-building into the group plan.",
        whenToTry: "When the student can participate in smaller or safer settings but struggles in front of the full group.",
      },
      {
        title: "Offer alternate presentation pathways",
        level: "Intervention",
        helpsWith: "Students who understand the learning but cannot yet show it through standard public participation demands.",
        classroomLook:
          "Allow presentations to happen in a small group, with the teacher, by audio or video, with notes or scripts, or through another way of showing mastery.",
        whenToTry: "When participation anxiety is masking actual understanding or effort.",
      },
    ],
  },
  {
    id: "reading-writing",
    name: "Reading and Writing",
    tagline: "For students who need better access to text, writing tasks, and literacy-heavy learning.",
    accent: "#3B82F6",
    accentSoft: "#EFF6FF",
    icon: "book",
    intro:
      "Many students look unmotivated when the real barrier is literacy access. Reading and writing demands can block participation, confidence, and independence long before a teacher sees clear evidence of the underlying challenge.",
    youMightBeHereIf: [
      "The student avoids reading or writing tasks.",
      "Written output is much weaker than oral understanding.",
      "Reading demands slow the student down across subjects.",
      "Literacy-heavy work creates visible fatigue or frustration.",
    ],
    teacherQuestion: "Is this a motivation problem, or is the literacy demand too high for independent success right now?",
    lookFors: [
      "Whether reading support changes task completion",
      "Whether oral scaffolds reveal stronger understanding",
      "Whether smaller writing steps reduce shutdown",
    ],
    universal: [
      {
        title: "Reduce the literacy load without lowering the thinking",
        level: "Universal",
        helpsWith: "Students who understand more than they can read or write independently.",
        classroomLook:
          "Use read-alouds, visuals, sentence starters, guided notes, audio books, content at an easier reading level, or fewer written responses while keeping the core thinking task intact.",
        whenToTry: "When the student's ideas are stronger than what the page shows.",
      },
      {
        title: "Scaffold writing into smaller parts",
        level: "Universal",
        helpsWith: "Students who get overwhelmed by a blank page or multi-step writing demand.",
        classroomLook:
          "Break writing into short parts: sentence starters, sentence frames, graphic organizers, paragraph templates, word walls, and modeled examples one section at a time.",
        whenToTry: "When the student cannot start writing or gives very little output despite understanding.",
      },
      {
        title: "Add visual and oral supports to reading tasks",
        level: "Universal",
        helpsWith: "Students who need more access points into text.",
        classroomLook:
          "Use pictures, read-alongs, personal dictionaries, anchor charts, partner reading, and annotated vocabulary or easier-entry texts connected to the same topic.",
        whenToTry: "When reading itself becomes the barrier to participating in the lesson.",
      },
    ],
    intervention: [
      {
        title: "Targeted small-group literacy support",
        level: "Intervention",
        helpsWith: "Students who need more repetition and explicit teaching than whole-group instruction can provide.",
        classroomLook:
          "Provide structured small-group support around guided reading, phonics, sound mapping, Elkonin boxes, morphology, decoding, or writing foundations with repeated guided practice.",
        whenToTry: "When classroom scaffolds help only a little and the literacy gap remains persistent.",
      },
      {
        title: "Use daily short writing intervention with multisensory supports",
        level: "Intervention",
        helpsWith: "Students who need more frequent and focused support producing written language.",
        classroomLook:
          "Use short daily sessions with sentence-level supports, spoken rehearsal, immediate corrective feedback, colorful semantics, visuals, manipulatives, and cumulative review.",
        whenToTry: "When writing output remains far below what the student can say or show verbally.",
      },
      {
        title: "Add assistive technology for literacy access",
        level: "Intervention",
        helpsWith: "Students whose literacy demands are interfering with showing understanding.",
        classroomLook:
          "Use speech-to-text, text-to-speech, adaptive learning platforms, vocabulary banks, and sentence stems so the student can access content and express ideas with less bottleneck.",
        whenToTry: "When the barrier is no longer just strategy, but access to the task itself.",
      },
    ],
  },
  {
    id: "english-language-overlap",
    name: "English Language + Learning Support Overlap",
    tagline: "For students who are English learners and may also need learning support scaffolds.",
    accent: "#10B981",
    accentSoft: "#ECFDF5",
    icon: "globe",
    intro:
      "Some students are navigating both language development and learning support needs at the same time. This area helps teams avoid asking, 'Is this EAL or learning support?' and instead ask, 'What access support does this student need right now?'",
    decisionSupport: [
      "The student may need language access support.",
      "The student may need learning support or executive function support.",
      "The student may need both at the same time.",
    ],
    youMightBeHereIf: [
      "The student understands more in their first language than in English.",
      "The student seems stuck between language acquisition needs and learning support concerns.",
      "The student needs more visuals, modeling, and reduced language load to show what they know.",
      "It is hard to tell whether the main barrier is English access, processing, literacy demand, or all three together.",
    ],
    teacherQuestion:
      "Are we looking at a lack of understanding, or is the language of the task hiding what this student actually knows?",
    lookFors: [
      "Whether visuals and simplified language improve independence",
      "Whether the student can show more understanding orally, with gestures, or in another language",
      "Whether reduced language load changes the quality of participation",
    ],
    universal: [
      {
        title: "Simplify and chunk classroom language",
        level: "Universal",
        helpsWith: "Students who lose meaning when directions or explanations are too language-heavy.",
        classroomLook:
          "Use short phrases, clear sentence patterns, chunked directions, repeated key words, and visual supports during teaching and task setup.",
        whenToTry:
          "When a student seems confused during spoken instruction but does better once the language is clarified or modeled.",
        bestFor:
          "Students with language processing, working memory, or attention demands who lose track of what to do during English-heavy lessons.",
        supports: "Language access, comprehension, and task entry.",
        tryTomorrow:
          "Put the task into 3 to 4 visible steps and use clear, concise spoken directions with key words repeated and modeled.",
        lookFor:
          "Does the student begin more independently and make fewer direction-based errors when the language load is reduced?",
        reference:
          "IES and WIDA both emphasize explicit instruction, structured support, and accessible language during content learning for multilingual learners.",
      },
      {
        title: "Use visuals and models before independent work",
        level: "Universal",
        helpsWith: "Students who need multiple ways to access meaning beyond spoken English.",
        classroomLook:
          "Use gestures, pictures, anchor charts, exemplars, real objects, and modeled responses so the student can connect language to action and meaning.",
        whenToTry:
          "When a student watches peers for clues, hesitates to begin, or seems more successful after seeing a model.",
        bestFor:
          'Students who ask "What do I do?" or copy classmates without clear understanding.',
        supports: "Task clarity, comprehension, and independent entry.",
        tryTomorrow:
          "Show a completed example, model the first item, and keep the model visible while students work.",
        lookFor:
          "Does the student start faster and make fewer direction-based errors after seeing the model?",
        reference:
          "IES recommends using instructional tools and visuals to support academic content learning for English learners.",
      },
      {
        title: "Pre-teach key vocabulary",
        level: "Universal",
        helpsWith: "Students who seem lost during content lessons because the key academic words are unfamiliar.",
        classroomLook:
          "Choose 5 to 7 essential words before the lesson. Teach each word with a visual, gesture, student-friendly definition, and a sentence frame.",
        whenToTry:
          "When a student looks confused early in the lesson or cannot access the task language well enough to begin.",
        bestFor:
          "Students who appear lost during content lessons or struggle to begin tasks with new academic language.",
        supports: "Vocabulary access, comprehension, confidence, and participation.",
        tryTomorrow:
          "Preview a small set of essential words with visuals and revisit them during speaking, reading, and writing in the lesson.",
        lookFor:
          "Does the student recognize, use, or point to the vocabulary during the lesson?",
        reference:
          "IES recommends explicit academic vocabulary instruction for English learners during content instruction.",
      },
      {
        title: "Provide sentence frames and partner rehearsal",
        level: "Universal",
        helpsWith: "Students who have ideas but need language support to get them out in oral or written English.",
        classroomLook:
          'Give frames such as "I notice ___," "I think ___ because ___," or "First, I will ___." Let the student rehearse with a partner before sharing or writing.',
        whenToTry:
          "When the student participates more in informal talk than in academic speaking or writing tasks.",
        bestFor: "Students with ideas but limited academic English output.",
        supports: "Participation, oral rehearsal, and written language production.",
        tryTomorrow:
          "Build partner talk into the lesson before writing and give one or two sentence frames students can keep visible.",
        lookFor:
          "Does oral rehearsal lead to fuller oral responses or stronger written output?",
        reference:
          "WIDA and IES both emphasize interactive language use, discussion, and structured language supports during content learning.",
      },
    ],
    intervention: [
      {
        title: "Language vs. learning observation check",
        level: "Intervention",
        helpsWith: "Teams that are unsure whether the concern is language, learning, or both.",
        classroomLook:
          "Compare how the student does with visuals, home-language planning, oral response, reduced text, and extra processing time before drawing conclusions.",
        whenToTry:
          "When a team keeps asking whether a concern belongs to EAL or learning support without enough evidence yet.",
        bestFor:
          "Students whose difficulty may come from language access, learning support needs, or the combination of both.",
        supports: "Decision-making and better evidence for the next meeting.",
        tryTomorrow:
          "Test the same task with different access conditions and compare the student's performance across those conditions.",
        lookFor:
          "Does the difficulty remain even when language access is improved?",
        reference:
          "WIDA encourages collaboration between language specialists and support teams when multilingual learners may also have disabilities or learning needs.",
      },
      {
        title: "Small-group reteach with visuals and oral practice",
        level: "Intervention",
        helpsWith: "Students who do not grasp whole-class instruction and need more explicit, smaller-step teaching.",
        classroomLook:
          "Reteach the same concept in a small group using visuals, gestures, worked examples, and guided oral practice before independent work.",
        whenToTry:
          "When whole-class instruction moves too quickly and the student needs a more supported entry point.",
        bestFor: "Students who do not grasp whole-class instruction.",
        supports: "Concept access, language rehearsal, and guided practice.",
        tryTomorrow:
          "Pull a short reteach group before or after the lesson and model the concept with visuals and oral response practice.",
        lookFor:
          "Does the student understand after smaller, more explicit instruction?",
        reference:
          "IES recommends targeted, explicit instruction for English learners' academic language and literacy development.",
      },
      {
        title: "Task initiation conference",
        level: "Intervention",
        helpsWith: "Students who freeze, avoid work, or wait passively even after whole-class support is in place.",
        classroomLook:
          'Start the task with a 1-minute check-in: "What is the task? What is step one? What help card can you use?"',
        whenToTry:
          "When the student understands more once supported but still cannot launch independently.",
        bestFor: "Students with task initiation, language processing, or executive function overlap.",
        supports: "Task entry, self-talk, and supported independence.",
        tryTomorrow:
          "Meet briefly at the start of one demanding task and leave the student with a visible first step and support option.",
        lookFor:
          "Does the student begin within 1 to 2 minutes after the conference?",
        reference:
          "Structured, explicit routines align with intervention recommendations for struggling learners and multilingual students who need stronger scaffolds.",
      },
      {
        title: "Collaborative support plan with EAL and learning support",
        level: "Intervention",
        helpsWith: "Students with persistent concerns across language-rich tasks where one lens alone is not enough.",
        classroomLook:
          "Have EAL and Learning Support compare WIDA or English level data, home-language literacy, reading and writing samples, attention patterns, and response to scaffolds.",
        whenToTry:
          "When concerns persist even after strong classroom supports and the team needs a clearer shared pattern.",
        bestFor: "Students with persistent concerns across language-rich tasks.",
        supports: "Shared data review and more accurate next-step planning.",
        tryTomorrow:
          "Bring one writing sample, one reading sample, and notes on which scaffolds changed the student's performance most.",
        lookFor:
          "Is there a clearer pattern after shared data review between EAL and Learning Support?",
        reference:
          "WIDA emphasizes collaboration across language development and disability/support services for multilingual learners with learning needs.",
      },
    ],
  },
  {
    id: "speaking-anxiety-selective-mutism",
    name: "Speaking Anxiety / Selective Mutism",
    tagline: "For students who can communicate in some settings but freeze, whisper, or avoid speech in school.",
    accent: "#EF4444",
    accentSoft: "#FEF2F2",
    icon: "voice",
    intro:
      "Use this area when a student is able to speak in some settings, such as at home or with trusted peers, but does not speak, speaks very little, freezes, whispers, or avoids verbal participation in school. Classroom Compass does not diagnose selective mutism. It helps teams reduce speaking pressure, create safe communication pathways, and build a gradual plan with families and specialists when needed.",
    decisionSupport: [
      "The student may understand and know the answer but feel unable to speak in that setting.",
      "The team may need to reduce pressure and widen what counts as communication.",
      "The next step should be a smaller communication step, not forced speech.",
    ],
    youMightBeHereIf: [
      "The student speaks comfortably at home or with selected peers but not in class.",
      "The student freezes when called on unexpectedly.",
      "The student communicates through gestures, pointing, writing, or whispering instead of speaking aloud.",
      "The student is at risk of being misread as defiant, low-language, or not understanding.",
    ],
    teacherQuestion:
      "What is the smallest next communication step we can support without forcing speech?",
    lookFors: [
      "Whether the student communicates in more ways, with more people, or in more settings",
      "Whether reducing pressure keeps the student more regulated and engaged",
      "Whether the student can move from gesture to whisper, writing, or brief speech over time",
    ],
    meetingPrompts: [
      "Where does the student communicate most comfortably?",
      "Who does the student communicate with?",
      "What forms of communication are currently possible: gesture, pointing, writing, whispering, recorded voice, peer talk, adult talk?",
      "What situations increase pressure?",
      "What is the smallest next communication step we can support without forcing speech?",
    ],
    avoids: [
      { avoid: "Calling on the student unexpectedly", why: "It can trigger freezing or avoidance." },
      { avoid: 'Saying "You have to speak"', why: "Selective mutism and speaking anxiety are anxiety-based, not defiance." },
      { avoid: "Bribing or celebrating speech publicly", why: "Public attention can increase pressure and make the next attempt less likely." },
      { avoid: "Punishing silence", why: "This misunderstands the support need and can worsen anxiety." },
      { avoid: "Speaking for the student every time", why: "It can remove opportunities for gradual, supported communication." },
      { avoid: "Assuming the student does not know the answer", why: "The student may understand but be unable to speak in that setting." },
    ],
    universal: [
      {
        title: "Reduce pressure to speak",
        level: "Universal",
        helpsWith: "Students who freeze when directly questioned or when speech is made the focus.",
        classroomLook:
          'Avoid calling on the student unexpectedly. Do not say "Use your words" or "You know this." Offer low-pressure ways to respond.',
        whenToTry:
          "When direct verbal pressure reliably leads to freezing, avoidance, or visible distress.",
        bestFor: "Students who become more anxious when adults focus on speech.",
        supports: "Regulation, participation, and emotional safety.",
        tryTomorrow:
          "Remove unexpected verbal demands from one lesson and replace them with planned, lower-pressure response options.",
        lookFor: "Does the student stay more regulated and engaged when pressure to speak is lowered?",
        reference:
          "ASHA recommends minimizing pressure, maintaining a calm demeanor, and allowing nonverbal response options.",
      },
      {
        title: "Accept nonverbal communication",
        level: "Universal",
        helpsWith: "Students who can show understanding but cannot speak comfortably in class.",
        classroomLook:
          "Allow pointing, nodding, thumbs up/down, drawing, writing, choosing from cards, or using a device.",
        whenToTry:
          "When a student is participating cognitively but cannot yet respond verbally in the classroom setting.",
        bestFor: "Students who need safe communication pathways before speech is possible.",
        supports: "Participation, access, and evidence of understanding.",
        tryTomorrow:
          "Give the student two or three nonverbal ways to respond in the next lesson and explicitly accept those responses.",
        lookFor: "Can the student participate without speaking?",
        reference:
          "ASHA and KidsHealth recommend nonverbal response options such as gestures, writing, drawing, and pointing.",
      },
      {
        title: "Use forced-choice questions",
        level: "Universal",
        helpsWith: "Students who cannot answer open-ended verbal questions yet.",
        classroomLook:
          'Ask, "Do you want A or B?" or "Is the answer ___ or ___?" and allow the student to point, whisper, or gesture.',
        whenToTry:
          "When open-ended questions are too high-pressure but the student may be able to respond within a smaller verbal or nonverbal choice.",
        bestFor: "Students who need a lower-demand entry into communication.",
        supports: "Response confidence and reduced pressure.",
        tryTomorrow:
          "Convert one open-ended question into a forced-choice question and allow the student to answer nonverbally if needed.",
        lookFor: "Does the student respond more often with choices than with open questions?",
        reference:
          "This aligns with classroom adaptations recommended by ASHA and selective mutism school guidance.",
      },
      {
        title: "Pair with a trusted peer and use small groups first",
        level: "Universal",
        helpsWith: "Students who communicate more in safer, smaller social settings.",
        classroomLook:
          "Seat the student near a trusted peer and begin with partner or small-group tasks that allow pointing, showing, writing, or quiet rehearsal before whole-class demands.",
        whenToTry:
          "When the student shuts down in front of the whole class but may communicate more with one peer or in a small group.",
        bestFor: "Students whose anxiety decreases with a safe peer or reduced audience size.",
        supports: "Participation, regulation, and gradual communication.",
        tryTomorrow:
          "Start with one partner task or small-group response before any whole-class sharing moment.",
        lookFor: "Does participation increase near the trusted peer or in smaller settings?",
        reference:
          "Child Mind Institute recommends buddy support and small-group opportunities to reduce inhibition.",
      },
    ],
    intervention: [
      {
        title: "Communication ladder",
        level: "Intervention",
        helpsWith: "Students who need a gradual path toward verbal participation without forced speech.",
        classroomLook:
          "Build a ladder from easiest to hardest: point, write, whisper to peer, whisper to adult, one-word answer, short phrase, small-group speaking.",
        whenToTry:
          "When the team needs a shared, gradual progression rather than repeated hope that full speech will suddenly appear.",
        bestFor: "Students who speak in some settings but not in school, or who freeze during verbal participation.",
        supports: "Gradual communication, anxiety reduction, participation, and evidence collection.",
        tryTomorrow:
          "Make a simple ladder with the team and choose one tiny next step the student can reasonably attempt.",
        lookFor:
          "Does the student communicate with slightly more independence, with one more person, or in one slightly more challenging setting?",
        reference:
          "ASHA and the Selective Mutism Association describe shaping and stimulus fading as common intervention approaches.",
      },
      {
        title: "Stimulus fading with a safe communication partner",
        level: "Intervention",
        helpsWith: "Students who speak with one trusted person but not with others.",
        classroomLook:
          "Start with the student speaking to a trusted person. Gradually add one new person nearby, then closer, then participating, while keeping anxiety low.",
        whenToTry:
          "When the student can already communicate in one safe relationship but cannot generalize that communication to school adults or peers.",
        bestFor: "Students who need gradual exposure to new communication partners.",
        supports: "Anxiety reduction and transfer of communication across people and settings.",
        tryTomorrow:
          "Identify the safest school communication partner and plan one tiny next exposure step.",
        lookFor: "Can the student communicate with a new person present, even if the step is very small?",
        reference:
          "The Selective Mutism Association and NHS describe stimulus fading as a gradual introduction to less comfortable speaking situations or additional people.",
      },
      {
        title: "Use recorded voice or video as a bridge",
        level: "Intervention",
        helpsWith: "Students who can speak at home but not yet at school.",
        classroomLook:
          "Let the student record a reading, answer, or greeting at home. Later, use that recording privately or with one safe adult or peer if agreed.",
        whenToTry:
          "When the student needs a lower-risk bridge between comfortable communication settings and school participation.",
        bestFor: "Students whose spoken language is available in some settings but not live at school.",
        supports: "Participation, confidence, and gradual transfer of voice into school contexts.",
        tryTomorrow:
          "Invite one recorded response for a low-stakes task rather than demanding live speech immediately.",
        lookFor: "Does recorded speech help the student participate or move toward live communication?",
        reference:
          "KidsHealth notes that students may need alternatives for verbal assignments, including recorded or home-prepared responses.",
      },
      {
        title: "Team-based support plan and communication tracking",
        level: "Intervention",
        helpsWith: "Students with persistent mutism or high speaking anxiety across settings.",
        classroomLook:
          "Bring together teacher, counselor, family, EAL if relevant, learning support, and SLP or psychologist if available. Track gestures, writing, whispering, peer communication, adult communication, and group size tolerance.",
        whenToTry:
          "When progress is easy to miss or when adults need to align on one gradual communication plan.",
        bestFor: "Students with persistent concerns who need coordinated support across adults and settings.",
        supports: "Consistency, evidence collection, and shared next-step planning.",
        tryTomorrow:
          "Map where, with whom, and in what form the student already communicates successfully, then align adults around one next step.",
        lookFor: "Are adults using the same response and seeing communication grow across forms, people, or settings?",
        reference:
          "ASHA emphasizes interprofessional collaboration and broader communication tracking, not just speech output alone.",
      },
    ],
  },
];

export const concerns: Concern[] = [
  {
    id: "off-task",
    label: "Off-task during instruction",
    summary: "The student loses focus, misses directions, or drifts during teaching and work time.",
    supportAreaIds: ["attention-focus", "behavior-self-regulation", "emotional-regulation"],
  },
  {
    id: "shutdown",
    label: "Work refusal or shutdown",
    summary: "The student avoids starting, gives up quickly, or goes quiet when work feels too hard.",
    supportAreaIds: ["behavior-self-regulation", "emotional-regulation", "reading-writing"],
  },
  {
    id: "big-reactions",
    label: "Big reactions or overwhelm",
    summary: "The student escalates, melts down, or struggles to recover when stress rises.",
    supportAreaIds: ["emotional-regulation", "behavior-self-regulation"],
  },
  {
    id: "transitions",
    label: "Transition difficulty",
    summary: "The student struggles moving between tasks, spaces, or expectations.",
    supportAreaIds: ["behavior-self-regulation", "emotional-regulation", "attention-focus"],
  },
  {
    id: "group-work",
    label: "Group work struggle",
    summary: "The student avoids group participation, discussion, or collaborative work.",
    supportAreaIds: ["group-participation", "emotional-regulation", "behavior-self-regulation"],
  },
  {
    id: "reading",
    label: "Reading difficulty",
    summary: "The student avoids or struggles with text, reading stamina, or comprehension demands.",
    supportAreaIds: ["reading-writing", "attention-focus"],
  },
  {
    id: "writing",
    label: "Writing difficulty",
    summary: "The student cannot get ideas onto paper or becomes stuck by written output demands.",
    supportAreaIds: ["reading-writing", "attention-focus", "emotional-regulation"],
  },
  {
    id: "peer-conflict",
    label: "Peer conflict",
    summary: "The student struggles with participation, turn-taking, or social problem-solving with classmates.",
    supportAreaIds: ["group-participation", "behavior-self-regulation", "emotional-regulation"],
  },
];

export const supportLevelCopy = {
  universal:
    "Universal supports are classroom strategies a teacher can try now. They are practical, low-lift, and often help more than one student at a time.",
  intervention:
    "Intervention supports are more targeted. They are useful when universal supports are not enough and a student needs more structure, repetition, or adult guidance.",
};
