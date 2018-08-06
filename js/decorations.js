var decorations = {
  getName: function() {
    return this.get('beneficiary_number');
  },
  detailsHtml: function() {
    return $('<div></div>')
      .append('<div>' + this.get('address') + '</div>')
      .append('<div><b>Dept:</b><span>' + this.get('agency') + '</span></div>')
      .append('<div><b>Type:</b><span>' + this.get('beneficiary_type') + '</span></div>')
      .append('<div><b>Council District:</b><span>' + this.get('council_district') + '</span></div>');
  },
  html: function() {
    return $('<div></div>')
      .append(this.nameHtml())
      .append(this.detailsHtml())
      .append(this.detailsHtml())
      .append(this.mapButton());
  }
};