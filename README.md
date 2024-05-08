## Eleventy Card
#### A starter project for photographer/artist showing their work and blog randomly
#### [eleventy-card.netlify.app](https://eleventy-card.netlify.app/) 
[![Netlify Status](https://api.netlify.com/api/v1/badges/d32e682c-0084-4b0e-96e3-286b816a5033/deploy-status)](https://app.netlify.com/sites/eleventy-card/deploys)

Powered by 

[![Eleventy](https://a11ybadges.com/badge?logo=eleventy)](https://www.11ty.dev/)[![Bulma](https://a11ybadges.com/badge?logo=bulma)](https://bulma.io/)[![Bulma](https://a11ybadges.com/badge?text=feathericons&badgeColor=white)](https://feathericons.com/)

---

### Basic Info
Clone this repo
```
git clone https://github.com/sira313/eleventy-card-bulma/
```
Use PNPM
```
npm install -g pnpm
```
Install modules
```
pnpm install
```
Run to your localhost 
```
pnpm start
```

#### Menu
There are 2 menus (for indexing post, not a single page) we created by default:
- Photos
- Blog

So if you wanted to create another one, maybe [this tutorial](https://www.youtube.com/watch?v=kzf9A9tkkl4) will help.
#### Layout
There are 3 layouts in [/_includes](/_includes/):
- [/_includes/layout.html](/_includes/layout.html) is the main layout called in other layout frontmatter.
- [/_includes/post-blog.html](/_includes/post-blog.html) is for blog post layout.
- [/_includes/post-photos.html](/_includes/post-photos.html) is photos post layout.
#### Index
There are 3 indexs in this project
- [/index.md](/index.md) where you describe your own business.
- [/photos/index.html](/photos/index.html) is the index of all your photos.
- [/blog/index.html](/blog/index.html) is the index of your blog.
#### Post
To create a post in `/blog` you need to
```
pnpm mkpost -b Your post title
```
It will create a markdown file in `/blog`.
And if you wanted to create a post in `/photos` you just need to
```
pnpm mkpost -p Your post title
```
#### Asset
All assets are in [/asset](/asset/) directory and called in the frontmatter.
#### Tips
Better use [Squoosh](https://squoosh.app/) to convert your pics to webp
