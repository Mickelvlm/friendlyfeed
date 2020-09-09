# name: friendlyfeed
# version: 0.1.0

enabled_site_setting :friendlyfeed_enabled

after_initialize do
    load File.expand_path('../app/controllers/friendlyfeed_controller.rb', __FILE__)
  
    Discourse::Application.routes.append do
      # Map the path `/friendlyfeed` to `FriendlyfeedController`’s `index` method
      get '/friendlyfeed' => 'friendlyfeed#index'
    end
  end