Rebuilding a No-Code System for Scale

When I joined HavenIQ, parts of the platform relied heavily on Zapier for automation. While it worked initially, I realized the costs and operational limits would become a bottleneck as more devices and properties were onboarded.

At our projected scale, Zapier would have cost roughly $69/month and introduced task limits that constrained growth. I helped redesign parts of the system using AWS services, reducing infrastructure costs to roughly $1–2/month while giving us significantly more flexibility and control.

Choosing the Right Data Platform

One of the recurring architectural discussions was deciding where data should live. Airtable was excellent for operational workflows and non-technical users, but it was not designed to be the analytical backbone of a telemetry platform.

We ultimately moved toward treating BigQuery as the primary source of truth while using Airtable as a workflow and operations layer. This separation reduced complexity and made analytical queries significantly easier to build and maintain.

Building Reliable IoT Ingestion

One of the most challenging parts of the project was building a reliable pipeline for real-time IoT telemetry.

Unlike traditional software systems, device events can be delayed, duplicated, arrive out of order, or fail entirely due to connectivity issues. Designing around these realities required thinking beyond simply "receiving data" and focusing on reliability and observability.

How Problems Were Solved
Replacing Zapier with AWS Infrastructure

Rather than continuing to scale a workflow built around Zapier, I helped move the system toward AWS-native services.

This involved using services such as Lambda, DynamoDB, EventBridge, ECS Fargate, and Secrets Manager to replace functionality that previously depended on third-party automation tools.

The result was lower cost, improved reliability, and much greater control over system behavior.

Separating Operational Data from Analytical Data

One architectural decision I contributed to was separating operational workflows from analytical workloads.

Instead of trying to make Airtable serve both purposes, we treated:

BigQuery as the analytical database and source of truth
Airtable as the operational interface for people and workflows

This reduced duplication, simplified reporting, and made future scaling decisions much easier.

Choosing MQTT for Real-Time Telemetry

As the water monitoring portion of the platform matured, polling alone became insufficient for real-time awareness.

I helped implement a dedicated MQTT subscriber running on ECS Fargate that listens for YoLink device events and writes telemetry directly into BigQuery.

This enabled near real-time ingestion while reducing unnecessary polling traffic.

Learning to Validate Assumptions with Data

Many architectural discussions involved competing ideas about how the system should work.

I learned to rely less on assumptions and more on evidence:

Querying BigQuery directly
Measuring infrastructure costs
Examining CloudWatch logs
Testing with real devices

This approach consistently produced better decisions than relying on intuition alone.

Skills Developed
SQL and Analytics Engineering

HavenIQ significantly improved my SQL skills.

I spent a large amount of time writing analytical queries, debugging data pipelines, validating telemetry ingestion, building incident logic, and investigating production issues through BigQuery.

The project transformed SQL from something I used occasionally into one of my primary engineering tools.

Cloud Infrastructure Engineering

I gained hands-on experience working with:

AWS Lambda
ECS Fargate
EventBridge
DynamoDB
IAM
Secrets Manager
CloudWatch

More importantly, I learned how these services interact within a production environment rather than as isolated technologies.

Event-Driven System Design

Building the MQTT subscriber introduced me to event-driven architectures.

I learned how to work with message brokers, long-running services, reconnect strategies, telemetry ingestion, and real-time data pipelines.

This was my first experience designing infrastructure that continuously processes live device events.

Data Modeling

As HavenIQ evolved, I became more involved in discussions around how telemetry, incidents, devices, and properties should be represented in the data layer.

This improved my understanding of schema design, relationships between entities, and long-term maintainability.

Professional Growth
Participating in Architectural Decisions

One of the most valuable aspects of HavenIQ was being included in discussions about system design rather than only implementation.

I regularly evaluated tradeoffs between different approaches, considered cost implications, and helped determine how new features should integrate into the broader platform.

Learning to Balance Engineering Tradeoffs

Many decisions were not about finding a perfect solution but about balancing competing priorities.

Examples included:

Simplicity vs flexibility
Polling vs event-driven systems
Airtable usability vs database scalability
Development speed vs operational reliability

These discussions helped me think more like an engineer responsible for a product rather than just an individual feature.

Becoming Comfortable with Ambiguity

Many project requirements were not fully defined when work began.

I became much more comfortable exploring unfamiliar systems, gathering information, proposing solutions, and refining designs as new information became available.

Engineering Philosophy
BigQuery Is the Source of Truth

One principle that emerged repeatedly throughout HavenIQ was treating BigQuery as the authoritative source of data.

This created a clear separation between operational workflows and analytical systems while reducing confusion about where information should live.

Design for Scale Early, Optimize Later

The Zapier-to-AWS migration reinforced the importance of understanding scaling limits early.

Rather than waiting for operational costs or workflow limits to become problems, I learned to evaluate future growth during system design discussions.

Simplicity Wins

Several successful architectural decisions came from reducing complexity rather than adding new components.

Whether it was data flow, permissions, ingestion logic, or operational workflows, simpler systems consistently proved easier to maintain and debug.

Key Accomplishments
Reduced Operational Costs Through Infrastructure Redesign

Helped migrate automation workflows from Zapier to AWS-native infrastructure, reducing projected monthly costs from roughly $69/month to approximately $1–2/month while increasing flexibility and scalability.

Built a Real-Time MQTT Telemetry Pipeline

Implemented an MQTT subscriber running on ECS Fargate that receives live YoLink device events and writes telemetry into BigQuery for downstream analytics and monitoring.

Established BigQuery as the Analytical Backbone

Contributed to the architectural shift toward BigQuery as the primary data platform while positioning Airtable as an operational workflow layer.

This created a cleaner separation of responsibilities and improved long-term scalability.

Developed Production SQL Skills

Used SQL extensively for telemetry analysis, debugging, validation, data modeling, and operational investigations, making it one of the most valuable technical skills I developed during the project.

Interesting Stories
The MQTT Subscriber Journey

Building the MQTT subscriber taught me how much work exists beyond simply receiving messages.

The project involved containerization, cloud deployment, authentication, secrets management, device mapping, reconnect logic, and debugging real-time ingestion pipelines.

It was one of my first experiences building and operating a continuously running production service.

Realizing Airtable Could Not Be the Brain

Early on, it was tempting to keep expanding Airtable because it was easy to use and already integrated into workflows.

As the volume of telemetry and analytical requirements grew, it became clear that Airtable and BigQuery solved fundamentally different problems. Recognizing this distinction helped shape several later architectural decisions.

The Cost Conversation That Changed the Stack

One memorable discussion involved evaluating the long-term implications of continuing to scale with Zapier.

What initially looked like a convenient solution became difficult to justify once projected usage, costs, and operational constraints were analyzed. That conversation helped drive the transition toward AWS-native infrastructure.

Personal Reflections
I Enjoy Architecture as Much as Implementation

One thing I discovered through HavenIQ is that I enjoy system design discussions just as much as writing code.

Thinking through tradeoffs, evaluating alternative approaches, and designing scalable systems became some of the most rewarding parts of the project.

Data Engineering Became More Interesting Than Expected

I originally viewed databases as a supporting component of software systems.

Working with telemetry, analytics, and operational workflows showed me how central data infrastructure is to building intelligent systems.

HavenIQ Strengthened My Interest in AI Infrastructure

The project reinforced my interest in the intersection of software engineering, data engineering, and machine learning.

It showed me that successful AI systems depend just as much on reliable data pipelines and infrastructure as they do on models themselves.