"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.camper=void 0;var _templateLoader=require("./template-loader"),_data=require("./data"),camper=function(){function e(e){var t=e.params.id;_data.data.getCamperById(t).then(function(t){_templateLoader.templateLoader.get("camper").then(function(a){e.$element().html(a(t.data))})})}function t(e){var t=this;_data.data.getAllCampers().then(function(a){_templateLoader.templateLoader.get("campers").then(function(r){var n={integrated:[],"semi-integrated":[],alcove:[]};a.data.forEach(function(e){var t=e.category||"all";n[t]=n[t].concat(e)},t),e.$element().html(r({campers:n})),_templateLoader.templateLoader.get("footer").then(function(t){e.$element().append(t)})})})}return{singleCamper:e,allCampers:t}}();exports.camper=camper;