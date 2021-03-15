function sidebarMenuShow() {
    $('.menu-sidebar-toggle').on("click", function(){
        $('.menu-sidebar__mobile-hide').slideToggle(300);
    })
}
sidebarMenuShow();