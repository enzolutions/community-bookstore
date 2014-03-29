# Require any additional compass plugins here.
#require 'compass-normalize'
#require 'rgbapng'
#require 'toolkit'
#require 'susy'
#require 'breakpoint'
# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "css"
sass_dir = "scss"
#images_dir = "images"
#javascripts_dir = "js"

# Change this to :production when ready to deploy the CSS to the live server.
environment = :development
#environment = :production


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

##
## You probably don't need to edit anything below this.
##

# You can select your preferred output style here (can be overridden via the
# command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = (environment == :development) ? :expanded : :compressed

# To enable relative paths to assets via compass helper functions. Since Drupal
# themes can be installed in multiple locations, we don't need to worry about
# the absolute path to the theme from the server omega.
relative_assets = true

# To disable debugging comments that display the original location of your
# selectors. Uncomment:
# line_comments = false

# Add the root partials folder as import path so we don't have to build the
# relative paths.
add_import_path "scss"