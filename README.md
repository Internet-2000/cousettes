# i2k static starter

Tools we use

* [11ty static site generator](https://www.11ty.dev/) 
* [Silex website builder](https://www.silex.me)
* [forestry headless CMS](https://forestry.io/)
* [snipcart e-commerce](https://snipcart.com/)
* github pages and github actions

## local installation

```
$ nvm i
$ npm i
$ npm run build
```

## build and deploy

Useful env vars on the build server

* `URL` optional website URL
* `BASE_URL` optional base url
* `DEPLOY_TOKEN` for deployment to branch `gh-pages`
