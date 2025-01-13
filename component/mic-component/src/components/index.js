import button from "./button.vue";

if (!window.share) {
  window.share = {};
}

window.share[button.name] = button;
