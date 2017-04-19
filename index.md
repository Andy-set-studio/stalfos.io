---
layout: documentation-post
hidden_title: Stalfos home page 
title: About Stalfos
---

Stalfos is an open-source, skeletal front-end development starter kit. It provides you with a solid starting-point for working with HTML, Sass and JavaScript. It also provides tools for working with images, fonts and SVG.

Along with being a useful starter kit, Stalfos is completely modifiable and extendable, which allows you to use it to create a powerful front-end development workflow. 

One reason for this is that the beating heart of Stalfos is [Gulp](http://gulpjs.com/), which provides a modular task based processing system that can be extended as you see fit. Stalfos provides a Gulp setup that will process your front-end assets to a decent production ready standard from the word <del>gulp</del> go!

Out of the box, Stalfos gives you:

- An SCSS based collection of helpers, components and layouts in a modular orientated project structure
- A JavaScript project structure with some little helpers included 
- A [Nunjucks](https://mozilla.github.io/nunjucks/) based HTML template building system 
- Automated SVG processing  

## Getting Started

It's recommended that you use Stalfos as a starting point and not as a traditional framework. 

The most straightforward way to get it running is to:

1. Open your terminal at `{your project directory}`
2. Run the following command: 
    <code class="is-block">
    git clone https://github.com/hankchizljaw/stalfos.git stalfos_tmp && mv stalfos_tmp/front-end front-end && rm -rf stalfos_tmp && cd front-end
    </code>
3. This will clone the latest copy of Stalfos into a `front-end` directory for you. It will then move you to that directory
4. Run `npm install` to install the required dependencies
5. After `npm` has finished installing the dependancies that Stalfos needs, run `gulp serve`. More info about the gulp commands can be found [here](#gulp-commands)
6. Visit `http://localhost:8003` in your browser
7. You should see your *almost* blank start page!

Now you've got yourself the basic kit running, let's delve into it a bit deeper.

<small>**Note**: You can also use [Yarn](https://yarnpkg.com/en/) to work with Stalfos.</small>

## Project Data

In the `front-end` directory of your project, you will see `data.json`. This JSON data is passed through to your HTML templates at compile-time via [Nunjucks](#html-nunjucks). This allows you to set data and access it to help build your markup system. 

This data can be as small or large as you like. By default you have the following set for you: 

```json
{% include samples/project-data/default-data.json %}
```

### Usage Example

If you wanted to build a navigation element in your `site-head.html` partial, you could do something like this.

#### data.json

```json
{% include samples/project-data/data.json %}
```

#### site-head.html

```html
{% include samples/project-data/site-head.html %}
```

## Gulp Commands

### Default

The default command will trigger [serve](#serve). Trigger `default` by running `gulp` in your terminal.

### Serve

This task compiles all dynamic assets into a static website, then serves it up on `http://localhost:8003` for you. It has livereload running, so any changes you make to your project files will refresh your browser automatically. 

Serve is the typical command you'd use while building static HTML, CSS and JavaScript templates, or if you were building a static website. 

Trigger serve by running `gulp serve` in your terminal.

### Watch 

This task compiles your assets in the same manner as [serve](#serve), but sends them over to your project directory, which is defined in `gulpfile.js` by modifying the `WEBSITE_PATH` variable. There are also CSS, JavaScript, font and image paths that are prefixed with `WEBSITE_` which can be modified too*. 

The task will automatically update these website assets whenever you update one of your `front-end` files. At the moment, it won't refresh your browser though.

Watch is the typical command you'd use while implementing your front-end to a server driven project. 

Trigger watch by running `gulp watch` in your terminal.

*<small>more info can be learned about this in the [gulp structure section below](#gulp-file-structure).</small>

## Gulp File Structure

The gulp file is split into 3 main sections which are: 

1. `MODULES`: The required NPM modules the makeup the engine of the gulp file. Every declaration here is referenced in `package.json` which is what NPM uses to provide you with the correct modules
2. `GLOBAL CONSTS`: These global constants allow you to configure the gulp file with confidence that your changes will be made safely 
3. `TASKS`: The collection of tasks that do all the hard work for you. The smaller tasks can also be run in your terminal, but are mainly there to work in unison with the other tasks to power either `gulp-serve` or `gulp-watch`

* TOC
{:toc}
{: .is-hidden--text.js-page__table-of-contents-source }
