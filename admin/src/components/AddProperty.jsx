import React, { useEffect, useRef, useState } from "react";
import upload from "../assets/upload.svg";
import { useDispatch, useSelector } from "react-redux";
import SmallLoader from "../components/SmallLoader";
import { useAlert } from "react-alert";
import {
  clearErrors,
  updateProperty,
  registerProperty,
} from "../redux/action/property";
import { useNavigate, useParams } from "react-router-dom";
import {
  ADD_PROPERTY_RESET,
  UPDATE_PROPERTY_RESET,
} from "../redux/type/property";
import SelectBox from "./SelectBox";

const AddProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();

  const { property, propertyLoading, success, propertyError } = useSelector(
    (state) => state.property
  );
  const { properties_url } = useSelector((state) => state.pictureUrl);

  const propertiesImages = useRef(null);
  const [propertiesImagesPreview, setPropertiesImagesPreview] = useState([]);
  const [propertyImages, setPropertyImages] = useState([]);
  const [previousPropertyImages, setPreviousPropertyImages] = useState([]);
  const [inputHandle, setInputHandle] = useState({
    title: "",
    description: "",
    location: "",
    beds: "",
    baths: "",
    sqft: "",
    status: "Active",
    propertyDetails: {
      price: "",
      bedrooms: "",
      fullBaths: "",
      halfBaths: "",
      totalBaths: "",
      propertyStyle: "",
      lotSizeArea: "",
      acres: "",
      propertyType: "",
      stories: "",
      features: "",
      exteriorFeatures: "",
      yearBuilt: "",
      subdivision: "",
      roof: "",
      heating: "",
      foundation: "",
      lotDescription: "",
      parkingDescription: "",
      garageSpaces: "",
      additionalRooms: "",
    },
    geographicData: {
      directions: "",
      county: "",
      latitude: "",
      longitude: "",
      marketArea: "",
    },
    addressInformation: {
      address: "",
      postalCode: "",
      city: "",
      state: "",
      country: "",
    },
    listingInformation: {
      listingOffice: "",
      listingOfficePhone: "",
      listingAgent: "",
      listingAgentPhone: "",
      terms: "",
      virtualTourURL: "",
    },
    schoolInformation: {
      district: "",
      elementarySchool: "",
      middleSchool: "",
      highSchool: "",
    },
    mlsInformation: {
      daysOnMarket: "",
      mlsStatus: "",
      listingDate: "",
      listingLastModified: "",
      taxID: "",
      taxYear: "",
      mlsArea: "",
      mlsString: "",
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "propertyImages") {
      setPropertyImages([...propertyImages, ...event.target.files]);

      const files = Array.from(event.target.files);

      // Map through the files and convert each image to base64 string
      const imagePreviewUrls = files.map((file) => URL.createObjectURL(file));

      // Set the preview images in the state
      setPropertiesImagesPreview([
        ...propertiesImagesPreview,
        ...imagePreviewUrls,
      ]);
    } else {
      setInputHandle((prevProperty) => ({
        ...prevProperty,
        [name]: value,
      }));
    }
  };

  const handleNestedChange = (event, section) => {
    const { name, value } = event.target;
    setInputHandle((prevProperty) => ({
      ...prevProperty,
      [section]: {
        ...prevProperty[section],
        [name]: value,
      },
    }));
  };

  const handleImageRemove = (index) => {
    const updatedImagePreviewUrls = [...propertiesImagesPreview];
    updatedImagePreviewUrls.splice(index, 1);
    const propertyImagesUrls = [...propertyImages];
    propertyImagesUrls.splice(index, 1);

    setPropertiesImagesPreview(updatedImagePreviewUrls);
    setPropertyImages(propertyImagesUrls);

    if (id) {
      const previousPropertyImagesUrls = [...previousPropertyImages];
      previousPropertyImagesUrls.splice(index, 1);

      setPreviousPropertyImages(previousPropertyImagesUrls);
    }
  };

  const inputFields = [
    {
      label: "Title",
      name: "title",
      value: inputHandle.title,
      onChange: handleChange,
    },
    {
      label: "Description",
      name: "description",
      value: inputHandle.description,
      onChange: handleChange,
    },
    {
      label: "Location",
      name: "location",
      value: inputHandle.location,
      onChange: handleChange,
    },
    {
      label: "Beds",
      name: "beds",
      value: inputHandle.beds,
      onChange: handleChange,
    },
    {
      label: "Baths",
      name: "baths",
      value: inputHandle.baths,
      onChange: handleChange,
    },
    {
      label: "Sqft",
      name: "sqft",
      value: inputHandle.sqft,
      onChange: handleChange,
    },
    {
      label: "Status",
      name: "status",
      value: inputHandle.status,
      onChange: handleChange,
    },
    {
      label: "Price",
      name: "price",
      value: inputHandle.propertyDetails.price,
      onChange: (event) => handleNestedChange(event, "propertyDetails"),
    },
    {
      label: "Bedrooms",
      name: "bedrooms",
      value: inputHandle.propertyDetails.bedrooms,
      onChange: (event) => handleNestedChange(event, "propertyDetails"),
    },
    {
      label: "Full Baths",
      name: "fullBaths",
      value: inputHandle.propertyDetails.fullBaths,
      onChange: (event) => handleNestedChange(event, "propertyDetails"),
    },
    {
      label: "Half Baths",
      name: "halfBaths",
      value: inputHandle.propertyDetails.halfBaths,
      onChange: (event) => handleNestedChange(event, "propertyDetails"),
    },
    {
      label: "Total Baths",
      name: "totalBaths",
      value: inputHandle.propertyDetails.totalBaths,
      onChange: (event) => handleNestedChange(event, "propertyDetails"),
    },
    {
      label: "Property Style",
      name: "propertyStyle",
      value: inputHandle.propertyDetails.propertyStyle,
      onChange: (event) => handleNestedChange(event, "propertyDetails"),
    },
    {
      label: "Lot Size Area",
      name: "lotSizeArea",
      value: inputHandle.propertyDetails.lotSizeArea,
      onChange: (event) => handleNestedChange(event, "propertyDetails"),
    },
    {
      label: "Acres",
      name: "acres",
      value: inputHandle.propertyDetails.acres,
      onChange: (event) => handleNestedChange(event, "propertyDetails"),
    },
    {
      label: "Property Type",
      name: "propertyType",
      value: inputHandle.propertyDetails.propertyType,
      onChange: (event) => handleNestedChange(event, "propertyDetails"),
    },
    {
      label: "Stories",
      name: "stories",
      value: inputHandle.propertyDetails.stories,
      onChange: (event) => handleNestedChange(event, "propertyDetails"),
    },
    {
      label: "Features",
      name: "features",
      value: inputHandle.propertyDetails.features,
      onChange: (event) => handleNestedChange(event, "propertyDetails"),
    },
    {
      label: "Exterior Features",
      name: "exteriorFeatures",
      value: inputHandle.propertyDetails.exteriorFeatures,
      onChange: (event) => handleNestedChange(event, "propertyDetails"),
    },
    {
      label: "Year Built",
      name: "yearBuilt",
      value: inputHandle.propertyDetails.yearBuilt,
      onChange: (event) => handleNestedChange(event, "propertyDetails"),
    },
    {
      label: "Subdivision",
      name: "subdivision",
      value: inputHandle.propertyDetails.subdivision,
      onChange: (event) => handleNestedChange(event, "propertyDetails"),
    },
    {
      label: "Roof",
      name: "roof",
      value: inputHandle.propertyDetails.roof,
      onChange: (event) => handleNestedChange(event, "propertyDetails"),
    },
    {
      label: "Heating",
      name: "heating",
      value: inputHandle.propertyDetails.heating,
      onChange: (event) => handleNestedChange(event, "propertyDetails"),
    },
    {
      label: "Foundation",
      name: "foundation",
      value: inputHandle.propertyDetails.foundation,
      onChange: (event) => handleNestedChange(event, "propertyDetails"),
    },
    {
      label: "Lot Description",
      name: "lotDescription",
      value: inputHandle.propertyDetails.lotDescription,
      onChange: (event) => handleNestedChange(event, "propertyDetails"),
    },
    {
      label: "Parking Description",
      name: "parkingDescription",
      value: inputHandle.propertyDetails.parkingDescription,
      onChange: (event) => handleNestedChange(event, "propertyDetails"),
    },
    {
      label: "Garage Spaces",
      name: "garageSpaces",
      value: inputHandle.propertyDetails.garageSpaces,
      onChange: (event) => handleNestedChange(event, "propertyDetails"),
    },
    {
      label: "Additional Rooms",
      name: "additionalRooms",
      value: inputHandle.propertyDetails.additionalRooms,
      onChange: (event) => handleNestedChange(event, "propertyDetails"),
    },
    {
      label: "Directions",
      name: "directions",
      value: inputHandle.geographicData.directions,
      onChange: (event) => handleNestedChange(event, "geographicData"),
    },
    {
      label: "County",
      name: "county",
      value: inputHandle.geographicData.county,
      onChange: (event) => handleNestedChange(event, "geographicData"),
    },
    {
      label: "Latitude",
      name: "latitude",
      value: inputHandle.geographicData.latitude,
      onChange: (event) => handleNestedChange(event, "geographicData"),
    },
    {
      label: "Longitude",
      name: "longitude",
      value: inputHandle.geographicData.longitude,
      onChange: (event) => handleNestedChange(event, "geographicData"),
    },
    {
      label: "Market Area",
      name: "marketArea",
      value: inputHandle.geographicData.marketArea,
      onChange: (event) => handleNestedChange(event, "geographicData"),
    },
    {
      label: "Address",
      name: "address",
      value: inputHandle.addressInformation.address,
      onChange: (event) => handleNestedChange(event, "addressInformation"),
    },
    {
      label: "Postal Code",
      name: "postalCode",
      value: inputHandle.addressInformation.postalCode,
      onChange: (event) => handleNestedChange(event, "addressInformation"),
    },
    {
      label: "City",
      name: "city",
      value: inputHandle.addressInformation.city,
      onChange: (event) => handleNestedChange(event, "addressInformation"),
    },
    {
      label: "State",
      name: "state",
      value: inputHandle.addressInformation.state,
      onChange: (event) => handleNestedChange(event, "addressInformation"),
    },
    {
      label: "Country",
      name: "country",
      value: inputHandle.addressInformation.country,
      onChange: (event) => handleNestedChange(event, "addressInformation"),
    },
    {
      label: "Listing Office",
      name: "listingOffice",
      value: inputHandle.listingInformation.listingOffice,
      onChange: (event) => handleNestedChange(event, "listingInformation"),
    },
    {
      label: "Listing Office Phone",
      name: "listingOfficePhone",
      value: inputHandle.listingInformation.listingOfficePhone,
      onChange: (event) => handleNestedChange(event, "listingInformation"),
    },
    {
      label: "Listing Agent",
      name: "listingAgent",
      value: inputHandle.listingInformation.listingAgent,
      onChange: (event) => handleNestedChange(event, "listingInformation"),
    },
    {
      label: "Listing Agent Phone",
      name: "listingAgentPhone",
      value: inputHandle.listingInformation.listingAgentPhone,
      onChange: (event) => handleNestedChange(event, "listingInformation"),
    },
    {
      label: "Virtual Tour URL",
      name: "virtualTourURL",
      value: inputHandle.listingInformation.virtualTourURL,
      onChange: (event) => handleNestedChange(event, "listingInformation"),
    },
    {
      label: "Terms",
      name: "terms",
      value: inputHandle.listingInformation.terms,
      onChange: (event) => handleNestedChange(event, "listingInformation"),
    },
    {
      label: "District",
      name: "district",
      value: inputHandle.schoolInformation.district,
      onChange: (event) => handleNestedChange(event, "schoolInformation"),
    },
    {
      label: "Elementary School",
      name: "elementarySchool",
      value: inputHandle.schoolInformation.elementarySchool,
      onChange: (event) => handleNestedChange(event, "schoolInformation"),
    },
    {
      label: "Middle School",
      name: "middleSchool",
      value: inputHandle.schoolInformation.middleSchool,
      onChange: (event) => handleNestedChange(event, "schoolInformation"),
    },
    {
      label: "High School",
      name: "highSchool",
      value: inputHandle.schoolInformation.highSchool,
      onChange: (event) => handleNestedChange(event, "schoolInformation"),
    },
    {
      label: "Days on Market",
      name: "daysOnMarket",
      value: inputHandle.mlsInformation.daysOnMarket,
      onChange: (event) => handleNestedChange(event, "mlsInformation"),
    },
    {
      label: "MLS Status",
      name: "mlsStatus",
      value: inputHandle.mlsInformation.mlsStatus,
      onChange: (event) => handleNestedChange(event, "mlsInformation"),
    },
    {
      label: "Listing Date",
      name: "listingDate",
      value: inputHandle.mlsInformation.listingDate,
      onChange: (event) => handleNestedChange(event, "mlsInformation"),
    },
    {
      label: "Listing Last Modified",
      name: "listingLastModified",
      value: inputHandle.mlsInformation.listingLastModified,
      onChange: (event) => handleNestedChange(event, "mlsInformation"),
    },
    {
      label: "Tax ID",
      name: "taxID",
      value: inputHandle.mlsInformation.taxID,
      onChange: (event) => handleNestedChange(event, "mlsInformation"),
    },
    {
      label: "Tax Year",
      name: "taxYear",
      value: inputHandle.mlsInformation.taxYear,
      onChange: (event) => handleNestedChange(event, "mlsInformation"),
    },
    {
      label: "MLS Area",
      name: "mlsArea",
      value: inputHandle.mlsInformation.mlsArea,
      onChange: (event) => handleNestedChange(event, "mlsInformation"),
    },
    {
      label: "MLS #",
      name: "mlsString",
      value: inputHandle.mlsInformation.mlsString,
      onChange: (event) => handleNestedChange(event, "mlsInformation"),
    },
  ];

  const submit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (const [key, value] of Object.entries(inputHandle)) {
      if (typeof value === "object") {
        for (const [subKey, subValue] of Object.entries(value)) {
          formData.append(`${key}.${subKey}`, subValue);
        }
      } else {
        formData.append(key, value);
      }
    }

    if (propertyImages.length) {
      for (let i = 0; i < propertyImages.length; i++) {
        formData.append("propertyImages", propertyImages[i]);
      }
    } else {
      formData.append("propertyImages", []);
    }

    if (id) {
      formData.append("previousImages", [...previousPropertyImages]);

      dispatch(updateProperty(formData, id));
    } else {
      dispatch(registerProperty(formData));
    }
  };

  useEffect(() => {
    if (propertyError) {
      alert.error(propertyError);
      dispatch(clearErrors());
    }

    if (success) {
      if (id) {
        alert.success("Property edited!");
        dispatch({ type: UPDATE_PROPERTY_RESET });
      } else {
        alert.success("Property created!");
        dispatch({ type: ADD_PROPERTY_RESET });
      }

      navigate(`/`);
      setInputHandle({
        title: "",
        description: "",
        location: "",
        beds: "",
        baths: "",
        sqft: "",
        propertyDetails: {
          price: "",
          bedrooms: "",
          fullBaths: "",
          halfBaths: "",
          totalBaths: "",
          propertyStyle: "",
          lotSizeArea: "",
          acres: "",
          propertyType: "",
          stories: "",
          features: "",
          exteriorFeatures: "",
          yearBuilt: "",
          subdivision: "",
          roof: "",
          heating: "",
          foundation: "",
          lotDescription: "",
          parkingDescription: "",
          garageSpaces: "",
          additionalRooms: "",
        },
        geographicData: {
          directions: "",
          county: "",
          latitude: "",
          longitude: "",
          marketArea: "",
        },
        addressInformation: {
          address: "",
          postalCode: "",
          city: "",
          state: "",
          country: "",
        },
        listingInformation: {
          listingOffice: "",
          listingOfficePhone: "",
          listingAgent: "",
          listingAgentPhone: "",
        },
        schoolInformation: {
          district: "",
          elementarySchool: "",
          middleSchool: "",
          highSchool: "",
        },
        mlsInformation: {
          daysOnMarket: "",
          mlsStatus: "",
          listingDate: "",
          listingLastModified: "",
          taxID: "",
          taxYear: "",
          mlsArea: "",
          mlsString: "",
        },
      });
      setPropertiesImagesPreview([]);
      setPropertyImages([]);
      setPreviousPropertyImages([]);
    }
  }, [dispatch, alert, success, propertyError, id]);

  useEffect(() => {
    if (id && Object.keys(property).length) {
      setPreviousPropertyImages([...property.propertyImages]);

      const propertyDetail = { ...property };
      delete propertyDetail.propertyImages;
      setInputHandle({
        ...propertyDetail,
      });
    }
  }, [id, property]);

  return (
    <div
      style={{
        maxHeight: "calc(100vh - 220px)",
        overflow: "auto",
      }}
      className="product_setup pb-3 bg-white rounded-3"
    >
      <form onSubmit={submit} className="px-4 pt-4">
        {inputFields.map((input) => {
          if (input.label === "Description") {
            return (
              <React.Fragment key={input.name}>
                <label htmlFor={input.label}>{input.label}</label>
                <br />
                <textarea
                  cols="30"
                  rows="5"
                  name={input.name}
                  placeholder={"Enter" + " " + input.label}
                  value={input.value}
                  onChange={input.onChange}
                ></textarea>
                <br />
                <br />
              </React.Fragment>
            );
          }

          if (input.label === "Status") {
            return (
              <React.Fragment key={input.name}>
                <label htmlFor={input.label}>{input.label}</label>
                <br />
                <SelectBox
                  options={["Active", "unActive"]}
                  state={input.value}
                  onChange={input.onChange}
                />
                <br />
              </React.Fragment>
            );
          }

          return (
            <React.Fragment key={input.name}>
              <label htmlFor={input.name}>{input.label}</label>
              <br />
              <input
                type="text"
                className="w-100 px-3 mt-1 f14"
                name={input.name}
                placeholder={"Enter" + " " + input.label}
                value={input.value}
                onChange={input.onChange}
              />
              <br />
              <br />
            </React.Fragment>
          );
        })}

        <React.Fragment>
          <label htmlFor="Name">Property Images</label>
          <br />
          <div className="d-flex flex-column gap-3">
            <div className="upload-btn-wrapper mt-1 pointer">
              <img src={upload} alt="" className="pointer" />
              <input
                ref={propertiesImages}
                type="file"
                accept="image/*"
                name="propertyImages"
                className="pointer"
                multiple
                onChange={handleChange}
              />
            </div>
            <div className="d-flex flex-wrap gap-2">
              {(propertiesImagesPreview.length &&
                propertiesImagesPreview.map((content, i) => {
                  return (
                    <div key={i} className="upload-btn-wrapper mt-1">
                      <div
                        onClick={() => handleImageRemove(i)}
                        className="cross-icon pointer"
                      >
                        X
                      </div>
                      <img
                        style={{
                          height: "100px",
                          width: "100px",
                          objectFit: "cover",
                          borderRadius: "5px",
                        }}
                        src={content}
                        alt=""
                      />
                    </div>
                  );
                })) ||
                ""}
              {(previousPropertyImages.length &&
                previousPropertyImages.map((content, i) => {
                  return (
                    <div key={i} className="upload-btn-wrapper mt-1">
                      <div
                        onClick={() => handleImageRemove(i)}
                        className="cross-icon pointer"
                      >
                        X
                      </div>
                      <img
                        style={{
                          height: "100px",
                          width: "100px",
                          objectFit: "cover",
                          borderRadius: "5px",
                        }}
                        src={properties_url + content}
                        alt=""
                      />
                    </div>
                  );
                })) ||
                ""}
            </div>
          </div>
          <br />
        </React.Fragment>

        <div className="mt-2">
          <button
            disabled={(propertyLoading && true) || false}
            className="border-0 text-white w-100"
            type="submit"
          >
            {(propertyLoading && <SmallLoader />) || "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
