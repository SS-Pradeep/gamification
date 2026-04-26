# Gamification Engine

## Overview

The Gamification Engine is a service that tracks user progress (metrics) and unlocks achievements based only on those metrics. It does not handle events or rules—those are managed by the Gamification Layer, which listens to user actions and decides when to update metrics.

---

## What it does?:

**This component is responsible for:**

- Incrementing user metrics(such as points or streaks)

- Unlocks achievements when users reach certain metric thresholds

- Handling metrics and achievement at admin & user scope.

_Note: Gamification Engine has no knowledge of rules and events._

## 🧠 Core Concepts

### 🎯 Metrics

Gamification metrics are measurable values(like points,streaks,counters) that form the foundation of the application's gamification system, helping to quantify and drive user engagement.

#### What they do?

- Unit of progress tracking (e.g., correct answers, fast completions, points earned)

- Defined by Admins

- Created for each user as needed (lazy initialization)

- Can be updated directly with metric trigger.

### 🏅 Achievements

Achievements are game elements that are awarded upon reaching a certain threshold defined over a metric (e.g., badges).

#### What they do?

- Defined by associating them with a metric and a threshold (e.g., Points master badge is unlocked when 500 points are earned.)

- Unlocked by Gamification Engine during metric trigger.

### 🔄 Metric Trigger

After creating your metrics and achievements, you can use the `metric-trigger` API to update several metrics at once for a user. When you do this, the system will automatically check if the user has unlocked any new achievements based on these updates and adds it to the respective users, making it easy to track progress and award rewards in real time.
