---
layout: article
title: "Dotplot – the single most useful yet largely neglected dataviz type"
image:
  teaser: 190719-teaser.jpeg
---

> I have to confess that the core message of this post is not really a fresh saying. But if I was given a chance to deliver one dataviz advise to every (ha-ha-ha) listening mind, I'd choose this: **forget multi-category bar plots and use dotplots instead**. 



 {% raw %}
  $$a^2 + b^2 = c^2$$ --> note that all equations between these tags will not need escaping! 
 {% endraw %}
 
  {% raw %} $$a^2 + b^2 = c^2$$ {% endraw %}
  
  Inline $$\pi$$ \\[ \frac{1}{n^{2}} \\]
  
$$
\begin{align*}
  & \phi(x,y) = \phi \left(\sum_{i=1}^n x_ie_i, \sum_{j=1}^n y_je_j \right)
  = \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) = \\
  & (x_1, \ldots, x_n) \left( \begin{array}{ccc}
      \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \\
      \vdots & \ddots & \vdots \\
      \phi(e_n, e_1) & \cdots & \phi(e_n, e_n)
    \end{array} \right)
  \left( \begin{array}{c}
      y_1 \\
      \vdots \\
      y_n
    \end{array} \right)
\end{align*}
$$

  
  
  {% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

I was converted several years ago after reading [this brilliant post][post]. Around the same time, as I figured out later, demographer Griffith Feeney wrote a [similar post][grif]. From fresher examples, there are chapters discussing dotplot visualizations in [Claus Wilke's book][wilk] and [Kieran Healy's book][heal]. So, what are dotplots and what's so special about them? 

Basically, dotplots are the same regular barplots rotated 90 degrees and optimized on "ink usage", i.e. dots represent values along the continuous horizontal axis. This leaves the vertical axis for the categorical variable allowing to write out long labels for the categories as normal horizontally aligned text (nobody likes to read that awful 45 degrees labels). The use of dots instead of bars allows to represent several comparable values for each category.  


Here is a sample of some ugly plots that I found in the recent papers in my personal library of papers. 

[![fig1][f1]][f1]  

It was not difficult to compose such a selection as these plots are, unfortunately, super popular. I think, the guy to blame here is (surprise-surprise) Excel. I'm failing to understand how such a basic plot type can be missed out.  

Just to be clear, I'm guilty too. Before the happy rstats-ggplot switch, I've been producing the same Excel plots. Here is an example from my [2014 working paper][wp] on internal youth migration in the central regions of Russia.

[![fig2][f2]][f2]  

These two figures became one in the final paper recently [published in GeoJournal][geoj]. I think it's a nice example how information dense, pretty looking (very subjective here), and easy to read a dotplot can be. 

[![fig3][f3]][f3]  

The figure shows discrepancy in migration estimates based on statistical record and census indirect estimates.

The code to replicate this figure is in [this gist][gist]. A couple of coding solutions might be interesting here. First, the trick to offset vertically the dots for the two cohorts. Yet I realise that the way I implemented it is a bit clumsy; if you know a more elegant solution please let me know. Also, I believe in some cases composing the legend manually pays off, especially when we are dealing with two-dimensional legend. If the plot has some empty area it's always a good idea to move the legend in the plotting area thus cutting away the margins.  



[post]: http://www.b-eye-network.com/view/2468
[grif]: http://demographer.com/dsitl/08-cleveland-dot-plots/
[wilk]: https://serialmentor.com/dataviz/visualizing-amounts.html#dot-plots-and-heatmaps
[heal]: https://socviz.co/workgeoms.html#continuous-variables-by-group-or-category
[geoj]: https://doi.org/10.1007/s10708-018-9953-5
[wp]: https://ikashnitsky.github.io/www.nidi.nl/shared/content/output/papers/nidi-wp-2014-14.pdf
[gist]: https://gist.github.com/ikashnitsky/2f3e2b2af6f50911bb775bbce6eb0fb8




[f1]: https://ikashnitsky.github.io/images/190719/examples.png
[f2]: https://ikashnitsky.github.io/images/190719/two-figures.png
[f3]: https://ikashnitsky.github.io/images/190719/one-figure.png