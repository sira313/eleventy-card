// @ts-check

/**
 * @typedef { '-b' | '-p' } Post_Type
 */

const { writeFileSync } = require("fs");
const { resolve } = require("path");

const type = /** @type {Post_Type} */ (process.argv[2]);
const title = process.argv.slice(3).join(" ");

if (!type) {
	console.error(`⚠ type is required. Either use '-b' or '-p'.\n`);
	process.exit(1);
}

if (!title) {
	console.error(`⚠ title is required\n`);
	process.exit(1);
}

if (!["-b", "-p"].includes(type)) {
	console.error(`⚠ type must be '-b' for blog or '-p' for photo\n`);
	process.exit(1);
}

/** @type {Record<Post_Type, string>} */
const post_dirs = { "-b": "./blog", "-p": "./photos" };

/** @type {Record<Post_Type, string>} */
const post_layouts = { "-b": "post-blog.html", "-p": "post-photos.html" };

const slug = title.toLocaleLowerCase().split(/\s+/g).slice(0, 5).join("-");
const post_file = resolve(post_dirs[type], slug + ".md");
const frontmatter = `---
layout: ${post_layouts[type]}
title: ${title.toLowerCase().replace(/(?:^|\s)\w/g, (m) => m.toUpperCase())}
keyword: TODO
cover: /asset/photos/
thumbnail: /asset/photos/thumbnail/
date: ${new Date().toLocaleDateString()}
tags: TODO
---

# TODO
`;

writeFileSync(post_file, frontmatter);

console.log(`✔ post created:`, post_file);
