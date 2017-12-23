export default {
  install(Vue, options) {
    Vue.directive('modular', {
      bind(el, binding, vnode) {
    
        if (el.tagName.toLowerCase() === 'form')
          el.addEventListener('submit', event => {
            event.preventDefault()
            if (
              vnode.componentInstance
              && typeof vnode.componentInstance.validate === 'function'
            ) {
              if (vnode.componentInstance.validate())
                vnode.context.$emit('submit', vnode.context.model)
            }
            else vnode.context.$emit('submit', vnode.context.model)
          })
        else
          throw 'v-modular directive can only be applied to a form element'
      }
    })
  }
}