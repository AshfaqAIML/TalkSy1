# EnglishPath

### From your first English word to confident communication.

**EnglishPath** is a planned, end-to-end English learning platform designed to help people learn English as a second language—from the alphabet and first words to confident communication in everyday, academic, and professional settings.

The product vision is to bring structured lessons, practical exercises, four-skill development, personalised learning paths, and an AI-powered learning assistant together in one coherent experience.

> **Project status:** In development / product blueprint  
> **Initial focus:** General English learning and communication skills  
> **Future expansion:** IELTS and TOEFL preparation will be added in a later development phase. They are not part of the initial feature scope.

---

## Contents

- [Overview](#overview)
- [The problem](#the-problem)
- [Product vision](#product-vision)
- [Learning philosophy](#learning-philosophy)
- [Core learning pathway](#core-learning-pathway)
- [Core features](#core-features)
- [The four language skills](#the-four-language-skills)
- [AI English tutor](#ai-english-tutor)
- [Personalised learning experience](#personalised-learning-experience)
- [User roles](#user-roles)
- [Technology direction](#technology-direction)
- [High-level architecture](#high-level-architecture)
- [System maps and pipelines](#system-maps-and-pipelines)
  - [Platform architecture map](#platform-architecture-map)
  - [Learner journey map](#learner-journey-map)
  - [Educational content pipeline](#educational-content-pipeline)
  - [AI tutor request pipeline](#ai-tutor-request-pipeline)
  - [Assessment and progress pipeline](#assessment-and-progress-pipeline)
  - [Build and deployment pipeline](#build-and-deployment-pipeline)
- [Repository structure](#repository-structure)
- [Getting started](#getting-started)
- [Environment configuration](#environment-configuration)
- [Development workflow](#development-workflow)
- [Educational content standards](#educational-content-standards)
- [Security and privacy](#security-and-privacy)
- [Accessibility and responsiveness](#accessibility-and-responsiveness)
- [Roadmap](#roadmap)
- [Quality assurance](#quality-assurance)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Learning a language requires more than memorising grammar rules or collecting vocabulary. Learners need to understand how words work, form correct sentences, communicate ideas, comprehend spoken English, and express themselves in writing.

EnglishPath is intended to support that complete journey through a structured learning environment. It combines a progressive curriculum with hands-on activities and feedback, helping learners move from guided practice towards independent language use.

The platform is being designed for:

- Absolute beginners who are starting with the English alphabet.
- Learners who can read English but struggle to speak.
- Students who need stronger grammar and sentence-construction skills.
- Learners who understand spoken English but find writing difficult.
- Job seekers and professionals improving their communication skills.
- Intermediate and advanced learners who want to strengthen fluency and accuracy.

EnglishPath is intended to be accessible to learners with different educational backgrounds and levels of prior English knowledge.

## The problem

Many English learners encounter one or more of the following difficulties:

- They learn vocabulary but do not know how to use words in sentences.
- They memorise grammar rules but struggle to apply them while speaking or writing.
- They understand written English but find natural conversations difficult to follow.
- They hesitate to speak because they fear making mistakes.
- They practise irregularly and do not know what to learn next.
- They receive corrections without understanding why their original answer was wrong.
- They use disconnected resources for grammar, vocabulary, pronunciation, reading, and writing.

EnglishPath aims to address these problems through a connected curriculum, guided practice, clear explanations, useful feedback, and visible learning progress.

## Product vision

**Make English learning structured, practical, accessible, and measurable.**

A learner should be able to start with little or no English knowledge, follow a suitable learning path, practise each language skill, identify areas that need improvement, and gradually become a more independent communicator.

The platform is built around three principles:

1. **Understand:** Learn what a word, sentence, or grammar concept means and how it works.
2. **Practise:** Apply the concept through exercises, reading, listening, speaking, and writing.
3. **Improve:** Review mistakes, receive useful feedback, and revisit topics when necessary.

## Learning philosophy

EnglishPath is designed around a learner-friendly, progressive teaching approach.

### Start with the foundations

Do not assume that a beginner already knows grammatical terminology. Introduce letters, sounds, words, and simple sentence patterns before moving into complex grammar.

### Explain concepts in simple language

Use clear definitions, short explanations, familiar examples, and visual demonstrations. Introduce technical terms only when they help the learner understand a concept.

### Connect grammar with communication

Teach grammar as a tool for understanding and expressing meaning. A lesson about a tense, for example, should include its meaning, structure, examples, common mistakes, and opportunities to use it in speech and writing.

### Practise actively

Learners should do more than read lesson notes. They should arrange words, complete sentences, answer questions, listen to audio, speak, and write.

### Treat mistakes as part of learning

Feedback should explain the problem, show a correction, and offer a related practice activity. It should be supportive rather than discouraging.

### Revisit important material

Vocabulary and grammar should return through review activities and spaced practice. A topic should not be considered mastered simply because a learner opened its lesson.

---

## Core learning pathway

The initial product is centred on general English development, progressing from foundational literacy to independent communication.

| Stage | Learning area | Representative topics |
|---|---|---|
| 1 | English foundations | Alphabet, uppercase and lowercase letters, vowels, consonants, letter recognition |
| 2 | Sounds and early reading | Phonics, pronunciation, sound-letter relationships, simple reading and spelling |
| 3 | Words and vocabulary | Everyday words, word families, syllables, meanings, synonyms, antonyms, collocations |
| 4 | Sentence foundations | Subject, predicate, verbs, objects, word order, basic sentence patterns |
| 5 | Grammar | Parts of speech, articles, pronouns, prepositions, tenses, modals, agreement and clauses |
| 6 | Sentence types and structures | Declarative, interrogative, imperative, exclamatory, simple, compound and complex sentences |
| 7 | Paragraph and writing skills | Connected sentences, paragraph structure, descriptions, stories, letters and emails |
| 8 | Practical communication | Everyday conversations, introductions, requests, opinions, workplace and social situations |
| 9 | Listening and pronunciation | Comprehension, dictation, stress, rhythm, intonation and natural spoken English |
| 10 | Advanced communication | Discussions, storytelling, presentations, interviews and professional communication |

The curriculum should define lesson objectives, prerequisites, examples, exercises, assessments, and review activities for each topic. Progression should be informed by learner performance rather than by lesson completion alone.

## Core features

The following capabilities describe the product's intended core scope. Their implementation status will depend on the development stage of the repository.

### 1. Structured English courses

- A progressive curriculum from absolute beginner to advanced levels.
- Courses organised into levels, modules, units, and lessons.
- Prerequisite-aware learning sequences.
- Clear learning objectives and estimated lesson durations.
- Lesson completion and resume functionality.
- Course search, filtering, and browsing.

### 2. Interactive lesson experience

- Simple explanations and worked examples.
- Grammar tables, diagrams, and vocabulary lists.
- Audio and other learning resources where available.
- Guided practice followed by independent exercises.
- Hints, answer checking, and explanations.
- Lesson summaries, revision, and homework.
- Saved progress and bookmarks.

### 3. Grammar School

A dedicated area for understanding English grammar through structured lessons and examples.

Planned topic coverage includes:

- Parts of speech.
- Nouns, pronouns, verbs, adjectives, and adverbs.
- Articles and determiners.
- Prepositions and conjunctions.
- Helping verbs and modal verbs.
- The twelve traditional tense-aspect forms.
- Subject-verb agreement.
- Active and passive voice.
- Direct and indirect speech.
- Conditionals, clauses, gerunds, and infinitives.
- Punctuation and common grammatical errors.

Grammar explanations should distinguish rules, common patterns, exceptions, and differences between formal and conversational usage.

### 4. Sentence Construction Laboratory

A hands-on environment for learning how words become meaningful sentences and how sentences develop into connected paragraphs.

Planned activities include:

- Identifying subjects, verbs, objects, and modifiers.
- Building sentences from word tiles.
- Practising basic sentence patterns.
- Creating affirmative, negative, and interrogative sentences.
- Forming WH-questions.
- Expanding short sentences with additional information.
- Combining sentences using conjunctions and clauses.
- Correcting errors and comparing alternative sentence structures.

Where more than one grammatically valid answer exists, the exercise engine should recognise valid alternatives rather than enforcing a single unnecessarily restrictive answer.

### 5. Vocabulary Builder and Word Explorer

A vocabulary workspace for learning words in context.

Intended capabilities include:

- Searchable vocabulary collection.
- Simple English definitions.
- Optional translations into a learner's selected support language.
- Pronunciation guidance and audio where available.
- Parts of speech and example sentences.
- Synonyms, antonyms, word families, and collocations.
- Personal word lists and bookmarks.
- Flashcards and vocabulary challenges.
- Review scheduling based on learner performance.

### 6. Reading Room

A graded reading environment with material suitable for different proficiency levels.

Planned content includes:

- Words, phrases, and simple sentences.
- Short passages and everyday dialogues.
- Stories and descriptive texts.
- Informational passages and articles.
- More advanced reading material.

Reading activities may include vocabulary lookup, adjustable text presentation, comprehension questions, identifying main ideas, understanding details, and summarising passages.

### 7. Listening Lab

A dedicated space for developing listening comprehension gradually.

Planned activities include:

- Letter and sound recognition.
- Word and phrase listening.
- Short sentences and dialogues.
- Stories and longer conversations.
- Dictation and comprehension questions.
- Listening for specific information and overall meaning.
- Audio replay and playback-speed controls.
- Transcripts shown at appropriate points in an activity.

Audio material should be original, appropriately licensed, or otherwise used with permission.

### 8. Speaking Lab

A practical environment for building confidence and spoken communication ability.

Planned activities include:

- Word and sentence repetition.
- Reading aloud.
- Self-introduction practice.
- Question-and-answer exercises.
- Picture and topic descriptions.
- Everyday conversation scenarios.
- Storytelling and opinion sharing.
- Interview and presentation practice.

Microphone-based activities should request permission clearly and provide a text-based alternative where possible. Pronunciation feedback must reflect the actual capabilities of the underlying speech technology; regional accents should not automatically be treated as errors.

### 9. Writing Studio

A progressive writing environment that begins with words and simple sentences and develops towards paragraphs and longer forms of communication.

Planned activities include:

- Spelling and sentence completion.
- Sentence construction and correction.
- Paragraph writing.
- Descriptive and narrative writing.
- Letters, applications, and emails.
- Essays, reports, and summaries.
- Draft saving and revision history.
- Structured feedback on grammar, vocabulary, clarity, and organisation.

Writing feedback should teach learners how to improve their own work instead of simply replacing it with a rewritten answer.

### 10. AI English Tutor

An AI-assisted learning companion designed to support the learner's current level and lesson context.

Intended tutor modes include:

- Grammar Teacher.
- Vocabulary Teacher.
- Sentence Construction Teacher.
- Speaking Partner.
- Writing Teacher.
- Reading Assistant.
- Listening Assistant.
- Interview Practice Partner.
- General Doubt Solver.

The tutor should explain concepts, give examples, correct mistakes constructively, ask follow-up questions, and recommend relevant lessons. AI-generated feedback should be clearly distinguished from verified answer keys and formal assessment results.

### 11. Learner dashboard and progress centre

The student workspace is intended to bring learning activity together in one place.

Potential dashboard information includes:

- Current learning level.
- Continue-learning shortcut.
- Daily learning plan.
- Course and lesson progress.
- Vocabulary review queue.
- Grammar practice results.
- Reading and listening activity.
- Speaking and writing activity.
- Recommended next lessons.
- Learning history and achievements.

Progress should be based on actual learner activity and meaningful assessment evidence. Opening a lesson should not automatically count as mastery.

### 12. Personalised learning path

An onboarding and diagnostic experience should help identify a learner's goals and approximate starting level. Recommendations can then suggest a suitable path, while allowing the learner to adjust or restart it.

The system should distinguish between a skill that has not been assessed and a skill for which the learner has demonstrated competence.

### 13. Administrative content management

An administrative workspace is planned for managing educational material without editing application source code.

Intended capabilities include:

- Course, level, module, unit, and lesson management.
- Structured lesson editing and preview.
- Exercise and question-bank management.
- Vocabulary and audio management.
- Draft, review, approved, and published content states.
- Content versioning.
- Learner and course analytics based on database records.
- Role-based administrative permissions.

---

## The four language skills

EnglishPath treats reading, writing, listening, and speaking as connected skills rather than isolated subjects.

| Skill | Learning objective | Example activities |
|---|---|---|
| Reading | Understand written English at an appropriate level | Graded passages, vocabulary in context, comprehension questions |
| Writing | Express ideas clearly and accurately | Sentence building, paragraphs, emails, essays and revisions |
| Listening | Understand spoken English and identify meaning | Dialogues, audio exercises, dictation and comprehension |
| Speaking | Communicate ideas with greater confidence | Conversation practice, descriptions, storytelling and presentations |

Lessons should integrate these skills whenever the topic and learner level make it appropriate.

## AI English tutor

The AI tutor is intended to support learning rather than replace the curriculum or human teaching expertise.

### Expected behaviour

- Adapt explanations to the learner's level.
- Use clear and manageable language for beginners.
- Explain why a correction is needed.
- Provide examples before introducing advanced terminology.
- Encourage learners to attempt answers independently.
- Connect recurring mistakes to relevant lessons.
- Avoid excessive correction that interrupts communication practice.
- Acknowledge uncertainty when an answer cannot be assessed reliably.

### Example interaction

**Learner:** I am go to school yesterday.

**Tutor:** A more natural and grammatically correct sentence is: “I went to school yesterday.”

**Explanation:** The word “yesterday” tells us that the action happened in the past. The past form of “go” is “went.”

**Practice:** Complete this sentence: “She ___ to the market yesterday.”

The AI integration should use a provider-independent service layer so that model providers can be changed without redesigning the learning application.

## Personalised learning experience

A learner's starting point and progress may differ across skills. For example, someone may read reasonably well but struggle with speaking, while another learner may speak comfortably but need help with grammar and writing.

EnglishPath should therefore support skill-specific progress and recommendations instead of reducing the entire learner profile to one broad score.

Personalisation may consider:

- Learning goals.
- Initial diagnostic results.
- Lesson and exercise performance.
- Recurring mistakes.
- Vocabulary review history.
- Learner-selected study time.
- Preferred explanation language.
- Self-reported confidence.

Recommendations should be understandable and should explain why an activity is suggested.

## User roles

The platform is expected to support the following roles, subject to the final access-control implementation.

| Role | Intended responsibilities |
|---|---|
| Guest | Explore public information and available course descriptions |
| Student | Access assigned learning content, submit activities, and view personal progress |
| Teacher / Content Editor | Create, review, and manage authorised educational content |
| Administrator | Manage users, roles, content publication, and platform configuration |

Access to learner records and administrative functions must be controlled by explicit permissions.

---

## Technology direction

The following stack is the recommended technical direction for the project. It should be reconciled with the actual repository before implementation; it is not a claim that every technology has already been configured.

| Layer | Recommended technology | Purpose |
|---|---|---|
| Frontend | Next.js, React, TypeScript | Application interface and routing |
| Styling | Tailwind CSS | Responsive design and styling |
| UI components | shadcn/ui, Radix UI, Lucide | Accessible and reusable interface components |
| Backend | Next.js server capabilities or a dedicated API service | Business logic and application services |
| Database | PostgreSQL | Persistent application and learning data |
| ORM | Prisma | Database access and schema management |
| Validation | Zod | Validating forms and API input |
| AI | Provider-independent LLM integration | Tutoring and feedback workflows |
| Speech | Configurable speech-to-text and text-to-speech services | Voice-based learning activities |
| Storage | Secure object storage where needed | Audio and other uploaded learning assets |
| Testing | Unit, integration, and end-to-end test tools | Application quality assurance |

Choose stable, compatible package versions during implementation and document the versions actually used in the project.

## High-level architecture

The application should be organised into clear modules with controlled dependencies. The map below describes the **target architecture**: it is a design reference for implementation, not a claim that every module or integration is already live.

```mermaid
flowchart TB
    subgraph EXPERIENCE["Experience layer"]
        direction LR
        PUBLIC["Public website"]
        STUDENT["Student learning app"]
        ADMIN["Admin and content CMS"]
    end

    subgraph APP["Application layer"]
        direction LR
        ROUTER["App routes and API endpoints"]
        AUTH["Authentication and RBAC"]
        VALIDATE["Validation and request handling"]
    end

    subgraph DOMAIN["Learning domain services"]
        direction LR
        CURRICULUM["Curriculum and lessons"]
        PRACTICE["Exercises and assessments"]
        SKILLS["Reading · Writing · Listening · Speaking"]
        VOCAB["Vocabulary and revision"]
        PROGRESS["Progress and recommendations"]
        CONTENT["Content publishing and versioning"]
    end

    subgraph INTEGRATIONS["Integration layer"]
        direction LR
        AI["AI tutor adapter"]
        SPEECH["Speech-to-text / Text-to-speech"]
        MEDIA["Audio and file storage adapter"]
    end

    subgraph DATA["Persistence layer"]
        direction LR
        DB[("PostgreSQL")]
        OBJECTS[("Object storage")]
    end

    PUBLIC --> ROUTER
    STUDENT --> ROUTER
    ADMIN --> ROUTER
    ROUTER --> AUTH --> VALIDATE
    VALIDATE --> CURRICULUM
    VALIDATE --> PRACTICE
    VALIDATE --> SKILLS
    VALIDATE --> VOCAB
    VALIDATE --> PROGRESS
    VALIDATE --> CONTENT
    CURRICULUM --> DB
    PRACTICE --> DB
    SKILLS --> DB
    VOCAB --> DB
    PROGRESS --> DB
    CONTENT --> DB
    SKILLS --> MEDIA
    CONTENT --> MEDIA
    MEDIA --> OBJECTS
    SKILLS --> SPEECH
    PROGRESS --> AI
    SKILLS --> AI

    classDef experience fill:#EAF2FF,stroke:#3979C8,color:#163B66,stroke-width:1.5px
    classDef app fill:#F0EEFF,stroke:#7662C7,color:#33265F,stroke-width:1.5px
    classDef domain fill:#E9F7F2,stroke:#299879,color:#124D3C,stroke-width:1.5px
    classDef integration fill:#FFF4E5,stroke:#D28A2E,color:#70420C,stroke-width:1.5px
    classDef data fill:#FCEEF1,stroke:#C7677B,color:#682D3C,stroke-width:1.5px
    class PUBLIC,STUDENT,ADMIN experience
    class ROUTER,AUTH,VALIDATE app
    class CURRICULUM,PRACTICE,SKILLS,VOCAB,PROGRESS,CONTENT domain
    class AI,SPEECH,MEDIA integration
    class DB,OBJECTS data
```

**Architecture boundaries**

| Layer | Responsibility | Design rule |
|---|---|---|
| Experience | Public pages, student workspace, administration | UI components should not contain database credentials or provider secrets. |
| Application | Routes, APIs, authentication, validation and permissions | Validate requests and authorise access before invoking domain operations. |
| Learning domain | Curriculum, lessons, exercises, skills, vocabulary and progress | Keep learning rules independent of specific AI or speech vendors. |
| Integrations | AI, speech, audio and external services | Use server-side adapters so providers can be replaced without rewriting learning features. |
| Persistence | Relational learning data and media assets | Store structured application data in PostgreSQL and large media in suitable object storage. |

The AI and speech integrations should be accessed through server-side services or adapters. API keys must never be exposed in client-side code.


## System maps and pipelines

The following diagrams make the intended learner experience and technical workflows visible at a glance. They are **implementation maps**: adapt them as the real codebase, service boundaries, and infrastructure become established.

### Platform architecture map

This is the end-to-end view of how the three main interfaces connect to the application, learning services, integrations, and data stores.

```mermaid
flowchart LR
    LEARNER([Learner]) --> STUDENT[Student application]
    VISITOR([Visitor]) --> PUBLIC[Public website]
    EDITOR([Teacher / editor]) --> CMS[Admin CMS]

    subgraph CORE["EnglishPath application"]
        direction TB
        GATEWAY[Routes and API layer]
        IDENTITY[Identity and permissions]
        LEARNING[Learning services]
        TRACKING[Progress and analytics]
        GATEWAY --> IDENTITY --> LEARNING
        LEARNING --> TRACKING
    end

    STUDENT --> GATEWAY
    PUBLIC --> GATEWAY
    CMS --> GATEWAY

    subgraph PROVIDERS["Provider adapters"]
        direction TB
        LLM[AI language model]
        STT[Speech recognition]
        TTS[Speech synthesis]
        FILES[Media storage]
    end

    subgraph STORAGE["Data stores"]
        direction TB
        REL[(PostgreSQL)]
        MEDIA[(Object storage)]
    end

    LEARNING <--> LLM
    LEARNING <--> STT
    LEARNING <--> TTS
    LEARNING <--> FILES
    LEARNING <--> REL
    TRACKING <--> REL
    FILES <--> MEDIA

    classDef people fill:#F3F4F6,stroke:#6B7280,color:#111827
    classDef ui fill:#EAF2FF,stroke:#3979C8,color:#163B66
    classDef core fill:#E9F7F2,stroke:#299879,color:#124D3C
    classDef provider fill:#FFF4E5,stroke:#D28A2E,color:#70420C
    classDef store fill:#FCEEF1,stroke:#C7677B,color:#682D3C
    class LEARNER,VISITOR,EDITOR people
    class STUDENT,PUBLIC,CMS ui
    class GATEWAY,IDENTITY,LEARNING,TRACKING core
    class LLM,STT,TTS,FILES provider
    class REL,MEDIA store
```

### Learner journey map

The learning experience should feel like a guided path, not a directory of disconnected lessons. A diagnostic check may recommend a starting point, while learners who already know a topic can demonstrate competence and move ahead.

```mermaid
flowchart TD
    START([Create account / Start learning]) --> ONBOARD[Learning goals and preferences]
    ONBOARD --> CHECK{Take a placement check?}
    CHECK -->|Yes| DIAG[Diagnostic assessment]
    CHECK -->|Start from basics| FOUNDATIONS[Beginner foundations]
    DIAG --> PROFILE[Skill profile and recommended starting point]
    PROFILE --> PATH[Personal learning path]
    FOUNDATIONS --> PATH

    PATH --> WORDS[Letters, sounds and words]
    WORDS --> SENTENCES[Sentence formation]
    SENTENCES --> GRAMMAR[Grammar and sentence structures]
    GRAMMAR --> APPLY[Guided real-life application]

    APPLY --> SKILLS[Reading · Writing · Listening · Speaking]
    SKILLS --> PRACTICE[Exercises and practical activities]
    PRACTICE --> FEEDBACK[Feedback and mistake explanations]
    FEEDBACK --> REVIEW{Topic understood?}
    REVIEW -->|Not yet| REVISION[Targeted revision and extra practice]
    REVISION --> PRACTICE
    REVIEW -->|Demonstrated| MASTERY[Record demonstrated progress]
    MASTERY --> NEXT[Recommend next lesson or skill activity]
    NEXT --> APPLY

    classDef start fill:#EAF2FF,stroke:#3979C8,color:#163B66
    classDef learn fill:#E9F7F2,stroke:#299879,color:#124D3C
    classDef assess fill:#FFF4E5,stroke:#D28A2E,color:#70420C
    classDef feedback fill:#F0EEFF,stroke:#7662C7,color:#33265F
    class START,ONBOARD start
    class FOUNDATIONS,PATH,WORDS,SENTENCES,GRAMMAR,APPLY,SKILLS,PRACTICE,NEXT learn
    class CHECK,DIAG,PROFILE,REVIEW,MASTERY assess
    class FEEDBACK,REVISION feedback
```

### Educational content pipeline

Lessons and exercises should pass through a controlled authoring and review process before learners see them. This helps protect educational quality and keeps answer keys, prerequisites, and content versions consistent.

```mermaid
flowchart TD
    BLUEPRINT[Curriculum blueprint] --> AUTHOR[Lesson and exercise authoring]
    AUTHOR --> STRUCTURE[Structured content model]
    STRUCTURE --> VALIDATE[Schema and prerequisite validation]
    VALIDATE --> REVIEW{Editorial review}
    REVIEW -->|Changes required| REVISE[Revise content]
    REVISE --> AUTHOR
    REVIEW -->|Approved| VERSION[Create approved content version]
    VERSION --> PUBLISH[Publish to course catalogue]
    PUBLISH --> RENDER[Lesson and exercise renderer]
    RENDER --> ACTIVITY[Learner activity]
    ACTIVITY --> SIGNALS[Attempts, feedback and learning signals]
    SIGNALS --> IMPROVE[Content and curriculum improvement]
    IMPROVE --> BLUEPRINT

    classDef creation fill:#EAF2FF,stroke:#3979C8,color:#163B66
    classDef quality fill:#FFF4E5,stroke:#D28A2E,color:#70420C
    classDef delivery fill:#E9F7F2,stroke:#299879,color:#124D3C
    classDef feedback fill:#F0EEFF,stroke:#7662C7,color:#33265F
    class BLUEPRINT,AUTHOR,STRUCTURE creation
    class VALIDATE,REVIEW,REVISE quality
    class VERSION,PUBLISH,RENDER,ACTIVITY delivery
    class SIGNALS,IMPROVE feedback
```

**Content release rule:** Only reviewed and approved content should be published as authoritative course material. AI-generated drafts must not be labelled expert-approved without the required review.

### AI tutor request pipeline

The AI tutor should use relevant learner context without exposing unnecessary personal information. Provider-specific logic belongs behind a server-side adapter.

```mermaid
sequenceDiagram
    autonumber
    actor Learner
    participant UI as EnglishPath interface
    participant API as Tutor API
    participant Context as Learning context service
    participant Guard as Validation and safety checks
    participant Model as LLM provider adapter
    participant Store as Conversation store

    Learner->>UI: Ask a question or submit an answer
    UI->>API: Send authenticated request
    API->>Guard: Validate request and permissions
    Guard-->>API: Request accepted
    API->>Context: Retrieve relevant lesson and skill context
    Context-->>API: Minimum necessary learning context
    API->>Model: Generate level-aware teaching response
    Model-->>API: Draft explanation or feedback
    API->>Guard: Validate output and response format
    Guard-->>API: Checked response
    API->>Store: Save conversation according to retention settings
    API-->>UI: Return explanation, examples and practice
    UI-->>Learner: Display tutor response
```

The tutor should explain mistakes, give examples, and recommend practice. AI-generated estimates must remain distinguishable from deterministic answer checking and formal examination scores.

### Assessment and progress pipeline

Assessment results should lead to useful next steps. Lesson completion, exercise correctness, demonstrated skill, and learner confidence are related but should not be treated as the same measurement.

```mermaid
flowchart TD
    TASK[Lesson exercise or skill activity] --> SUBMIT[Learner submits response]
    SUBMIT --> TYPE{Activity type}
    TYPE -->|Objective question| RULES[Answer key and rule-based evaluation]
    TYPE -->|Writing or speaking| RUBRIC[Task-specific rubric and supported AI feedback]
    TYPE -->|Listening or reading| COMPREHENSION[Comprehension answer evaluation]
    RULES --> RESULT[Structured result]
    RUBRIC --> RESULT
    COMPREHENSION --> RESULT
    RESULT --> HISTORY[Persist attempt and feedback]
    HISTORY --> SKILL[Update relevant skill evidence]
    SKILL --> RECOMMEND[Identify weakness or next learning step]
    RECOMMEND --> PLAN[Update revision queue and recommendations]
    PLAN --> NEXT[Present next activity to learner]
    NEXT --> TASK

    classDef activity fill:#EAF2FF,stroke:#3979C8,color:#163B66
    classDef evaluate fill:#FFF4E5,stroke:#D28A2E,color:#70420C
    classDef record fill:#E9F7F2,stroke:#299879,color:#124D3C
    classDef action fill:#F0EEFF,stroke:#7662C7,color:#33265F
    class TASK,SUBMIT,NEXT activity
    class TYPE,RULES,RUBRIC,COMPREHENSION,RESULT evaluate
    class HISTORY,SKILL record
    class RECOMMEND,PLAN action
```

### Build and deployment pipeline

The release workflow should make quality checks repeatable. Adapt the deployment steps to the hosting provider and CI/CD platform selected for the repository.

```mermaid
flowchart LR
    CHANGE[Code change] --> REVIEW[Pull request and review]
    REVIEW --> LINT[Lint and formatting]
    LINT --> TYPES[Type checking]
    TYPES --> TESTS[Unit and integration tests]
    TESTS --> BUILD[Production build]
    BUILD --> STAGE[Deploy to staging]
    STAGE --> SMOKE[Smoke and end-to-end checks]
    SMOKE --> APPROVAL{Release approved?}
    APPROVAL -->|No| FIX[Fix and verify]
    FIX --> REVIEW
    APPROVAL -->|Yes| BACKUP[Backup and migration checks]
    BACKUP --> PROD[Production deployment]
    PROD --> MONITOR[Monitor errors and performance]

    classDef code fill:#EAF2FF,stroke:#3979C8,color:#163B66
    classDef checks fill:#FFF4E5,stroke:#D28A2E,color:#70420C
    classDef release fill:#E9F7F2,stroke:#299879,color:#124D3C
    class CHANGE,REVIEW,FIX code
    class LINT,TYPES,TESTS,BUILD,STAGE,SMOKE,APPROVAL checks
    class BACKUP,PROD,MONITOR release
```

**Release gate:** Do not deploy when required tests, migration checks, or security reviews fail. Keep rollback and backup procedures documented for production changes.


## Repository structure

The final structure should follow the actual framework and repository conventions. The following is an illustrative organisation for a modular implementation:

```text
englishpath/
├── public/
│   ├── images/
│   ├── icons/
│   └── audio/
│
├── docs/
│   ├── PRODUCT_VISION.md
│   ├── PRODUCT_REQUIREMENTS.md
│   ├── LEARNING_METHODOLOGY.md
│   ├── CURRICULUM_BLUEPRINT.md
│   ├── TECHNICAL_ARCHITECTURE.md
│   └── DESIGN_SYSTEM.md
│
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
│
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   ├── (auth)/
│   │   ├── (student)/
│   │   ├── admin/
│   │   └── api/
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── learning/
│   │   ├── exercises/
│   │   └── shared/
│   │
│   ├── features/
│   │   ├── curriculum/
│   │   ├── lessons/
│   │   ├── grammar/
│   │   ├── sentence-builder/
│   │   ├── vocabulary/
│   │   ├── reading/
│   │   ├── listening/
│   │   ├── speaking/
│   │   ├── writing/
│   │   ├── tutor/
│   │   ├── progress/
│   │   └── administration/
│   │
│   ├── lib/
│   ├── services/
│   ├── hooks/
│   ├── types/
│   └── config/
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

This is a reference layout, not a requirement to create empty folders. Add directories as real modules are implemented.

---

## Getting started

Because the repository's final scripts and integrations depend on the implementation, use the instructions below as a setup template and adjust them to match the actual project configuration.

### Prerequisites

- Node.js LTS compatible with the selected Next.js version.
- npm, pnpm, or the package manager selected by the repository.
- PostgreSQL.
- Git.
- Environment variables for any external services enabled in the local setup.

### 1. Clone the repository

```bash
git clone <repository-url>
cd englishpath
```

Replace `<repository-url>` with the actual Git repository URL.

### 2. Install dependencies

Use the package manager and lockfile already present in the repository.

```bash
npm install
```

For a project using pnpm or another package manager, use its corresponding install command instead.

### 3. Configure environment variables

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Update `.env` with local configuration. Never commit real credentials.

### 4. Configure the database

Create a PostgreSQL database and set the database connection string in `.env`.

If Prisma is configured, apply the repository's migrations using the project's documented migration command. For example:

```bash
npx prisma migrate dev
```

Run seed data only when a suitable seed script has been implemented:

```bash
npx prisma db seed
```

### 5. Start the development server

For a standard Next.js npm setup:

```bash
npm run dev
```

Open the local address printed by the development server, commonly:

```text
http://localhost:3000
```

### 6. Run checks

Use the scripts defined in `package.json`. Common examples include:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

A command should only be used if its corresponding script exists in the repository.

---

## Environment configuration

The following is a reference list of possible environment variables. Keep only variables required by the actual implementation in `.env.example`.

```dotenv
# Application
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/englishpath

# Authentication
AUTH_SECRET=replace-with-a-secure-random-secret
AUTH_URL=http://localhost:3000

# AI provider - configure only the provider used by the implementation
AI_PROVIDER=
AI_API_KEY=
AI_MODEL=

# Speech services - optional and provider-dependent
SPEECH_TO_TEXT_PROVIDER=
SPEECH_TO_TEXT_API_KEY=
TEXT_TO_SPEECH_PROVIDER=
TEXT_TO_SPEECH_API_KEY=

# File or object storage - optional
STORAGE_PROVIDER=
STORAGE_BUCKET=
STORAGE_ACCESS_KEY=
STORAGE_SECRET_KEY=
STORAGE_ENDPOINT=
```

**Security notes:**

- Do not commit `.env` files containing secrets.
- Keep private API keys on the server.
- Validate required environment variables at application startup.
- Use separate credentials for development, staging, and production.
- Rotate credentials if they are accidentally exposed.

---

## Development workflow

EnglishPath should be developed incrementally so that educational quality and application stability can be checked throughout the project.

A recommended implementation sequence is:

1. Repository discovery and product requirements.
2. Teaching methodology and curriculum design.
3. Beginner lesson content and content standards.
4. Database, authentication, and backend foundation.
5. Design system and responsive application shell.
6. Public website and learner onboarding.
7. Student dashboard and curriculum navigation.
8. Lesson player and exercise engine.
9. Grammar School and Sentence Construction Laboratory.
10. Vocabulary Builder and revision system.
11. Reading Room and Listening Lab.
12. Speaking Lab and Writing Studio.
13. AI English Tutor.
14. Personalised learning and progress analytics.
15. Administrative content management.
16. Integration, testing, accessibility, security, and deployment.

Each phase should be reviewed and tested before the next major phase is considered complete.

## Educational content standards

Educational quality is central to EnglishPath. Content should be written and reviewed with the learner's level and learning objective in mind.

Every complete lesson should include, where appropriate:

- A clear title and learning objectives.
- Prerequisite knowledge.
- A simple explanation.
- Step-by-step instruction.
- Correct examples.
- Real-life applications.
- Guided exercises.
- Independent practice.
- Relevant speaking, listening, reading, or writing activities.
- Common mistakes and explanations.
- A short assessment.
- A lesson summary and revision activity.

### Content accuracy

- Use standard, understandable English.
- Explain exceptions where they matter.
- Distinguish formal, informal, and conversational usage.
- Accept multiple valid answers when an exercise permits them.
- Review answer keys before publishing.
- Avoid teaching simplified rules that become misleading at higher levels.
- Keep explanations consistent across lessons.

### Originality and learning resources

Create original explanations, examples, dialogues, exercises, and assessment material. Use third-party videos, audio, images, and learning resources only where their use is permitted. Attribute external resources where required by their licence or terms.

---

## Security and privacy

The application may handle personal profile information, learner submissions, conversation history, and optional voice recordings. These data types require careful handling.

Security principles include:

- Secure authentication and session management.
- Role-based access control.
- Server-side authorisation checks.
- Input validation and output handling.
- Rate limiting for sensitive or expensive endpoints.
- Secure file upload and storage controls.
- Server-side management of API credentials.
- Appropriate protection against common web application vulnerabilities.
- Data minimisation and clear retention policies.

For microphone and recording features:

- Request permission before recording.
- Explain why audio is being collected and how it will be used.
- Provide clear controls to stop and delete recordings where supported.
- Define retention and deletion behaviour.
- Do not collect audio in the background.

Privacy and security requirements should be verified against the laws and requirements applicable to the deployment locations.

## Accessibility and responsiveness

EnglishPath should be usable across common screen sizes and assistive technologies.

The interface should aim for:

- Responsive desktop, tablet, and mobile layouts.
- Keyboard-accessible controls.
- Clear focus indicators.
- Semantic page structure.
- Accessible form labels and error messages.
- Sufficient colour contrast.
- Readable typography and spacing.
- Reduced-motion support.
- Accessible audio controls.
- Appropriate support for English and selected South Asian scripts.

Accessibility should be tested as part of normal development rather than postponed until the final release.

---

## Roadmap

The roadmap separates the initial general-English product from later expansion into international examination preparation.

### Phase 1 — English learning foundation

- [ ] Finalise product requirements and architecture.
- [ ] Establish database and authentication.
- [ ] Define the complete beginner-to-advanced curriculum.
- [ ] Develop the first reviewed beginner lessons.
- [ ] Implement course and lesson navigation.
- [ ] Build the student dashboard.

### Phase 2 — Core learning experience

- [ ] Build the interactive lesson player.
- [ ] Implement reusable exercise types.
- [ ] Develop Grammar School.
- [ ] Develop the Sentence Construction Laboratory.
- [ ] Implement the Vocabulary Builder.
- [ ] Add learner progress persistence and revision.

### Phase 3 — Four-skill development

- [ ] Build the Reading Room.
- [ ] Build the Listening Lab.
- [ ] Build the Speaking Lab.
- [ ] Build the Writing Studio.
- [ ] Add suitable audio and speech integrations.

### Phase 4 — AI and personalisation

- [ ] Implement the AI English Tutor.
- [ ] Add contextual grammar and vocabulary support.
- [ ] Implement writing feedback.
- [ ] Add conversation practice.
- [ ] Develop personalised recommendations.
- [ ] Improve progress analytics and revision scheduling.

### Phase 5 — Administration and release readiness

- [ ] Build the administrative content management system.
- [ ] Implement content review and versioning.
- [ ] Complete functional and educational QA.
- [ ] Review accessibility and security.
- [ ] Optimise performance.
- [ ] Prepare production deployment and documentation.

### Future expansion — International examination preparation

The following features are **planned for a later phase** and are not part of the initial general-English feature scope.

#### IELTS preparation — Planned

A dedicated IELTS preparation pathway may include:

- IELTS Academic preparation.
- IELTS General Training preparation.
- Relevant IELTS for UKVI preparation guidance.
- Listening, Reading, Writing, and Speaking preparation.
- Task-specific lessons and original practice questions.
- Section-wise practice and mock examinations.
- Writing and speaking feedback against the applicable public assessment criteria.
- Preparation plans and progress analysis.

The exact examination formats, delivery options, timing, and scoring information must be verified against current official IELTS guidance when this module is developed.

#### TOEFL preparation — Planned

A dedicated TOEFL iBT preparation pathway may include:

- Reading preparation.
- Listening preparation.
- Writing preparation.
- Speaking preparation.
- Task-specific lessons and original practice questions.
- Section-wise practice and mock examinations.
- Writing and speaking feedback.
- Preparation plans and progress analysis.

The TOEFL module must use the official test specifications applicable at the time of implementation. Examination formats and score reporting can change, so the module should support versioned test blueprints rather than hardcoded assumptions.

#### Examination-preparation principles

When introduced, IELTS and TOEFL preparation should:

- Be separate learning pathways with their own task types and scoring systems.
- Reuse relevant general-English lessons where appropriate.
- Maintain examination-specific progress and mock-test history.
- Use original practice content or material that is properly licensed.
- Clearly label simulated results as estimates, not official examination scores.
- Avoid guaranteeing admission, immigration eligibility, or examination results.

---

## Quality assurance

Quality assurance should cover both software behaviour and educational correctness.

### Software testing

The project should introduce suitable:

- Unit tests for core logic.
- Integration tests for database and service interactions.
- End-to-end tests for important learner journeys.
- API validation and authorisation tests.
- Authentication and role-permission tests.
- Migration and seed-data checks.

### Educational testing

Review representative lessons and exercises for:

- Grammar accuracy.
- Clear definitions.
- Appropriate difficulty.
- Correct examples and answer keys.
- Logical prerequisites.
- Consistent terminology.
- Useful feedback.
- Suitability for absolute beginners.

### Release checks

Before a production release, verify the documented setup, migrations, environment configuration, authentication, permissions, error handling, backups, monitoring, and deployment process.

Do not describe a feature as complete until it has been implemented and tested to an appropriate level.

---

## Contributing

Contributions are welcome once the repository's contribution process is established.

Before submitting a change:

1. Review the project documentation and existing code conventions.
2. Keep changes focused and modular.
3. Follow the established TypeScript and component patterns.
4. Add or update tests where appropriate.
5. Validate educational content for accuracy and level suitability.
6. Update relevant documentation.
7. Never include API keys, passwords, personal learner data, or private recordings in commits.

Suggested branch naming:

```text
feature/short-description
fix/short-description
docs/short-description
refactor/short-description
```

Suggested commit style:

```text
feat: add interactive vocabulary practice
fix: preserve lesson progress after navigation
docs: update curriculum documentation
refactor: separate tutor provider integration
```

Detailed contribution rules may be added in a dedicated `CONTRIBUTING.md` file as the project matures.

## License

The project licence has not yet been specified. Add a `LICENSE` file before publishing or accepting contributions under an open-source licence. Until then, do not assume that the code or educational content is available for unrestricted reuse.

---

## Project direction

EnglishPath aims to make English learning a connected, practical, and encouraging experience.

It begins with the foundations—letters, sounds, words, and sentences—and gradually develops the learner's ability to read, write, listen, and speak with greater confidence.

**The initial mission is to build a genuinely useful English-learning platform. International examination preparation, including IELTS and TOEFL, is planned as a future expansion after the core learning experience has been established.**

---

<p align="center">
  <strong>EnglishPath</strong><br />
  <em>Learn step by step. Practise every day. Communicate with confidence.</em>
</p>
