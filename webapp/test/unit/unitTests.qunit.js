/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comsaplhmr/z_voltage_validation/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
