## Eleventy Card
#### A starter project for photographer/artist showing their work and blog randomly
#### [eleventy-card.netlify.app](https://eleventy-card.netlify.app/)
---

Powered by

![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)![Bulma](https://img.shields.io/badge/bulma-00D0B1?style=for-the-badge&logo=bulma&logoColor=white)

[![Netlify Status](https://api.netlify.com/api/v1/badges/d32e682c-0084-4b0e-96e3-286b816a5033/deploy-status)](https://app.netlify.com/sites/eleventy-card/deploys)

### Basic Info
Clone this repo
```
git clone https://github.com/sira313/eleventy-card-bulma/
```
Install modules
```
npm install
```
Run to your localhost 
```
npm run
```

#### Menu
There are 2 menus (for indexing post, not a single page) we created by default:
- Photos
- Blog

So if you wanted to create another one, maybe [this tutorial](https://www.youtube.com/watch?v=kzf9A9tkkl4) will help.
#### Layout
There is 3 layouts in [/_includes](/_includes/):
- [/_includes/layout.html](/_includes/layout.html) is the main layout called in other layout frontmatter.
- [/_includes/blog.html](/_includes/blog.html) is for [blog post layout](/blog/posts/). It's called in blog [post.json](/blog/posts/posts.json).
- [/_includes/photos.html](/_includes/photos.html) is for [photos post layout](/photos/). It's called in [photos.json](/photos/photos.json).
#### Index
There is 3 indexs in this project
- [/index.html](/index.html) where you describe your own business. Basic knowledge of HTML and CSS needed here.
- [/photos.html](/photos.html) where you store all your photos.
- [/blog.html](/blog.html) where you write anything.
#### Post
Use strip instead of space for post name file.
##### Photos
Post a work using markdown in [/photos/post](/photos/post/) directory.
##### Blog
Write your blog using markdown in [/blog/post](/blog/posts/) directory.
#### Asset
All asset are in [/asset](/asset/) directory and called in the frontmatter.
