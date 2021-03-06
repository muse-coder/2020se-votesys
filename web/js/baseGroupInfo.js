"use strict";

let baseGroupInfo = {
    props: {
        "gid": Number,
        "poll": Number,
        "maxPoll": Number,
        "checked": Boolean,
        "hasDetail": Boolean,
        "hasCheckbox": Boolean
    },
    model: {
        prop: "checked",
        event: "checkbox-change"
    },
    data: function () {
        return {
            showDetail: false
        };
    },
    template: `
        <div class="word">
            <input
                class="checkbox"
                v-if="hasCheckbox"
                type="checkbox"
                :checked="checked"
                @change="$emit('checkbox-change', $event.target.checked)"
            >
            第 {{ gid }} 组
            <meter min="0" :max="maxPoll" :value="poll"></meter>
            {{ poll }} 票
            <button
                class="button"
                type="button"
                v-if="hasDetail"
                @click="showDetail = !showDetail"
            >
                详情
            </button>
            <slot v-if="hasDetail && showDetail"></slot>
        </div>
    `
};