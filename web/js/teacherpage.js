"use strict";

let vm = new Vue(
    {
        el: "#vm",
        components: {
            "base-group-info": baseGroupInfo
        },
        data: {
            groups: []
        },
        computed: {
            maxPoll: function () {
                let m = 0;
                for (let g of this.groups) {
                    if (g.poll > m) m = g.poll;
                }
                return m;
            }
        },
        methods: {
            loadData: function () {
                $.getJSON(
                    "test2.json",
                    function (data) {
                        vm.groups = data;
                    }
                );
            }
        },
        created: function () {
            this.loadData();
        }
    }
);