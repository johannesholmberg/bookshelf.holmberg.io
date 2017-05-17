def clean
  puts "Cleaning previous builds"
  system "rm -Rf _site/"
end

desc "Generate site"
task :generate do
  clean
  puts "Building for production"
  system "JEKYLL_ENV=production jekyll build --config _config.yml,_config.prod.yml"
end
