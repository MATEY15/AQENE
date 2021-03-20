function sidebarMenuShow() {
    $('.menu-sidebar-toggle').on("click", function(){
        $(this).toggleClass('menu-sidebar-toggle--active');
        $('.menu-sidebar__mobile-hide').slideToggle(300);
    })
}
sidebarMenuShow();