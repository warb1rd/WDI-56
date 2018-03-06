irb(main):032:0> Answer.first.question.asker

  Answer Load (0.6ms)  SELECT  "answers".* FROM "answers" ORDER BY "answers"."id" ASC LIMIT $1  [["LIMIT", 1]]
  Question Load (0.2ms)  SELECT  "questions".* FROM "questions" WHERE "questions"."id" = $1 LIMIT $2  [["id", 1], ["LIMIT", 1]]
=> "Phillipe"

irb(main):033:0> @question = Question.find(1)

  Question Load (0.6ms)  SELECT  "questions".* FROM "questions" WHERE "questions"."id" = $1 LIMIT $2  [["id", 1], ["LIMIT", 1]]
=> #<Question id: 1, body: "What does ERD stand for", asker: "Phillipe", created_at: "2018-02-22 18:49:00", updated_at: "2018-02-22 18:49:00">

irb(main):034:0> @answer = @question.answers.new

=> #<Answer id: nil, body: nil, answerer: nil, question_id: 1, created_at: nil, updated_at: nil>

irb(main):035:0> @answer.body = "E R DDD"

=> "E R DDD"

irb(main):036:0> @answer.save

   (0.3ms)  BEGIN
  SQL (0.9ms)  INSERT INTO "answers" ("body", "question_id", "created_at", "updated_at") VALUES ($1, $2, $3, $4) RETURNING "id"  [["body", "E R DDD"], ["question_id", 1], ["created_at", "2018-02-22 19:24:51.139690"], ["updated_at", "2018-02-22 19:24:51.139690"]]
   (1.5ms)  COMMIT
=> true

irb(main):037:0> @question.answers.last.answerer

  Answer Load (1.6ms)  SELECT  "answers".* FROM "answers" WHERE "answers"."question_id" = $1 ORDER BY "answers"."id" DESC LIMIT $2  [["question_id", 1], ["LIMIT", 1]]
=> nil

irb(main):038:0> Answer.first.question.asker

  Answer Load (0.6ms)  SELECT  "answers".* FROM "answers" ORDER BY "answers"."id" ASC LIMIT $1  [["LIMIT", 1]]
  Question Load (0.2ms)  SELECT  "questions".* FROM "questions" WHERE "questions"."id" = $1 LIMIT $2  [["id", 1], ["LIMIT", 1]]
=> "Phillipe"

irb(main):039:0> @question = Question.find(2)

villagep:dwidder m$ rails g model User username
      invoke  active_record
      create    db/migrate/20180222194427_create_users.rb
      create    app/models/user.rb
      invoke    test_unit
      create      test/models/user_test.rb
      create      test/fixtures/users.yml
villagep:dwidder m$ rails db:create
Created database 'dwidder_development'
Created database 'dwidder_test'
villagep:dwidder m$ rails db:migrate
== 20180222194427 CreateUsers: migrating ======================================
-- create_table(:users)
   -> 0.0056s
== 20180222194427 CreateUsers: migrated (0.0057s) =============================

villagep:dwidder m$ rails g model Dweed body user:belongs_to
      invoke  active_record
      create    db/migrate/20180222194610_create_dweeds.rb
      create    app/models/dweed.rb
      invoke    test_unit
      create      test/models/dweed_test.rb
      create      test/fixtures/dweeds.yml
villagep:dwidder m$ rails db:migrate
== 20180222194610 CreateDweeds: migrating =====================================
-- create_table(:dweeds)
   -> 0.0113s
== 20180222194610 CreateDweeds: migrated (0.0114s) ============================

villagep:dwidder m$ code .
villagep:dwidder m$ rails c
Loading development environment (Rails 5.1.5)
irb(main):001:0> @user = User.new
=> #<User id: nil, username: nil, created_at: nil, updated_at: nil>
irb(main):002:0> @user.username = "hansolo"
=> "hansolo"
irb(main):003:0> @user.save
   (0.3ms)  BEGIN
  SQL (1.1ms)  INSERT INTO "users" ("username", "created_at", "updated_at") VALUES ($1, $2, $3) RETURNING "id"  [["username", "hansolo"], ["created_at", "2018-02-22 19:51:16.970526"], ["updated_at", "2018-02-22 19:51:16.970526"]]
   (0.5ms)  COMMIT
