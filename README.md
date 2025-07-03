# 👿 ImPower Project

Powered by Imps!

Dev Cloud endpoint: `https://dev.goimpower.me/`

Demo project derived from a coding challenge, built upon a lot beyond that point.  Tech stack
derived from challenge specifics.

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
API is at: (if you wish to view directly
```
localhost:8080/api
```
This is what I typically call the 'local' environment.

## Folders
`site` is the React UI
`service` is the Node TS backend
`dev` is anything need for standing up the system beyond what the dockerfiles found in the individual service directories (eg the MySQL migration script)

## AI/LLMs

None.  I do use boilerplate generator (Vite for front end) and IntelliJ's auto-complete (very AI-lite, mostly useful for filling out data structures), but no generative AI.

I'm not opposed to using them for generating basic boilerplate code, but I generally don't like using LLMs/GenAI both due to the variety
of issues that surround them (technological, quality, environmental, moral).  They can be useful in specific circumstances but I've long been
on the 'Every tool for its environment' boat.

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

Some DevOps/Foundational code I crib from my own past work, some built fresh.

UI was stood up with Vite
Backend is just manual code (with some imports of my own previous creations)
Using Serialize ORM for DB since we don't need any fine tuning at this time and it seemed like a step up from
previous ORMs I've used.

# TODOS
Punchlist of items, by the time this gets to git it'll probably have checkmarks next to some entries.

- More validation
- More campaign options
- Better multi-user behaviors (eg restricting deletions to original poster)
- Fix deployment
Authorization
- Websocket support (rather than polling for the lists like now)
- Expand unit/integration tests.  Barebones right now.
