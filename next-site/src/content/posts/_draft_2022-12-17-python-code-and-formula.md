---
layout: article
title: Code and math
image:
  teaser: 20221204-chatgpt3-coref-resolution/teaser.png
---

​
Here we play with Python code and math.


## Code and math

```python
import json
import openai

# replace with your path 
PATH_TO_SCRT_JSON = '<path_to_open_ai_key>.json'

with open(PATH_TO_SCRT_JSON) as f:
    openai.api_key = json.load(f)['key'] 
```






