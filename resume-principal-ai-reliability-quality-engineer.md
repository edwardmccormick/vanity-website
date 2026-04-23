EDWARD C. "TED" MCCORMICK
Principal AI Reliability & Quality Engineer
ted.mccormick@gmail.com | (210) 823-6753 | ted.mccormickhub.com
LinkedIn: /in/ted-mccormick | GitHub: /edwardmccormick

---

## Summary

Principal reliability engineer who builds SRE disciplines from zero in production environments — runbooks, blameless post-mortems, observability frameworks, and quality gates — at companies that have never had them before. Designed deterministic testing infrastructure and strangler-pattern modernization strategies for 15-year-old fintech monoliths; established incident response programs across six production incidents with sub-hour recovery targets. Brings a Naval officer's operational discipline, a fintech engineer's quality instincts, and an AI-native development workflow to the challenge of making agentic systems enterprise-grade.

---

## Reliability Leadership Highlights

- **Greenfield SRE:** Built the first dedicated SRE function for a high-volume fintech — SLOs, runbooks, blameless post-mortem standards, and observability infrastructure where none existed.
- **Incident Ownership:** Executed active intrusion containment at a publicly traded company during a critical vulnerability cycle; drove six production incidents from detection to systemic remediation with documented SLA targets.
- **AI-Native Engineering:** Uses Claude Code, Copilot, and Codex CLI daily as primary engineering force multipliers — delivered a two-year stalled legacy project to production-ready state over a single weekend using AI-assisted analysis and test generation.
- **Quality Architecture:** Owned enterprise-wide QA strategy, code coverage standards, SAST/SCA gate enforcement, and shift-left testing culture across multiple product teams.
- **Operational Discipline:** Naval Academy graduate with high-stakes operational leadership experience; ran training qualification programs for 200-person organizations under inspection pressure, applying gap analysis and corrective action cycles that map directly to SLI ownership and PRR practice.

---

## Technical Skills

**Cloud / Infrastructure:** AWS (EKS, Lambda, CloudWatch, IAM, Secrets Manager), Azure, Terraform, CDK, CloudFormation, Helm, ArgoCD, Kubernetes (EKS — architectural fluency, CI/CD integration), Docker
**AI-Assisted Development:** Claude Code, GitHub Copilot, Codex CLI — used daily as primary engineering force multiplier for code analysis, test generation, refactoring, documentation, and infrastructure automation
**Languages:** Go, PowerShell, Bash, TypeScript, Python, .NET, SQL, Kotlin (reading), Java
**CI/CD:** GitHub Actions, GitLab CI, Azure DevOps, Jenkins, blue-green deployments, canary releases, IaC, GitOps
**Observability:** Prometheus, Sumo Logic, Betterstack, CloudWatch — logging, metrics, alerting design, latency diagnostics, distributed trace instrumentation
**Testing / Quality:** Integration testing, contract testing, deterministic testing, failure injection, performance / latency benchmarking, SonarQube, Mend, JaCoCo, Playwright
**Data / Messaging:** Aurora PostgreSQL, MSSQL, Kafka / MSK, Snowflake, stored procedures, ETL workflows
**Security:** AWS Secrets Manager, Azure Key Vault, IAM, managed identity, least-privilege design, SAST tooling, network segmentation (VPC, subnet, IGW, NAT, private link)

---

## Professional Experience

### Platform Engineer — Usio (Fintech Payment Processing) | San Antonio, TX | Oct 2025 – Present

Founded and built the first dedicated SRE function for a high-volume payment processing environment — introducing testability infrastructure, observability frameworks, incident management standards, and a formal modernization strategy where none previously existed.

