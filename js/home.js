var utils = {
  _hideAllTabs: function() {
    var a = ["speak-section", "translate-section", "teach-section", "code-section"];
    a.forEach(function(aSection) {
      $('#' + aSection).hide();
    });
  },
  _addEventListeners: function() {
    var self = this;
    document.getElementById('action-speak').addEventListener('click', function() {
      self.selectTabById('speak-section');
    });
    document.getElementById('action-translate').addEventListener('click', function() {
      self.selectTabById('translate-section');
    });
    document.getElementById('action-code').addEventListener('click', function() {
      self.selectTabById('code-section');
    });
    document.getElementById('action-teach').addEventListener('click', function() {
      self.selectTabById('teach-section');
    });
  },
  selectTabById: function(id) {
    this._hideAllTabs();
    $('#' + id).slideDown(500);
  },
  init: function() {
    this._addEventListeners();
    this.selectTabById('translate-section');
  }
}

utils.init();

/**
 document.addEventListener('load', function _loadLib() {
   document.removeEventListener('load', _loadLib);
   console.log("loaded");

 });
 */
