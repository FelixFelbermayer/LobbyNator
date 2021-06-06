# config/initializers/datadog.rb

Datadog.configure do |c|
    c.env = 'production'
    c.service = 'lobbynator'
  
    c.use :rails
  end