## BZP App

This project a Web-GIS app which is developed using react and leflet js.
leaflet is an open source JavaScript library used to build web mapping applications.

This is a responsiv app and has been connected to the backend for authentication and authorization. the CSS Framework of this app is ant-design(antd).

## Components

In the project we have 11 components that each is explained below:

1. registerForm: the first thing that you face when enter the app, is register form. You fill the form by entering your email, password and name. by clicking register your information will add to the database and you'll enter map page(main page of the app).

2. loginForm: next component is loginForm. users that we have their information in database can enter the app by filling the login form with their emaill and password.

3. Logout: in this component user can logout from his/her account using auth service.

4. map: this is the main component of the map page. the map is obtained from leaflet library with two layers. the first layer is Open Street Map(OSM) and the second layer is satellite layer. the map is centered on Tehran. also we have some tools in map:
   a. Scale bar: this component which is placed in the left down corner of the map, shows the scale of the map based on the zoom level.
   b. Mouse Current Coordinate: with this tool, user can see the coordinate of the cursor.

Also in the map page we have another components too that has came below:

5. navBar: this component is implementd in all pages. but there is a different between navbar in map page( /map ) with other pages. in map page, navbar has a hambergur icon on the right side which by clicking on the icon, righ sidebar will pop-up.

6. locatebtn: this component is used to geolocate user.

7. license: in this component we have an a tag that declares the developer rights. by clicking this link, BZP's website opens in new tab of browser.

8. layercontrol: this component is used to change the layer of the map. It is designed with a division with an image in it. when the OSM layer is on, the image of the layer control is satellite image and vice versa, when the satellite layer is on, we have OSM image in the layer control. by clicking the layer control div, layer of the map switches between OSM and satellite layer.

9. leftSideBar: there is another sidebar on the left side for putting GIS layers that has developed in backend side. in despite of right sidebar, it's not arranged in navbar. there is a button under navbar that when you click, left sidebar will pop-up.

10. toolbar: in the map page we have a toolbar to have interaction with map. this toolbar has 9 options like:
    a. Zoom in: by clicking this tool, you can zoom in.
    b. Zoom out: by clicking this tool, you can zoom out.
    c. Zoom extent: by clicking this tool, you can replace on the initial zoom extent.
    d. Identify: by clicking this tool, you can identify map objects.
    e. Delete: by clicking this tool, you can delete drawn items.
    f. Distance Measurement: by clicking this tool, you can measure distance between multiple points.
    g. Area Measurments: by clicking this tool, you can measure Area of a polygon with hectar unit.
    h. Pin: by clicking this tool, you can pin your desired points.
    i. Print: by clicking this tool, you can print the map page in portrait view.
