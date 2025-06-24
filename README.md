# 👿 ImPower Project

Powered by Imps!

Empower Project demo code.

Opted to go a bit overboard on the site for funsies and because I wanted to demonstrate my capabilities to the best of
my ability, and projects like this are where I'm able to do that best.  I'll confess stuff like live coding can make me anxious
(at least in an interview setting when I don't know the people) but when I get going on design/coding I build up a lot of 
momentum and can do a lot.  So yes, it def took more than four hours but don't feel bad - having a specific goal of some kind
motivates me and allows me to go a bit ham on things.

Also, did I do this in 4-5h?  Most definitely not...  But I love experimenting with builds/backends/flows/setup and was trying out
a pile of new-to-me stuff (eg sequelize), so it's hard to put an exact number on 'hours I spent on the assigned task' vs
'hours doing stuff that could turn this into a real production app'.  Building up all the things that make all the later things
come to fruition oh so much faster is my jam.  I'm also (to a fault) a completionist. I want everything to be *there* and 
working, I want it all to look and feel and be complete.

## Running

If you have `make`
```
make impower
```
or
```	
docker-compose -f docker-compose.local.yml up --build
```
Requires Docker and Docker Compose.

Will stand up a MySQL container with some starting data, React front end, and NodeTS backend locally.

Access at:
```
localhost:8080
```
API is at:
```
localhost:8080/api
```
This is what I typically call the 'local' environment.  

Dev/remote setup is a WIP - building out a fresh CICD pipeline takes a bit more time and didn't want to hold up the code for it.

Unit/Integration tests are also a WIP - I'll confess I'm not the best about making sure they're always there and don't
tend to work in a TDD fashion so they end up coming after the feature is done and just test the happy path.  Generally
I treat them as primarily a regression protection.

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
Using Serialize ORM for DB since we don't need any fine tuning at this time and it seemed like a step up from
previous ORMs I've used.

# TODOS
Punchlist of items, by the time this gets to git it'll probably have checkmarks next to some entries.

- More validation
- More campaign options
- Better multi-user behaviors (eg restricting deletions to original poster)
- Build Serverless deploy
- Authorization
- Websocket support (rather than polling for the lists like now)
- Expand unit/integration tests.  Barebones right now.
- Cleanup of remaining linter errors, mostly TypeScript errors for using generic types or no types on some elements