@athletes.each do |athlete|
json.set! athlete.id do
json.extract! athlete, :id, :name, :team_acronym, :team_name, :games_played, :minutes_per_game, :field_goals_attempted_per_game, :field_goal_percentage, :free_throw_percentage, :three_point_percentage, :points_per_game, :offensive_rebounds_per_game, :defensive_rebounds_per_game, :rebounds_per_game, :assists_per_game, :steals_per_game, :blocks_per_game, :turnovers_per_game, :player_efficiency_rating, :twitter_sentiment, :image_url
end
end