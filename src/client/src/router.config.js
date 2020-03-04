import HelloWorld from './components/HelloWorld.vue';
import Welcome from './components/Welcome.vue';
export default {
    mode: "history",
    routes: [
        {
            path: "/", component: HelloWorld
        },
        {
            path: "/welcome", component: Welcome
        }
    ]
}