new Vue({
    el: '#kcalculator',
    data: {
        items: [
        {
            id: 0,
            name: 'Kebab',
            kcal: 1000,
            price: 15,
            from: 'Noor',
        },
        {
            id: 1,
            name: 'Quritto',
            kcal: 650,
            price: 14,
            from: 'KFC',
        },
    ]
    },
    methods: {
        enter_data: function () {
            alert('test')
        }
    }
})