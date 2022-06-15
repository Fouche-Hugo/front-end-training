const vm = Vue.createApp({
    data() {
        return {
            menuOn: false,
            email: '',
            cookiesAccepted: false,
            hamburgerMenuOn : false
        }
    },
    methods: {
        toggleMenu() {
            this.menuOn = !this.menuOn;
        },
        menuOff() {
            this.menuOn = false;
        },
        sendEmail() {
            if(this.email == '') {
                preventDefault();
            }
        },
        testScroll() {
            var scrolledDown = window.scrollY > 0;

            var cookies = document.querySelector("#cookies-container");

            if(scrolledDown && !cookies.classList.contains("visible")) {
                cookies.classList.add("visible");
                setTimeout(() => {
                    cookies.classList.add("in");
                }, 200);
            }
            else if(!scrolledDown && cookies.classList.contains("visible")) {
                cookies.classList.remove("in");
                setTimeout(() => {
                    cookies.classList.remove("visible");
                }, 1000);
            }
        },
        acceptCookies() {
            this.cookiesAccepted = true;
            window.removeEventListener('scroll', this.testScroll);
        },
        hamburgerButtonClick() {
            this.hamburgerMenuOn = !this.hamburgerMenuOn;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.testScroll);
        window.addEventListener('click', this.menuOff);
    }
})


vm.component('console-item', {
    props: ['title', 'content', 'src', 'price', 'price2', 'state'],
    data() {
        return {
            isHoveringGlobal: false,
            isHoveringImage: false,
            show: false
        }
    },
    template: `
        <a href="#">
            <div class="console-item" @mouseover="changeHover(true)" @mouseleave="changeHover(false)">
                <img :src="src + '1.jpg'" :alt="title" @mouseover="changeImage(true)" @mouseleave="changeImage(false)" v-if="!isHoveringImage" :class="{show: !show}">
                <img :src="src + '2.webp'" :alt="title" @mouseover="changeImage(true)" @mouseleave="changeImage(false)" v-if="isHoveringImage" :class="{show: show}">
                <div class="console-item-state pre-order" v-if="state == 'pre-order'">PRE-ORDER</div>
                <div class="console-item-state in-stock" v-else>IN STOCK</div>
                <div class="console-item-info">
                    <h3>{{ title }}</h3>
                    <div class="console-item-price-container" v-if="!isHoveringGlobal">
                        <span class="console-item-priceReduced" v-if="price != ''">{{ price }} $US </span>
                        <span class="console-item-price line" v-if="price !=''">{{ price2 }} $US</span>
                        <span class="console-item-price" v-else>{{ price2 }} $US</span>
                    </div>
                    <div class="console-item-shop-button-container" v-else>
                        <button class="console-item-shop-button">SHOP NOW</button>
                    </div>
                </div>
                <p>{{ content }}</p>
            </div>
        </a>
    `,
    methods: {
        changeHover(etat) {
            this.isHoveringGlobal = etat;
        },
        changeImage(etat) {
            this.isHoveringImage = etat;
            setTimeout(this.changeOpacity.bind(null, etat), 100);
        },
        changeOpacity(etat) {
            this.show = etat;
        }
    }
});

vm.component('module-item', {
    props: ['title', 'src', 'price', 'state', 'nbimages'],
    data() {
        return {
            isHoveringGlobal: false,
            isHoveringImage: false,
            show: false
        }
    },
    template: `
        <a href="#">
            <div class="module-item" @mouseover="changeHover(true)" @mouseleave="changeHover(false)">
                <div class="module-item-img-container">
                    <img :src="src + '1.jpg'" :alt="title" @mouseover="changeImage(true)" @mouseleave="changeImage(false)" v-if="!isHoveringImage && nbimages == '2'" :class="{show: !show}">
                    <img :src="src + '2.webp'" :alt="title" @mouseover="changeImage(true)" @mouseleave="changeImage(false)" v-if="isHoveringImage && nbimages =='2'" :class="{show: show}">
                    <img :src="src + '2.webp'" :alt="title" v-if="nbimages == '1'" :class="{show: true}">
                </div>
                <div class="module-item-state pre-order" v-if="state == 'pre-order'">PRE-ORDER</div>
                <div class="module-item-state in-stock" v-else-if="state == 'in-stock'">IN STOCK</div>
                <div class="module-item-info">
                    <h3>{{ title }}</h3>
                    <div class="module-item-price-container" v-if="!isHoveringGlobal">
                        <span class="module-item-price">{{ price }} $US </span>
                    </div>
                    <div class="module-item-shop-button-container" v-else>
                        <button class="module-item-shop-button">SHOP NOW</button>
                    </div>
                </div>
            </div>
        </a>
    `,
    methods: {
        changeHover(etat) {
            this.isHoveringGlobal = etat;
        },
        changeImage(etat) {
            this.isHoveringImage = etat;
            setTimeout(this.changeOpacity.bind(null, etat), 100);
        },
        changeOpacity(etat) {
            this.show = etat;
        }
    }
});

vm.mount('body');