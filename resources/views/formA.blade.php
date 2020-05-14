<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script>window.Laravel = { csrfToken: '{{ csrf_token() }}' }</script>
        <title>Laravel</title>

        <!-- Fonts -->

        <link href="https://fonts.googleapis.com/css?family=Comfortaa:300,400,700|Josefin+Sans:100i,300,400,700|Raleway:100,200,300,400,500,600,700,800,900" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,900" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/font-awesome@4.x/css/font-awesome.min.css" rel="stylesheet">
        <link href="https://vjs.zencdn.net/7.3.0/video-js.min.css" rel="stylesheet">
        <link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/4.2.95/css/materialdesignicons.css" rel="stylesheet">
        <link href="assets/css/jquery-multitabs.css" rel="stylesheet" media="all" />
        <link href="assets/css/animate.css" rel="stylesheet" media="all" />
        <link href="assets/css/main.css" rel="stylesheet" media="all" />
        <link href="assets/css/style.css" rel="stylesheet" media="all" />
        <link href="assets/css/responsive.css" rel="stylesheet" media="all" />
        <link href="assets/css/crafted.css" rel="stylesheet" media="all" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" media="all" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

        <style>
          * {
              box-sizing: border-box;
            }

            input[type=text], select, textarea {
              width: 100%;
              padding: 12px;
              border: 1px solid #ccc;
              border-radius: 4px;
              resize: vertical;
            }

            label {
              padding: 12px 12px 12px 0;
              display: inline-block;
            }

            input[type=submit] {
              background-color: #4CAF50;
              color: white;
              padding: 12px 20px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              float: right;
            }

            input[type=submit]:hover {
              background-color: #45a049;
            }

            .container {
              border-radius: 5px;
              background-color: #f2f2f2;
              padding: 20px;
            }

            .col-25 {
              float: left;
              width: 25%;
              margin-top: 6px;
            }

            .col-75 {
              float: left;
              width: 75%;
              margin-top: 6px;
            }

            /* Clear floats after the columns */
            .row:after {
              content: "";
              display: table;
              clear: both;
            }

            /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
            @media screen and (max-width: 600px) {
              .col-25, .col-75, input[type=submit] {
                width: 100%;
                margin-top: 0;
              }
            }

            .topnav {
                display: grid;
                grid-template-columns: auto auto auto auto;
                background-color: #333;
                overflow: hidden;
              }

              /* Style the links inside the navigation bar */
              .topnav a {
                float: left;
                color: #f2f2f2;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
                font-size: 17px;
              }

              /* Change the color of links on hover */
              .topnav a:hover {
                background-color: #ddd;
                color: black;
              }

              /* Add a color to the active/current link */
              .topnav a.active {
                background-color: #4CAF50;
                color: white;
              }

              .mygrid{
                display: grid;
                grid-template-columns: auto auto auto auto;
                padding: 10px;
              }
      </style>
    </head>
    <body>
        <div id="app">
          <div class="topnav">
            <a class="active" href="/">Home</a>
            <a href="/admin">Admin</a>
            <a href="/contact-us">Contact</a>
            <a href="/enquiry">Enquiry</a>
          </div>
          @include('errors')
          <div>
            <h1><center>Client Main Form</center></h1>
          </div>
          <div class="container">
            <form method="post" action="{{ action('LandingPages@formPost')  }}" enctype="multipart/form-data" accept-charset="UTF-8">
              <input name="_token" type="hidden" value="{{ csrf_token() }}"/>
              <div class="row">
                <div class="col-25">
                  <label for="title">Title</label>
                </div>
                <div class="col-75">
                  <input type="text" id="title" name="title" placeholder="Add Title..." value={{ $title==null?'':$title }}>
                </div>
              </div>
              <div class="row">
                <div class="col-25">
                  <label for="lname">Image</label>
                </div>
                <div class="col-75">
                  <input type="file" id="bg_img" name="bg_img[]" placeholder="Add Image..." multiple>
                </div>
              </div>
              <div class="row">
                <div class="col-25">
                  <label for="subject">Link</label>
                </div>
                <div class="col-75">
                  <input type="text" id="link" name="link[]" placeholder="Add Link..." multiple>
                </div>
              </div>
              <div class="mygrid">
                <div><input type="submit" name="submit" value="Submit"></div>
                <div><input type="submit" name="submit" value="Edit"></div>
                <div><input type="submit" name="submit" value="Save as Draft"></div>
              </div>
            </form>
          </div>
        </div>
        <script src="https://unpkg.com/react@15/dist/react.js"></script>
        <script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
    </body>

</html>
