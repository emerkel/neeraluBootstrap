
/*
These methods just show the appropriate div and selects the tab when the user clicks the button--just as if they had clicked the tab instead.
*/
jQuery('#gotoDataManagement').on('click', function() {
    jQuery('#myTab a[href="#dropdown1"]').tab('show')
});

jQuery('#gotoCloudMigration').on('click', function() {
    jQuery('#myTab a[href="#dropdown2"]').tab('show')
});
