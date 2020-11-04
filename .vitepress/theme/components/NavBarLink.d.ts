import { PropType } from 'vue';
import { DefaultTheme } from '../config';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            item: DefaultTheme.NavItemWithLink;
        } & {} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
        $attrs: Record<string, unknown>;
        $refs: Record<string, unknown>;
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, string>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, string>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            item: DefaultTheme.NavItemWithLink;
        } & {}, {
            classes: import("vue").ComputedRef<{
                active: boolean;
                external: boolean;
            }>;
            isActiveLink: import("vue").ComputedRef<boolean>;
            isExternalLink: import("vue").ComputedRef<boolean>;
            href: import("vue").ComputedRef<string>;
            target: import("vue").ComputedRef<string>;
            rel: import("vue").ComputedRef<string>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>;
        $forceUpdate: import("vue").ReactiveEffect<any>;
        $nextTick: typeof import("vue").nextTick;
        $watch: (this: import("vue").ComponentInternalInstance, source: TimerHandler, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined) => import("vue").WatchStopHandle;
    } & {
        item: DefaultTheme.NavItemWithLink;
    } & {} & import("vue").ShallowUnwrapRef<{
        classes: import("vue").ComputedRef<{
            active: boolean;
            external: boolean;
        }>;
        isActiveLink: import("vue").ComputedRef<boolean>;
        isExternalLink: import("vue").ComputedRef<boolean>;
        href: import("vue").ComputedRef<string>;
        target: import("vue").ComputedRef<string>;
        rel: import("vue").ComputedRef<string>;
    }> & {} & import("vue").ComponentCustomProperties & Readonly<{
        item: DefaultTheme.NavItemWithLink;
    } & {}>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    item: DefaultTheme.NavItemWithLink;
} & {}>, {
    classes: import("vue").ComputedRef<{
        active: boolean;
        external: boolean;
    }>;
    isActiveLink: import("vue").ComputedRef<boolean>;
    isExternalLink: import("vue").ComputedRef<boolean>;
    href: import("vue").ComputedRef<string>;
    target: import("vue").ComputedRef<string>;
    rel: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string> & {
    props: {
        item: {
            type: PropType<DefaultTheme.NavItemWithLink>;
            required: true;
        };
    } & ThisType<void>;
} & ThisType<import("vue").ComponentPublicInstance<Readonly<{
    item: DefaultTheme.NavItemWithLink;
} & {}>, {
    classes: import("vue").ComputedRef<{
        active: boolean;
        external: boolean;
    }>;
    isActiveLink: import("vue").ComputedRef<boolean>;
    isExternalLink: import("vue").ComputedRef<boolean>;
    href: import("vue").ComputedRef<string>;
    target: import("vue").ComputedRef<string>;
    rel: import("vue").ComputedRef<string>;
}, {}, {}, {}, Record<string, any>, Readonly<{
    item: DefaultTheme.NavItemWithLink;
} & {}>, import("vue").ComponentOptionsBase<Readonly<{
    item: DefaultTheme.NavItemWithLink;
} & {}>, {
    classes: import("vue").ComputedRef<{
        active: boolean;
        external: boolean;
    }>;
    isActiveLink: import("vue").ComputedRef<boolean>;
    isExternalLink: import("vue").ComputedRef<boolean>;
    href: import("vue").ComputedRef<string>;
    target: import("vue").ComputedRef<string>;
    rel: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>>;
export default _default;
