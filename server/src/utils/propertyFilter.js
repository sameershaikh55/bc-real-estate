function propertyFilter(properties, searchKeyword) {
  return properties.filter((property) => {
    const createdAt = new Date(property.createdAt);
    const dayOfWeek = createdAt.toLocaleString("en-US", { weekday: "short" });
    const monthName = createdAt.toLocaleString("en-US", { month: "long" });
    const year = createdAt.getFullYear().toString();
    const month = (createdAt.getMonth() + 1).toString().padStart(2, "0");
    const day = createdAt.getDate().toString().padStart(2, "0");
    const time = createdAt.toLocaleTimeString("en-US", { hour12: false });

    const searchTermLowerCase = searchKeyword.toLowerCase();
    const monthNameLowerCase = monthName.toLowerCase();
    const yearLowerCase = year.toLowerCase();
    const monthLowerCase = month.toLowerCase();
    const dayLowerCase = day.toLowerCase();
    const timeLowerCase = time.toLowerCase();

    const monthDay = `${monthNameLowerCase} ${dayLowerCase}`;
    const monthYear = `${monthNameLowerCase} ${yearLowerCase}`;
    const yearMonth = `${yearLowerCase}-${monthLowerCase}`;
    const yearMonthDay = `${yearLowerCase}-${monthLowerCase}-${dayLowerCase}`;

    return (
      property._id.toString().toLowerCase().includes(searchTermLowerCase) ||
      property.title.toLowerCase().includes(searchTermLowerCase) ||
      property.description.toLowerCase().includes(searchTermLowerCase) ||
      property.location
        .toString()
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.beds.toLowerCase().includes(searchTermLowerCase) ||
      property.baths.toLowerCase().includes(searchTermLowerCase) ||
      property.sqft.toLowerCase().includes(searchTermLowerCase) ||
      property.status.toLowerCase().includes(searchTermLowerCase) ||
      property.propertyDetails.price
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.propertyDetails.bedrooms
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.propertyDetails.fullBaths
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.propertyDetails.halfBaths
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.propertyDetails.totalBaths
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.propertyDetails.propertyStyle
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.propertyDetails.lotSizeArea
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.propertyDetails.acres
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.propertyDetails.propertyType
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.propertyDetails.stories
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.propertyDetails.features
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.propertyDetails.exteriorFeatures
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.propertyDetails.yearBuilt
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.propertyDetails.subdivision
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.propertyDetails.roof
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.propertyDetails.heating
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.propertyDetails.foundation
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.propertyDetails.lotDescription
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.propertyDetails.parkingDescription
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.propertyDetails.garageSpaces
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.propertyDetails.additionalRooms
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.geographicData.directions
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.geographicData.county
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.geographicData.latitude
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.geographicData.longitude
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.geographicData.marketArea
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.addressInformation.address
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.addressInformation.postalCode
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.addressInformation.city
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.addressInformation.state
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.addressInformation.country
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.listingInformation.listingOffice
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.listingInformation.listingOfficePhone
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.listingInformation.listingAgent
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.listingInformation.listingAgentPhone
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.listingInformation.terms
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.listingInformation.virtualTourURL
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.schoolInformation.district
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.schoolInformation.elementarySchool
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.schoolInformation.middleSchool
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.schoolInformation.highSchool
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.mlsInformation.daysOnMarket
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.mlsInformation.mlsStatus
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.mlsInformation.listingDate
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.mlsInformation.listingLastModified
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.mlsInformation.listingLastModified
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.mlsInformation.taxID
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.mlsInformation.taxYear
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.mlsInformation.mlsArea
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      property.mlsInformation.mlsString
        .toLowerCase()
        .includes(searchTermLowerCase) ||
      dayOfWeek.toLowerCase().includes(searchTermLowerCase) ||
      monthNameLowerCase.includes(searchTermLowerCase) ||
      yearLowerCase.includes(searchTermLowerCase) ||
      monthLowerCase.includes(searchTermLowerCase) ||
      dayLowerCase.includes(searchTermLowerCase) ||
      timeLowerCase.includes(searchTermLowerCase) ||
      monthDay.includes(searchTermLowerCase) ||
      monthYear.includes(searchTermLowerCase) ||
      yearMonth.includes(searchTermLowerCase) ||
      yearMonthDay.includes(searchTermLowerCase) ||
      dayOfWeek.toLowerCase().includes(searchTermLowerCase)
    );
  });
}

module.exports = propertyFilter;
