new Vue({
    el: '#app',
    render: function(createElement){
        return createElement(MyButton,{
            attrs:{
                href: 'https://vuejs.org/'
            },
            props:{
                tag: 'a'
            }
        , 'anchor'})
    }
})