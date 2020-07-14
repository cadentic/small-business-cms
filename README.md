<strong>Deployment on local server</strong>
<ul>
  <li>git clone https://github.com/cadentic/business_landing_v1.git</li>
  <li>cd business_landing_v1</li>
  <li>composer install</li>
  <li>npm install</li>
  <li>php artisan serve</li>
  
  /*
* COMPOSER INSTALLATION
*
* Source:
*   https://getcomposer.org/doc/00-intro.md
*   https://getcomposer.org/doc/01-basic-usage.md
*   https://github.com/composer/composer
*/

   Composer is a popular dependency management tool for PHP, created mainly to facilitate installation and updates for project dependencies. It allows you to declare the libraries your project depends on and it will manage(install/update) them for you in a directory (e.g. 'vendor' inside your project).


1. Composer Installation:
   ======================

   a. Re-synchronize the package index files from their sources.

        sudo apt-get update

   b. Run the following commands on current/appropriate directory.

     i.  Install composer.

         sudo apt-get install composer

        -------------------------------------------------------------------------
         NOTE: The following command did not work.

         curl -sS https://getcomposer.org/installer -o composer-setup.php

         See: https://github.com/composer/composer/issues/9047
        -------------------------------------------------------------------------

     ii. Check installation.

        "composer --version" should give something similar as "Composer 1.10.1 2020-03-13 20:34:27"

     iii. Checking the location of Composer's global packages.

        "php /usr/bin/composer config --list --global" should display something similar as

        [repositories.packagist.org.type] composer
        [repositories.packagist.org.url] https?://repo.packagist.org
        [repositories.packagist.org.allow_ssl_downgrade] true
        [process-timeout] 300
        [use-include-path] false
        [preferred-install] auto
        [notify-on-install] true
        [github-protocols] [https, ssh]
        [vendor-dir] vendor (/home/sandeep/vendor)
        [bin-dir] {$vendor-dir}/bin (/home/sandeep/vendor/bin)
        [cache-dir] /home/sandeep/.cache/composer
        [data-dir] /home/sandeep/.local/share/composer
        [cache-files-dir] {$cache-dir}/files (/home/sandeep/.cache/composer/files)
        [cache-repo-dir] {$cache-dir}/repo (/home/sandeep/.cache/composer/repo)
        [cache-vcs-dir] {$cache-dir}/vcs (/home/sandeep/.cache/composer/vcs)
        [cache-ttl] 15552000
        [cache-files-ttl] 15552000
        [cache-files-maxsize] 300MiB (314572800)
        [bin-compat] auto
        [discard-changes] false
        [autoloader-suffix]
        [sort-packages] false
        [optimize-autoloader] false
        [classmap-authoritative] false
        [apcu-autoloader] false
        [prepend-autoloader] true
        [github-domains] [github.com]
        [bitbucket-expose-hostname] true
        [disable-tls] false
        [secure-http] true
        [cafile]
        [capath]
        [github-expose-hostname] true
        [gitlab-domains] [gitlab.com]
        [store-auths] prompt
        [archive-format] tar
        [archive-dir] .
        [htaccess-protect] true
        [use-github-api] true
        [lock] true
        [home] /home/sandeep/.config/composer


       =>  The '[home]' line refers to the default value of $COMPOSER_HOME.

/*
* LARAVEL INSTALLATION
* Source:
*     https://laravel.com/docs/7.x#server-requirements
*
*/

Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based
on Symfony. Laravel utilizes Composer to manage its dependencies. So, before using Laravel, make sure you have Composer installed on your machine.

2. Laravel Installation:
   =====================

   -----------------------------------------------------------
   ** An account creation at packagist.org may be required. **
   -----------------------------------------------------------

   a. Download the Laravel installer using Composer.

         composer global require laravel/installer

      Note:
      ----
    i. The "global" parameter allows running commands in the global composer dir ($COMPOSER_HOME).
       The "require" parameter adds required packages to your composer.json and installs them.

    ii. The following error message may come up on executing "composer global require laravel/installer"

    "https://repo.packagist.org/packages.json" file could not be downloaded: failed to open stream: Connection refused

       FIX:

       "sudo vim /etc/resolv.conf" and add the lines.

       nameserver 8.8.8.8
       nameserver 8.8.4.4

       and restart the network.

/*
* Node.js® INSTALLATION
* Source:
*     https://nodejs.org/en/
*/
   Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. As an asynchronous
   event-driven JavaScript runtime, Node.js is designed to build scalable network applications.


3. Node.js® Installation:
   ======================

   i. Install Node.js®

          sudo apt-get install nodejs

  ii. Check installation.

          "nodejs -v" should display something similar to v10.19.0


/*
* npm INSTALLATION
* Source:
*    https://docs.npmjs.com/cli/npm
*
*/

 npm is the package manager for the Node JavaScript platform. It puts modules in place so that
 node can find them, and manages dependency conflicts intelligently.

4. npm Installation:
   =================

   i. Install npm

       sudo apt-get install npm

   ii. Check installation

       "npm -v" should display something similar to "6.14.4"

   iii. See "npm-config" for much much more information.


/////////////////////////////// PROJECT ADDITIONAL COMMANDS FOR DEPLOYMENT /////////////////////////////////////

Path to project: "/var/www/cadentic/business_landing_v1"

COMMANDS TO RUN:

1. composer install

=> Installs the project dependencies from the composer.lock file if present, or falls
   back on the composer.json.

   Package manifest generated successfully.(Note:2 things failed)

   --------------------------------------------------------------------------
   Installing symfony/debug (v4.4.8): Downloading (failed)
   Installing beyondcode/laravel-dump-server (1.3.0): Downloading (failed)
   --------------------------------------------------------------------------

2. npm install

=> npm install downloads a package and it's dependencies. When run without arguments,
   npm install  downloads dependencies defined in a package(a folder containing a
   program described by a package.json file)


3. php artisan route:clear

=> To clear route cache of the Laravel application. This will display : 'Route cache cleared!'


4. php artisan config:clear

=> To clear config cache of the Laravel application. This will display : 'Configuration cache cleared!'


5. php artisan cache:clear

=> To clear application cache of Laravel application. This will display : 'Application cache cleared!'


6. npm run watch

=> Combines all Vue components and other JavaScript files into a browser-friendly combined file.
   Then it stays active and "watches" for updates to all .vue and .js files. If it detects a
   change, it'll re-build the browser-friendly file so you can just refresh the page.

///////////////////////////////////////////////////////////////////////////////////////////////////

  
  
</ul>
