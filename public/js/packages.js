// Array of objects, this is the data to create frontend vacation packages
const vacationPackages =
[
    {
        pkgID:          0,
        pkgName:        "Caribbean New Year",
        pkgStartDate:   "2005-12-25",
        pkgEndDate:     "2006-01-04",
        pkgDescription: 'Lorem Ipsum Description',
        imgFileName:    '0-Caribbean-New-Year.jpg',
        imgAltText:     'Cruise ships in the Bahamas',
        imgAttribution: {
            source:     'Unsplash',
            credit:     'Fernando Jorge',
            URL:        'https://unsplash.com/photos/rMaWin9-9Gk'
        }
    },
    {
        pkgID:          1,
        pkgName:        "Polynesian Paradise",
        pkgStartDate:   "2005-12-12",
        pkgEndDate:     "2005-12-20",
        pkgDescription: 'Lorem Ipsum Description',
        imgFileName:    '1-Polynesian-Paradise.jpg',
        imgAltText:     'Kauai County, United States',
        imgAttribution: {
            source:     'Unsplash',
            credit:     'Braden Jarvis',
            URL:        'https://unsplash.com/photos/prSogOoFmkw'
        }
    },
    {
        pkgID:          2,
        pkgName:        "Asian Expedition",
        pkgStartDate:   "2006-05-14",
        pkgEndDate:     "2006-05-28",
        pkgDescription: 'Lorem Ipsum Description',
        imgFileName:    '2-Asian-Expedition.jpg',
        imgAltText:     'Marina Bay Sands, Singapore',
        imgAttribution: {
            source:     'Unsplash',
            credit:     'Hu Chen',
            URL:        'https://unsplash.com/photos/__cBlRzLSTg'
        }
    },
    {
        pkgID:          3,
        pkgName:        "European Vacation",
        pkgStartDate:   "2005-11-01",
        pkgEndDate:     "2005-11-14",
        pkgDescription: 'Lorem Ipsum Description',
        imgFileName:    '3-European-Vacation.jpg',
        imgAltText:     'Lake Bled, Slovenia',
        imgAttribution: {
            source:     'Unsplash',
            credit:     'Neven Krcmarek',
            URL:        'https://unsplash.com/photos/pOWBHdgy1Lo'
        }
    }
];


// Variable where we will store our img tags
let vacPkgTemplate = ''; 

// Flex container for images
const gallery = document.querySelector('.vacationPackages'); 

// Using "forEach" to create Image + AltText + 
// Pic Description with external link (opens in new tab)
vacationPackages.forEach(function(item){
  console.log(item);
  vacPkgTemplate += `<div>
                      <a href="${item.imgAttribution.URL}"> 
                        <img src="../images/${item.imgFileName}" alt="${item.imgAltText}">
                      </a>  
                      <a href="${item.imgAttribution.URL}">
                        <p>${item.pkgName}</p>
                      </a>
                    </div>`;
});

// Add HTML string to  container
gallery.innerHTML = vacPkgTemplate;