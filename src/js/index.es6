import m from 'mithril'
import domready from 'domready'
import Sidebar from './components/sidebar'
import Home from './components/home'
import Programs from './components/programs'

const root = document.body

const components = {
  // 'indicator-js' : Indicator,
  'sidebar-js': Sidebar,
}

const routes = {
  '/home': Home,
  '/programs': Programs
}

domready(() => {
  Object.keys(components).map(id => {
    const dom = document.getElementById(id)
    dom && m.mount(dom, components[id])
  })

  const container = document.getElementById('container-js')
  console.log(container)
  m.route(container, '/home', routes)
})
