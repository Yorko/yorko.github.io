---
layout: article
title: "chatGPT would almost pass my take-home assignment for the Machine Learning Engineer role"
image:
  teaser: 20230130-chatgpt-mle-take-home/teaser.png
---

_In this post I describe how chatGPT cancover around 90% of the steps needed to successfylly crack a take-home assignment for the Machine Learning Engineer role._

***
I know everyone is fed up with chatGPT by this point in time. But I find this story especially peculiar and worth sharing. 

> for those living in a cave or having 50h of meetings per week: chatGPT is [a new chatbot by OpenAI](https://openai.com/blog/chatgpt/) based on GPT3, which is unprecedentedly good.

I've just hired a Machine Learning engineer to join my team, and I used a take-home assignment for the selection process. I love giving take-home assignments for several reasons, one of them is that it’s a good proxy to assess the candidate’s ability to write clear code and communicate the findings. Some folks criticise such assignments as they make candidates spend their free time on job-related tasks. Fair enough, although I pay back by providing thorough written feedback on every candidate’s work (including code). I also enjoy this particular take-home assignment that I’m giving, as it’s based on my real pet-project: sentiment analysis of crypto news that I'll describe in a different post (Russian speakers can enjoy the description on [Habr.com](https://habr.com/ru/company/ods/blog/673376/)).

Having played a bit with chatGPT, I [noticed](https://yorko.github.io/2022/chatgpt3-coref-resolution/) that it can do fairly well with machine learning course assignments. In particular, for [one](https://mlcourse.ai/book/topic08/assignment08_implement_sgd_regressor.html) of [mlcourse.ai](http://mlcourse.ai) assignments, chatGPT3 also created a perfect implementation of the Stochastic Gradient Regressor which works, and then it explained how to use the new Python class.

<div style="text-align:center">
<img src="/images/20230130-chatgpt-mle-take-home/chatgpt_mlcourse_a1_q1.png" width=700px />
</div>

I also heard from one math professor that chatGPT cracks most of the exams in calculus that he gives to students. So he has to review his assignments and probably redo most of them.

Naturally, I decided to check how well chatGPT would do on the MLE take-home assignment. 

So, I simply fed the whole assignment description into chatGPT, and got back a long and reasonable description of the steps to be taken. And look what happens when I go on asking the model to generate Python code for the above.

<div style="text-align:center">
<img src="/images/20230130-chatgpt-mle-take-home/chatgpt_mle_task1.png" width=700px />
</div>

<div style="text-align:center">
<img src="/images/20230130-chatgpt-mle-take-home/chatgpt_mle_task2.png" width=700px />
</div>

<div style="text-align:center">
<img src="/images/20230130-chatgpt-mle-take-home/chatgpt_mle_task3.png" width=700px />
</div>

So, we get separate code snippets for model training and evaluation, scraping the website with test data and getting model predictions, and also the flask API prediction endpoint code. All snippets are followed by reasonable descriptions in plain English. What was especially pleasing: in the description of the task (in English), I gave two lines of code to read the data (Python), the model understood and copied those two lines.

You can see that the code won’t work as is – fitting Logistic Regression with raw texts is not correct, but we’ll get there. 

Creating a Docker image is a no-brainer!

<div style="text-align:center">
<img src="/images/20230130-chatgpt-mle-take-home/chatgpt_mle_task4.png" width=700px />
</div>

Then I asked to structure the code a bit better:

<div style="text-align:center">
<img src="/images/20230130-chatgpt-mle-take-home/chatgpt_mle_task5.png" width=700px />
</div>

Next: ”What would be the content of the Readme file?” – and there it is, a clear Readme with all the instructions needed to run the API. It’s actually better than some 70% Readmes that I saw while hiring an MLE. 

chatGPT understands the context, keeps the generated code in “memory” and can debug it! The error with skipped text representation step was fixed by the model itself.

<div style="text-align:center">
<img src="/images/20230130-chatgpt-mle-take-home/chatgpt_mle_task6.png" width=700px />
</div>

One more example:

<div style="text-align:center">
<img src="/images/20230130-chatgpt-mle-take-home/chatgpt_mle_task7.png" width=700px />
</div>


In the end, I made it work, having fixed 2-3 annoying bugs like the lack of permissions to install packages in the Docker file, missing `app.run()` command in the Flask app code, etc. 

But if it were a live coding interview, chatGPT would’ve covered 90% of the way to a fully working ML application. An average candidate wouldn’t do better. 

Of course, some would say that chatCPT is generally stupid, it cannot solve even a quadratic equation, and in the case of this take-home assignment, it *simply* reproduced something seen on  GitHub (as if it were not a miracle on its own!). But is it really so different from how a human would approach the assignment?

Here we are. I’ll finish the onboarding process for this MLE position and will get rid of this particular assignment. It’s actually a very good question what to replace it with.

Exciting times!