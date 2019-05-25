import Vue from 'vue'
import Router from 'vue-router'
import pages from './pages'

import home from './pages/home'
import news from './pages/news'
import structure from './pages/structure'

import preSchool from './pages/institutions/preSchool'
import secondarySchool from './pages/institutions/secondarySchool'

import announce from './pages/announce'
import transparency from './pages/transparency'
import regulatory from './pages/activity/regulatory'
import certification from './pages/activity/certification'
import man from './pages/activity/man'
import contests from './pages/activity/contests'
import newSchool from './pages/activity/newSchool'
import externally from './pages/activity/externally'
import rights from './pages/activity/rights'
import feedback from './pages/feedback'

const routes = [];
const components = {
  home,
  news,
  structure,
  preSchool,
  secondarySchool,
  announce,
  transparency,
  regulatory,
  certification,
  man,
  contests,
  newSchool,
  externally,
  rights,
  feedback
};

const applyComponent = page => {
    if (page.path) {
      page.component = components[page.name];
      routes.push(page)
    } else {
      page.children.forEach(child => applyComponent(child))
    }
};

pages.forEach(page => applyComponent(page));
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes
})
