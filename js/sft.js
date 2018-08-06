
new nyc.ol.FinderApp({
  title: 'Sandy Funding Tracker',
  geoclientUrl: 'https://maps.nyc.gov/geoclient/v1/search.json?app_key=74DF5DB1D7320A9A2&app_id=nyc-lib-example',
  facilityTabTitle: 'Applicants',
  facilityUrl: 'https://nycomb-admin.carto.com/api/v2/sql?q=' + encodeURIComponent(nyc.ol.format.CartoSql.createSql({from: 'point_data_test'})),
  facilityFormat: new nyc.ol.format.CartoSql(),
  facilityStyle: style,
  filterChoiceOptions: [{
    title: 'Program',
    choices: [
      {name: 'program', values: ['Build It Back Multifamily'], label: 'Build It Back Multifamily', checked: true},
      {name: 'program', values: ['Hurricane Sandy Business Loan and Grant Program'], label: 'Hurricane Sandy Business Loan and Grant Program', checked: true},
      {name: 'program', values: ['Public Housing - NYCHA'], label: 'Public Housing - NYCHA', checked: true},
      {name: 'program', values: ['Business PREP'], label: 'Business PREP', checked: true}
    ]
  } , {
    title: 'Managing Agency',
    choices: [
    {name: 'agency', values: ['Department of Environmental Protection'], label: 'Department of Environmental Protection'},
      {name: 'agency', values: ['Department of Small Business Services'], label: 'Department of Small Business Services'},
      {name: 'agency', values: ['Housing Preservation and Development'], label: 'Housing Preservation and Development'},
      {name: 'agency', values: ['New York City Housing Authority'], label: 'New York City Housing Authority'}
    ]
    } , {
    title: 'Borough',
    choices: [
    {name: 'borough', values: ['Manhattan'], label: 'Manhattan'},
      {name: 'borough', values: ['Brooklyn'], label: 'Brooklyn'},
      {name: 'borough', values: ['Bronx'], label: 'Bronx'},
      {name: 'borough', values: ['Queens'], label: 'Queens'},
      {name: 'borough', values: ['Staten Island'], label: 'Staten Island'}
    ]
  }],
  facilitySearch: {nameField: 'beneficiary_number'},
  decorations: [decorations]
});

$(document).ready(function() {
  $('.filter-1 h3').click()
  finderApp.tabs.open('#filters')
});