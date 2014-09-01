<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [What is the Community Bookstore?](#what-is-the-community-bookstore)
- [What are the objectives of Community Bookstore?](#what-are-the-objectives-of-community-bookstore)
- [How I can contribute?](#how-i-can-contribute)
- [What skills I need to Contribute?](#what-skills-i-need-to-contribute)
- [What will the Community Bookstore look like?](#what-will-the-community-bookstore-look-like)
- [Install](#install)
  - [Requirements](#requirements)
  - [Assumptions](#assumptions)
  - [Getting Community Bookstore project](#getting-community-bookstore-project)
  - [Installing Backend](#installing-backend)
    - [Install Drupal 8](#install-drupal-8)
      - [Sync configuration](#sync-configuration)
        - [Configure sync dirs](#configure-sync-dirs)
        - [Symlink to community bookstore config](#symlink-to-community-bookstore-config)
        - [Force Site UUID match](#force-site-uuid-match)
        - [Sync configuration](#sync-configuration-1)
  - [Installing Frontend](#installing-frontend)
    - [Downloading libraries](#downloading-libraries)
    - [Common Tasks](#common-tasks)
      - [Web Server](#web-server)
    - [Libraries Available](#libraries-available)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

#What is the Community Bookstore?
It is an initiative to build a final product for the community by the community to resolve a very specific problem: access to **knowledge**.

From technical perspective this project is Headless Drupal system using MarionetteJS as FrontEnd.

#What are the objectives of Community Bookstore?
Provide a website to enable people to exchange books for a price or for free (depending of the good karma of seller or donors).

The tool will work best for instance for a parent with kids from K - 12 Schools or college students all the way through their undergrad and post doctorate.

*The website will have a high impact in the community in areas like:

* **Ecology**: Less books printed, more books reused and more books recycled at their end of life.

* **Knowledge**: Enable to share education for free or a reduced price.

* **Economy**: Less money is required to buy books, this money could be invested in other areas like clothing or food.

#How I can contribute?

Review the Issue queue and try to resolve one of them, when you finish send us a Pull Request

#What skills I need to Contribute?
Community Bookstore will use the whole areas available in the Drupal broad spectrum of skills, and we expect the percentaje of effort will be distributed in the following way.

#What will the Community Bookstore look like?
These are the wireframes, but they are not set in stone. Contributors will be able to evaluate, pitch in and impact the project, allowing them to decide changes in the features.

<img alt="community-bookstore" src="https://raw.githubusercontent.com/enzolutions/community-bookstore/master/images/community-bookstore.png" height="100px" /><img alt="Book-details" src="https://raw.githubusercontent.com/enzolutions/community-bookstore/master/images/Book-details.png" height="100px" /><img alt="search_results" src="https://raw.githubusercontent.com/enzolutions/community-bookstore/master/images/search_results.png" height="100px" /><img alt="User-details" src="https://raw.githubusercontent.com/enzolutions/community-bookstore/master/images/User-details.png" height="100px" />

#Install

##Requirements

* Drush 7 (https://drupalize.me/blog/201408/upgrading-drush-work-drupal-8)

##Assumptions

We will assume we will have a root folder name ~/back2school to allocate backend and frontend files for Community Bookstore, this is just for convinience to write the instructions but off course is not required.

We will have to domains/virtualhost configured in this way

* http://backend.com -> ~/back2school/backend
* http://frontend.com -> ~/back2school/frontend/web

You have use the webserver of you preference, but we tested with Apache 2

You need RubyGems to install Compass .

```
\curl -sSL https://get.rvm.io | bash -s stable 
sudo gem install compass
```

You need to install node.js to install bower and grunt

```
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install nodejs
sudo npm install -g bower
sudo npm install -g grunt-cli
```

##Getting Community Bookstore project

```
git clone https://github.com/enzolutions/community-bookstore.git ~/back2school
```

##Installing Backend

### Install Drupal 8

At this point is requiered to get Drupal 8 from git, this procces could take a lit bit depending your internet connection.

```
git clone --branch 8.0.x http://git.drupal.org/project/drupal.git ~/back2school/backend
```

You must to follow the regular process to install a Drupal 8 site.

#### Sync configuration

After complete the Drupal 8 Installation,you must to load the configruation for Community Booksstore

##### Configure sync dirs

Editing you settings.php you must setup where will be located your config directories for active and staging, as you can see below

```
$config_directories['staging'] = 'sites/default/config/staging';
```

This configuration is at the end of your setting file, using a ramdom directory created in install process.

##### Symlink to community bookstore config

```
$ mkdir ~/back2school/backend/sites/default/config
$ ln -s ~/back2school/drupal_config ~/back2school/backend/sites/default/config/staging
```

##### Force Site UUID match

The Configuration Management only allow sync configuration between same site or project to avoid issues importing configuration from site a.com to b.com, to accomplish this validation Drupal 8 generate a UUID for each site.

You cat get your current site UUDI executing the following command

```
$ drush cget system.site
```

The config import has a diffent UUID you can confirm with the following command

```
$ cat ~/back2school/backend/sites/default/config/staging/system.site.yml
```

You need to change the value using the following command

```
$ drush cedit system.site
```

Using your favorite text editor you need set the same UUID present in staging config files.

##### Sync configuration

Is required your web server have permissions to read the configuration files, for instance if _www is the user running your webserver your must run the following commands

```
$ sudo chown -R _www ~/back2school/backend/sites/default/config/staging/
$ sudo chmod -R 755 ~/back2school/backend/sites/default/config/staging/
```

Now with access to config files we have to option to import/sync the files

**Web enable**

Accessing the URL http://backend.com/admin/config/development/configuration you can review the files and import all changes

**Drush enable**

```
$ drush config-import staging
```

After import you will have a complete Community Bookstore running.

##Installing Frontend

The frontend was generated with Yo Marionette Drupal Generator <a href="https://github.com/enzolutions/generator-marionette-drupal">https://github.com/enzolutions/generator-marionette-drupal</a>.

If you are a developer we recommend install this generator to speed up the development process if Frontend.

###Downloading libraries

Libraries itselft aren't versioned, the Frontend use <a href="http://bower.io">Bower</a> to define required libraries, to download in enviroment that libraries execute the following command.

```
$ bower install
```

###Common Tasks

The fronted implement common tasks using <a href="http://gruntjs.com/">Grunt</a>.

Before to execute common tasks we need to install required plugin executing the folling command.

```
$ npm install
```

To get a list of common tasks available execute the following command.

```
$ grunt tasks
```

Below a list of available Grunt commands:

```
compass  -> Compile Sass to CSS using Compass
concat   -> Concatenate files.
default  => Alias for "concat", "uglify", "imagemin", "compass", "watch", "connect:server" tasks.
imagemin -> Minify PNG and JPEG images
server   => Alias for "connect:server" task.
uglify   -> Minify files with UglifyJS.
watch     > Run predefined tasks whenever watched files change.
```

It is convenient to run `grunt` alone to run the default tasks (defined at the end of the Gruntfile.js file): concat, uglify, imagemin, watch. That way we can be sure that we have the assets needed for the frontend (css generated from the scss files and images).

####Web Server

If you execute all tasks or just the task:

```
$ grunt server
```

You will get a web server for static pages, so you just need open in your server the URL: **http://localhost:9001** to avoid be worried about Apache, Ngix or any other webserver, so you are read to test the Community Bookstore Frotend server.

###Libraries Available

The frontend use the following libraries (alphabetic order).

-backbone
-backbone-amd
-backbone.babysitter
-backbone.drupal
-backbone.marionette
-bootstrap-sass
-backbone.wreqr
-jquery
-modernizr
-requirejs
-requirejs-text
-twig.js
-underscore
-underscore-amd
