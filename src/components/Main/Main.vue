<template>
  <div>
    <mv-header></mv-header>
    <h3>Skip to content
      This repository
      Search
      Pull requests
      Issues
      Marketplace
      Explore
      @cosmologist-lys
      Sign out
      Watch 124
      Star 3,181  Fork 332 JosephusPaye/Keen-UI
      Code  Issues 88  Pull requests 11  Projects 0  Insights
      A lightweight collection of essential UI components written with Vue and inspired by Material Design https://josephuspaye.github.io/Keen-UI/
      vue
      material-design
      ui
      components
      javascript
      345 commits
      4 branches
      11 releases
      7 contributors
      MIT
      JavaScript 83.0%	 Vue 16.2%	 CSS 0.8%
      JavaScript	Vue	CSS
      Clone or download  Create new file Upload files Find file Branch: next New pull request
      Latest commit 48c172d  25 days ago @JosephusPaye  JosephusPaye Skip the "install" key when installing the components
      build	Fix issue merging with base webpack config	2 months ago
      dist	Add built files	4 months ago
      docs-src	Use system-font.css for the docs	a month ago
      docs	Add built files	4 months ago
      lib	Add built files	4 months ago
      src	Skip the "install" key when installing the components	25 days ago
      .babelrc	Use babel env preset	2 months ago
      .editorconfig	Add .editorconfig	2 years ago
      .eslintignore	Ignore dist folder	a year ago
      .eslintrc.js	Rewrite all components to support Vue 2 and have a more consistent API	a year ago
      .gitignore	Add _reminder folder to .gitignore	4 months ago
      CHANGELOG.md	Remove system-font.css - should be used per-project, if necessary	a month ago
      CONTRIBUTING.md	Add guideline for pull request branch	10 months ago
      Customization.md	Refactor global prop config system, rewrite Customization guide	2 months ago
      LICENCE	Rewrite all components to support Vue 2 and have a more consistent API	a year ago
      README.md	Simplify README	4 months ago
      bower.json	Update build dependencies, update package meta data	a year ago
      package.json	Use babel env preset	2 months ago
      yarn.lock	Use babel env preset	2 months ago
      README.md
      Keen UI
      Keen UI is a lightweight Vue.js UI library with a simple API. The design is inspired by Google's Material Design. However, Keen UI is not meant to be a full implementation of the Material Design spec.

      Keen UI is not a CSS framework. As such, it doesn't include a grid system, typography styles, etc. Instead, the focus is on interactive components that require Javascript.

      Documentation and demo
      http://josephuspaye.github.io/Keen-UI/

      Requirements
      Vue.js (^v2.1.4) - use keen-ui@0.8.9 for Vue 1.x support.
      Optional

      Roboto font (Normal 400, Medium 500)
      Material Icons font
      Browser support
      IE 10+ (due to Flexbox support).

      Installation
      npm install keen-ui --save
      Usage
      CSS Reset
      Before using Keen UI, ensure that the following CSS resets are applied to your site.

      *,
      *::before,
      *::after {
      box-sizing: border-box;
      }

      html {
      font-size: 100%;
      }
      You can add the reset to your stylesheet (before other styles). If you are using a CSS framework, check to see if the framework already includes a reset (most CSS frameworks do). The root font size can be customized to globally resize the components.

      ES6
      Use as a plugin (registers all components with Vue globally):

      import Vue from 'vue';
      import KeenUI from 'keen-ui';
      import 'keen-ui/dist/keen-ui.css';

      Vue.use(KeenUI);

      new Vue({
      components: {
      // all Keen UI components already registered
      }
      });
      Use individual components:

      import Vue from 'vue';
      import { UiAlert, UiButton } from 'keen-ui';

      new Vue({
      components: {
      UiAlert,
      UiButton
      }
      });
      Globals (script tag)
      First, add a stylesheet link to the Keen UI CSS file in dist/keen-ui.min.css. Then, add a script tag pointing to dist/keen-ui.min.js after adding Vue.

      If Keen UI detects Vue globally, all the components will be registered automatically. The components will also be made available globally via window.KeenUI.

      Example:

      Using standalone components
      Each component has been built into a standalone file with CSS included. You can use individual standalone components without importing the rest of the library. The standalone components are located in the lib/ folder.

      NOTE: Standalone component files each contain their own dependencies and a lot them contain overlapping dependencies. As such, using multiple standalone files could significantly increase the size of your bundle due to duplicate code, and is not recommended unless you are using only a handful of components.

      ES6
      import Vue from 'vue';
      import 'keen-ui/src/bootstrap'; // Required when using standlone components, should be imported only once in your project
      import UiButton from 'keen-ui/lib/UiButton';

      new Vue({
      components: {
      UiButton
      }
      });
      Todo
      Test browser compatibility (IE 10+)
      Chrome, IE, Edge, Firefox on Windows
      Chrome, Safari, Firefox on macOS
      Add new components
      Tooltip
      Slider
      Select
      Datepicker
      File upload
      Add customization guide
      Add automated tests
      Licence
      Keen UI is open source and released under the MIT Licence.

      Copyright (c) 2016-2017 Josephus Paye II.

      PS: I would love to know how you're using Keen UI. Tweet to me at @JosephusPaye.

      © 2018 GitHub, Inc.
      Terms
      Privacy
      Security
      Status
      Help
      Contact GitHub
      API
      Training
      Shop
      Blog
      About</h3>
    <button @click="clearStorage">clear storage</button>
  </div>
</template>
<script>
  import * as localStore from '@/handler/LocalStore.js';

  import mvHeader from '../Header/Header.vue'

  export default{
    name: 'main-vue',
    methods: {
      clearStorage(){
      	const commit = this.$store.dispatch;
        localStore.clear('sess',commit);
      }
    },
    components:{
      mvHeader
    }
  }
</script>
<style></style>
