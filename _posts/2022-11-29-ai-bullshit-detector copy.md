---
layout: article
title: "Train your own AI bullshit detector"
image:
  teaser: 20221129-ai-bullshit-detector/teaser.png
---

​
Defining what is possible and what is impossible is one of the main tasks that science solves every day. This is especially noticeable in the field of machine learning. Let’s take the recent Meta AI Galactica, a large language model trained on 48 mln. scientific papers. Until recently, if you visited [https://galactica.org](https://galactica.org), you would see a demo in which you can describe a scientific idea, and ”AI” would spit out relevant articles. Or if you ask a question, the model would answer. Some cherry-picked examples can now be seen here [https://galactica.org/explore](https://galactica.org/explore). The demo was out there for 3 days, and then Twitter simply smashed it, and the demo was closed.

Here is one of the threads, the gist is that the model palms off non-existent articles, makes factual mistakes (just like, generally, almost any Language Model), introduces its own biases and, in general, authoritatively declares facts that can lead researchers astray. Here is one of the innumerable articles on the topic.

<div style="text-align:center"><img src="/images/20221129-ai-bullshit-detector/vaccines_n_autism.jpeg"/></div>
_The great AI's take on the vaccines & autism debate._

I'm not saying that you shouldn't experiment, of course, you should. It's just that any experiment is aimed at testing some hypothesis, and in this case, the hypothesis was false from the very beginning. Language models cannot yet be a reliable source of verified scientific knowledge. It is rather strange to spend time and resources, run a demo, and expect it to miraculously work out of the box (well, Meta researchers could’ve at least integrated the LM with databases and/or knowledge graphs to avoid factual mistakes). And in general, the truth is that all sorts of natural language understanding techniques are not about understanding at all. We have no understanding of what neural networks actually “understand”. We tend to build transformers on top of transformers, mixed with transformers, play around with embeddings, change config files, learning rates, explore model errors, etc. and then we try to find some patterns in the NN’s behavior. Until we proudly (or humbly) claim that we understand something about our NN “understanding” something. Not surprisingly, interpretability, causal inference, reliable ML, and adjacent areas are among the hottest in ML these days.

My favorite example of how what seems possible turns out to be useless in practice (a pretty typical story for Data Science in general, let’s admit) is how the Open Data Science community tried to make a recommender system for commonly asked questions. In an actively growing community, newcomers came in and asked a lot of duplicate questions. It seems that there is a lot of data, you can train an ML model, and create a bot that would annoy you with hints like “you asked about transformers, but here’s another similar question about Bert”. The result is predictable: the recommendations were more like the notorious “oh, you tried chocolate, you probably enjoy brown, try 💩”, and the community members reacted to the bot’s suggestions accordingly, until it was turned off in the end. A bitter irony… there is a community of IT specialists, data scientists, and machine learning scientists, and the community failed to solve its own pain point in a seemingly mundane recommender project.

And finally, bullshit. It seems that managers of at least large companies are beginning to understand that some tasks can be solved really well, and some seemingly similar ones cannot be solved at all or can only be solved at a too high cost. However, it is still common to hear suggestions like “let AI find sound science” (whether a scientific article is reasonable or non-sensical) or “let’s create layman summaries of scientific articles for the general public” (a bit of provoking here: but in my view, summarization is just not there yet).

So, be critical, when you hear “AI”, try to replace it with “matrix multiplier” (or Advanced If-else, if you wish) and develop your own internal AI-bullshit detector, as well as some model that’d distinguish possible and impossible. If you develop a good prior of what is possible and what is not, you can save a lot of time by discarding bullshit right at the brainstorming stage.

​


