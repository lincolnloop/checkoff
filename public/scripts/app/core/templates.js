define(['handlebars'], function(Handlebars) {

this["Templates"] = this["Templates"] || {};

this["Templates"]["base"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "Home";
  }

  buffer += "<div id=\"nav\" class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".navbar-inverse-collapse\">\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </button>\n    <a class=\"navbar-brand active\" href=\"#\">Checkoff</a>\n    <div class=\"nav-collapse navbar-inverse-collapse collapse\" style=\"height: 0px;\">\n      <ul class=\"nav navbar-nav\">\n        <li>";
  options = {hash:{
    'class': ("classy")
  },inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.url || depth0.url),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "url", "index", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</li>\n        <li><a href=\"#\">Checklists</a></li>\n        <li><a href=\"#\">Projects</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<div id=\"main\" class=\"container\"></div>\n";
  return buffer;
  });

this["Templates"]["index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <p>Just a stub.</p>\n  </div>\n</div>\n";
  });

return this["Templates"];

});