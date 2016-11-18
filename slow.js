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
    var loaded;

    ov.render();

    Y.one('#start').on('click', function () {
        R.setHTML('call AJAX, please wait....');
        ov.show();

        if (!loaded) {
            loaded = setTimeout(function () {
                ov.hide();
                R.setHTML('AJAX OK!\nThe result is:\n{code: 200, text: "success"}');
                delete loaded;
            }, 3000 + Math.random() * 10000);
        }
    });
});
