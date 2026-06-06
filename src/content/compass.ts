export type SupportLevel = "Universal" | "Intervention";

export type Strategy = {
  title: string;
  level: SupportLevel;
  helpsWith: string;
  classroomLook: string;
  whenToTry: string;
};

export type SupportArea = {
  id: string;
  name: string;
  tagline: string;
  accent: string;
  accentSoft: string;
  icon: "focus" | "shield" | "heart" | "group" | "book";
  intro: string;
  youMightBeHereIf: string[];
  teacherQuestion: string;
  lookFors: string[];
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
