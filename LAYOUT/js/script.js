const app = Vue.createApp({
    data(){
        return {}
    }
});
app.component('app-nav',{
    template: `
        <nav class="bg-white d-flex justify-content-md-between align-items-md-center py-5 fixed w-100" style="z-index:999;">
            <a href="#" class="t-dark t-none mx-3 t-weight-800" style="font-size: 2em;">unipapa</a>
            <div class="mr-auto d-none d-md-block">
                <a href="#" class="t-dark d-block d-md-inline-block my-3 t-none mx-3">居家清潔</a>
                <a href="#" class="t-dark d-block d-md-inline-block my-3 t-none mx-3">防蚊防蟲</a>
                <a href="#" class="t-dark d-block d-md-inline-block my-3 t-none mx-3">電器製品</a>
                <a href="#" class="t-dark d-block d-md-inline-block my-3 t-none mx-3">雜貨日用品</a>
                <a href="#" class="t-dark d-block d-md-inline-block my-3 t-none mx-3">選物推薦</a>
            </div>
            <div class=" d-none d-md-block">
                <a href="#" class="t-dark d-block d-md-inline-block my-3 t-none mx-3"><i class="fas fa-search fa-lg"></i></a>
                <a href="#" class="t-dark d-block d-md-inline-block my-3 t-none mx-3"><i class="fas fa-shopping-cart fa-lg"></i></i></a>
                <a href="#" class="t-dark d-block d-md-inline-block my-3 t-none mx-3">登入</a>
            </div>
            <a href="#" class="absolute t-dark d-md-none d-block" style="top: 35px;right: 30px;"><i class="fas fa-bars fa-2x"></i></a>
        </nav>
    `
})
app.component('app-header',{
    template:`<header class="relative">
    <a href="#" class="d-block">
        <img src="images/banner-1.jpg" alt="" class="w-100 fade-in-0">
        <div class="absolute w-75 t-center">
            <div class="t-blue t-weight-500 fade-in-1">好評熱賣款</div>
            <h2 class="t-dark mt-2 mb-4 t-weight-900 fade-in-2">有序延長線</h2>
            <p class="t-dark fade-in-3">加大孔距，隨處固定，讓空間井然有序</p>
        </div>
    </a>
</header>`
})
app.mount('#app')