=> true
irb(main):004:0> @user = User.new
=> #<User id: nil, username: nil, created_at: nil, updated_at: nil>
irb(main):005:0> @user.username = "chewbacca"
=> "chewbacca"
irb(main):006:0> @user.save
   (0.3ms)  BEGIN
  SQL (0.6ms)  INSERT INTO "users" ("username", "created_at", "updated_at") VALUES ($1, $2, $3) RETURNING "id"  [["username", "chewbacca"], ["created_at", "2018-02-22 19:52:27.527567"], ["updated_at", "2018-02-22 19:52:27.527567"]]
   (1.3ms)  COMMIT
=> true
irb(main):007:0> @user = User.new
=> #<User id: nil, username: nil, created_at: nil, updated_at: nil>
irb(main):008:0> @user.username = "Darthmaul"
=> "Darthmaul"
irb(main):009:0> @user.save
   (0.3ms)  BEGIN
  SQL (0.8ms)  INSERT INTO "users" ("username", "created_at", "updated_at") VALUES ($1, $2, $3) RETURNING "id"  [["username", "Darthmaul"], ["created_at", "2018-02-22 19:53:48.035603"], ["updated_at", "2018-02-22 19:53:48.035603"]]
   (1.4ms)  COMMIT
=> true
irb(main):010:0> @user = User.new
=> #<User id: nil, username: nil, created_at: nil, updated_at: nil>
irb(main):011:0> @user.username = "Quigonjin"
=> "Quigonjin"
irb(main):012:0> @user.save
   (0.3ms)  BEGIN
  SQL (0.9ms)  INSERT INTO "users" ("username", "created_at", "updated_at") VALUES ($1, $2, $3) RETURNING "id"  [["username", "Quigonjin"], ["created_at", "2018-02-22 19:54:24.570972"], ["updated_at", "2018-02-22 19:54:24.570972"]]
   (1.4ms)  COMMIT
=> true
irb(main):013:0> @user = User.find(1)
  User Load (0.4ms)  SELECT  "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2  [["id", 1], ["LIMIT", 1]]
=> #<User id: 1, username: "hansolo", created_at: "2018-02-22 19:51:16", updated_at: "2018-02-22 19:51:16">
irb(main):014:0> @dweed = @user.dweeds.new
=> #<Dweed id: nil, body: nil, user_id: 1, created_at: nil, updated_at: nil>
irb(main):015:0> @dweed.body = "Great, kid. Don't get cocky"
=> "Great, kid. Don't get cocky"
irb(main):016:0> @dweed.save
   (0.3ms)  BEGIN
  SQL (2.9ms)  INSERT INTO "dweeds" ("body", "user_id", "created_at", "updated_at") VALUES ($1, $2, $3, $4) RETURNING "id"  [["body", "Great, kid. Don't get cocky"], ["user_id", 1], ["created_at", "2018-02-22 19:58:12.068298"], ["updated_at", "2018-02-22 19:58:12.068298"]]
   (0.6ms)  COMMIT
=> true
irb(main):017:0> @dweed = @user.dweeds.new
=> #<Dweed id: nil, body: nil, user_id: 1, created_at: nil, updated_at: nil>
irb(main):018:0> @dweed.body = "Never tell me the odds"
=> "Never tell me the odds"
irb(main):019:0> @dweed.save
   (0.2ms)  BEGIN
  SQL (1.5ms)  INSERT INTO "dweeds" ("body", "user_id", "created_at", "updated_at") VALUES ($1, $2, $3, $4) RETURNING "id"  [["body", "Never tell me the odds"], ["user_id", 1], ["created_at", "2018-02-22 19:59:03.875494"], ["updated_at", "2018-02-22 19:59:03.875494"]]
   (0.7ms)  COMMIT