- **Established blameless post-mortem standards and runbook library** across six production incidents: service recovery targets under one hour, RCA to leadership under three hours, hotfix deployment under five hours, and second-order failure mode remediation within 48 hours — with each retrospective focused on systemic fixes (alerting specificity, pre-run guardrails) rather than proximate patching.
- **Built deterministic integration testing infrastructure** for a legacy .NET payment authorization engine: Dockerized SQL Server with production-shaped seed data, controllable external-auth mocks covering approval, decline, timeout, HTTP failure, and malformed-response scenarios, and a Go-based SOAP/SQL test harness with SQL side-effect assertions, ordered suite execution, and latency instrumentation — enabling repeatable contract-style validation of transaction behavior for the first time.
- **Improved observability in a high-risk external-authorization transaction path** by restructuring request-level logging, capturing malformed upstream responses as raw strings on deserialization failure, and deploying a Betterstack log hoist pattern for legacy hot paths to surface latency diagnostics without adding latency to the critical path.
- **Architected a strangler-fig modernization strategy** for a 15-year-old payment monolith: ingress separation, broker-based message flows, shadow traffic, feature flags, idempotency improvements, and rollback-safe rollout sequencing — enabling incremental service extraction without a high-risk rewrite; validated modernization overhead as statistically insignificant against SLO-aware P50 and P99 latency benchmarks on the TCP passthrough layer.
- **Applied AI-assisted engineering** (Claude Code, Copilot, Codex) as a force multiplier: resurrected a test harness that had been in fragmented development for two years — delivering a complete conformal testing rig, validated test corpus, and mock orchestration framework over a single weekend, moving the project from stalled to production-ready.

### DevOps Engineer — SWBC (Enterprise Financial Services) | San Antonio, TX | Jul 2021 – Oct 2025

Led reliability, quality, and deployment engineering for a mature serverless platform in a regulated financial services environment.

- **Built CDK/TypeScript/Python automation tooling** that eliminated manual deployment steps across 12+ services, enforced branching strategy consistency, and reduced configuration drift — directly supporting zero-downtime blue-green releases.
- **Owned enterprise QA strategy and quality gate enforcement**: defined code coverage standards, integrated SonarQube and Mend SAST/SCA scanning into CI/CD pipelines, and drove the cultural shift toward developer-owned quality — identifying where automated gates worked and where manual advocacy was still required.
- **Led the organization's migration from Azure DevOps to GitHub Actions**, standardizing deployment patterns across the enterprise and reducing pipeline maintenance overhead across all product teams.
- **Executed active intrusion containment** during a critical vulnerability cycle: identified bad actors executing commands on a production server, ran containment procedures before exfiltration could occur, and produced post-incident documentation for a publicly traded company's compliance record — end-to-end incident ownership under high-stakes conditions.
- **Mentored 2 junior engineers and 3 interns**; led incident retrospectives following the swiss-cheese failure model — identifying multiple contributing factors and eliminating at least three systemic gaps per incident rather than patching only the proximate cause.

### Lieutenant — United States Navy | May 2007 – May 2013

Engineering and training leadership aboard USS Leyte Gulf (CG-57) and USS Mahan (DDG-72).

- **Owned the ship's Training Figure of Merit as a Service Level Indicator**: audited how readiness was actually being measured versus perceived, built a gap analysis across all warfare areas, identified which requirements were within operational control versus externally constrained, and improved TFOM from 75% to 96% — a corrective action cycle that is directly analogous to SLI ownership, PRR practice, and quality gate enforcement.
- **Eliminated toil with no owner**: identified that sailor school scheduling across a 200-person organization had no process, no accountability, and constant failures — took full ownership, modeled capacity requirements with redundancy buffers, built a multi-channel intake process (reserved seats plus walk-in overflow), and sustained certification rates through transfers, medical departures, and inspection cycles.
- Completed four major readiness assessments certifying the ship as deployment-ready; engaged by the Afloat Training Assessment group to train peer ships through the qualification cycle.

---

## Education & Certifications

- United States Naval Academy — BS Political Science (International Relations), General Engineering Core | 2006
- CodeUp Bootcamp — Full-stack development, Java and web development | 2021
- AWS Certified Cloud Practitioner
- AWS Certified Developer (Associate)
