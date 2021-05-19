import './public-path.js';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
let instance = null;

function render(props = {}) {
  const { container } = props;

  instance = createApp(App);
  instance.use(router);
  instance.mount(container ? container.querySelector("#app") : "#app");
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("%c ", "color: green;", "vue3.0 app bootstraped");
}

export async function mount(props) {
  render(props);
  instance.config.globalProperties.$onGlobalStateChange =
    props.onGlobalStateChange;
  instance.config.globalProperties.$setGlobalState = props.setGlobalState;
}

export async function unmount() {
  instance.unmount();
  instance._container.innerHTML = "";
  instance = null;
}