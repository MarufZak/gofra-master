window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
        let burger = document.querySelector('.burger-container'),
            dropdown = document.querySelector('.dropdown');

        burger.addEventListener('click', function () {
            dropdown.classList.toggle('menu-opened');
            document.body.classList.toggle('lock');
        })

        let shareWidgies = document.querySelectorAll('.share-widget:not(.full) .share-widget-sub');
        shareWidgies.forEach(el => {
            el.addEventListener('click', function () {
                if (this.classList.contains('flipped')) {
                    this.classList.remove('flipped');
                } else {
                    this.classList.add('flipped');
                }
            });
        });

        let extra = document.querySelector('.extra');
        let nav = document.querySelector('.nav');
        if (window.innerWidth <= 767) {
            let footer = document.querySelector('.footer');
            let fixedWidget = document.querySelector('.share-widget');
            window.addEventListener('scroll', () => {
                let bodyHeight = document.body.scrollHeight;
                let footerHeight = footer.scrollHeight;
                let widgetRemovePosition = bodyHeight - footerHeight - window.innerHeight;
                if (window.scrollY >= widgetRemovePosition) {
                    console.log(1);
                    fixedWidget.style.right = '-100%';
                } else {
                    console.log(2);
                    fixedWidget.style.right = 0;
                }
            });
        } else if (window.innerWidth > 767) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    extra.classList.add('remove');
                    nav.classList.add('top');
                } else {
                    extra.classList.remove('remove');
                    nav.classList.remove('top');
                }
            })
        }

        new WOW().init();
    }, 500);
}