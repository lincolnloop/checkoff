define(['handlebars'], function(Handlebars) {

this["Templates"] = this["Templates"] || {};

this["Templates"]["base"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"nav\" class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".navbar-inverse-collapse\">\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </button>\n    <a class=\"navbar-brand active\" href=\"#\">Checkoff</a>\n    <div class=\"nav-collapse navbar-inverse-collapse collapse\" style=\"height: 0px;\">\n      <ul class=\"nav navbar-nav\">\n        <li><a href=\"#\">Home</a></li>\n        <li><a href=\"#\">Checklists</a></li>\n        <li><a href=\"#\">Projects</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<div id=\"main\" class=\"container\"></div>\n";
  });

this["Templates"]["index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <p>Just a stub.</p>\n  </div>\n</div>\n";
  });

return this["Templates"];

});