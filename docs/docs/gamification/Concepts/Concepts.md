---
title: Concepts
sidebar_position: 2
---

# 📘 Concepts

Before integrating or configuring the **Gamification Submodule**, it's important to understand a few foundational concepts. These provide the mental model needed to work effectively with the system.

## Component Breakdown

The gamification submodule is split into two parts: the **Gamification Engine** and the **Gamification Layer**. This separation makes it easier and more flexible to manage gamification in your app.

![Gamification Component Breakdown](gamification-overview.png)

### Gamification Engine

The core component of the gamification system that tracks user metrics and triggers achievements to boost engagement.  
Think of it as the _“scorekeeper”_ that monitors user activity and rewards them when they reach specific milestones.

When a user completes a task or reaches a goal, the engine recognizes the achievement and assigns the appropriate reward.

The Gamification Engine manages:

- **Metrics (User Activity Tracking)**: Monitors what users do and how far they've progressed.
- **Achievements (Rewards for Users Completions)**: Assigns rewards based on milestones and goals.

It operates at both the **user** and **admin** levels, ensuring that both users and administrators can interact with and manage the gamification experience.

### Gamification Layer

The Gamification Layer sits on top of the Gamification Engine and adds extra features.
It lets you set up events and rules using simple APIs, making it easy to add and manage gamification in your app.

This layer provides:

- A flexible way to define and customize events.
- Easily set up rules that trigger achievements when users complete certain actions.
- An API-first approach (designed to be easily controlled and extended using APIs) for better scalability and integration with external systems.

It simplifies the interaction with the core gamification engine and ensures that you can easily extend or modify gamification features as needed.

**_It’s crucial to understand when to use each component to implement gamification effectively. As a general rule, if your gamification logic involves complex rules or relies on external data, use the Gamification Layer._**
