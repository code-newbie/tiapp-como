//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
    alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

// include Underscore
Ti.include('/vendor/plugins/Underscore/install.js');

// include global namespace and functionality
Ti.include('/vendor/plugins/AppsCo/install.js');

// include main script
Ti.include('/app/main.js');
