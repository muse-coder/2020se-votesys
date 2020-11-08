"use strict";

let baseVoteForm = {
    data: function () {
        return {
            form: {
                sno: "",
                password: ""
            }
        };
    },
    methods: {
        submit: function () {
            if (this.form.sno === "" || this.form.password === "") {
                alert("请输入学号和密码");
                return;
            }
            this.$emit("submit", this.form);
        }
    },
    template: `
        <div class="word">
            <p>
                <label for="sno">学号</label>
                <input type="text" name="sno" v-model="form.sno">
            </p>
            <p>
                <label for="password">密码</label>
                <input type="password" name="password" v-model="form.password">
            </p>
            <button class="button" type="button" @click="submit">投票</button>
        </div>
    `
};