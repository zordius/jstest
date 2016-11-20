YUI().use('panel', function (Y) {
    var ov = new Y.Panel({
        visible: false,
        centered: true,
        modal: true,
        width: 200,
        headerContent: 'Now loading...',
        bodyContent: '<img src="loading.gif" />',
        zIndex: 10
    });
    var R = Y.one('#result');

    ov.render();

    Y.one('#start').on('click', function () {
        R.setHTML('call AJAX, please wait....');
        ov.show();
        getAjaxResult();
    });
});
