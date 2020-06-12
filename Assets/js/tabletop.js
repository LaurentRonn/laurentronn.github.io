var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/19EfUnSpoqmmX4wy7AZuvwVRuMEjorX_THG8o8Dg7ofE/edit?usp=sharing';
  
  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

 
function showInfo(data, tabletop) {
data.forEach(function(data) {
    header1.innerHTML = data.header1;
    header2.innerHTML = data.header2;
    header3.innerHTML = data.header3;
    header4.innerHTML = data.header4;
    header5.innerHTML = data.header5;
    header6.innerHTML = data.header6;
    header7.innerHTML = data.header7;
    
    body1.innerHTML = data.body1;
    body2.innerHTML = data.body2;
    body3.innerHTML = data.body3;
    
    image1.src = data.image1;
    image2.src = data.image2;
    image3.src = data.image3;
   
 });
}
  window.addEventListener('DOMContentLoaded', init);