import m from 'mithril'

const Sidebar = {
  view: () => {
    return m('.navs__bar', [
      m('ul.navs', [
        m('li', m('a', { href: '#!/home' }, 'Home')),
        m('li', m('a', { href: '#!/programs'}, 'Programs'))
      ])
    ])
  }
}

export default Sidebar
