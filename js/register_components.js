import Vue from "vue";

// Components
import ReHeader from "@/components/Layout/Header.vue";
import ReLoading from "@/components/Loading.vue";
import ReContainerToast from "@/components/ContainerToast.vue";
Vue.component("re-header", ReHeader);
Vue.component("re-loading", ReLoading);
Vue.component("re-container-toast", ReContainerToast);

import L from "@/views/Properties/List.vue";
import D from "@/views/Properties/CreateOrEdit.vue";
import A from "@/views/Banners/List.vue";

Vue.component("re-list-properties", L);
Vue.component("re-create-or-edit-properties", D);
Vue.component("re-list-banners", A);

// Views
// Propetites
// Vue.component("re-list-properties", () =>
//   import(
//     /* webpackChunkName: "list-properites" */ "@/views/Properties/List.vue"
//   ),
// );
// Vue.component("re-create-or-edit-properties", () =>
//   import(
//     /* webpackChunkName: "create-or-edit-properites" */ "@/views/Properties/CreateOrEdit.vue"
//   ),
// );
// // Banners
// Vue.component("re-list-banners", () =>
//   import(/* webpackChunkName: "list-banners" */ "@/views/Banners/List.vue"),
// );
