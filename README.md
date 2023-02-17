## BZP App

This project a Web-GIS app which is developed using react and leflet js.
leaflet is an open source JavaScript library used to build web mapping applications.

This is a responsive app and has been connected to the backend for authentication and authorization. the CSS Framework of this app is ant-design (antd).

## Components

In the project we have 11 components that each is explained below:

1. registerForm: the first thing that you face when enter the app, is register form. You fill the form by entering your email, password and name. by clicking register your information will add to the database and you'll enter map page(main page of the app).
---
![17](https://user-images.githubusercontent.com/60284829/120749783-69378580-c51a-11eb-83a7-c3564e9c0618.JPG)

---
2. loginForm: next component is loginForm. users that we have their information in database can enter the app by filling the login form with their emaill and password.
---
![16](https://user-images.githubusercontent.com/60284829/120749818-7b192880-c51a-11eb-854f-53f587079237.JPG)

---
3. Logout: in this component user can logout from his/her account using auth service.

4. map: this is the main component of the map page. the map is obtained from leaflet library with two layers. the first layer is Open Street Map(OSM) and the second layer is satellite layer. the map is centered on Tehran. also we have some tools in map:

---
![18](https://user-images.githubusercontent.com/60284829/120749864-91bf7f80-c51a-11eb-8dc5-9b5367d9482d.JPG)

---
   a. Scale bar: this component which is placed in the left down corner of the map, shows the scale of the map based on the zoom level.
   b. Mouse Current Coordinate: with this tool, user can see the coordinate of the cursor.
   
   ---
   ![19](https://user-images.githubusercontent.com/60284829/120749940-b0be1180-c51a-11eb-83a2-93a76ce8339c.JPG)

   ---

Also in the map page we have another components too that has came below:

5. navBar: this component is implementd in all pages. but there is a different between navbar in map page( /map ) with other pages. in map page, navbar has a hambergur icon on the right side which by clicking on the icon, right sidebar will pop-up.

6. rightSideBar: when you click on the hambergur icon in navbar, right sidebar will pop-up.

7. locatebtn: this component is used to geolocate user.

8. license: in this component we have an a tag that declares the developer rights. by clicking this link, BZP's website opens in new tab of browser.

9. layercontrol: this component is used to change the layer of the map. It is designed with a division with an image in it. when the OSM layer is on, the image of the layer control is satellite image and vice versa, when the satellite layer is on, we have OSM image in the layer control. by clicking the layer control div, layer of the map switches between OSM and satellite layer.
---
![layercontrol-gif](https://user-images.githubusercontent.com/60284829/120750248-49549180-c51b-11eb-949f-3e4d959ffbee.gif)

---
10. leftSideBar: there is another sidebar on the left side for putting GIS layers that has developed in backend side. in despite of right sidebar, it's not arranged in navbar. there is a button under navbar that when you click, left sidebar will pop-up.

---
![sidebar](https://user-images.githubusercontent.com/60284829/120750119-0eeaf480-c51b-11eb-9012-e92e24714b09.gif)

---

11. toolbar: in the map page we have a toolbar to have interaction with map. this toolbar has 9 options like:
---
![20](https://user-images.githubusercontent.com/60284829/120749981-c6333b80-c51a-11eb-986d-c26d621471c3.JPG)
---
    a. Zoom in: by clicking this tool, you can zoom in.\
    b. Zoom out: by clicking this tool, you can zoom out.\
    c. Zoom extent: by clicking this tool, you can replace on the initial zoom extent.\
    d. Identify: by clicking this tool, you can identify map objects.\
    e. Delete: by clicking this tool, you can delete drawn items.\
    f. Distance Measurement: by clicking this tool, you can measure distance between multiple points.\
    g. Area Measurments: by clicking this tool, you can measure Area of a polygon with hectar unit.\
    h. Pin: by clicking this tool, you can pin your desired points.\
    ---
    ![pin](https://user-images.githubusercontent.com/60284829/120750037-e06d1980-c51a-11eb-884f-6dcd10dfd88e.gif)

    ---
    i. Print: by clicking this tool, you can print the map page in portrait view.
