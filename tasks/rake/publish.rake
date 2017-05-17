desc "Generate and publish website"
task :publish => [:generate] do
  puts 'Publishing your website, silence is golden...'
  user = 's201511.gridserver.com'
  server = 's201511.gridserver.com'
  path = 'domains/highlights.holmberg.io/html'
  sh "rsync -rtzh --delete _site/ #{user}@#{server}:#{path}"
  puts 'Your website is now published!'
end
