---
layout: article
title: "Open Machine Learning course mlcourse.ai – self-paced plan"
image:
  teaser: 20221001-mlcourseai-roadmap/teaser.png
---

[mlcourse.ai](https://mlcourse.ai) is an open Machine Learning course by OpenDataScience ([ods.ai](https://ods.ai), led by me. In 2017-2019, I've been leading active sessions of the course, offering essential theoretical ground and a ton of practice (assignments, Kaggle Inclass competitions, projects, etc.). All for free. Some 26k people participated, and ~1500 finished the course, I got dozens of direct messages on how passing the course changed the careers of [mlcourse.ai](https://mlcourse.ai)  alumni. Right now, the course is in a self-paced mode and still has much to offer.

***

This roadmap guides you through self-paced [mlcourse.ai](https://mlcourse.ai/). You can now pass the course as an [ODS.ai track](https://ods.ai/tracks/mlcourse_ai) as well.

If you prefer a video version, there it is:

<iframe width="560" height="315" src="https://www.youtube.com/embed/CPlYV_DryEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

First, take a look at [course prerequisites](prerequisites). Be ready to spend around 3 months on passing the course, some 4-10 hours/week. Though it heavily depends on how much you will be willing to dive into Kaggle competitions (they are time-consuming but very rewarding in terms of skills) that we offer during this course. To get help, [join OpenDataScience](https://mlcourse.ai/contacts), discussions are held in the #mlcourse_ai Slack channel. For a general picture of what role all Machine Learning plays in your would-be Data Science career, check the "Jump into Data Science" [video](https://youtu.be/FGuGg9F2VUs), it walks you through the preparation process for your first DS position once basic ML and Python are covered ([slides](https://www.slideshare.net/festline/how-to-jump-into-data-science)). In case you are already in DS, this course will be a good ML refresher. 

Below we outline the 10 topics covered in the course and give specific instructions on articles to read, lectures to watch, and assignments to crack. You can purchase a Bonus Assignments pack with the best non-demo versions of [mlcourse.ai](https://mlcourse.ai/) assignments. Select the ["Bonus Assignments" tier](https://www.patreon.com/ods_mlcourse) on Patreon or a [similar tier](https://boosty.to/ods_mlcourse/purchase/1142055?ssource=DIRECT&share=subscription_link) on Boosty (rus).

<div class="row">
  <div class="col-md-8" markdown="1">
  <p align="center">
  <a href="https://www.patreon.com/ods_mlcourse">
         <img src="/images/20221001-mlcourseai-roadmap/become_a_patron.png">
  </a>
  &nbsp;&nbsp;
  <a href="https://boosty.to/ods_mlcourse">
         <img src="/images/20221001-mlcourseai-roadmap/boosty_logo.png" width=200px >
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

***

#### Week 1. Exploratory Data Analysis

<div style="text-align:center"><img src="/images/20221001-mlcourseai-roadmap/topic1-teaser.jpg"  /></div>

You definitely want to immediately start with Machine Learning and see math in action. But 70-80% of the time working on a real project is fussing with data, and here Pandas is very good, I use it in my work almost every day. This article describes the basic Pandas methods for preliminary data analysis. Then we analyze the data set on the churn of telecom customers and try to predict the churn without any training, simply relying on common sense. By no means should you underestimate such an approach.

1. Read the [article](https://mlcourse.ai/articles/topic1-exploratory-data-analysis-with-pandas/) (same in a form of a [Kaggle Notebook](https://www.kaggle.com/kashnitsky/topic-1-exploratory-data-analysis-with-pandas))
2. (opt.) watch a [video lecture](https://youtu.be/fwWCw_cE5aI)
3. Complete [demo assignment 1](https://www.kaggle.com/kashnitsky/assignment-1-pandas-and-uci-adult-dataset) where you'll be exploring demographic data (UCI "Adult"), and (opt.) check out the [solution](https://www.kaggle.com/kashnitsky/a1-demo-pandas-and-uci-adult-dataset-solution) 
4. **[Bonus Assignment](https://www.patreon.com/ods_mlcourse):** here you'll be analyzing the history of the Olympic Games with Pandas. Check the detailed description of the assignment [on the course page](https://mlcourse.ai/book/topic01/bonus_assignment01_pandas_olympics.html).

***

#### Week 2. Visual Data Analysis

<div style="text-align:center"><img src="/images/20221001-mlcourseai-roadmap/topic2-teaser.jpg"  /></div>

The role of visual data analysis is hard to overestimate, this is how new insights are found in data and how features are engineered. Here we discuss main data visualization techniques and how they are applied in practice. Also take a sneak peek into multidimensional feature space using the t-SNE algorithm, which sometimes is useful but mostly just draws such Christmas tree decorations.

1. Read two articles: 

 - ["Visual data analysis in Python"](https://mlcourse.ai/articles/topic2-visual-data-analysis-in-python/) (same as a [Kaggle Notebook](https://www.kaggle.com/kashnitsky/topic-2-visual-data-analysis-in-python))
 - ["Overview of Seaborn, Matplotlib and Plotly libraries"](https://mlcourse.ai/articles/topic2-part2-seaborn-plotly/) (same as a [Kaggle Notebook](https://www.kaggle.com/kashnitsky/topic-2-part-2-seaborn-and-plotly))

2. (opt.) watch a [video lecture](https://www.youtube.com/watch?v=WNoQTNOME5g)
3. Complete [demo assignment 2](https://www.kaggle.com/kashnitsky/a2-demo-analyzing-cardiovascular-data) where you'll be analyzing cardiovascular disease data, and (opt.) check out the [solution](https://www.kaggle.com/kashnitsky/a2-demo-analyzing-cardiovascular-data-solution) 
4. **[Bonus Assignment](https://www.patreon.com/ods_mlcourse):** here you'll be performing EDA of a much larger dataset of US flights sometimes attending to the performance of basic operations. Check the detailed description of the assignment [on the course page](https://mlcourse.ai/book/topic02/bonus_assignment02_visual_analysis.html).

***

#### Week 3. Classification, Decision Trees, and k Nearest Neighbors

<div style="text-align:center"><img src="/images/20221001-mlcourseai-roadmap/topic3-teaser.png"  /></div>

Here we delve into machine learning and discuss two simple approaches to solving the classification problem. In a real project, you'd better start with something simple, and often you'd try out decision trees or nearest neighbors (as well as linear models, the next topic) right after even simpler heuristics. We discuss the pros and cons of trees and nearest neighbors. Also, we touch upon the important topic of assessing the quality of model predictions and performing cross-validation. The article is long, but decision trees, in particular, deserve it – they make a foundation for Random Forest and Gradient Boosting, two algorithms that you'll be likely using in practice most often.  

1. Read the [article](https://mlcourse.ai/articles/topic3-dt-knn/) (same as a [Kaggle Notebook](https://www.kaggle.com/kashnitsky/topic-3-decision-trees-and-knn))
2. (opt.) watch a video lecture coming in 2 parts:
 - the [theory](https://youtu.be/H4XlBTPv5rQ) behind decision trees, an intuitive explanation
 - [practice](https://youtu.be/RrVYO6Td9Js) with Sklearn decision trees
3. Complete [demo assignment 3](https://www.kaggle.com/kashnitsky/assignment-3-decision-trees) on decision trees, and (opt.) check out the [solution](https://www.kaggle.com/kashnitsky/a3-demo-decision-trees-solution) 
4. **[Bonus Assignment](https://www.patreon.com/ods_mlcourse):** here you'll be applying decision trees to cardiovascular desease data. In one more bonus assignment, a more challenging one, you'll be guided through an **implementation of a decision tree from scratch**. Check the detailed description of the assignment [on the course page](https://mlcourse.ai/book/topic03/bonus_assignment03_decision_trees.html#).

***

#### Week 4. Linear Classification and Regression

<div style="text-align:center"><img src="/images/20221001-mlcourseai-roadmap/topic4-teaser.png"  /></div>

The following 5 articles may form a small brochure, and that's for a good reason: linear models are the most widely used family of predictive algorithms. These articles represent our course in miniature: a lot of theory, and a lot of practice. We discuss the theoretical basis of the Ordinary Least Squares method and logistic regression, as well as their merits in terms of practical applications. Also, crucial concepts like regularization and learning curves are introduced. In the practical part, we apply logistic regression to the [task](https://inclass.kaggle.com/c/catch-me-if-you-can-intruder-detection-through-webpage-session-tracking2) of user identification on the Internet, it's a Kaggle Inclass competition (a.k.a "Alice", we go on with this competition in Week 6).

*It's better to admit that this week's material would rather take you 2-3 weeks to digest and practice, that's fine. But for consistency with article numbering, we stick to "Week 4" for this topic.*

1. Read 5 articles:
 - ["Ordinary Least Squares"](https://mlcourse.ai/articles/topic4-part1-linreg/) (same as a [Kaggle Notebook](https://www.kaggle.com/kashnitsky/topic-4-linear-models-part-1-ols))
 - ["Logistic Regression"](https://mlcourse.ai/articles/topic4-part2-logit/) (same as a [Kaggle Notebook](https://www.kaggle.com/kashnitsky/topic-4-linear-models-part-2-classification))
 - ["Regularization"](https://mlcourse.ai/articles/topic4-part3-regularization/) (same as a [Kaggle Notebook](https://www.kaggle.com/kashnitsky/topic-4-linear-models-part-3-regularization))
 - ["Pros and Cons of Linear Models"](https://mlcourse.ai/articles/topic4-part4-applications/) (same as a [Kaggle Notebook](https://www.kaggle.com/kashnitsky/topic-4-linear-models-part-4-more-of-logit)) 
 - ["Validation and learning curves"](https://mlcourse.ai/articles/topic4-part5-validation/) (same as a [Kaggle Notebook](https://www.kaggle.com/kashnitsky/topic-4-linear-models-part-5-validation)) 
2. Watch a video lecture on logistic regression coming in 2 parts:
 - the [theory](https://youtu.be/ne-MfRfYs_c) behind LASSO and Ridge regression models
 - [practical part](https://www.youtube.com/watch?v=7o0SWgY89i8), beating baselines in the "Alice" [competition](https://inclass.kaggle.com/c/catch-me-if-you-can-intruder-detection-through-webpage-session-tracking2)
3. Watch a video lecture on regression and regularization coming in 2 parts:
 - the [theory](https://www.youtube.com/watch?v=l3jiw-N544s) behind linear models, an intuitive explanation
 - [business case](https://youtu.be/B8yIaIEMyIc), where we discuss a real regression task – predicting customer Life-Time Value 
3. Complete [demo assignment 4](https://www.kaggle.com/kashnitsky/a4-demo-sarcasm-detection-with-logit) on sarcasm detection, and (opt.) check out the [solution](https://www.kaggle.com/kashnitsky/a4-demo-sarcasm-detection-with-logit-solution) 
4. Complete [demo assignment 6](https://www.kaggle.com/kashnitsky/assignment-6-linear-models-and-rf-for-regression) (sorry for misleading numbering here) on OLS, Lasso and Random Forest in a regression task, and (opt.) check out the [solution](https://www.kaggle.com/kashnitsky/a6-demo-regression-solution) 
6. **[Bonus Assignment](https://www.patreon.com/ods_mlcourse):** here you'll be guided through working with sparse data, feature engineering, model validation, and the process of competing on Kaggle. The task will be to beat baselines in that ["Alice" Kaggle competition](https://www.kaggle.com/c/catch-me-if-you-can-intruder-detection-through-webpage-session-tracking2). That's a very useful assignment for anyone starting to practice with Machine Learning, regardless of the desire to compete on Kaggle. Check the detailed description of the assignment [on the course page](https://mlcourse.ai/book/topic04/bonus_assignment04_alice_baselines.html#).

***

#### Week 5. Bagging and Random Forest

<div style="text-align:center"><img src="/images/20221001-mlcourseai-roadmap/topic5-teaser.png"  /></div>

Yet again, both theory and practice are exciting. We discuss why "wisdom of a crowd" works for machine learning models, and an ensemble of several models works better than each one of the ensemble members. In practice, we try out Random Forest (an ensemble of many decision trees) – a "default algorithm" in many tasks. We discuss in detail the numerous advantages of the Random Forest algorithm and its applications. No silver bullet though: in some cases, linear models still work better and faster.

1. Read 3 articles: 
 - ["Bagging"](https://mlcourse.ai/articles/topic5-part1-bagging/) (same as a [Kaggle Notebook](https://www.kaggle.com/kashnitsky/topic-5-ensembles-part-1-bagging))
 - ["Random Forest"](https://mlcourse.ai/articles/topic5-part2-rf/) (same as a [Kaggle Notebook](https://www.kaggle.com/kashnitsky/topic-5-ensembles-part-2-random-forest)) 
 - ["Feature Importance"](https://mlcourse.ai/articles/topic5-part3-feature-importance/) (same as a [Kaggle Notebook](https://www.kaggle.com/kashnitsky/topic-5-ensembles-part-3-feature-importance))
2. Watch a video lecture coming in 3 parts:
 - [part 1](https://www.youtube.com/watch?v=neXJL-AqI_c) on Random Forest
 - [part 2](https://www.youtube.com/watch?v=aBOMYqGUlWQ) on classification metrics
 - [business case](https://www.youtube.com/watch?v=FmKU-1LZGoE&feature=youtu.be), where we discuss a real classification task – predicting customer payment
3. Complete [demo assignment 5](https://www.kaggle.com/kashnitsky/assignment-5-logit-and-rf-for-credit-scoring) where you compare logistic regression and Random Forest in the credit scoring problem, and (opt.) check out the [solution](https://www.kaggle.com/kashnitsky/a5-demo-logit-and-rf-for-credit-scoring-sol) 
4. **[Bonus Assignment](https://www.patreon.com/ods_mlcourse):** here you'll be applying logistic regression and Random Forest in two different tasks, which will be great for your understanding of the application scenarios of these two extremely popular algorithms. Check the detailed description of the assignment [on the course page](https://mlcourse.ai/book/topic05/bonus_assignment05_logreg_rf.html#).

***

#### Week 6. Feature Engineering and Feature Selection

<div style="text-align:center"><img src="/images/20221001-mlcourseai-roadmap/topic6-teaser.png"  /></div>

Feature engineering is one of the most interesting processes in the whole of ML. It's an art or at least a craft and is therefore not yet well-automated. The article describes the ways of working with heterogeneous features in various ML tasks with texts, images, geodata, etc. Practice with the ["Alice" competition](https://www.kaggle.com/c/catch-me-if-you-can-intruder-detection-through-webpage-session-tracking2) is going to convince you how powerful feature engineering can be. And that it's a lot of fun as well!


1. Read the [article](https://mlcourse.ai/articles/topic6-features/) (same in a form of a [Kaggle Notebook](https://www.kaggle.com/kashnitsky/topic-6-feature-engineering-and-feature-selection))
2. **Kaggle:** Now that you've beaten simple baselines in the ["Alice" competition](https://www.kaggle.com/c/catch-me-if-you-can-intruder-detection-through-webpage-session-tracking2) (see Topic 4), check out a bit more advanced Notebooks:
 - ["Correct time-aware cross-validation scheme"](https://www.kaggle.com/kashnitsky/correct-time-aware-cross-validation-scheme)
 - ["Model validation in a competition"](https://www.kaggle.com/kashnitsky/model-validation-in-a-competition)

   Go on with feature engineering and try to achieve ~ 0.955 (or higher) ROC AUC on the [Public Leaderboard](https://www.kaggle.com/c/catch-me-if-you-can-intruder-detection-through-webpage-session-tracking2/leaderboard). Alternatively, if a better solution is already shared by the time you join the competition, try to improve the best publicly shared solution by at least 0.5%. However, **please do not share high-performing solutions**, it ruins the competitive spirit of the competition, and also hurts some other courses which also have this competition in their syllabus.
3. **[Bonus Assignment](https://www.patreon.com/ods_mlcourse):** here you’ll be challenged to beat a baseline in the competition where the goal is to predict the popularity of a Medium article. For this purpose, you’ll be provided with instructions on extracting features from raw JSON files, such as title, author, content, etc. as well as some time-based features. Check the detailed description of the assignment [on the course page](https://mlcourse.ai/book/topic06/bonus_assignment06.html#).

#### Week 7. Unsupervised Learning: Principal Component Analysis and Clustering

<div style="text-align:center"><img src="/images/20221001-mlcourseai-roadmap/topic7-teaser.jpg"  /></div>

Here we turn to the vast topic of unsupervised learning, it's about the cases when we have data but it is unlabeled, no target feature to predict like in classification/regression tasks. Most of the data out there is unlabeled, and we need to be able to make use of it. We discuss only 2 types of unsupervised learning tasks – clustering and dimensionality reduction. 


1. Read the [article](https://mlcourse.ai/articles/topic7-unsupervised/) (same in a form of a [Kaggle Notebook](https://www.kaggle.com/kashnitsky/topic-7-unsupervised-learning-pca-and-clustering))
2. (opt.) watch a video lecture coming in 2 parts:
 - ["Principal Component Analysis"](https://youtu.be/-AswHf7h0I4)
 - ["Clustering"](https://youtu.be/eVplCo-w4XE)
3. Complete [demo assignment 7](https://www.kaggle.com/kashnitsky/assignment-7-unupervised-learning) where you analyze data coming from mobile phone accelerometers and gyroscopes to cluster people into different types of physical activities, and (opt.) check out the [solution](https://www.kaggle.com/kashnitsky/a7-demo-unsupervised-learning-solution) 
4. **[Bonus Assignment](https://www.patreon.com/ods_mlcourse):** here we walk you through Sklearn built-in implementations of dimensionality reduction and clustering methods and apply these techniques to the popular “faces” dataset. Check the detailed description of the assignment [on the course page](https://mlcourse.ai/book/topic07/bonus_assignment07.html#).


#### Week 8. Vowpal Wabbit: Learning with Gigabytes of Data

<div style="text-align:center"><img src="/images/20221001-mlcourseai-roadmap/topic8-teaser.png"  /></div>

 The theoretical part here covert the analysis of Stochastic Gradient Descent, it was this optimization method that made it possible to successfully train both neural networks and linear models on really large training sets. Here we also discuss what can be done in cases of millions of features in a supervised learning task ("hashing trick") and move on to Vowpal Wabbit, a utility that allows you to train a model with gigabytes of data in a matter of minutes, and sometimes of acceptable quality. We consider several cases including StackOverflow questions tagging with a training set of several gigabytes. 

1. Read the [article](https://mlcourse.ai/articles/topic8-sgd-vw/) (same in a form of a [Kaggle Notebook](https://www.kaggle.com/kashnitsky/topic-7-unsupervised-learning-pca-and-clustering))
2. (opt.) watch a video lecture coming in 2 parts:
 - ["Stochastic Gradient Descent"](https://youtu.be/EUSXbdzaQE8)
 - ["Vowpal Wabbit"](https://www.youtube.com/watch?v=gyCjancgR9U)
3. Complete [demo assignment 8](https://www.kaggle.com/kashnitsky/assignment-8-implementing-online-regressor) "Implementing online regressor" which walks you through implementation from scratch, very good for the intuitive understanding of the algorithm. Optionally, check out the [solution](https://www.kaggle.com/kashnitsky/a8-demo-implementing-online-regressor-solution) 
4. **[Bonus Assignment](https://www.patreon.com/ods_mlcourse):** This assignment is an extended version of the demo assignment where the SGD regressor is implemented. Also, we go deeper into the math behind this wonderful optimization algorithm. Check the detailed description of the assignment [on the course page](https://mlcourse.ai/book/topic08/bonus_assignment08.html#).

#### Week 9. Time Series Analysis with Python

<div style="text-align:center"><img src="/images/20221001-mlcourseai-roadmap/topic9-teaser.jpg"  /></div>

Here we discuss various approaches to work with time series: what data preparation is necessary, how to get short-term and long-term predictions. We walk through various types of time series models, from simple moving average to gradient boosting. We also take a look at the ways to search for anomalies in time series and discuss the pros and cons of these methods.

1. Read the following two articles:
 - ["Time series analysis in Python"](https://mlcourse.ai/articles/topic9-part1-time-series/) (same in a form of a [Kaggle Notebook](https://www.kaggle.com/kashnitsky/topic-9-part-1-time-series-analysis-in-python))
 - ["Predicting future with Facebook Prophet"](https://mlcourse.ai/articles/topic9-part2-prophet/) (same in a form of a [Kaggle Notebook](https://www.kaggle.com/kashnitsky/topic-9-part-2-time-series-with-facebook-prophet))
2. (opt.) watch a [video lecture](https://youtu.be/_9lBwXnbOd8)
3. Complete [demo assignment 9](https://www.kaggle.com/kashnitsky/assignment-9-time-series-analysis) where you'll get your hands dirty with ARIMA and Prophet, and (opt.) check out the [solution](https://www.kaggle.com/kashnitsky/a9-demo-time-series-analysis-solution)
4. **[Bonus Assignment](https://www.patreon.com/ods_mlcourse):** here we are attacking a times series prediction task with a method that has proven to be working well in practice providing quality comparable to ARIMA models. Namely, feature engineering, feature selection and linear models. Check the detailed description of the assignment [on the course page](https://mlcourse.ai/book/topic09/bonus_assignment09.html#).

#### Week 10. Gradient Boosting   

<div style="text-align:center"><img src="/images/20221001-mlcourseai-roadmap/topic10-teaser.jpeg"  /></div>

Gradient boosting is one of the most prominent Machine Learning algorithms, it founds a lot of industrial applications. For instance, the Yandex search engine is a big and complex system with gradient boosting (MatrixNet) somewhere deep inside. Many recommender systems are also built on boosting. It is a very versatile approach applicable to classification, regression, and ranking. Therefore, here we cover both the theoretical basics of gradient boosting and specifics of the most wide-spread implementations – Xgboost, LightGBM, and Catboost.

1. Read the [article](https://mlcourse.ai/articles/topic10-boosting/) (same in a form of a [Kaggle Notebook](https://www.kaggle.com/kashnitsky/topic-10-gradient-boosting))
2. (opt.) watch a video lecture coming in 2 parts:
 - [part 1](https://youtu.be/g0ZOtzZqdqk), fundamental ideas behind gradient boosting
 - [part 2](https://youtu.be/V5158Oug4W8), key ideas behind major implementations: Xgboost, LightGBM, and CatBoost
3. **Kaggle:** Take a look at the "Flight delays" [competition](https://www.kaggle.com/c/flight-delays-fall-2018) and a starter with [CatBoost](https://www.kaggle.com/kashnitsky/mlcourse-ai-fall-2019-catboost-starter-with-gpu). Start analyzing data and building features to improve your solution. Try to improve the best publicly shared solution by at least 0.5%. But still, **please do not share high-performing solutions**, it ruins the competitive spirit.
4. **[Bonus Assignment](https://www.patreon.com/ods_mlcourse):** here we go through the math and implement the general gradient boosting algorithm from scratch. The same class will implement a binary classifier that minimizes the logistic loss function and two regressors that minimize the mean squared error (MSE) and the root mean squared logarithmic error (RMSLE). This way, we will see that we can optimize arbitrary differentiable functions using gradient boosting and how this technique adapts to different contexts. Check the detailed description of the assignment [on the course page](https://mlcourse.ai/book/topic10/bonus_assignment10.html#).