=> true
irb(main):020:0> @user = User.find(2)
  User Load (0.6ms)  SELECT  "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2  [["id", 2], ["LIMIT", 1]]
=> #<User id: 2, username: "chewbacca", created_at: "2018-02-22 19:52:27", updated_at: "2018-02-22 19:52:27">
irb(main):021:0> @dweed = @user.dweeds.new
=> #<Dweed id: nil, body: nil, user_id: 2, created_at: nil, updated_at: nil>
irb(main):022:0> @dweed.body = "raaawwr"
=> "raaawwr"
irb(main):023:0> @dweed.save
   (0.3ms)  BEGIN
  SQL (0.8ms)  INSERT INTO "dweeds" ("body", "user_id", "created_at", "updated_at") VALUES ($1, $2, $3, $4) RETURNING "id"  [["body", "raaawwr"], ["user_id", 2], ["created_at", "2018-02-22 20:00:14.066334"], ["updated_at", "2018-02-22 20:00:14.066334"]]
   (1.4ms)  COMMIT
=> true
irb(main):024:0> @user = User.find(4)
  User Load (0.6ms)  SELECT  "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2  [["id", 4], ["LIMIT", 1]]
=> #<User id: 4, username: "Quigonjin", created_at: "2018-02-22 19:54:24", updated_at: "2018-02-22 19:54:24">
irb(main):025:0> @dweed = @user.dweeds.new
=> #<Dweed id: nil, body: nil, user_id: 4, created_at: nil, updated_at: nil>
irb(main):026:0> @dweed.body = "Remember: Your focus determines your reality."
=> "Remember: Your focus determines your reality."

irb(main):027:0> @dweed.save

   (0.2ms)  BEGIN
  SQL (0.8ms)  INSERT INTO "dweeds" ("body", "user_id", "created_at", "updated_at") VALUES ($1, $2, $3, $4) RETURNING "id"  [["body", "Remember: Your focus determines your reality."], ["user_id", 4], ["created_at", "2018-02-22 20:02:01.360471"], ["updated_at", "2018-02-22 20:02:01.360471"]]
   (1.3ms)  COMMIT
=> true

irb(main):028:0> Dweed.last.user

  Dweed Load (0.7ms)  SELECT  "dweeds".* FROM "dweeds" ORDER BY "dweeds"."id" DESC LIMIT $1  [["LIMIT", 1]]
  User Load (0.4ms)  SELECT  "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2  [["id", 4], ["LIMIT", 1]]
=> #<User id: 4, username: "Quigonjin", created_at: "2018-02-22 19:54:24", updated_at: "2018-02-22 19:54:24">

irb(main):029:0> Dweed.last.user.username

  Dweed Load (0.7ms)  SELECT  "dweeds".* FROM "dweeds" ORDER BY "dweeds"."id" DESC LIMIT $1  [["LIMIT", 1]]
  User Load (0.4ms)  SELECT  "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2  [["id", 4], ["LIMIT", 1]]
=> "Quigonjin"

irb(main):031:0> Dweed.last.user.dweeds

  Dweed Load (0.7ms)  SELECT  "dweeds".* FROM "dweeds" ORDER BY "dweeds"."id" DESC LIMIT $1  [["LIMIT", 1]]
  User Load (0.3ms)  SELECT  "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2  [["id", 4], ["LIMIT", 1]]
  Dweed Load (0.3ms)  SELECT  "dweeds".* FROM "dweeds" WHERE "dweeds"."user_id" = $1 LIMIT $2  [["user_id", 4], ["LIMIT", 11]]
=> #<ActiveRecord::Associations::CollectionProxy [#<Dweed id: 4, body: "Remember: Your focus determines your reality.", user_id: 4, created_at: "2018-02-22 20:02:01", updated_at: "2018-02-22 20:02:01">]>
irb(main):032:0> 
