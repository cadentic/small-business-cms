## INSTALLATION AND DEPLOYMENT STEPS LOCALLY

### 1. COMPOSER INSTALLATION

*Source:*

* https://getcomposer.org/doc/00-intro.md
* https://getcomposer.org/doc/01-basic-usage.md
* https://github.com/composer/composer


> Composer is a popular dependency management tool for PHP, created mainly to facilitate installation and updates for project dependencies. 
> It allows you to declare the libraries your project depends on and it will manage(install/update) them for you in a directory (e.g. 'vendor' 
> inside your project).


1. Re-synchronize the package index files from their sources.
      
      `sudo apt-get update`

2. Run the following commands on current/appropriate directory.

    a. Install composer.

      `sudo apt-get install composer`
     
    b. **NOTE:** The following command did not work. 

    `curl -sS https://getcomposer.org/installer -o composer-setup.php`
    
     See [Github Issue](https://github.com/composer/composer/issues/9047)
       
    c. Check installation
    
    `composer --version` should give something similar as `Composer 1.10.1 2020-03-13 20:34:27`
    
    d. Checking the location of Composer's global packages.
    
    `php /usr/bin/composer config --list --global` should display something similar as

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


      The `[home]` line refers to the default value of `$COMPOSER_HOME`.


### 2. LARAVEL INSTALLATION   

*Source:*

* https://laravel.com/docs/7.x#server-requirements
* https://github.com/laravel/laravel


> Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the 
> model–view–controller architectural pattern and based on Symfony. Laravel utilizes Composer to manage its dependencies. So, before using Laravel, 
> make sure you have Composer installed on your machine.

**NOTE:** An account creation at [Packagist](https://packagist.org/register/) may be required.

 1. Download the Laravel installer using Composer.

    `composer global require laravel/installer`

   **NOTE:** 
   
   - The `global` parameter allows running commands in the global composer dir `($COMPOSER_HOME)`.
   
   - The following error message may come up on executing `composer global require laravel/installer`

    "https://repo.packagist.org/packages.json" file could not be downloaded: failed to open stream: Connection refused

   **FIX:** 
   `sudo vim /etc/resolv.conf` and add the following lines:
    
    nameserver 8.8.8.8
    nameserver 8.8.4.4`
   
   Save the file and restart the network.
   
   
   
   ### 3. Node.js® INSTALLATION  
     
   *Source:*

   * https://nodejs.org/en/
   * https://github.com/nodejs
   
   > Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. As an asynchronous
   > event-driven JavaScript runtime, Node.js is designed to build scalable network applications.
    
    
   1. Install Node.js
   
      `sudo apt-get install nodejs`
   
   2. Check installation.
   
      `nodejs -v` should display something similar to `v10.19.0`
      


### 4. npm INSTALLATION
     
*Source:*

   * https://docs.npmjs.com/cli/npm
   * https://github.com/npm/npm     
     
 > npm is the package manager for the Node JavaScript platform. It puts modules in place so that
 > node can find them, and manages dependency conflicts intelligently.    
    

  1. Install npm
  
    sudo apt-get install npm
    
  2. Check installation
  
   `npm -v` should display something similar to `6.14.4`

  3. See `npm-config` for much much more information.


### 5. PROJECT DEPLOYMENT AND APPLICATION RUN ON SERVER

**COMMANNDS TO RUN:** 

  1. `composer install`
  
  > Installs the project dependencies from the `composer.lock` file if present, or falls back on the `composer.json`.

  
  
  2. `npm install`
  
  > npm install downloads a package and it's dependencies. When run without arguments,npm install  downloads dependencies 
  > defined in a package(a folder containing a program described by a `package.json` file)

  
  
  3. `php artisan route:clear`
  
  > To clear route cache of the Laravel application. This will display : `Route cache cleared!`
  
  
  
  4. `php artisan config:clear`
  
  > To clear config cache of the Laravel application. This will display : `Configuration cache cleared!`
  
  
  
  5. `php artisan cache:clear`
  
  > To clear application cache of Laravel application. This will display : `Application cache cleared!`
  
  
  
  6. `npm run watch`
  
 > Combines all Vue components and other JavaScript files into a browser-friendly combined file.
 > Then it stays active and "watches" for updates to all .vue and .js files. If it detects a
 > change, it'll re-build the browser-friendly file so you can just refresh the page.


 7. `php artisan serve`
 
 To run this application on the development server.


















