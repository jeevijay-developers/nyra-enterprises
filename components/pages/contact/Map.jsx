"use client";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const option = {
  zoomControl: true,
  disableDefaultUI: true,
  styles: [
    {
      featureType: "all",
      elementType: "geometry.fill",
      stylers: [
        {
          weight: "2.00",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#9c9c9c",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          color: "#f2f2f2",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 45,
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#7b7b7b",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          color: "#46bcec",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#c8d7d4",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#070707",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
  ],
  scrollwheel: true,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAAz77U5XQuEME6TpftaMdX0bBelQxXRlM",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  return (
    <div className="map relative mt-header ml-60 mr-60 md:ml-0 md:mr-0">
      {/* {isLoaded ? ( */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3769.6728164309384!2d72.9998268!3d19.1220042!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c109b197e305%3A0x168a0697cfb0ce55!2sNo!5e0!3m2!1sen!2sin!4v1750690412696!5m2!1sen!2sin"
        width="100%"
        height="450"
        // style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* ) : ( */}
      <></>
      {/* )} */}

      {/* <div className="map__shape">
        <svg
          width="1800"
          height="40"
          viewBox="0 0 1800 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 25.747C0 25.747 46.3491 19.4287 88.8889 18.9879C132.063 18.5471 168.889 18.9879 221.587 21.1919C293.333 24.1307 431.746 36.0327 505.397 29.5674C579.048 23.1021 582.222 22.8083 619.683 18.694C661.587 13.992 746.667 4.58795 852.063 5.02877C964.444 5.46958 1168.25 29.4205 1252.06 28.245C1260.95 28.098 1293.97 27.0695 1318.73 25.3062C1342.86 23.5429 1378.41 19.7226 1426.67 18.4001C1446.98 17.8124 1479.37 16.7838 1516.83 17.0777C1526.35 17.2246 1556.83 17.6654 1593.02 19.4287C1629.21 21.1919 1662.86 23.9838 1693.33 24.8654C1758.73 26.4817 1800 24.1307 1800 24.1307V40H0V25.747ZM144.127 23.396C148.572 24.8654 156.825 23.9838 171.429 23.9838C186.032 23.9838 210.159 25.747 208.254 25.6001C206.349 25.4531 188.571 23.396 170.159 22.8083C151.111 22.0736 140.318 21.9266 144.127 23.396ZM260.952 27.3633C260.952 27.3633 276.19 27.6572 296.508 28.6858C316.825 29.8613 361.905 32.8 392.381 33.8286C444.444 35.4449 492.698 33.8286 488.254 33.6817C483.175 33.5347 427.302 34.5633 376.508 32.0653C355.556 31.0368 317.46 28.8327 297.778 28.098C276.825 27.2164 260.952 27.3633 260.952 27.3633ZM624.127 27.5103C613.333 28.5388 708.571 20.6042 741.587 18.5471C754.921 17.6654 780.952 16.196 805.079 15.6083C829.841 15.0205 861.587 15.0205 860.952 14.8736C860.952 14.5797 824.127 13.6981 789.841 14.8736C755.556 16.0491 756.825 16.4899 741.587 17.2246C717.46 18.4001 634.921 26.4817 624.127 27.5103ZM535.873 29.8613C534.603 29.8613 540.952 30.449 566.349 28.245C591.746 26.0409 608.889 23.1021 610.159 22.8083C611.429 22.6613 587.937 25.4531 568.254 27.2164C549.206 28.9797 536.508 29.8613 535.873 29.8613ZM3.17456 31.1837C3.80945 31.0368 15.238 29.5674 33.6506 27.5103C52.0634 25.4531 77.4603 23.396 76.1904 23.5429C74.9207 23.5429 53.9683 24.4246 29.2064 27.2164C4.44446 30.0082 2.53967 31.3307 3.17456 31.1837ZM1601.27 22.9552C1600.63 23.2491 1613.33 23.2491 1629.84 24.7185C1646.35 26.1878 1664.13 27.0695 1679.37 27.6572C1704.76 28.8327 1753.65 27.5103 1751.11 27.3633C1749.21 27.2164 1699.05 27.8041 1671.75 26.3348C1657.78 25.6001 1656.51 25.6001 1635.56 23.9838C1614.6 22.3674 1601.9 22.5144 1601.27 22.9552ZM1336.51 26.4817C1333.97 26.6286 1314.29 28.8327 1283.17 30.3021C1252.06 31.9184 1226.67 31.0368 1226.67 31.4776C1226.67 31.9184 1233.02 32.8 1266.03 31.9184C1299.05 31.0368 1339.05 26.3348 1336.51 26.4817ZM1345.4 30.1552C1344.13 30.0082 1323.81 32.0653 1309.21 32.6531C1294.6 33.0939 1297.14 33.3878 1297.14 33.5347C1297.14 33.6817 1304.13 33.8286 1314.29 33.2409C1325.08 32.5062 1346.67 30.3021 1345.4 30.1552ZM1205.71 33.5347C1205.08 33.2409 1183.49 32.3592 1170.16 30.8898C1156.83 29.4205 1158.73 30.0082 1158.1 30.1552C1157.46 30.3021 1163.17 31.3307 1173.33 32.0653C1183.49 32.947 1206.35 33.8286 1205.71 33.5347ZM1384.76 23.6899C1385.4 23.2491 1382.86 22.9552 1372.7 23.9838C1362.54 25.0123 1356.19 25.894 1358.73 25.747C1361.27 25.6001 1364.44 25.1593 1374.6 24.5715C1385.4 23.9838 1384.13 24.1307 1384.76 23.6899ZM1580.95 21.7797C1582.22 21.7797 1567.62 20.6042 1560 20.4573C1552.38 20.3103 1547.3 20.3103 1547.3 20.7511C1547.3 21.1919 1547.94 21.4858 1557.46 21.3389C1567.62 21.1919 1579.68 21.7797 1580.95 21.7797ZM833.651 8.99609C834.286 8.84915 848.889 9.4369 881.27 9.4369C913.016 9.4369 967.619 12.9634 990.476 14.5797C1013.33 16.1961 926.984 8.84915 885.714 8.55527C844.444 8.2614 833.016 9.14303 833.651 8.99609Z"
            fill="white"
          />
          <path
            d="M88.2537 13.5511C88.8886 13.6981 117.46 13.1103 133.968 13.5511C180.317 14.5797 241.905 18.2532 239.365 17.8123C236.825 17.3715 152.381 13.2573 131.428 12.9634C100.317 12.3756 87.6188 13.5511 88.2537 13.5511Z"
            fill="white"
          />
          <path
            d="M356.19 25.6001C357.46 25.747 384.762 27.0694 416.508 27.3633C448.254 27.6572 497.143 26.4817 494.603 26.6286C492.698 26.7756 457.143 29.2735 410.159 28.3919C363.175 27.5103 354.921 25.4531 356.19 25.6001Z"
            fill="white"
          />
          <path
            d="M501.587 20.3103C502.222 20.4573 488.889 21.7797 481.27 21.9266C473.651 22.0736 468.571 21.9266 468.571 21.4858C468.571 21.045 469.206 20.7511 478.73 20.8981C489.524 21.045 500.952 20.1634 501.587 20.3103Z"
            fill="white"
          />
          <path
            d="M523.81 24.4246C523.81 24.5715 551.746 22.6613 563.81 21.1919C575.873 19.8695 603.175 16.6369 602.54 16.6369C601.905 16.4899 575.873 18.9879 562.54 20.4572C549.206 21.9266 523.81 24.2776 523.81 24.4246Z"
            fill="white"
          />
          <path
            d="M819.048 0.767567C819.683 0.914505 848.254 0.326754 864.762 0.767567C911.111 1.79613 972.698 5.46958 970.159 5.02877C967.619 4.58796 883.175 0.473692 862.222 0.179816C831.111 -0.407936 818.413 0.620629 819.048 0.767567Z"
            fill="white"
          />
          <path
            d="M1533.97 11.6409C1533.97 11.6409 1526.35 12.0818 1515.56 11.7879C1504.76 11.494 1478.73 10.4654 1463.49 10.7593C1436.83 11.3471 1416.51 14.7266 1419.05 14.5797C1421.59 14.5797 1446.35 11.3471 1473.65 11.7879C1485.08 11.9348 1506.03 12.5226 1516.19 12.3756C1526.35 12.2287 1533.97 11.6409 1533.97 11.6409Z"
            fill="white"
          />
          <path
            d="M1320.64 21.4857C1319.37 21.3388 1307.94 22.6612 1293.33 23.1021C1278.73 23.3959 1280 23.5429 1280 23.8367C1280 23.9837 1291.43 24.4245 1301.59 23.8367C1311.75 23.1021 1321.91 21.6327 1320.64 21.4857Z"
            fill="white"
          />
          <path
            d="M1700.95 20.6041C1700.95 20.751 1673.65 20.6041 1658.41 19.8694C1643.17 19.1347 1626.67 17.0776 1626.67 16.9306C1626.67 16.7837 1643.81 18.1061 1659.05 18.9878C1673.65 19.8694 1700.32 20.4571 1700.95 20.6041Z"
            fill="white"
          />
        </svg>
      </div> */}
    </div>
  );
}
export default React.memo(MyComponent);
