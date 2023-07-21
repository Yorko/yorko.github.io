---
layout: article
title: "A short prompt engineering (chatGPT 'cooking') course by Andrew Ng and OpenAI"
image:
  teaser: 20230719-prompt-engineering-course-ng-openai/teaser.png
---

_In this post, I review a short course by Andrew Ng and Isa Fulford on ChatGPT Prompt Engineering for Developers._

***

I found ["ChatGPT Prompt Engineering for Developers"](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) great and would like to give a short overview. 

It's our favorite Andrew Ng in collaboration with Isa Fulford from OpenAI. 

<div style="text-align:center">
<img src="/images/20230719-prompt-engineering-course-ng-openai/chatgpt_for_dev.png " width=700px />
</div>

_Hi, Andrew! Long time no see! [image credit](https://www.deeplearning.ai/short-courses/)_

## Pros

- the course is (yet) free
- the course is very short, just ~10 lectures, 5-10 min. each 
- very practical, it's all about examples of using OpenAI APIs
- the platform is great: video on the right, and interactive Jupyter running on the left; thus you can play around with code while watching the video



<div style="text-align:center">
<img src="/images/20230719-prompt-engineering-course-ng-openai/dl_ai_course_interface.png" width=700px />
</div>

## Some tips covered

- tiny ones like putting the part of the text that you need to process between triple backticks
- making chatGPT respond in a structured way, e.g. JSON so that you don’t have to parse the output with regexp (if you are solving a problem with a regexp, you have two problems)
- all the way through typical downstream tasks (sentiment classification, translation, etc.) up to writing a small pizza order bot with chatGPT backend where basically the whole operation of the bot is described with one long prompt

## What I missed
 

- examples of few-shot learning, how to best provide examples right there in the prompt to improve downstream performance as compared to the zero-shot setup
- how to debug such solutions. Debugging a pizza order bot that follows your long-written prompt with instructions sounds close to impossible


Despite the cons, the course is definitely worth 2-3 hours of your time and 0 euro/dollars. I recommend taking a couple of your own tasks (either from pet-projects or real business tasks) and playing with them as you progress through the course.
