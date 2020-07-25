---
layout: default
title: tag page
pagination:
  data: collections.generatedTags
  size: 1
  alias: generatedTags
permalink: 'tags/{{generatedTags | slug}}/'
---

# {{generatedTags}}

Test content for this tag

{% include tags, tag: generatedTags %}


