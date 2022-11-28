---
layout: article
title: "Easy image generation with OpenAI DALLE API"
image:
  teaser: 20221128-openai-dalle-image-generation/teaser.png
---

With the OpenAI beta-version of [image generation API](https://beta.openai.com/docs/guides/images/introduction) generating cool images for any purpose is made easier than ever. This also solves legal issues, no need to restrict yourself only to publicly available images. The price is \$0.02 per 1024x1024 image.

<div style="text-align:center"><img src="/images/20221128-openai-dalle-image-generation/beautiful_woman_in_a_sunset_unreal_engine.png"/></div>

The [tutorial](https://beta.openai.com/docs/guides/images/introduction) is easy to follow but still, here's mine.

First, install python PyPi package [openai](https://pypi.org/project/openai/). 


```bash
pip install openai
```

Then, create an [OpenAI account](https://beta.openai.com/signup) and an [OpenAI secret key](https://beta.openai.com/account/api-keys) 

<div style="text-align:center"><img src="/images/20221128-openai-dalle-image-generation/openai_secret_keys.png"/></div>


```python
import openai

# replace with your path 
PATH_TO_SCRT_JSON = '<path_to_open_ai_key>.json'

with open(PATH_TO_SCRT_JSON) as f:
    openai.api_key = json.load(f)['key']
```

Now you're set up and can generate images by changing text prompts and running the following snippet of code:
  
```python
PROMPT = "alice in the wonderland unreal engine" # change this
SIZE = "1024x1024" # "512x512" or "256x256" are options as well

response = openai.Image.create(
  prompt=PROMPT,
  n=1,
  size=SIZE
)

print(response['data'][0]['url'])
# this yields an URL like https://oaidalleapiprodscus.blob.core.windows.net/private/org-WUTFv00fIeQoKX1ut6ZAEiJQ/user-fptAMyDoo8NmAY7xDHFjb0AF...
```

Now paste the URL into your browser and enjoy the result.

<div style="text-align:center"><img src="/images/20221128-openai-dalle-image-generation/alice_in_the_wonderland.png"/></div>

Keep in mind that the price is \$0.02 per 1024x1024 image, not free but fairly low for modest usage. 

Here is another one for the prompt "snowboarding on Mars".

<div style="text-align:center"><img src="/images/20221128-openai-dalle-image-generation/mars_snowboarding.png"/></div>


