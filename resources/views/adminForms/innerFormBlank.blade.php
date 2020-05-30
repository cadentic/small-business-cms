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
    </head>
    <body>
        <div id="app">
          <ibform></ibform>
        </div>

        <script src="{{ mix('js/app.js') }}"></script>
        <script src="https://unpkg.com/react@15/dist/react.js"></script>
        <script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
    </body>

</html>
