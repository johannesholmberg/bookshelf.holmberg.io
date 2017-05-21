def clean
  puts "Cleaning previous builds"
  system "rm -Rf _site/"
end

def resizeImages
  puts "Resizing images"
  system "gulp resize-images"
end

def criticalCSS
  puts "Generating Critical CSS"
  system "gulp critical"
end

desc "Generate site"
task :generate do
  clean
  puts "Building for critical"
  system "JEKYLL_ENV=production jekyll build --config _config.yml,_config.prod.yml"
end
