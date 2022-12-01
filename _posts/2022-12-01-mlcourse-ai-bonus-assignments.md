---
layout: article
title: "Bonus mlcourse.ai assignments"
image:
  teaser: 20221201-mlcourse-ai-bonus-assignments/teaser.png
---

​
Here we cover the best assignments of [mlcourse.ai](https://mlcourse.ai) – an open and free Machine Learning course with a good balance of theory and practice. The course is available for free in a self-paced mode, however the best assignments are shared with [Patreon](https://www.patreon.com/ods_mlcourse) and [Boosty](https://boosty.to/ods_mlcourse) supporters. 

<div style="text-align:center"><img src="/images/20221201-mlcourse-ai-bonus-assignments/feynmann_quote.jpg" width=500px /></div>


Citing the legend, "what you cannot create, you do not understand". Thus, several of the bonus assignments are focused on the implementation of decision trees, random forest, SGD and gradient boosting from scratch. 

Also, we put stress on practice with Kaggle competitions, and in 2 more assignments you are guided in beating baselines in Kaggle Inclass competitions (["Alice"](https://www.kaggle.com/competitions/catch-me-if-you-can-intruder-detection-through-webpage-session-tracking2) and ["Medium"](https://www.kaggle.com/competitions/how-good-is-your-medium-article)). 

Let's go through some of the assignments in a bit more detail.

## Implementing Decision Trees


Here we'll go through the math and code behind decision trees applied to the regression problem, some toy examples will help with that. It is good to understand this because the regression tree is the key component of the gradient boosting algorithm which we cover in the end of the course.

<p float="left">
  <img src="/images/20221201-mlcourse-ai-bonus-assignments/assignment03_decision_trees_solution_10_0.png" width="350" />
  <img src="/images/20221201-mlcourse-ai-bonus-assignments/assignment03_decision_trees_solution_17_0.png" width="350" />
</p>
_Left: Building a regression tree, step 1. Right: Building a regression tree; step 3_

Further, we apply classification decision trees to cardiovascular disease data.

<p float="left">
  <img src="/images/20221201-mlcourse-ai-bonus-assignments/SCORE_CVD_eng.png" width="200" />
  <img src="/images/20221201-mlcourse-ai-bonus-assignments/assignment03_decision_trees_solution_SCORE.png" width="500" />
</p>
_Left: Risk of fatal cardiovascular disease. Right: A decision tree fit to cardiovascular disease data._

In one more bonus assignment, a more challenging one, you'll be guided through an implementation of a decision tree from scratch. You'll be given a template for a general `DecisionTree` class that will work both for classification and regression problems, and then you'll be testing the implementation with a couple of toy- and actual classification and regression tasks.

<div align="center">
<img src="/images/20221201-mlcourse-ai-bonus-assignments/decision_tree_class_template.png" width=600px />
</div>

## Logistic regression vs. Random Forest

In bonus assignment 5, you'll implement a simplified version of Random Forest classifier and apply logistic regression and Random Forest in two different tasks – credit scoring and movie reviews classification. This will be great for your understanding of application scenarios of these two extremely popular algorithms. You’ll also learn the hard way that Random Forest should not be used in case of very large dimensions.

## Implementing Stochastic Gradient Descent classifier and regressor


This assignment is an extended version of the [demo assignment](https://mlcourse.ai/book/topic08/assignment08_implement_sgd_regressor.html) where the SGD regressor is implemented. Also, we go deeper into the math behind this wonderful optimization algorithm. Here is one of the questions:

<br>
<div align="center">
<img src='/images/20221201-mlcourse-ai-bonus-assignments/assignment8_teaser_update_formula.png' width=600px >  
</div>


Finally, we implement both an SGD regressor and an SGD classifier from scratch and validate both with real-world datasets.

<p float="left">
  <img src="/images/20221201-mlcourse-ai-bonus-assignments/assignment8_teaser_sdg_classifier.png" width="450" />
    <img src="/images/20221201-mlcourse-ai-bonus-assignments/assignment8_teaser_loss.png" width="250" />
</p>

## Implementing Gradient boosting

Gradient boosting is one of the most prominent Machine Learning algorithms, it finds a lot of industrial applications. For instance, the Yandex search engine is a big and complex system with gradient boosting (MatrixNet) somewhere deep inside. Many recommender systems are also built on boosting. It is a very versatile approach applicable to classification, regression, and ranking. Therefore, [in the course](https://mlcourse.ai/book/topic10/topic10_intro.html), we cover both theoretical basics of gradient boosting and specifics of most widespread implementations – Xgboost, LightGBM, and Catboost.

And this assignment, we go through the math and implement the general gradient boosting algorithm from scratch (by the way, one of the popular ML interview questions is "Where do you find gradients in gradient boosting?"). The same class will implement a binary classifier that minimizes the logistic loss function and two regressors that minimize the mean squared error (MSE) and the root mean squared logarithmic error (RMSLE). This way, we will see that we can optimize arbitrary differentiable functions using gradient boosting and how this technique adapts to different contexts. Here is one of the questions:

<div align="center">
<img src="/images/20221201-mlcourse-ai-bonus-assignments/assignment10_teaser_math.png" width=600px/>
</div>
<br>

Here is one of the visualizations that you build in the process of coding the algorithm and grasping its inner workings. 

<div align="center">
<img src="/images/20221201-mlcourse-ai-bonus-assignments/assignment10_teaser_residuals.png" />
</div>
_Residuals at each gradient boosting iteration and the corresponding tree prediction._

## Beating baselines in the "Alice" competition

In this assignment, you’ll be guided through working with sparse data, feature engineering, model validation, and the process of competing on Kaggle. The task will be to beat baselines in the “Alice” [Kaggle competition](https://www.kaggle.com/c/catch-me-if-you-can-intruder-detection-through-webpage-session-tracking2). That’s a very useful assignment for anyone starting to practice with Machine Learning, regardless of the desire to compete on Kaggle.

The competition is about identifying a user ("Alice") on the Internet through tracking her web sessions, it's based on the actual data from one French University. The competition turned out to be very successful, in a sense that the task can be solved well with fairly simple models (literally, logistic regression), and extensive feature engineering.

<div align="center">
<img src="/images/20221201-mlcourse-ai-bonus-assignments/topic6-teaser.png" />
</div>
_Exploratory Data Analysis and some insights._

For example, the figure above depicts the distribution of session start hours for Alice and others. You might see that distributions are quite different. Hence, such a feature can be added to the model and improve its quality. Such an activity -- feature engineering -- is a very creative process (we touch it later in the course as well). And it turns out, this competition is very rewarding for thoughtful feature engineering. And well, coming up with good features via visual analysis, adding those to the model, and climbing up the leaderboard -- that's an unforgettable adventure!

In this task, we arm you with a fairly well-performing baseline, and then you are invited to come up with new features and beat baselines.

## Beating baselines in the "Medium" competition

In this assignment, you'll be challenged to beat a baseline in the competition where the goal is to predict the popularity of a Medium article. For this purpose, you'll be provided with instructions on extracting features from raw JSON files, such as title, author, content, etc. as well as some time-based features.

Here it's much closer to real-world Data Science, where you spend time fussing with JSONs extracting features, and waiting while the model is being trained. At the same time, just like with the "Alice" competition feature engineering is the key, and that's fun.

----

To purchase a Bonus Assignments pack, select the ["Bonus Assignments" tier](https://www.patreon.com/ods_mlcourse) on Patreon or a [similar tier](https://boosty.to/ods_mlcourse/purchase/1142055?ssource=DIRECT&share=subscription_link) on Boosty (rus).

<div class="row">
  <div class="col-md-8" markdown="1">
  <p align="center">
  <a href="https://www.patreon.com/ods_mlcourse">
         <img src="/images/20221201-mlcourse-ai-bonus-assignments/become_a_patron.png">
  </a>
  &nbsp;&nbsp;
  <a href="https://boosty.to/ods_mlcourse">
         <img src="/images/20221201-mlcourse-ai-bonus-assignments/boosty_logo.png" width=200px >
  </a>
  </p>
  </div>
  <div class="col-md-4" markdown="1">
  <details>
  <summary>Details of the deal</summary>

mlcourse.ai is still in self-paced mode but we offer you Bonus Assignments with solutions for a contribution of $17/month. The idea is that you pay for ~1-5 months while studying the course materials, but a single contribution is still fine and opens your access to the bonus pack.

Note: the first payment is charged at the moment of joining the Tier Patreon, and the next payment is charged on the 1st day of the next month, thus it's better to purchase the pack in the 1st half of the month.

mlcourse.ai is never supposed to go fully monetized (it's created in the wonderful open ODS.ai community and will remain open and free) but it'd help to cover some operational costs, and Yury also put in quite some effort into assembling all the best assignments into one pack. Please note that unlike the rest of the course content, Bonus Assignments are copyrighted. Informally, Yury's fine if you share the pack with 2-3 friends but public sharing of the Bonus Assignments pack is prohibited.
</details>
  </div>
</div><br>

