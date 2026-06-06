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
        title: "Chunk the direction load",
        level: "Universal",
        helpsWith: "Students who get lost when too much information is given at once.",
        classroomLook:
          "Give one short direction at a time, then pause. Post steps visually on the board or desk so the student does not have to hold everything in memory.",
        whenToTry:
          "When a student misses multi-step instructions, freezes at the start of a task, or repeatedly asks what to do next.",
      },
      {
        title: "Use visual start cues",
        level: "Universal",
        helpsWith: "Students who need a clearer entry into the task.",
        classroomLook:
          'Use checklists, a highlighted first step, written cues, or a "start here" box so the student can begin without waiting for repeated adult prompting.',
        whenToTry: "When the student seems unsure how to begin or stalls even after hearing directions.",
      },
      {
        title: "Build in planned movement breaks",
        level: "Universal",
        helpsWith: "Students who become restless, impulsive, or mentally fatigued during longer stretches of seatwork.",
        classroomLook:
          "Use short movement breaks, transition jobs, wall pushes, or quick reset routines that are built into the lesson instead of used only after behavior has already escalated.",
        whenToTry: "When attention drops predictably after sitting, listening, or independent work.",
      },
    ],
    intervention: [
      {
        title: "Visual task tracker with teacher check-ins",
        level: "Intervention",
        helpsWith: "Students who need stronger support monitoring attention and completing a task sequence.",
        classroomLook:
          "Create a visual task strip or checklist that the student moves through step by step, with short teacher check-ins at agreed points rather than constant hovering.",
        whenToTry: "When universal checklists help a little but the student still cannot sustain task follow-through independently.",
      },
      {
        title: "Reduced-distraction work setup",
        level: "Intervention",
        helpsWith: "Students whose attention is heavily affected by sound, movement, visual clutter, or peer proximity.",
        classroomLook:
          "Use a quieter workspace, headphones, simplified desk setup, visual barriers, or seating with fewer distractions during key work times.",
        whenToTry: "When the classroom environment itself appears to be pulling the student off task over and over.",
      },
    ],
  },
  {
    id: "behavior-self-regulation",
    name: "Behavior and Self-Regulation",
    tagline: "For students who avoid work, escalate, or need more support making expected choices.",
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
          "Use consistent classroom agreements, posted routines, visual choice boards, and predictable response patterns so the student is not constantly guessing what is expected.",
        whenToTry: "When behavior problems spike during transitions, independent work, or moments of uncertainty.",
      },
      {
        title: "Reinforce the expected behavior early",
        level: "Universal",
        helpsWith: "Students who need more positive feedback before behavior slips.",
        classroomLook:
          "Notice and reinforce the first small signs of the behavior you want: starting, staying, asking for help appropriately, or using a calm reset.",
        whenToTry: "When the team tends to interact with the student mostly after things go wrong.",
      },
      {
        title: "Offer limited, structured choices",
        level: "Universal",
        helpsWith: "Students who escalate when they feel trapped, over-directed, or unsure.",
        classroomLook:
          "Offer two acceptable choices: where to sit, which problem to start with, which tool to use, or whether to respond orally or in writing.",
        whenToTry: "When the student resists tasks but can engage once a sense of control is restored.",
      },
    ],
    intervention: [
      {
        title: "Individual behavior goal with daily tracking",
        level: "Intervention",
        helpsWith: "Students who need one clear focus behavior and consistent feedback across the day.",
        classroomLook:
          "Choose one target behavior, define what success looks like, and track it with a simple chart or card. Keep the goal narrow and review it daily.",
        whenToTry: "When general reminders are not changing the pattern and the student needs more focused support.",
      },
      {
        title: "First-then support plan",
        level: "Intervention",
        helpsWith: "Students who avoid non-preferred tasks or need stronger structure to move through them.",
        classroomLook:
          "Use a first-then sequence with visuals: first complete a manageable piece of the task, then access a preferred break, role, or activity.",
        whenToTry: "When the student gets stuck at the demand itself and needs a more structured pathway into work.",
      },
    ],
  },
  {
    id: "emotional-regulation",
    name: "Emotional Regulation",
    tagline: "For students who become overwhelmed, anxious, or shut down when learning feels too big.",
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
          "Teach breathing, reset routines, emotion check-ins, or zones language during calm moments so the student can access them when stress rises.",
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
        title: "Normalize breaks and reset routines",
        level: "Universal",
        helpsWith: "Students who need permission and structure to regulate before overload becomes a crisis.",
        classroomLook:
          "Build calm corners, break cards, short resets, or cool-down choices into classroom practice so they are seen as tools, not punishments.",
        whenToTry: "When the student would benefit from stepping out of the emotional climb earlier.",
      },
    ],
    intervention: [
      {
        title: "Daily emotion tracking with adult check-in",
        level: "Intervention",
        helpsWith: "Students who need more explicit support identifying patterns and early warning signs.",
        classroomLook:
          "Use a short check-in routine with a scale, journal, or visual tool so an adult can spot patterns and adjust support earlier in the day.",
        whenToTry: "When overwhelm seems frequent but the team does not yet know the triggers well enough.",
      },
      {
        title: "Individual calm plan",
        level: "Intervention",
        helpsWith: "Students who need a personalized regulation routine rather than generic classroom strategies.",
        classroomLook:
          "Create a simple plan: what the student feels first, what adults should notice, what helps, what to avoid, and how to re-enter learning.",
        whenToTry: "When classwide regulation tools are not enough and the student needs a more individualized response.",
      },
    ],
  },
  {
    id: "group-participation",
    name: "Group Participation",
    tagline: "For students who need more support joining discussion, group work, or class presentations.",
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
        title: "Give clear group roles",
        level: "Universal",
        helpsWith: "Students who disengage because the group task is too socially or cognitively unstructured.",
        classroomLook:
          "Assign clear roles such as note-taker, pointer, starter, checker, or reporter so the student knows how to contribute.",
        whenToTry: "When the student gets lost during open-ended group work.",
      },
      {
        title: "Preview participation expectations",
        level: "Universal",
        helpsWith: "Students who do better when they know what is coming.",
        classroomLook:
          "Tell the student how they might be invited to participate, when they will have a chance to respond, and what kind of contribution will count.",
        whenToTry: "When group moments are stressful because the student feels put on the spot.",
      },
    ],
    intervention: [
      {
        title: "Structured small-group participation goal",
        level: "Intervention",
        helpsWith: "Students who need a more gradual pathway into group engagement.",
        classroomLook:
          "Set a specific goal such as stay with the group for five minutes, contribute one prepared idea, or complete one defined role with support.",
        whenToTry: "When general participation encouragement is not enough to change the pattern.",
      },
      {
        title: "Rehearsed participation support",
        level: "Intervention",
        helpsWith: "Students who need practice before performing or speaking in the group setting.",
        classroomLook:
          "Allow the student to rehearse with a teacher, peer, or small group first, using notes, scripts, or visual prompts.",
        whenToTry: "When the student can participate in smaller or safer settings but struggles in front of the full group.",
      },
    ],
  },
  {
    id: "reading-writing",
    name: "Reading and Writing",
    tagline: "For students who need better access to text, writing tasks, and literacy-heavy learning.",
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
          "Use read-alouds, visuals, sentence starters, guided notes, vocabulary banks, audio support, or fewer written responses while keeping the core thinking task intact.",
        whenToTry: "When the student's ideas are stronger than what the page shows.",
      },
      {
        title: "Scaffold writing into smaller parts",
        level: "Universal",
        helpsWith: "Students who get overwhelmed by a blank page or multi-step writing demand.",
        classroomLook:
          "Break writing into short parts: idea generation, sentence frames, paragraph templates, modeled examples, and one section at a time.",
        whenToTry: "When the student cannot start writing or gives very little output despite understanding.",
      },
      {
        title: "Add visual and oral supports to reading tasks",
        level: "Universal",
        helpsWith: "Students who need more access points into text.",
        classroomLook:
          "Use pictures, audio books, read-alongs, partner reading, annotated vocabulary, or easier-entry texts connected to the same topic.",
        whenToTry: "When reading itself becomes the barrier to participating in the lesson.",
      },
    ],
    intervention: [
      {
        title: "Targeted small-group literacy support",
        level: "Intervention",
        helpsWith: "Students who need more repetition and explicit teaching than whole-group instruction can provide.",
        classroomLook:
          "Provide structured small-group support around decoding, fluency, comprehension, or writing foundations with repeated guided practice.",
        whenToTry: "When classroom scaffolds help only a little and the literacy gap remains persistent.",
      },
      {
        title: "Daily short writing intervention routine",
        level: "Intervention",
        helpsWith: "Students who need more frequent and focused support producing written language.",
        classroomLook:
          "Use short daily sessions with sentence-level supports, spoken rehearsal, immediate feedback, and repeated practice rather than occasional long writing blocks.",
        whenToTry: "When writing output remains far below what the student can say or show verbally.",
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
