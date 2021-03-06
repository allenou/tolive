import './styles/vars.css';
import './styles/layout.css';
import './styles/code.css';
import './styles/custom-blocks.css';
import Layout from './Layout.vue';
import NotFound from './NotFound.vue';
const theme = {
    Layout,
    NotFound,
    enhanceApp({ app, router, siteData }) {
        // console.log(app)
        // console.log(router)
        // console.log(siteData)
        // app is the Vue 3 app instance from createApp()
        // router is VitePress' custom router (see `lib/app/router.js`)
        // siteData is a ref of current site-level metadata.
    }
};
export default theme;
