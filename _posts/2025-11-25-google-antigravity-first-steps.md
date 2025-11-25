---
layout: article
title: "Google Antigravity: first impressions"
image:
  teaser: 20251125-google-antigravity-first-steps/teaser.png
---


First of all, it’s sci-fi stuff, of course. Just imagine showing this to the version of yourself from 5 years ago.

There are at least three differences between [Google Antigravity](https://antigravity.google/) and a standard IDE with a coding agent hovering over it:

 - You can run multiple agents in parallel. Assign frontend to one, backend to another, and research to a third. Then you just come back to check the result;

 - Antigravity launches the application in a sandbox itself, tests it just like a human would, reports on what worked and what didn't, and then writes a report in a "Walkthrough" file. That is exactly what is happening in the video below: when the browser is highlighted with a blue border, that means Antigravity has taken control;

 - Nice little touches like separate files for Task, Implementation Plan, and Walkthrough; the agents' thoughts and actions are even more transparent.

You can also watch [this video](https://www.youtube.com/watch?v=nTOVIGsqCuY) and try to replicate it.

Below we'll run Antigraviry with one cool task that I've used for quite a while when teaching Python.

## Prey and Predators

As an example, let's take "Prey and Predators", a.k.a. "Law of the Jungle" which is a simplified version of Conway's [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life). This used to be a great take-home assignment in an interview series or a university course, and now it can be vibe-coded in minutes. 

[Here](https://github.com/Yorko/prey_predators_cool_programming_task) is a starter repository.

### Rules and Task

Rules:

 - A predator can eat an adjacent prey or simply move to an adjacent cell.

 - Prey can also move to an adjacent cell.

 - If a predator does not eat anything for a certain amount of time, it dies.

 - After specific time intervals, predators and prey reproduce if there is a neighboring empty cell. The offspring occupies the free cell.

The current state of the ocean should be displayed on the screen, ideally using a graphical user interface (GUI). The simulation ends either after a certain number of iterations or when all predators or all prey have died.

Use this model to test the hypothesis of cyclical populations of predators and prey.

## Vibe-coding Prey and Predators with Antigravity

For a prompt, I simply gave:

*Implement a solution for this task [https://github.com/Yorko/prey_predators_cool_programming_task](https://github.com/Yorko/https://github.com/Yorko/prey_predators_cool_programming_task) in a modern tech stack, with Python backend and Next.js frontend*


Antigravity opened the browser to read through the repository (that's already pretty cool), then came up with a Task and an Implementation plan.

<div style="text-align:center"><img src="/images/20251125-google-antigravity-first-steps/prey_predators_task.png" width=500px /></div>

<div style="text-align:center"><img src="/images/20251125-google-antigravity-first-steps/implementation_plan.png" width=500px /></div>

Then the app prompts the user to review the implementation and proceed (it's also possible to provide comments to both, in a code review style). After a couple more approvals, it generates the whole codebase and launches the frontend and backend services (it also updates the Task tab on the go).

Finally, Antigravity opens the browser to test the application. 

<div style="text-align:center">
  <video width="500" controls>
    <source src="/images/20251125-google-antigravity-first-steps/antigravity_prey_predators.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

<div style="text-align:center"><img src="/images/20251125-google-antigravity-first-steps/simulation_running.png" width=500px /></div>

First impressions are fascinating. It's magical to see the agent live testing the application. 

Whether Antigravity is of much help in real projects (as compared to tools like Gemini CLI or similar) – we'll see.
















