<template>
    <form novalidate>
        <p :class="alertValidation">{{ validMessage}}</p>
        <textarea @input="onInput" :class="textboxValidation"></textarea>
    </form>
</template>

<script>
export default{
    data(){
        return { valid: false}
    },
    computed:{
        validMessage(){
            return this.valid ? '入力されています。':'入力されていません。'
        },
        alterValidation(){
            return this.valid ? this.alert.success : this.alert.error
        },
        textboxValidation(){
            return this.valid ? this.textbox.success : this.textbox.error
        }
    },
    methods:{
        isRequird(value){
            return value.length > 0
        },
        onInput(e){
            this.valid = this.isRequird(e.target.value)
        }
    }
}
</script>

<style module="alert">
.success{
    color: green;
}
.error{
    font-weight: bold;
    color: red;
}
</style>

<style module="textbox">
.success{
    border: solid 2px green;
}
.error{
    .border: solid 2px red;
}
</style>