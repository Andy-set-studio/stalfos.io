---
layout: documentation-post
hidden_title: Stalfos home page 
title: About Stalfos
---

Stalfos is an open-source, skeletal front-end development starter kit. It provides a solid starting-point and framework for working with HTML, CSS and JavaScript. It also provides tools for working with images, fonts and SVG.

Along with being a useful starter kit, Stalfos is completely modifiable and extendable which allows you to use it to create a powerful front-end development workflow. This is mainly because the core of Stalfos is [Gulp](http://gulpjs.com/) which provides a modular task based processing system.

Out of the box, Stalfos gives you:

- A SCSS based collection of helpers and a modular orientated project structure
- A JS / jQuery based project structure with some little helpers included 
- A [Nunjucks](https://mozilla.github.io/nunjucks/) based HTML template building system 

## Getting Started

It's recommended that you use Stalfos as a starting point and not as a framework. The most straightforward way to get it running is to:

1.  Go to the [Stalfos Github repository](https://github.com/hankchizljaw/stalfos) 
2.  Download the latest version as a ZIP
3.  Copy the contents of the extracted ZIP into your project file
4.  Open you terminal and `cd` to `{your project directory}/front-end/`
5.  Run `npm install`
6.  After NPM has finished installing the dependancies that Stalfos needs, run `gulp serve`. More info about the gulp commands can be found [here](#gulp-commands)
7.  Visit `http://localhost:8003` in your browser
8.  You should see your *almost* blank start page!

Now you've got yourself the basic kit running, let's delve into it a bit deeper.


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

This task compiles all dynamic assets into a static website, then serves it up on `localhost` for you. It has livereload running, so any changes you make to your project files will refresh your browser automatically for you. 

Serve is the typical command you'd use while building static HTML, CSS and JS templates or if you were building a static website. 

Trigger serve by running `gulp serve` in your terminal.

### Watch 

The watch task (formerly called 'website') compiles your assets in the same manner as [serve](#serve), but sends them over to your project directory, which is defined in `gulpfile.js` by modifying the `WEBSITE_PATH` variable. There are also CSS, script and image paths that are prefixed with `WEBSITE_` which can be modified too*. 

The task will automatically update these website assets whenever you update one of your `front-end` files. At the moment, it won't refresh your browser though.

Watch is the typical command you'd use while implementing your front-end to a server driven project. 

Trigger watch by running `gulp watch` in your terminal.

*<small>more info can be learned about this in the [gulp structure section below](#gulp-file-structure).</small>

## Gulp File Structure

The gulp file is split into 3 main sections which are: 

1. `MODULES`: The required NPM modules the makeup the engine of the gulp file. Every declaration here is referenced in `package.json` which is what NPM uses to provide you with the correct modules
2. `GLOBAL VARS`: These global vars / constants allow you to configure the gulp file with confidence that your changes will be made safely 
3. `TASKS`: The collection of tasks that do all the hard work for you. The smaller tasks can also be run in your terminal, but are mainly there to work in unison with the other tasks to power either `gulp-serve` or `gulp-watch`

* TOC
{:toc}
{: .is-hidden--text.js-page__table-of-contents-source }
