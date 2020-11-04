import { FunctionalComponent } from 'vue';
declare const _default: {
    components: {
        NavBarLinks: import("vue").ComponentOptions;
        SideBarItem: FunctionalComponent<{
            item: ResolvedSidebarItem;
        }, {}>;
    };
    setup(): {
        items: import("vue").ComputedRef<ResolvedSidebar | undefined>;
    };
};
export default _default;
declare type ResolvedSidebar = ResolvedSidebarItem[];
interface ResolvedSidebarItem {
    text: string;
    link?: string;
    isGroup?: boolean;
    children?: ResolvedSidebarItem[];
}
