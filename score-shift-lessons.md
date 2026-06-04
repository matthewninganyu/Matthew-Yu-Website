# Project: ScoreShift

## Elevator Pitch

ScoreShift is an AI-powered music transposition platform that converts uploaded sheet music into editable digital notation. Users can upload an image of sheet music, automatically extract notation using Optical Music Recognition (OMR), transpose the score to a new key, preview the result in the browser, and export it in multiple formats.

---

## Why I Built It

I built ScoreShift to learn how to develop a complete AI-powered application rather than simply using a machine learning model in isolation.

The project combines:

- Computer vision
- Backend API development
- Symbolic music processing
- Frontend development
- Cloud deployment

The primary goal was to understand how AI systems are integrated into real products and how data flows through an end-to-end application.

---

## Technologies Used

### Backend

- Python
- FastAPI

### AI and Music Processing

- Oemer
- music21
- MusicXML

### Frontend

- HTML
- CSS
- JavaScript
- Verovio

### Infrastructure

- Docker
- Hugging Face Spaces

---

## System Architecture

Image Upload

→ Oemer Optical Music Recognition

→ MusicXML Generation

→ music21 Transposition

→ Verovio Rendering

→ Export

---

## Core Features

- Upload sheet music images
- Optical music recognition
- MusicXML generation
- Key-based transposition
- Interval-based transposition
- Browser-based score preview
- Export to multiple formats
- Cached processing for repeated uploads

---

## Key Engineering Decisions

### MusicXML as the Source of Truth

Decision:

Use MusicXML as the central representation for all processing after OMR.

Reasoning:

- Industry standard format
- Supported by music21
- Supported by Verovio
- Easier interoperability with future music software

Outcome:

All stages of the pipeline communicate through a shared format, simplifying the architecture.

### Asynchronous OMR Processing

Decision:

Separate OMR processing from user requests using a job-based workflow.

Reasoning:

- OMR processing can take several seconds
- Improves user experience
- Prevents long-running requests

Outcome:

Users receive immediate feedback while processing occurs in the background.

### Content-Based Caching

Decision:

Cache generated MusicXML using file hashes.

Reasoning:

- OMR is the most expensive step in the pipeline
- Identical uploads should not require reprocessing

Outcome:

Improved responsiveness and reduced computational overhead.

---

## Skills Developed

### Backend Engineering

- REST API design
- FastAPI development
- Asynchronous workflows
- File processing pipelines
- API integration

### AI Application Engineering

- Optical Music Recognition
- AI model integration
- Processing pipeline design
- Managing long-running inference tasks

### Cloud and Deployment

- Docker containerization
- Hugging Face Spaces deployment
- Dependency management
- Cloud environment troubleshooting

### Software Engineering

- Modular architecture
- Caching strategies
- Separation of concerns
- End-to-end system design

---

## Most Important Lessons Learned

### AI Is Only One Part of the System

The OMR model was only one component of the project. Most engineering effort was spent designing the surrounding infrastructure, APIs, processing workflows, caching, and deployment systems that made the model usable.

### Choosing the Right Data Format Simplifies Architecture

Using MusicXML as an intermediate representation reduced complexity across the entire application. It allowed multiple independent systems to communicate through a standardized format.

### User Experience Influences Backend Design

Long-running AI workloads require different architectural patterns than traditional CRUD applications. Designing asynchronous workflows significantly improved usability.

### Deployment Is Part of Software Engineering

Deploying the application required solving dependency management, environment configuration, containerization, and cloud hosting challenges. Building software does not end when the code runs locally.

---

## Resume Summary

Built and deployed an AI-powered music transposition platform that converts uploaded sheet music into MusicXML using Optical Music Recognition, transposes scores using music21, and renders results in-browser using Verovio. Developed FastAPI APIs, implemented asynchronous processing workflows, containerized the application with Docker, and deployed it on Hugging Face Spaces.