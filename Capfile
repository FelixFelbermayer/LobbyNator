# Load DSL and set up stages
require "capistrano/setup"

# Include default deployment tasks
require "capistrano/deploy"

require "capistrano/scm/git"
install_plugin Capistrano::SCM::Git

# Include tasks from other gems included in your Gemfile

require "capistrano/rbenv"
require "capistrano/bundler"
# require "capistrano/rails/assets"
# require "capistrano/rails/migrations"
require "capistrano/rails"
require "capistrano/passenger"
require 'capistrano/postgresql'


set :rbenv_type, :user
set :rbenv_ruby, '3.0.1'

# postgres stuff
set :pg_user, :user
set :pg_password, ENV['DATABASE_PASSWORD']
set :pg_ask_for_password, true

# Load custom tasks from `lib/capistrano/tasks` if you have any defined
Dir.glob("lib/capistrano/tasks/*.rake").each { |r| import r }
