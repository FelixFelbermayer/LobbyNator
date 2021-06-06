# config/initializers/datadog.rb

Datadog.configure do |c|
    c.env = 'prod'
    c.service = 'lobbynator'
  
    c.use :rails
  end