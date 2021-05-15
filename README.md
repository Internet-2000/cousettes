# i2k static starter

Tools we use

* [11ty static site generator](https://www.11ty.dev/) 
* [Silex website builder](https://www.silex.me)
* [forestry headless CMS](https://forestry.io/)
* [snipcart e-commerce](https://snipcart.com/)
* github pages and github actions

todo

* [ ] BASE_URL should start with a `/`
* [ ] config editable.html with 11ty
* [ ] remove `_includes/tags.liquid` because it can be done with `collection`
* [ ] responsive images

## starter config

In this repo I have setup by default

* 11ty
* Forestry
* Silex

### 11ty

These plugins are preconfigured:

* [sitemap](https://github.com/quasibit/eleventy-plugin-sitemap)
* [splide](https://splidejs.com/) (slideshow)

Here are the available collections:

* `collections.page` which take the content of `content/pages`
* `collections.post` which take the content of `content/posts`
* `collections.product` which take the content of `content/products`
* `collections.categories` which is an array of all the categories found in all your posts and pages and products ([e.g. the categories in this post](./content/posts/2018-01-01-post1.md))

Here are the available includes:

* `collection`: display a list of links, to posts, categories or other collection, this will be useful for navigation and tag cloud, [see the comment here](./_includes/collection.liquid)
* `pagination`: to be documented
* `slideshow`: insert a slideshow which shows the images of the `images` key in the page front matter, [see the comment here](./_includes/slideshow.liquid)
* `image`: display an image, [see the comment here](./_includes/image.liquid)
* `tags`: insert a list of page/post/product filtered by category, [see the comment here](./_includes/tags.liquid)

### Forestry

Import this repo in forestry and you will be able to edit pages, posts and products


## host on github pages

[This repository](https://github.com/lexoyo/11ty-boilerplate) is a template you can use to create a site with [11ty](https://11ty.dev) and [Silex website builder](https://www.silex.me)

It conains an action to deploy on github pages automatically

Here is how to start:

1. Fork [this repository](https://github.com/lexoyo/11ty-boilerplate) or click "use this template" (/!\ be sure to select "Include all branches")
1. Create a [deploy token here](https://github.com/settings/tokens) with the access write `public_repo`
1. [In the settings of the website, "secret" section, create a new secret](./settings/secrets/actions/new), call it `DEPLOY_TOKEN` and paste the token as its value 
1. [In the settings of the website, "secret" section, create a new secret](./settings/secrets/actions/new), call it `BASE_URL` and set its value to the name of your repository prepended with a `/` (e.g. `/11ty-boilerplate`)
1. Create a website with [Stastic designer](https://design.stastic.net/)
1. Publish your site from Stastic designer to github as 11ty layout
1. Create a file like [test.md](./test.md), add `layout: YOUR PAGE NAME IN STASTIC`


## local installation

Check the minimum version of node in [.nvmrc](./.nvmrc) or use `nvm i`

```
$ npm i
$ npm run build
```

## build and deploy

Useful env vars on the build server

* `URL` optional website URL
* `BASE_URL` optional base url, when defined it should start with a `/`
* `DEPLOY_TOKEN` for deployment to branch `gh-pages`

## edit templates

Use the "stastic" fork of Silex which contains the 11ty components by default

Links:

* stastic latest version is [available online here](https://design.stastic.net/)
* [stastic source code](https://github.com/lexoyo/stastic-designer)
* [Silex documentation](https://github.com/silexlabs/Silex/wiki/)
* [Silex forums to ask for help](https://github.com/silexlabs/Silex/issues/)

In case the latest version will not work as expected, the version of stastic used for this website is [v2.7.13 which can be downloaded here](https://github.com/lexoyo/stastic-designer/releases/tag/v2.7.12). There is a downloadable app to work offline with your local files, or you can host it somewhere (nodejs) to work with github files.


