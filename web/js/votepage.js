"use strict";

let vm = new Vue(
    {
        el: "#vm",
        components: {
            "base-group-info": baseGroupInfo,
            "base-vote-form": baseVoteForm
        },
        data: {
            groups: [],
            test: {}
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
            vote: function (sno, password) {
                let postData = { id: sno, password: password, vote: [] };
                for (let g of this.groups) {
                    if (g.checked)
                        postData.vote.push({ grpNum: g.id.toString(), cnt: "1" });
                }
                if (postData.vote.length > 0) {
                    $.post(
                        "",
                        postData,
                    );
                }
            },
            loadData: function () {
                $.getJSON(
                    "test.json",
                    function (data) {
                        vm.groups = data;
                        for (let g of vm.groups) {
                            g.checked = false;
                        }
                    }
                );
            }
        },
        created: function () {
            this.loadData();
        }
    }
);