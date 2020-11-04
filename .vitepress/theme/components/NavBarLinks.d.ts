declare const _default: {
    components: {
        NavBarLink: import("vue").ComponentOptions;
        NavDropdownLink: import("vue").ComponentOptions;
    };
    setup(): {
        navData: any;
        repoInfo: import("vue").ComputedRef<{
            link: string;
            text: string;
        } | null>;
    };
};
export default _default;
