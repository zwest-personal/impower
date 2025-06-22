# 👿 ImPower Project

Powered by Imps!

Empower Project demo code.

Opted to go a bit overboard on the site for funsies and because I wanted to demonstrate my capabilities to the best of
my ability, and projects like this are where I'm able to do that best.  I'll confess stuff like live coding can make me anxious
(at least in an interview setting when I don't know the people) but when I get going on design/coding I build up a lot of 
momentum and can do a lot.  So yes, it def took more than four hours but don't feel bad - having a specific goal of some kind
motivates me and allows me to go a bit ham on things.

Also, did I do this in 4-5h?  Of course not.  But I love experimenting with builds/backends/flows/setup and was trying out
a pile of new-to-me stuff (eg sequelize), so it's hard to put an exact number on 'hours I spent on the assigned task' vs
'hours doing stuff that could turn this into a real production app'.  Building up all the things that make all the later things
come to fruition oh so much faster is my jam.  I'm also (to a fault) a completionist. I want everything to be *there* and 
working, I want it all to look and feel and be complete.

## Running

If you have `make`
```
make impower
```
Requires Docker and Docker Compose.

Will stand up a MySQL container with some starting data, React front end, and NodeTS backend locally.

Access at:
```
localhost:8080
```
API is at:
```
localhost:8081/api
```
(TODO - I've done /api routes on the same port via nginx proxy before, but takes a little time to set up so didn't do it for this [YET])

This is what I typically call the 'local' environment.  

Dev/remote location is TBD and deployed via serverless framework (AWS using API Gateway + Lambda + S3).
Auth is just via the local db - I could use Cognito to keep with the AWS usage but frankly having used cognito a bit I'm not
a huuuge fan of it and didn't want to add it to this.

## Folders
`docs` contains the original design spec, a rough design outline, and anything else I put together.
`site` is the React UI
`service` is the Node TS backend
`dev` is anything need for standing up the system beyond what the dockerfiles found in the individual service directories (eg the MySQL migration script)

## AI/LLMs

None.  I do use boilerplate generator (Vite for front end) and IntelliJ's auto-complete (very AI-lite, mostly useful for filling out data structures), but no generative AI.

I'm not opposed to using them for generating basic boilerplate code, but I generally don't like using LLMs both due to the variety
of issues that surround them (technological, environmental, moral).

As a note with this in case you read some of my code and think it looks AI like...
I like dashes, apparently AI likes em-dashes.  UGH.

I like to write documentation on most everything.  As it is the comments I use in TS are more of a GoDoc style than TS/JS typical ones, in case you're wondering about formatting.
Short version of GoDoc formatting is to expect `// [Function/Type/Var/Whatever name] [explanation]` for basically everything.  It's a fair bit different than JSDoc styling
(Which I do use on anything that has parameters or return values) which is going to be most applicable to anything TS, 
but as someone who has come to really like Go and its opinionated nature I do like how they do comments.

Given the nature of this repo I'm probably writing more than I typically would just to explain my train of thought more thoroughly.

I refuse to give up on writing in a way I feel is proper just because AI models train on well written stuff.  My favorite classes at Hopkins, despite being a CS major, were 
writing and poetry.  I like to say if poetry was a viable career path I might have ended up there... So while I'll use shorthand for some things expect that most notes will be long form English.

## Foundations

A fair bit of the devops(y) code here is stuff I've built previously, so it's not totally from scratch, but it *is* of my
own creation and refinement just reused. The compose/docker/make bits are cribbed from my personal 'demo' repo that was in
part created to try to showcase skill-set, but also to keep up on various tech.

UI was stood up with Vite
Backend is just manual code (with some imports of my own previous creations)
Using Serialize ORM for DB since we don't need any fine tuning at this time.

# TODOS
Punchlist of items, by the time this gets to git it'll probably have checkmarks next to some entries.

- Start up service
- Build out tables (users, notes, ?)
- Inject two default users (admin and one 'normal' user)
- Stand up Node TS backend, with routes: 
- login 
- login callback
- logout routes 
- (POST) create note 
- (GET) list notes (w/query filtering, fulltext?)
- (PATCH) update note
- (DELETE) delete/archive note
- (POST) anonymize note
- (POST) create campaign (Future)
- (PATCH) edit campaign (Future)
- Stand up React front end: 
- Material
- login page
- Auth guard
- new note page
- edit note page
- list notes page
- Export to CSV 'current' results 
- Build Serverless deploy

# "If I kept going"
- Authorization (eg no deletion unless sufficient rights)
- Add websockets in - if two or more canvassers are working the same campaign, push realtime updates to the others to indicate progress, notes, etc.
- Better unit/integration tests - kinda skimmed over these just as I'd already added in so much.  Generally speaking I see any automated testing as most important for regression prevention rather than testing basic logic (with exceptions)