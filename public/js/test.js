// gallery section in index page //
// function to render a JSON list when fetched//

// fetch('http://localhost:3000/api/destinations') 
// fetch('https://travel-experts-heroku.herokuapp.com/api/destinations')

fetch('http://localhost:3000/test-index/api/packages')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
    const imgList = data;
    let imgtemplate = '';
    let image = document.querySelector('.img-container');

    let currentdate = new Date();



    imgList.forEach(function (item) {
      console.log(item);

      let db_enddate = new Date(item.PkgEndDate);
      let formatted_pack_enddate = db_enddate.getDate() + "-" + (db_enddate.getMonth() + 1) + "-" + db_enddate.getFullYear();
      console.log(formatted_pack_enddate);


      if (db_enddate <= currentdate) {
        console.log("if");
        imgtemplate +=
          `<figure>
        <a href="travelpackages/${item.PackageId}"><p>${item.PackageId}</p></a>
        <img src="${item.path}">
        <figcaption>${item.PkgDesc}</figcaption>
        </figure>`;
      };
    });
    image.innerHTML = imgtemplate;
  });

