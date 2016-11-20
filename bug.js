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
        console.log('Start clicked');
        R.setHTML('call AJAX, please wait....');
        console.log('Will show loading panel');
        ov.show();
        console.log('Will call ajax');
        getAjaxResult();
        console.log('Click handler done');
    });
});
